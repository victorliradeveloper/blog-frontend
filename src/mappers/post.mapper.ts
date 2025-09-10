import { Post, PostPagination } from '../presenters/Post';

export interface BlogPostResponse {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  meta_tag_title: string;
  meta_tag_description: string;
  post_image: string;
  post_background: string;
  author: string;
  keywords: string;
  slug: string;
}

export interface BlogResponse {
  totalPages: number;
  results: BlogPostResponse[];
  next?: { page: number; limit: number };
  previous?: { page: number; limit: number };
}

export const mapPost = (post: BlogPostResponse): Post => {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    date: post.date,
    category: post.category,
    metaTagTitle: post.meta_tag_title,
    metaTagDescription: post.meta_tag_description,
    postImage: post.post_image,
    postBackground: post.post_background,
    author: post.author,
    keywords: post.keywords,
    slug: post.slug,
  };
};

export const mapPostPagination = (response: BlogResponse): PostPagination => {
  return {
    totalPages: Math.ceil(response.totalPages),
    results: response.results.map(mapPost),
    next: response.next ?? null,
    previous: response.previous ?? null,
  };
};
