import { useQuery } from '@tanstack/react-query';
import { GetPostsUseCase } from '@/application/posts/use-cases/GetPostsUseCase';
import { SearchPostsUseCase } from '@/application/posts/use-cases/SearchPostsUseCase';
import { PostHttpRepository } from '@/infrastructure/http/PostHttpRepository';
import { HttpClient } from '@/infrastructure/http/HttpClient';

interface UsePostsParams {
  query?: string;
  page: string | string[];
  limit: string;
  category?: string | string[];
  enabled?: boolean;
}

export function usePosts({ 
  query, 
  page, 
  limit, 
  category, 
  enabled = true 
}: UsePostsParams) {
  return useQuery({
    queryKey: ['posts', query, page, limit, category],
    queryFn: async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error('NEXT_PUBLIC_API_URL não configurado');
      }
      const repository = new PostHttpRepository(new HttpClient(apiUrl));

      if (query) {
        const searchUseCase = new SearchPostsUseCase(repository);
        return searchUseCase.execute(query, page, limit);
      }
      
      const getPostsUseCase = new GetPostsUseCase(repository);
      return getPostsUseCase.execute(page, limit, category || '');
    },
    enabled,
  });
} 