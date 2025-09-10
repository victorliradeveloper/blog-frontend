import { Post, PostPagination } from "../entities/Post";
import { PostRepository } from "../repositories/PostRepository";
import { HttpClient } from "./HttpClient";
import { mapPost, mapResponse } from "../mappers/posts.mapper";
import { BlogPostResponse, BlogResponse } from "../types/posts";

export class PostApiRepository implements PostRepository {
  constructor(private readonly http: HttpClient) {}

  async getAllPosts(page: string, limit: string, category: string): Promise<PostPagination> {
    const pageParam = Array.isArray(page) ? page[0] : page;
    const categoryParam = Array.isArray(category) ? category[0] : category;

    let endpoint: string;
    let params: Record<string, string>;

    if (categoryParam === 'all') {
      endpoint = '/api/get';
      params = { page: pageParam, limit };
    } else {
      endpoint = `/api/get/category/${categoryParam}`;
      params = { page: pageParam, limit };
    }

    const response = await this.http.get<BlogResponse>(endpoint, { params });
    return mapResponse(response);
  }

  async searchPosts(query: string, page: string, limit: string): Promise<PostPagination> {
    const response = await this.http.get<BlogResponse>('/api/get/search', {
      params: { query, page, limit },
    });
    return mapResponse(response);
  }

  async getPostBySlug(slug: string): Promise<Post> {
    const response = await this.http.get<BlogPostResponse>(`/api/get/slug/${slug}`);
    return mapPost(response);
  }
} 