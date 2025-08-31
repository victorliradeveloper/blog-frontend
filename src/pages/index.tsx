import { ServerPostsService, PostsResponse } from '@/infrastructure/http/ServerPostsService';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export const getServerSideProps: GetServerSideProps<{ postsData: PostsResponse }> = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const page = String(context.query?.page ?? '1');
    const category = context.query?.category ? String(context.query.category) : 'all';
    const limit = '8';

    let data: PostsResponse;
    console.log("testing");
    console.log("testing");

    if (context.query.query) {
      data = await ServerPostsService.searchPosts(String(context.query.query), page, limit);
    } else {
      data = await ServerPostsService.getAllPosts(page, limit, category);
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
