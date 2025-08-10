import { useQuery } from '@tanstack/react-query';
import { container } from '../../shared/di/container';
import { GetPostsUseCase } from '../../domain/usecases/GetPostsUseCase';
import { SearchPostsUseCase } from '../../domain/usecases/SearchPostsUseCase';

// Obtém as instâncias do container
const getPostsUseCase = container.get<GetPostsUseCase>('GetPostsUseCase');
const searchPostsUseCase = container.get<SearchPostsUseCase>('SearchPostsUseCase');

interface UsePostsParams {
  query?: string;
  page: string | string[];
  limit: string;
  category?: string | string[];
  enabled?: boolean;
}

export function usePosts({ query, page, limit, category, enabled = true }: UsePostsParams) {
  return useQuery({
    queryKey: ['posts', query, page, limit, category],
    queryFn: async () => {
      if (query) {
        return searchPostsUseCase.execute(query, page, limit);
      }
      return getPostsUseCase.execute(page, limit, category || '');
    },
    enabled,
  });
} 