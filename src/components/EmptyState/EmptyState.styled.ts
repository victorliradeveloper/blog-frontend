'use client';
import styled from 'styled-components';

export const StyledEmptyState = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 200px 20px 100px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 150px 20px 80px;
  }
`;

export const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(7, 235, 176, 0.1);
  border-radius: 50%;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 25px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(7, 235, 176, 0.3);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  img {
    width: 60px;
    height: 60px;
    position: relative;
    z-index: 1;
    filter: brightness(0) saturate(100%) invert(64%) sepia(89%) saturate(1352%) hue-rotate(120deg)
      brightness(101%) contrast(101%);

    @media screen and (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 16px 0;
  padding: 0;
  line-height: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Message = styled.p`
  font-size: 16px;
  color: #8f9ba8;
  line-height: 1.6;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
