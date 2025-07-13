import { HEART_GREEN, HEART_WHITE } from '@/constants/images';

type IPost = {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  metaTagTitle: string;
  metaTagDescription: string;
  postImage: string;
  author: string;
};

type IFavoritPost = {
  post: number;
};

export const updateFavoritSource = function (favoritPosts: IFavoritPost[], post: IPost) {
  const exists = favoritPosts.some((item: { post: number }) => item.post === post.id);
  if (exists) {
    return HEART_GREEN;
  } else {
    return HEART_WHITE;
  }
};