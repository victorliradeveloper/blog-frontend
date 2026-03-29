import { Post, PostPagination } from '../presenters/Post';
import { HttpClient } from '../http/HttpClient';
import { PostMapper } from '@/mappers/post.mapper';
import { PostPaginationResponse, PostResponse } from '@/types/posts.types';
import { HttpError } from '@/http/HttpClient';

export class PostService {
  private readonly http: HttpClient;
  private readonly maxRetries = 2;
  private readonly retryDelayMs = 800;

  constructor() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    this.http = new HttpClient(baseUrl);
  }

  async getAllPosts(page: string, limit: string, category: string): Promise<PostPagination> {
    const pageParam = Array.isArray(page) ? page[0] : page;
    const categoryParam = Array.isArray(category) ? category[0] : category;

    let endpoint: string;
    let params: Record<string, string>;

    if (categoryParam === 'all') {
      endpoint = 'api/v1/get';
      params = { page: pageParam, limit };
    } else {
      endpoint = `api/v1/get/category/${categoryParam}`;
      params = { page: pageParam, limit };
    }

    try {
      const data = await this.getWithRetry<PostPaginationResponse>(endpoint, { params });
      return PostMapper.toDomainPagination(data);
    } catch (error) {
      console.error('🔍 Error in getAllPosts:', error);
      throw error;
    }
  }

  async searchPosts(query: string, page: string, limit: string): Promise<PostPagination> {
    try {
      const data = await this.http.get<PostPaginationResponse>('api/v1/get/search', {
        params: { query, page, limit },
      });
      return PostMapper.toDomainPagination(data);
    } catch (error) {
      console.error('🔍 Error in searchPosts:', error);
      throw error;
    }
  }

  async getPostBySlug(slug: string): Promise<Post> {
    try {
      const data = await this.getWithRetry<PostResponse>(`api/v1/get/slug/${slug}`);
      return PostMapper.toDomain(data);
    } catch (error) {
      console.error(' Error in getPostBySlug:', error);
      throw error;
    }
  }

  private async getWithRetry<T>(
    path: string,
    init?: RequestInit & {
      params?: Record<string, string | string[]>;
      next?: { revalidate?: number | false };
    },
  ): Promise<T> {
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        return await this.http.get<T>(path, init);
      } catch (error) {
        const shouldRetry = this.shouldRetry(error);
        const hasAttemptsLeft = attempt < this.maxRetries;

        if (!shouldRetry || !hasAttemptsLeft) {
          throw error;
        }

        await this.delay(this.retryDelayMs * (attempt + 1));
      }
    }

    throw new Error('Unexpected retry flow');
  }

  private shouldRetry(error: unknown): boolean {
    if (error instanceof HttpError) {
      return error.status >= 500;
    }
    return true;
  }

  private async delay(ms: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
}
