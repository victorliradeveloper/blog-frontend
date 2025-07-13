import { PostsMapper } from "@/mappers/PostsMapper";
import { httpClient } from "@/services/httpClient";

export class PostsService {
  static async searchPosts(query: string, page: string | string[], limit: string) {
    try {
      const response = await httpClient.get('/api/search', {
        params: {
          query,
          page,
          limit,
        },
      })

      return PostsMapper.toDomain(response.data);
    } catch (error) {
      console.error('Erro ao buscar posts:', error)
      throw new Error('Não foi possível buscar os posts. Tente novamente mais tarde.')
    }
  }

  static async getAllPosts(
    page: string | string[],
    limit: string,
    category: string | string[],
  ) {
    const pageParam = Array.isArray(page) ? page[0] : page;
    const categoryParam = Array.isArray(category) ? category[0] : category;
  
    try {
      const response = await httpClient.get('/api/get', {
        params: {
          page: pageParam,
          limit,
          category: categoryParam,
        },
      });
      
      return PostsMapper.toDomain(response.data);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      throw new Error('Não foi possível buscar os dados. Tente novamente mais tarde.');
    }
  }
}
