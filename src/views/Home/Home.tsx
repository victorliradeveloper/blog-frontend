import Head from 'next/head';
import PostComponent from '@/components/Post';
import { useContext, useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import { META_TAG_IMAGE, FAVICON } from '@/constants/images';
import { useCurrentUser } from '@/Context/currentUser';
import { GlobalContext } from '@/Context/pagination';
import MainPage from '@/views/Home/components/MainPage';
import { updateFavoritSource } from '@/helper/functions/updateFavoritSource';
import { useRouter } from 'next/router';
import { Post, PostPagination } from '@/presenters/Post';
import Pagination from '@/components/Pagination';
import LoginAlertModal from '@/components/LoginAlertModal';
import About from '@/components/About';

type Data = PostPagination;

export default function Home({ postsData }: { postsData: Data }) {
  const { setPage } = useContext(GlobalContext);
  const { favoritPosts } = useAddToFavoritsContext();
  const { currentUser } = useCurrentUser();
  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const router = useRouter();
  const searchQuery = router.query.query as string;

  useEffect(() => {
    if (postsData?.next?.page) {
      setPage(postsData.next.page);
    }
  }, [postsData?.next?.page, setPage]);

  useEffect(() => {
    AOS.init();
  }, []);

  const hasPost = !!postsData.results;
  const postsToDisplay = postsData;

  const checkNextPage = () => !!postsToDisplay?.next;
  const checkPreviousPage = () => !!postsToDisplay?.previous;
  const displayLoginAlert = () => setDisplayLoginModal(true);
  const closeLoginAlertModal = () => setDisplayLoginModal(false);

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
        <LoginAlertModal onCloseLoginAlertModal={closeLoginAlertModal} />
      )}

      {(!searchQuery || (searchQuery && postsData?.results?.length > 0)) && <About />}

      {!hasPost && !searchQuery && (
        <h1 style={{ paddingTop: 200, textAlign: 'center', color: '#fff' }}>
          Nenhum post encontrado
        </h1>
      )}

      {postsData?.results?.length === 0 && searchQuery && (
        <h1 style={{ paddingTop: 200, textAlign: 'center', color: '#fff' }}>
          Nenhum post encontrado para sua busca
        </h1>
      )}

      <MainPage className="main-page">
        <div className="container">
          {postsToDisplay.results?.map((post: Post, index: number) => {
            const costumizeFirstPost = index === 0;
            const styled = {
              width: 'calc(66.66667% - 40px)',
              minWidth: '300px',
            };

            return (
              <PostComponent
                onDisplayLoginAlert={displayLoginAlert}
                style={costumizeFirstPost ? styled : {}}
                id={post.id}
                key={post.id}
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
