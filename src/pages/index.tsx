import { PostHttpRepository } from '@/infrastructure/http/PostHttpRepository';
import { HttpClient } from '@/infrastructure/http/HttpClient';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { PostPagination } from '@/domain/posts/entities/Post';

export const getServerSideProps: GetServerSideProps<{ postsData: PostPagination }> = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const { page = '1', limit = '8', category = 'all', query } = context.query;

    // Adicionando a baseUrl necessária para o HttpClient
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const httpClient = new HttpClient(baseUrl);
    const postRepository = new PostHttpRepository(httpClient);

    let data;

    if (query) {
      data = await postRepository.searchPosts(String(query), String(page), String(limit));
    } else {
      data = await postRepository.getAllPosts(String(page), String(limit), String(category));
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
