'use client';
import styled from 'styled-components';

const StyledAbout = styled.div`
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
  background: '#08070b';
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 186px;
  color: #fff;
  max-width: 1200px;

  h1 {
    font-size: 50px;

    @media screen and (max-width: 768px) {
      font-size: 35px;
    }
  }

  p {
    @media screen and (max-width: 768px) {
      line-height: 25px;
    }
  }

  span {
    color: #06ebb0;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
  }
`;

export default StyledAbout;
