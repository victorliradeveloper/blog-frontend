import { PostService } from '../services/PostService';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { PostPagination } from '../presenters/Post';

const postService = new PostService();

export const getServerSideProps: GetServerSideProps<{ postsData: PostPagination }> = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const { page = '1', limit = '8', category = 'all', query } = context.query;

    let data;

    if (query) {
      data = await postService.searchPosts(String(query), String(page), String(limit));
    } else {
      data = await postService.getAllPosts(String(page), String(limit), String(category));
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
