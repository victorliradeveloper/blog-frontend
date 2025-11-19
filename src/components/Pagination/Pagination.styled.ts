'use client';

import styled from 'styled-components';

export const StyledPagination = styled.div`
  width: 100%;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const ArrowListItem = styled.li`
  list-style: none;
`;

interface ArrowIconProps {
  $direction: 'left' | 'right';
}

export const ArrowIcon = styled.div<ArrowIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  padding: 8px 0;
  border: 2px solid #fff;
  color: #a82472;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  ${props =>
    props.$direction === 'left' &&
    `
    margin-right: 20px;
  `}

  ${props =>
    props.$direction === 'right' &&
    `
    margin-left: 20px;
    
    img {
      transform: rotate(180deg);
    }
  `}
`;

export const PageInfo = styled.p`
  margin: 0;
  padding: 0;
`;
