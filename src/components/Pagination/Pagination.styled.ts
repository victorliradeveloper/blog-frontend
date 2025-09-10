'use client';

import styled from 'styled-components';
const StyledPagination = styled.div`
  .pagination-wrapper {
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

      li {
        list-style: none;
      }

      .icon-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-size: 15px;
        text-align: center;
        padding: 8px 0;
        border: 2px solid #fff;
        color: #a82472;
        cursor: pointer;

        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }

        &.icon-arrow-left {
          margin-right: 20px;
        }

        &.icon-arrow-right {
          margin-left: 20px;
          img {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
`;

export default StyledPagination;
