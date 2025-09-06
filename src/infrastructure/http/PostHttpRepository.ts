import { Post, PostPagination } from '@/domain/posts/entities/Post';
import { PostRepository } from '@/domain/posts/contracts/PostRepository';
import { HttpClient } from './HttpClient';

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
  slug: string;
}

export interface BlogResponse {
  totalPages: number;
  results: BlogPostResponse[];
  next?: { page: number; limit: number };
  previous?: { page: number; limit: number };
}

export class PostHttpRepository implements PostRepository {
  constructor(private readonly http: HttpClient) {}

  async searchPosts(
    query: string,
    page: string | string[],
    limit: string,
  ): Promise<PostPagination> {
    const response = await this.http.get<BlogResponse>('/api/get/search', {
      params: { query, page, limit },
    });
    return this.mapResponse(response);
  }

  async getAllPosts(
    page: string | string[],
    limit: string,
    category: string | string[],
  ): Promise<PostPagination> {
    const pageParam = Array.isArray(page) ? page[0] : page;
    const categoryParam = Array.isArray(category) ? category[0] : category;

    let endpoint: string;
    let params: Record<string, string>;

    if (categoryParam === 'all') {
      // Para "all", usa o endpoint geral
      endpoint = '/api/get';
      params = { page: pageParam, limit };
    } else {
      // Para categorias específicas, usa o endpoint de categoria
      endpoint = `/api/get/category/${categoryParam}`;
      params = { page: pageParam, limit };
    }

    const response = await this.http.get<BlogResponse>(endpoint, {
      params,
    });
    return this.mapResponse(response);
  }

  async getPostBySlug(slug: string): Promise<Post> {
    const response = await this.http.get<BlogPostResponse>(`/api/get/slug/${slug}`);
    return this.mapPost(response);
  }

  private mapPost(post: BlogPostResponse): Post {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      date: post.date,
      category: post.category,
      metaTagTitle: post.meta_tag_title,
      metaTagDescription: post.meta_tag_description,
      postImage: post.post_image,
      postBackground: post.post_background,
      author: post.author,
      keywords: post.keywords,
      slug: post.slug
    };
  }

  private mapResponse(response: BlogResponse): PostPagination {
    return {
      totalPages: Math.ceil(response.totalPages),
      results: response.results.map(this.mapPost),
      next: response.next ?? null,
      previous: response.previous ?? null,
    };
  }
}
