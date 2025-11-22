import { useQuery } from '@tanstack/react-query';
import { PostService } from '../services/PostService';
import { Post, PostPagination } from '../presenters/Post';

const postService = new PostService();

export const usePosts = (page: string, limit: string, category: string) => {
  return useQuery<PostPagination>({
    queryKey: ['posts', page, limit, category],
    queryFn: () => postService.getAllPosts(page, limit, category),
    staleTime: 10 * 1000, // 10 segundos
  });
};

export const useSearchPosts = (query: string, page: string, limit: string) => {
  return useQuery<PostPagination>({
    queryKey: ['search-posts', query, page, limit],
    queryFn: () => postService.searchPosts(query, page, limit),
    enabled: !!query,
    staleTime: 10 * 1000, // 10 segundos
  });
};

export const usePostBySlug = (slug: string) => {
  return useQuery<Post>({
    queryKey: ['post', slug],
    queryFn: () => postService.getPostBySlug(slug),
    staleTime: 10 * 1000, // 10 segundos
  });
};
