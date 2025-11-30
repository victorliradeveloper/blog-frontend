import { PostPaginationResponse, PostResponse } from '@/types/posts.types';
import { Post, PostPagination } from '../presenters/Post';

export class PostMapper {
  static toDomain(response: PostResponse): Post {
    return {
      id: response.id,
      title: response.title,
      content: response.content,
      date: response.date,
      category: response.category,
      metaTagTitle: response.meta_tag_title,
      metaTagDescription: response.meta_tag_description,
      postImage: response.post_image,
      postBackground: response.post_background,
      author: response.author,
      keywords: response.keywords,
      slug: response.slug,
    };
  }

  static toDomainPagination(response: PostPaginationResponse): PostPagination {
    return {
      totalPages: Math.ceil(response.totalPages),
      results: response.results.map((post) => PostMapper.toDomain(post)),
      next: response.next ?? null,
      previous: response.previous ?? null,
    };
  }
}
