export interface Post {
  id: number;
  title: string;
  content: string;
  date: string; // formato ISO 8601
  category: string;
  metaTagTitle: string;
  metaTagDescription: string;
  postImage: string;
  postBackground: string;
  author: string;
  keywords: string;
  slug: string;
}

export interface PostPagination {
  totalPages: number;
  results: Post[];
  next?: { page: number; limit: number } | null;
  previous?: { page: number; limit: number } | null;
}
