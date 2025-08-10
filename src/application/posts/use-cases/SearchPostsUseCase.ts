import { PostRepository } from '@/domain/posts/contracts/PostRepository';
import { PostPagination } from '@/domain/posts/entities/Post';

export class SearchPostsUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(query: string, page: string | string[], limit: string): Promise<PostPagination> {
    if (!query || query.trim().length === 0) {
      throw new Error('Query não pode estar vazia');
    }
    
    return this.postRepository.searchPosts(query, page, limit);
  }
} 