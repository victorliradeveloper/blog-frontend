import { PostPagination } from "../../entities/Post";
import { PostRepository } from "../../repositories/PostRepository";

export class GetPosts {
  constructor(private readonly repository: PostRepository) {}
  
  async execute(page: string, limit: string, category: string): Promise<PostPagination> {
    return this.repository.getAllPosts(page, limit, category);
  }
} 