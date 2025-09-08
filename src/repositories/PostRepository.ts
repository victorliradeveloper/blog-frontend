import { Post, PostPagination } from "../entities/Post";

export interface PostRepository {
  getAllPosts(page: string, limit: string, category: string): Promise<PostPagination>;
  searchPosts(query: string, page: string, limit: string): Promise<PostPagination>;
  getPostBySlug(slug: string): Promise<Post>;
} 