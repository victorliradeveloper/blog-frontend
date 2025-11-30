'use client';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 75px 0;
  margin: 20px auto 0;
  background: #000;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80px;
  margin: 0 auto;
`;

export const IconGroup = styled.div`
  background: white;
  border-radius: 100%;
  max-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
  border-radius: 100%;
  overflow: hidden;
`;

export const Copyright = styled.div`
  margin: 20px auto 0;
  color: #ccc;
  font-size: 12px;
  width: 375px;
  text-align: center;
`;

export const CopyrightText = styled.p`
  margin: 0;
  padding: 0;
`;

export const TechLink = styled.a`
  color: #fff;
  text-decoration: underline;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;

export const Strong = styled.strong`
  font-weight: bold;
`;
