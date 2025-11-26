import { PostPagination } from "@/presenters/Post";

const DEFAULT_PAGE = '1';
const DEFAULT_LIMIT = '8';
const DEFAULT_CATEGORY = 'all';
const EMPTY_POSTS_DATA: PostPagination = {
  totalPages: 0,
  results: [],
  next: null,
  previous: null,
};
export { DEFAULT_PAGE, DEFAULT_LIMIT, DEFAULT_CATEGORY, EMPTY_POSTS_DATA };