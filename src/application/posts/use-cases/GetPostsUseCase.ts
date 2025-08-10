import { PostRepository } from '../../../domain/posts/PostRepository';
import { PostPagination } from '../../../domain/posts/Post';

export class GetPostsUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(page: string | string[], limit: string, category: string | string[]): Promise<PostPagination> {
    return this.postRepository.getAllPosts(page, limit, category);
  }
} 