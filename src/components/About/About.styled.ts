'use client';
import styled from 'styled-components';

export const StyledAbout = styled.section`
  @font-face {
    font-family: 'bolder-font';
    src:
      local('Sua Fonte'),
      local('bolder-font'),
      url('bold-1.ttf') format('woff2'),
      url('bold-2.oft') format('woff');
    font-style: normal;
  }

  position: relative;
  background: #000;
  padding: 186px 20px 0;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

export const Description = styled.p`
  color: #8f9ba8;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    line-height: 25px;
  }
`;

export const DevTag = styled.span`
  color: #06ebb0;
  font-size: 20px;
`;
