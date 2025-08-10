import { Post, PostPagination } from "../entities/Post";

export interface PostRepository {
  searchPosts(query: string, page: string | string[], limit: string): Promise<PostPagination>;
  getAllPosts(page: string | string[], limit: string, category: string | string[]): Promise<PostPagination>;
  getPostBySlug(slug: string): Promise<Post>;
} 