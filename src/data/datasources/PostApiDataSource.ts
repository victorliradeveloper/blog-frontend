import { httpClient } from '../../services/httpClient';

export interface BlogPostResponse {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  meta_tag_title: string;
  meta_tag_description: string;
  post_image: string;
  post_background: string;
  author: string;
  keywords: string;
}

export interface BlogResponse {
  totalPages: number;
  results: BlogPostResponse[];
  next?: { page: number; limit: number };
  previous?: { page: number; limit: number };
}

export class PostApiDataSource {
  async searchPosts(query: string, page: string | string[], limit: string): Promise<BlogResponse> {
    const response = await httpClient.get('/api/search', {
      params: { query, page, limit },
    });
    return response.data;
  }

  async getAllPosts(page: string | string[], limit: string, category: string | string[]): Promise<BlogResponse> {
    const pageParam = Array.isArray(page) ? page[0] : page;
    const categoryParam = Array.isArray(category) ? category[0] : category;

    const response = await httpClient.get('/api/get', {
      params: { page: pageParam, limit, category: categoryParam },
    });
    return response.data;
  }

  async getPostBySlug(slug: string): Promise<BlogPostResponse> {
    const response = await httpClient.get(`/api/post/${slug}`);
    return response.data;
  }
} 