import { IPostRepository } from '../repositories/IPostRepository';
import { PostPagination } from '../entities/Post';

export class SearchPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(query: string, page: string | string[], limit: string): Promise<PostPagination> {
    if (!query || query.trim().length === 0) {
      throw new Error('Query não pode estar vazia');
    }
    
    return this.postRepository.searchPosts(query, page, limit);
  }
} 