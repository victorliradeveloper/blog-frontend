import { Post } from "../../entities/Post";
import { PostRepository } from "../../repositories/PostRepository";

export class GetPostBySlug {
  constructor(private readonly repository: PostRepository) {}
  
  async execute(slug: string): Promise<Post> {
    return this.repository.getPostBySlug(slug);
  }
} 