'use client';
import styled from 'styled-components';

export const StyledSearchPost = styled.div`
  top: 80px;
  width: 100vw;
  height: 90px;
  padding: 23px;
  background: #e5e5e5;
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 700px) {
    top: 0;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  height: 45px;
  display: flex;
  align-items: center;
  width: 1200px;
  padding: 0 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 1200px;
  background: #ffffff;
  border-radius: 4px;
  z-index: 5;
  border: unset;
  margin: 0 auto;
  height: 40px;
  padding-left: 15px;
  outline: none;

  &::placeholder {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    color: #888;
    font-style: italic;
  }

  &:focus {
    border: 2px solid #12edb2;
    box-shadow: 0 0 5px rgba(18, 237, 178, 0.5);
    background: #f9f9f9;
  }
`;

export const SearchGreyIcon = styled.div`
  position: absolute;
  z-index: 33;
  display: flex;
  align-items: center;
  right: 20px;
`;

export const SearchHint = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  color: #888;
  font-style: italic;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const SearchIconWrapper = styled.div`
  width: 30px;
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  height: 100vh;
  position: fixed;
  width: 100vw;
  background: rgba(255, 255, 255, 0.2);
  top: 179px;
  z-index: 3;

  @media screen and (max-width: 700px) {
    top: 90px;
  }
`;
