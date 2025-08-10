import { Post, PostPagination } from '../../domain/entities/Post';
import { BlogPostResponse, BlogResponse } from '../datasources/PostApiDataSource';

export class PostMapper {
  static toDomain(post: BlogPostResponse): Post {
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
    };
  }

  static toDomainList(response: BlogResponse): PostPagination {
    return {
      totalPages: Math.ceil(response.totalPages),
      results: response.results.map(this.toDomain),
      next: response.next ?? null,
      previous: response.previous ?? null,
    };
  }
} 