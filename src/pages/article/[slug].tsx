import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import StyledPostNew from './Posts.styled';
import MarkdownRenderer from '@/presentation/components/MarkdownRenderer';
import dateFormatter from '@/helper/functions/dateFormatter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TelegramShareButton,
} from 'react-share';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import { FAVICON, POST_BACKGROUND_BLUR } from '@/constants/images';
import { useCurrentUser } from '@/Context/currentUser';
import LoginAlertModal from '@/presentation/components/LoginAlertModal';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { updateFavoritSource } from '@/helper/functions/updateFavoritSource';
import { ServerPostsService } from '@/infrastructure/http/ServerPostsService';
import { Post } from '@/domain/posts/entities/Post';
import PostComponent from '@/presentation/components/Post';
import { GetStaticPaths, GetStaticProps } from 'next';

type IProps = {
  post: Post;
  relatedPosts: Post[];
};

function Posts(props: IProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState({});

  useEffect(() => {
    setIsLoading(false);
    AOS.init();

    setSettings({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1186,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, []);

  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const codeBlocks = document.querySelectorAll('pre');
      codeBlocks.forEach(block => {
        const code = block.textContent;

        if (code) {
          const highlighted = hljs.highlight(code, { language: 'javascript' }).value;
          block.innerHTML = highlighted;
        }
      });
    }, 500);
  }, []);

  const { favoritPosts } = useAddToFavoritsContext();
  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const { currentUser } = useCurrentUser();

  const displayLoginAlert = function () {
    setDisplayLoginModal(true);
  };

  const closeLoginAlertModal = function () {
    setDisplayLoginModal(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledPostNew>
      <Head>
        <title>{props.post.metaTagTitle}</title>
        <meta name="title" content={props.post.metaTagTitle} />
        <meta name="description" content={props.post.metaTagDescription}></meta>
        <meta name="author" content={props.post.author} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={props.post.keywords} />
        <meta property="og:image" content={props.post.postImage} />
        <link rel="icon" href={FAVICON} />
      </Head>
      {!currentUser.email && displayLoginModal && (
        <LoginAlertModal onCloseLoginAlertModal={closeLoginAlertModal} />
      )}

      <div className="profile" data-aos="fade-down">
        <div className="background-image-container">
          <LazyLoadImage
            className="background-image"
            src={props.post.postBackground}
            placeholderSrc={POST_BACKGROUND_BLUR}
            alt="Blur background"
          />
        </div>

        <div className="body-post" data-aos="fade-up">
          <h1 className="title">{props.post.title}</h1>
          <p className="date">{dateFormatter(props.post.date)}</p>
          <MarkdownRenderer> {props.post.content} </MarkdownRenderer>
          <div className="aside-absolute">
            <div className="content">
              <TwitterShareButton
                title={props.post.metaTagTitle}
                url={`https://www.victorlirablog.com/article/${props.post.slug}`}
              >
                <Image
                  src="/twitter.png"
                  width={30}
                  height={30}
                  alt="twitter icon"
                  className="img-twitter"
                />
              </TwitterShareButton>
              <RedditShareButton
                title={props.post.metaTagTitle}
                url={`https://www.victorlirablog.com/article/${props.post.slug}`}
              >
                <Image
                  src="/reddit.png"
                  width={30}
                  height={30}
                  alt="reddit icon"
                  className="img-reddit"
                />
              </RedditShareButton>
              <TelegramShareButton
                url={`https://www.victorlirablog.com/article/${props.post.slug}`}
                title={props.post.metaTagTitle}
              >
                <Image
                  src="/telegram.png"
                  width={30}
                  height={30}
                  alt="telegram icon"
                  className="img-telegram"
                />
              </TelegramShareButton>
              <FacebookShareButton
                title={props.post.metaTagTitle}
                url={`https://www.victorlirablog.com/article/${props.post.slug}`}
              >
                <Image
                  src="/facebook.png"
                  width={30}
                  height={30}
                  alt="facebook icon"
                  className="img-facebook"
                />
              </FacebookShareButton>
            </div>
          </div>
        </div>
        <div className="writter">
          <div className="author"></div>
          <div className="name-container">
            <p className="text-1">Victor Lira &nbsp; 🚀</p>
            <p className="text-2">Escrito por Victor Lira</p>
          </div>
        </div>
      </div>
      <h1 className="title">Últimas postagens</h1>
      <div className="last-posts">
        <Slider {...settings}>
          {props.relatedPosts && props.relatedPosts.map((post: Post) => {
            return (
              <div className="slider-content" key={post.id}>
                <PostComponent
                  onDisplayLoginAlert={displayLoginAlert}
                  id={post.id}
                  category={post.category}
                  content={post.content}
                  date={post.date}
                  metaTagDescription={post.metaTagDescription}
                  metaTagTitle={post.metaTagTitle}
                  title={post.title}
                  postImage={post.postImage}
                  postBackground={post.postBackground}
                  author={post.author ?? 'Unknown Author'}
                  keywords={post.keywords}
                  slug={post.slug}
                  aos_delay=""
                  aos_type=""
                  hover_animation={-7}
                  onUpdateFavoritSource={updateFavoritSource(favoritPosts, post)}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </StyledPostNew>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Busca apenas os slugs necessários
    const data = await ServerPostsService.getAllPosts('1', '50', 'all');
    const paths = data.results.map((post: Post) => ({
      params: { slug: post.slug },
    }));

    return {
      paths,
      fallback: 'blocking', // Gera páginas novas sob demanda
    };
  } catch (error) {
    console.error('Error fetching paths:', error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;

  try {
    const post = await ServerPostsService.getPostBySlug(slug as string);
    
    // Buscar apenas 3 posts mais recentes
    const relatedPostsData = await ServerPostsService.getAllPosts('1', '3', 'all');
    const relatedPosts = relatedPostsData.results.filter(p => p.id !== post.id);

    return {
      props: {
        post,
        relatedPosts,
      },
      revalidate: 3600, // Revalida a cada hora
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
};

export default Posts;
