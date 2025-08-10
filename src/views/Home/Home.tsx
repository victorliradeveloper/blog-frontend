import Head from 'next/head';
import Post from '@/components/Post';
import About from '@/components/About';
import { useContext, useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import { META_TAG_IMAGE, FAVICON } from '@/constants/images';
import LoginAlertModal from '@/components/LoginAlertModal';
import { useCurrentUser } from '@/Context/currentUser';
import Pagination from '@/components/Pagination';
import { GlobalContext } from '@/Context/pagination';
import MainPage from '@/views/Home/components/MainPage';
import { updateFavoritSource } from '@/helper/functions/updateFavoritSource';
import { usePosts } from '@/hooks/postService';
import { useRouter } from 'next/router';

type PostProps = {
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

type Data = {
  totalPages: number;
  next?: {
    page: number;
    limit: number;
  };
  previous?: {
    page: number;
    limit: number;
  };
  results?: PostProps[];
};

export default function Home({ postsData }: { postsData: Data }) {
  const { setPage } = useContext(GlobalContext);
  const { favoritPosts } = useAddToFavoritsContext();
  const { currentUser } = useCurrentUser();
  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const router = useRouter();
  const searchQuery = router.query.query as string;
  const pageParam = router.query.page as string || '1';

  const { data: searchedPosts } = usePosts({
    query: searchQuery || '',
    page: pageParam,
    limit: '8',
    enabled: !!searchQuery,
  });

  useEffect(() => {
    if (postsData?.next?.page) {
      setPage(postsData.next.page);
    }
  }, [postsData?.next?.page, setPage]);

  useEffect(() => {
    AOS.init();
  }, []);

  const hasPost = !!postsData.results;
  const hasSearchedPosts = !!searchedPosts?.results;
  const postsToDisplay = hasSearchedPosts ? searchedPosts : postsData;

  const checkNextPage = () => !!postsToDisplay?.next;
  const checkPreviousPage = () => !!postsToDisplay?.previous;
  const displayLoginAlert = () => setDisplayLoginModal(true);
  const closeLoginAlertModal = () => setDisplayLoginModal(false);

  return (
    <>
      <Head>
        <title>Home | Tech Blog </title>
        <meta
          name="keywords"
          content="Victor Lira, JavaScript, React, Next.js, TypeScript, Frontend Development, Web Development, Technology Blog, Coding Tutorials"
        />
        <meta
          name="description"
          content="Olá, sou Victor Lira, o criador de um blog dedicado a explorar os domínios do JavaScript, React, Next.js, TypeScript e outras tecnologias de front-end de ponta. Junte-se a mim nesta jornada enquanto compartilho insights, tutoriais e dicas para aprimorar suas habilidades e ficar por dentro das últimas tendências em desenvolvimento de front-end. Mergulhe no fascinante mundo do desenvolvimento web através do meu blog e capacite-se com conhecimento e experiência."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Victor Lira" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Victor Lira" />
        <meta property="og:image" content={META_TAG_IMAGE} />
        <meta property="og:url" content="https://www.victorlirablog.com/" />
        <link rel="icon" href={FAVICON} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3834333278222212"
          crossOrigin="anonymous"
        ></script>
      </Head>

      {!currentUser.email && displayLoginModal && (
        <LoginAlertModal onCloseLoginAlertModal={closeLoginAlertModal} />
      )}

      {(searchedPosts?.results?.length === 0 || hasPost) && <About />}

      {!hasSearchedPosts && !hasPost && (
        <h1 style={{ paddingTop: 200, textAlign: 'center', color: '#fff' }}>
          Nenhum post encontrado
        </h1>
      )}

      {hasSearchedPosts && searchedPosts?.results?.length === 0 && (
        <h1 style={{ paddingTop: 200, textAlign: 'center', color: '#fff' }}>
          Nenhum post encontrado para sua busca
        </h1>
      )}

      <MainPage className="main-page">
        <div className="container">
          {postsToDisplay.results?.map((post: PostProps, index: number) => {
            const costumizeFirstPost = index === 0;
            const styled = {
              width: 'calc(66.66667% - 40px)',
              minWidth: '300px',
            };

            return (
              <Post 
                onDisplayLoginAlert={displayLoginAlert}
                style={costumizeFirstPost ? styled : {}}
                id={post.id}
                key={post.id}
                title={post.title}
                content={post.content}
                author={post.author}
                metaTagTitle={post.metaTagTitle}
                metaTagDescription={post.metaTagDescription}
                postImage={post.postImage}
                date={post.date}
                category={post.category}
                aos_delay="100"
                aos_type="fade-up"
                hover_animation={-7}
                onUpdateFavoritSource={updateFavoritSource(favoritPosts, post)}
              />
            );
          })}
        </div>
      </MainPage>

      <Pagination
        pageLength={Math.ceil(postsToDisplay.totalPages)}
        page={postsToDisplay?.previous?.page ? postsToDisplay.previous.page + 1 : 1}
        hasNextPage={checkNextPage()}
        hasPreviousPage={checkPreviousPage()}
        previousPage={postsToDisplay?.previous?.page || 1}
        nextPage={postsToDisplay?.next?.page || 1}
        queryParam={searchQuery}
      />
    </>
  );
}
