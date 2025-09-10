import { Post, PostPagination } from '../presenters/Post';
import { mapPost, mapPostPagination } from '../mappers/post.mapper';
import { HttpClient } from '../http/HttpClient';

export class PostService {
  private readonly http: HttpClient;

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
      endpoint = 'api/get';
      params = { page: pageParam, limit };
    } else {
      endpoint = `api/get/category/${categoryParam}`;
      params = { page: pageParam, limit };
    }

    try {
      const data = await this.http.get(endpoint, { params });
      return mapPostPagination(data);
    } catch (error) {
      console.error('🔍 Error in getAllPosts:', error);
      throw error;
    }
  }

  async searchPosts(query: string, page: string, limit: string): Promise<PostPagination> {
    try {
      const data = await this.http.get('api/get/search', {
        params: { query, page, limit }
      });
      return mapPostPagination(data);
    } catch (error) {
      console.error('🔍 Error in searchPosts:', error);
      throw error;
    }
  }

  async getPostBySlug(slug: string): Promise<Post> {
    try {
      const data = await this.http.get(`api/get/slug/${slug}`);
      return mapPost(data);
    } catch (error) {
      console.error(' Error in getPostBySlug:', error);
      throw error;
    }
  }
} 