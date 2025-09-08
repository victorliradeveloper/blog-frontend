import { PostPagination } from "../../entities/Post";
import { PostRepository } from "../../repositories/PostRepository";

export class SearchPosts {
  constructor(private readonly repository: PostRepository) {}
  
  async execute(query: string, page: string, limit: string): Promise<PostPagination> {
    return this.repository.searchPosts(query, page, limit);
  }
} 