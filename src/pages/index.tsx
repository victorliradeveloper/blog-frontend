import { PostService } from '../services/PostService';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { PostPagination } from '../presenters/Post';

const postService = new PostService();

// Cache por 5 minutos (300 segundos) para melhorar performance
// Usando Cache-Control header (prática recomendada para getServerSideProps)
const CACHE_MAX_AGE = 300;

export const getServerSideProps: GetServerSideProps<{ postsData: PostPagination }> = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const { page = '1', limit = '8', category = 'all', query } = context.query;

    let data: PostPagination;

    if (query) {
      data = await postService.searchPosts(String(query), String(page), String(limit), {
        revalidate: CACHE_MAX_AGE,
      });
    } else {
      data = await postService.getAllPosts(String(page), String(limit), String(category), {
        revalidate: CACHE_MAX_AGE,
      });
    }

    // Configurar cache HTTP headers (prática recomendada pelo Next.js)
    // Isso instrui o CDN/browser a cachear a resposta
    context.res.setHeader(
      'Cache-Control',
      `public, s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${CACHE_MAX_AGE * 2}`,
    );

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
