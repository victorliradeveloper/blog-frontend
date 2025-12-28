import Head from 'next/head';
import React, { useCallback, useEffect, useMemo } from 'react';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PostComponent from '@/components/Post';
import Image from 'next/image';
import {
  StyledProfile,
  ProfileSection,
  ProfileInformation,
  ProfileBox,
  ProfileName,
  ProfileEmail,
  LogoutBox,
  LogoutButton,
  FavoritPostTitle,
  Container,
  LoadingWrapper,
} from './Profile.styled';
import { FAVICON } from '@/constants/images';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { clearUser } from '@/store/slices/userSlice';
import { useRouter } from 'next/router';
import { updateFavoritSource } from '@/helper/functions/updateFavoritSource';
import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/presenters/Post';

function Profile() {
  const favoritPosts = useAppSelector(state => state.favorites.favoritPosts);
  const currentUser = useAppSelector(state => state.user.currentUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { data: postsData } = usePosts('1', '9999', 'all');

  const redirect = async () => {
    try {
      await router.push('/');
    } catch (error) {
      console.error('Redirecionamento falhou:', error);
    }
  };

  const logout = async function () {
    await redirect();
    dispatch(clearUser());
  };

  const filterFavoritPosts = useCallback(
    (results: Post[]) => {
      const intersection = results.filter((variant1: Post) =>
        favoritPosts.some(variant2 => variant2.post === variant1.id),
      );
      return intersection;
    },
    [favoritPosts],
  );

  useEffect(() => {
    if (!currentUser.email) {
      router.push('/');
    }
  }, [currentUser.email, router]);

  const currentPostArray = useMemo(() => {
    if (!postsData?.results) return undefined;
    return filterFavoritPosts(postsData.results);
  }, [postsData?.results, filterFavoritPosts]);

  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta
          name="keywords"
          content="Victor Lira, JavaScript, React, Next.js, TypeScript, Frontend Development, Web Development, Technology Blog, Coding Tutorials"
        ></meta>
        <meta
          name="description"
          content="Hello, I'm Victor Lira, the creator of a blog dedicated to exploring the realms of JavaScript, React, Next.js, TypeScript, and other cutting-edge front-end technologies. Join me on this journey as I share insights, tutorials, and tips to enhance your skills and stay up to date with the latest trends in front-end development. Dive into the fascinating world of web development through my blog and empower yourself with knowledge and experience."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={FAVICON} />
      </Head>

      {currentUser.email && (
        <StyledProfile data-aos="fade-down" data-aos-delay="200">
          <ProfileSection>
            <ProfileInformation>
              <Image src={currentUser.picture} width={100} height={100} alt="profile picture" />
              <ProfileBox>
                <ProfileName>{currentUser.name}</ProfileName>
                <ProfileEmail>{currentUser.email}</ProfileEmail>
              </ProfileBox>
            </ProfileInformation>

            <LogoutBox>
              <LogoutButton onClick={logout}>Sair</LogoutButton>
            </LogoutBox>
          </ProfileSection>

          <FavoritPostTitle>Postagens favoritas</FavoritPostTitle>
          <Container>
            {currentPostArray ? (
              currentPostArray.map(post => {
                return (
                  <PostComponent
                    slug={post.slug}
                    style={{}}
                    id={post.id}
                    key={post.id}
                    title={post.title}
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
              })
            ) : (
              <LoadingWrapper>
                <Image src="/loading.gif" width={100} height={100} alt="loading icon" />
              </LoadingWrapper>
            )}
          </Container>
        </StyledProfile>
      )}
    </div>
  );
}

export default Profile;
