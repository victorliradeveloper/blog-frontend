import { PostService } from '../services/PostService';
import { GetStaticProps } from 'next';
import { PostPagination } from '../presenters/Post';

const postService = new PostService();

const REVALIDATE_TIME = 3600;

export const getStaticProps: GetStaticProps<{ postsData: PostPagination }> = async () => {
  try {
    const data = await postService.getAllPosts('1', '8', 'all');

    return {
      props: {
        postsData: data,
      },
      revalidate: REVALIDATE_TIME,
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
      revalidate: REVALIDATE_TIME,
    };
  }
};

export { Home as default } from '@/views/Home';
