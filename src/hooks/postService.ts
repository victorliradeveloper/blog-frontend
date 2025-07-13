import { useQuery } from '@tanstack/react-query'
import { PostsService } from '@/services/PostsService'

interface UsePostsParams {
  query: string
  page: string | string[]
  limit: string
  enabled?: boolean
}

export function usePosts({ query, page, limit, enabled = true }: UsePostsParams) {
  return useQuery({
    queryKey: ['posts', query, page, limit],
    queryFn: async () => {
      try {
        const data = await PostsService.searchPosts(query, page, limit)
        return data
      } catch (error) {
        console.error('Erro no usePosts:', error)
        return Promise.reject(error)
      }
    },
    enabled, // só executa se estiver true
  })
}
