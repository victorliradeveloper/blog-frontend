import Head from 'next/head';
import PostComponent from '@/components/Post';
import { useContext, useState, useEffect, useMemo, useCallback } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import { META_TAG_IMAGE, FAVICON } from '@/constants/images';
import { useCurrentUser } from '@/Context/currentUser';
import { GlobalContext } from '@/Context/pagination';
import MainPage from '@/views/Home/components/MainPage';
import { Container } from '@/views/Home/components/MainPage/MainPage.styled';
import { updateFavoritSource } from '@/helper/functions/updateFavoritSource';
import { useRouter } from 'next/router';
import { Post, PostPagination } from '@/presenters/Post';
import Pagination from '@/components/Pagination';
import LoginAlertModal from '@/components/LoginAlertModal';
import About from '@/components/About';
import EmptyState from '@/components/EmptyState';
import { usePosts, useSearchPosts } from '@/hooks/usePosts';
import {
  DEFAULT_CATEGORY,
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  EMPTY_POSTS_DATA,
} from '@/constants/pagination';

type HomeProps = {
  postsData: PostPagination;
};

const getQueryParam = (query: string | string[] | undefined, defaultValue: string): string => {
  if (Array.isArray(query)) return query[0] || defaultValue;
  return (query as string) || defaultValue;
};

const hasDynamicQueryParams = (
  searchQuery: string | undefined,
  page: string,
  category: string,
): boolean => {
  return !!searchQuery || page !== DEFAULT_PAGE || category !== DEFAULT_CATEGORY;
};

const getLoadingMessage = (isSearching: boolean): string => {
  return isSearching ? 'Buscando posts...' : 'Carregando...';
};

export default function Home({ postsData }: HomeProps) {
  const { setPage } = useContext(GlobalContext);
  const { favoritPosts } = useAddToFavoritsContext();
  const { currentUser } = useCurrentUser();
  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const router = useRouter();

  const searchQuery = getQueryParam(router.query.query, '');
  const page = getQueryParam(router.query.page, DEFAULT_PAGE);
  const limit = getQueryParam(router.query.limit, DEFAULT_LIMIT);
  const category = getQueryParam(router.query.category, DEFAULT_CATEGORY);

  const hasDynamicParams = hasDynamicQueryParams(searchQuery, page, category);
  const isSearchMode = !!searchQuery;

  const { data: searchData, isLoading: isSearchLoading } = useSearchPosts(searchQuery, page, limit);

  const { data: postsDataQuery, isLoading: isPostsLoading } = usePosts(page, limit, category);

  const postsToDisplay = useMemo(() => {
    if (!hasDynamicParams) {
      return postsData;
    }

    if (isSearchMode) {
      if (isSearchLoading) {
        return EMPTY_POSTS_DATA;
      }
      return searchData || EMPTY_POSTS_DATA;
    }

    return postsDataQuery || postsData;
  }, [hasDynamicParams, isSearchMode, isSearchLoading, searchData, postsDataQuery, postsData]);

  const isLoadingPosts = hasDynamicParams && !isSearchMode && isPostsLoading;
  const isLoading = (isSearchMode && isSearchLoading) || isLoadingPosts;

  const handleDisplayLoginAlert = useCallback(() => {
    setDisplayLoginModal(true);
  }, []);

  const handleCloseLoginAlert = useCallback(() => {
    setDisplayLoginModal(false);
  }, []);

  useEffect(() => {
    if (postsToDisplay?.next?.page) {
      setPage(postsToDisplay.next.page);
    }
  }, [postsToDisplay?.next?.page, setPage]);

  useEffect(() => {
    AOS.init();
  }, []);

  const hasPosts = !!postsToDisplay?.results?.length;
  const hasNextPage = !!postsToDisplay?.next;
  const hasPreviousPage = !!postsToDisplay?.previous;
  const currentPage = postsToDisplay?.previous?.page ? postsToDisplay.previous.page + 1 : 1;
  const previousPage = postsToDisplay?.previous?.page || 1;
  const nextPage = postsToDisplay?.next?.page || 1;
  const totalPages = Math.ceil(postsToDisplay?.totalPages || 0);

  const shouldShowAbout = !isSearchMode || (!isLoading && hasPosts);
  const shouldShowEmptyState = !isLoading && !hasPosts;
  const shouldShowPosts = !isLoading && hasPosts;

  const renderLoadingState = () => (
    <MainPage>
      <Container
        style={{
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: '18px', color: '#fff' }}>{getLoadingMessage(isSearchMode)}</div>
      </Container>
    </MainPage>
  );

  const renderEmptyState = () => {
    if (isSearchMode) {
      return (
        <EmptyState
          title="Nenhum post encontrado para sua busca"
          message={`Não encontramos resultados para "${searchQuery}". Tente usar termos diferentes ou verifique a ortografia.`}
        />
      );
    }

    return (
      <EmptyState
        title="Nenhum post encontrado"
        message="Não há posts disponíveis no momento. Tente novamente mais tarde."
      />
    );
  };

  const renderPostList = () => {
    const firstPostStyle = {
      width: 'calc(66.66667% - 40px)',
      minWidth: '300px',
    };

    return (
      <MainPage>
        <Container>
          {postsToDisplay.results.map((post: Post, index: number) => (
            <PostComponent
              key={post.id}
              onDisplayLoginAlert={handleDisplayLoginAlert}
              style={index === 0 ? firstPostStyle : {}}
              id={post.id}
              title={post.title}
              slug={post.slug}
              content={post.content}
              author={post.author}
              metaTagTitle={post.metaTagTitle}
              metaTagDescription={post.metaTagDescription}
              postImage={post.postImage}
              postBackground={post.postBackground}
              date={post.date}
              category={post.category}
              keywords={post.keywords}
              aos_delay="100"
              aos_type="fade-up"
              hover_animation={-7}
              onUpdateFavoritSource={updateFavoritSource(favoritPosts, post)}
            />
          ))}
        </Container>
      </MainPage>
    );
  };

  return (
    <>
      <Head>
        <title>Home | Tech Blog</title>
        <meta
          name="keywords"
          content="Victor Lira, JavaScript, React, Next.js, TypeScript, Frontend Development, Web Development, Technology Blog, Coding Tutorials"
        />
        <meta
          name="description"
          content="Hello, I'm Victor Lira, the creator of a blog dedicated to exploring the realms of JavaScript, React, Next.js, TypeScript, and other cutting-edge front-end technologies. Join me on this journey as I share insights, tutorials, and tips to enhance your skills and stay up to date with the latest trends in front-end development. Dive into the fascinating world of web development through my blog and empower yourself with knowledge and experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Victor Lira" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Victor Lira" />
        <meta property="og:image" content={META_TAG_IMAGE} />
        <meta property="og:url" content="https://www.victorlirablog.com/" />
        <link rel="icon" href={FAVICON} />
      </Head>

      {!currentUser.email && displayLoginModal && (
        <LoginAlertModal onCloseLoginAlertModal={handleCloseLoginAlert} />
      )}

      {shouldShowAbout && <About />}

      {isLoading && renderLoadingState()}

      {shouldShowEmptyState && renderEmptyState()}

      {shouldShowPosts && renderPostList()}

      {!isLoading && (
        <Pagination
          pageLength={totalPages}
          page={currentPage}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          previousPage={previousPage}
          nextPage={nextPage}
          queryParam={searchQuery}
        />
      )}
    </>
  );
}
