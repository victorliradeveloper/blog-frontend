import { useQuery } from '@tanstack/react-query';
import { GetPostsUseCase } from '../../application/posts/use-cases/GetPostsUseCase';
import { SearchPostsUseCase } from '../../application/posts/use-cases/SearchPostsUseCase';
import { PostHttpRepository } from '../../infrastructure/http/PostHttpRepository';
import { HttpClient } from '../../infrastructure/http/HttpClient';

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
  enabled = true, 
  useMock = false 
}: UsePostsParams) {
  return useQuery({
    queryKey: ['posts', query, page, limit, category, useMock],
    queryFn: async () => {
      // Decide qual repositório usar baseado na flag useMock ou se não há API configurada
      const repository = useMock || !process.env.NEXT_PUBLIC_API_URL
        ? new PostMemoryRepository()
        : new PostHttpRepository(new HttpClient(process.env.NEXT_PUBLIC_API_URL));

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