'use client';
import styled from 'styled-components';

export const StyledMainPage = styled.div`
  padding: 0 0 60px 0;
  background: #000;
  max-width: 1920px;
  margin: 0 auto;
  color: #fff;

  @media screen and (max-width: 750px) {
    padding: 0 20px 60px 20px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 130px;

  @media screen and (max-width: 750px) {
    padding-top: 150px;
  }
`;

export default StyledMainPage;
