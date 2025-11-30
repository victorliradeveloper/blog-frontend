'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface PostImageProps {
  $backgroundImage: string;
}

export const StyledPost = styled.div`
  width: calc(33.33333% - 40px);
  margin: 0 20px 40px 20px;
  min-width: 360px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding-top: 10px;
  border-radius: 10px;

  @media screen and (max-width: 640px) {
    min-width: 300px;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.1),
      transparent 40%
    );
    pointer-events: none;
    z-index: 1;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`;

export const MotionBox = styled(motion.div)`
  margin: 0 auto;
  border: 1px solid #3d3d3d;
  border-radius: 10px;
  color: #b4b4b4;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  position: relative;
`;

export const PostImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export const PostImage = styled.div<PostImageProps>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 641px) {
    height: 130px;
  }
`;

export const PostBody = styled.div`
  padding: 20px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-around;
  transition: 0.4s;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #03070a;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const PostDate = styled.p`
  text-align: start;
  width: 100%;
  font-size: 12px;
  margin: 10px 0;
  padding: 0;
`;

export const PostCategory = styled.p`
  font-size: 12px;
  transition: 0.2s;
  color: #9ec0fa;
  margin: 0;
  padding: 0;
`;

export const PostTitle = styled.h1`
  text-align: start;
  line-height: 26px;
  margin: 0;
  padding: 0;
  font-size: 18px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;

  @media screen and (max-width: 640px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const PostContent = styled.p`
  text-align: start;
  font-size: 14px;
  color: #8f9ba8;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;

export const PostAuthor = styled.ul`
  text-align: start;
  margin: 10px 0 0 0;
  padding: 0 0 0 11px;
  list-style: none;
  font-size: 12px;
  font-weight: 300;
`;

export const AuthorItem = styled.li`
  list-style: none;
`;

export const ReadMoreWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;

export const ReadMoreText = styled.p`
  margin: 0 10px 0 0;
  padding: 0;
  transition: 0.2s;
  cursor: pointer;
  color: #9ec0fa;
`;

export const ReadMoreArrowWrapper = styled.div`
  width: 26px;
  padding-top: 9px;
  cursor: pointer;
  display: none;
`;
