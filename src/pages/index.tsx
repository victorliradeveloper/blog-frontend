import { PostApiRepository } from '../http/PostApiRepository';
import { HttpClient } from '../http/HttpClient';  
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { PostPagination } from '../entities/Post';
import { GetPosts } from '@/use-cases/posts/GetPosts';
import { SearchPosts } from '@/use-cases/posts/SearchPosts';

export const getServerSideProps: GetServerSideProps<{ postsData: PostPagination }> = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const { page = '1', limit = '8', category = 'all', query } = context.query;

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const httpClient = new HttpClient(baseUrl);
    const postRepository = new PostApiRepository(httpClient);

    let data;

    if (query) {
      const searchPosts = new SearchPosts(postRepository);
      data = await searchPosts.execute(String(query), String(page), String(limit));
    } else {
      const getPosts = new GetPosts(postRepository);
      data = await getPosts.execute(String(page), String(limit), String(category));
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
