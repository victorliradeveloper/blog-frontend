import StyledPost from './Post.styled';
import { removeSpecialChars } from '../../../helper/functions/removeSpecialChars';
import dateFormatter from '@/helper/functions/dateFormatter';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import { IProps } from './types';
import { PAGINATION_ARROW } from '@/constants/images';

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
      <motion.div whileHover={{ y: props.hover_animation }} className="motion-box">
        <div className="post-image-wrapper">
          <div className="add-to-favorits__wrapper favorits--trigger">
            <Image
              className="add-to-favorits favorits--trigger"
              width={40}
              height={40}
              alt="add to favorits"
              src={props.onUpdateFavoritSource}
            />
          </div>
          <div className="post-image-wrapper">
            <div
              className="post-image"
              style={{ backgroundImage: `url(${props.postImage})` }}
            ></div>
          </div>
        </div>
        <div className="post-body">
          <div className="category-wrapper">
            <p className="post-date">{formattedDate}</p>
            <p className="post-category">{props.category}</p>
          </div>

          <h1 className="post-title">{props.title}</h1>
          <p className="post-content">
            {props.content.length > 100
              ? removeSpecialChars(props.content.substring(0, 100)) + ' ...'
              : removeSpecialChars(props.content)}
          </p>

          <ul className="post-author">
            <li>Autor: {props.author}</li>
          </ul>

          <div className="read-more-wrapper">
            <p>Ler mais</p>
            <Image width={20} height={20} alt="arrow right" loading="lazy" src={PAGINATION_ARROW} />
          </div>
        </div>
      </motion.div>
    </StyledPost>
  );
};

export default Post;
