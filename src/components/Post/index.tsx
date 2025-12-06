import {
  StyledPost,
  MotionBox,
  PostImageWrapper,
  PostImage,
  PostBody,
  CategoryWrapper,
  PostDate,
  PostCategory,
  PostTitle,
  PostContent,
  PostAuthor,
  AuthorItem,
  ReadMoreWrapper,
  ReadMoreText,
  ReadMoreArrowWrapper,
} from './Post.styled';
import dateFormatter from '@/helper/functions/dateFormatter';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import { IProps } from './types';
import { PAGINATION_ARROW } from '@/constants/images';
import { removeSpecialChars } from '@/helper/functions/removeSpecialChars';

const Post: React.FC<IProps> = props => {
  const { addToFavoritsHandler } = useAddToFavoritsContext();

  const formattedDate = dateFormatter(props.date);
  const router = useRouter();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleLinkClick = async (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('favorits--trigger')) {
      if (props.onDisplayLoginAlert) {
        props.onDisplayLoginAlert();
      }

      addToFavoritsHandler(e);
      return;
    }

    router.push({
      pathname: `/article/${props.slug}`,
      query: {},
    });
  };

  return (
    <StyledPost
      data-aos-delay={props.aos_delay}
      data-aos={props.aos_type}
      style={props.style}
      onClick={handleLinkClick}
      onMouseMove={handleMouseMove}
      data-id={props.id}
    >
      <MotionBox whileHover={{ y: props.hover_animation }}>
        <PostImageWrapper>
          <PostImage $backgroundImage={props.postImage} />
        </PostImageWrapper>
        <PostBody>
          <CategoryWrapper>
            <PostDate>{formattedDate}</PostDate>
            <PostCategory>{props.category}</PostCategory>
          </CategoryWrapper>

          <PostTitle>{props.title}</PostTitle>
          <PostContent>
            {props.content.length > 100
              ? removeSpecialChars(props.content.substring(0, 100)) + ' ...'
              : removeSpecialChars(props.content)}
          </PostContent>

          <PostAuthor>
            <AuthorItem>Author: {props.author}</AuthorItem>
          </PostAuthor>

          <ReadMoreWrapper>
            <ReadMoreText>Read more</ReadMoreText>
            <ReadMoreArrowWrapper>
              <Image
                width={20}
                height={20}
                alt="arrow right"
                loading="lazy"
                src={PAGINATION_ARROW}
              />
            </ReadMoreArrowWrapper>
          </ReadMoreWrapper>
        </PostBody>
      </MotionBox>
    </StyledPost>
  );
};

export default Post;
