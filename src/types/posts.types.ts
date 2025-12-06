export interface PostResponse {
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

export interface PostPaginationResponse {
  totalPages: number;
  results: PostResponse[];
  next?: { page: number; limit: number };
  previous?: { page: number; limit: number };
}
