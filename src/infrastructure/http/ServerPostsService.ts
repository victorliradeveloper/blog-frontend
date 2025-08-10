import { Post } from '@/domain/posts/entities/Post';
import { HttpClient } from './HttpClient';
import { PostHttpRepository } from './PostHttpRepository';
import { GetPostsUseCase } from '@/application/posts/use-cases/GetPostsUseCase';
import { SearchPostsUseCase } from '@/application/posts/use-cases/SearchPostsUseCase';

export interface PostsResponse {
  totalPages: number;
  results: Post[];
  next?: { page: number; limit: number } | null;
  previous?: { page: number; limit: number } | null;
}

export class ServerPostsService {
  private static getRepository() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://blog-backend-production-88d3.up.railway.app';
    const httpClient = new HttpClient(apiUrl);
    return new PostHttpRepository(httpClient);
  }

  static async searchPosts(query: string, page: string, limit: string): Promise<PostsResponse> {
    const repository = this.getRepository();
    const useCase = new SearchPostsUseCase(repository);
    return useCase.execute(query, page, limit);
  }

  static async getAllPosts(page: string, limit: string, category: string): Promise<PostsResponse> {
    const repository = this.getRepository();
    const useCase = new GetPostsUseCase(repository);
    return useCase.execute(page, limit, category);
  }
} 