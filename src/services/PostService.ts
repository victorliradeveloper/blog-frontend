import { Post, PostPagination } from '../presenters/Post';
import { mapPost, mapPostPagination, BlogResponse, BlogPostResponse } from '../mappers/post.mapper';
import { HttpClient } from '../http/HttpClient';

export class PostService {
  private readonly http: HttpClient;

  constructor() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    this.http = new HttpClient(baseUrl);
  }

  async getAllPosts(
    page: string,
    limit: string,
    category: string,
    options?: { revalidate?: number },
  ): Promise<PostPagination> {
    const pageParam = Array.isArray(page) ? page[0] : page;
    const categoryParam = Array.isArray(category) ? category[0] : category;

    let endpoint: string;
    let params: Record<string, string>;

    if (categoryParam === 'all') {
      endpoint = 'api/get';
      params = { page: pageParam, limit };
    } else {
      endpoint = `api/get/category/${categoryParam}`;
      params = { page: pageParam, limit };
    }

    try {
      const data = await this.http.get<BlogResponse>(endpoint, {
        params,
        ...(options?.revalidate !== undefined ? { next: { revalidate: options.revalidate } } : {}),
      });
      return mapPostPagination(data);
    } catch (error) {
      console.error('🔍 Error in getAllPosts:', error);
      throw error;
    }
  }

  async searchPosts(
    query: string,
    page: string,
    limit: string,
    options?: { revalidate?: number },
  ): Promise<PostPagination> {
    try {
      const data = await this.http.get<BlogResponse>('api/get/search', {
        params: { query, page, limit },
        ...(options?.revalidate !== undefined ? { next: { revalidate: options.revalidate } } : {}),
      });
      return mapPostPagination(data);
    } catch (error) {
      console.error('🔍 Error in searchPosts:', error);
      throw error;
    }
  }

  async getPostBySlug(slug: string, options?: { revalidate?: number }): Promise<Post> {
    try {
      const data = await this.http.get<BlogPostResponse>(`api/get/slug/${slug}`, {
        ...(options?.revalidate !== undefined ? { next: { revalidate: options.revalidate } } : {}),
      });
      return mapPost(data);
    } catch (error) {
      console.error(' Error in getPostBySlug:', error);
      throw error;
    }
  }
}
