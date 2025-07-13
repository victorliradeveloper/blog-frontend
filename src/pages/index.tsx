import { PostsService } from '@/services/PostsService';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

type Post = {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  metaTagTitle: string;
  metaTagDescription: string;
  postImage: string;
  postBackground: string;
  author: string;
  keywords: string;
};

type PostsResponse = {
  totalPages: number;
  results: Post[];
  next?: { page: number; limit: number } | null;
  previous?: { page: number; limit: number } | null;
};

export const getServerSideProps: GetServerSideProps<{ postsData: PostsResponse }> = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const page = String(context.query?.page ?? '1');
    const category = String(context.query?.category ?? 'all');
    const limit = '8';

    let data: PostsResponse;

    if (context.query.query) {
      data = await PostsService.searchPosts(String(context.query.query), page, limit);
    } else {
      data = await PostsService.getAllPosts(page, limit, category);
    }

    return {
      props: {
        postsData: data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        postsData: {
          totalPages: 0,
          results: [],
          next: null,
          previous: null,
        },
      },
    };
  }
};

export { Home as default } from '@/views/Home';
