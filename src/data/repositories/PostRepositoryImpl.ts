import { IPostRepository } from '../../domain/repositories/IPostRepository';
import { Post, PostPagination } from '../../domain/entities/Post';
import { PostApiDataSource } from '../datasources/PostApiDataSource';
import { PostMapper } from '../mappers/PostMapper';

export class PostRepositoryImpl implements IPostRepository {
  constructor(private dataSource: PostApiDataSource) {}

  async searchPosts(query: string, page: string | string[], limit: string): Promise<PostPagination> {
    try {
      const response = await this.dataSource.searchPosts(query, page, limit);
      return PostMapper.toDomainList(response);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      throw new Error('Não foi possível buscar os posts. Tente novamente mais tarde.');
    }
  }

  async getAllPosts(page: string | string[], limit: string, category: string | string[]): Promise<PostPagination> {
    try {
      const response = await this.dataSource.getAllPosts(page, limit, category);
      return PostMapper.toDomainList(response);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      throw new Error('Não foi possível buscar os dados. Tente novamente mais tarde.');
    }
  }

  async getPostBySlug(slug: string): Promise<Post> {
    try {
      const response = await this.dataSource.getPostBySlug(slug);
      return PostMapper.toDomain(response);
    } catch (error) {
      console.error('Erro ao buscar post:', error);
      throw new Error('Não foi possível buscar o post. Tente novamente mais tarde.');
    }
  }
} 