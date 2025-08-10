'use client';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 75px 0;
  margin: 0 auto;
  margin-top: 20px;
  background: #000;

  .icons-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80px;
    margin: 0 auto;

    .icons-group {
      background: white;
      border: 1px solid #fff;
      border-radius: 50%;
      max-width: 30px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        width: 30px;
        border: 1px solid #fff;
        border-radius: 100%;
      }
    }
  }

  .direitos-autorais {
    margin: 0 auto;
    color: #ccc;
    font-size: 12px;
    margin-top: 20px;
    width: 375px;
    text-align: center;
  }
`;

export default StyledFooter;
