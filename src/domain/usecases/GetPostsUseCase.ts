import { IPostRepository } from '../repositories/IPostRepository';
import { PostPagination } from '../entities/Post';

export class GetPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(page: string | string[], limit: string, category: string | string[]): Promise<PostPagination> {
    return this.postRepository.getAllPosts(page, limit, category);
  }
} 