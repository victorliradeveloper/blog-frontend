'use client';
import styled from 'styled-components';

const StyledPost = styled.div`
  width: calc(33.33333% - 40px);
  margin: 0 20px 40px 20px;
  min-width: 360px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding-top: 10px;

  @media screen and (max-width: 640px) {
    min-width: 300px;
  }

  .motion-box {
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    border-color: #0497ef;
    color: #b4b4b4;
    text-align: center;
    text-decoration: none;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    border: 1px solid #3d3d3d;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1), transparent 40%);
    pointer-events: none;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  .post-image-wrapper {
    overflow: hidden;
    position: relative;

    .add-to-favorits__wrapper {
      position: absolute;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      right: 0px;
      z-index: 20;

      .add-to-favorits {
        width: 23px;
        height: auto;

        @media screen and (max-width: 500px) {
          width: 23px;
        }
      }
    }

    .post-image {
      width: 100%;
      height: 200px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      transition: 0.5s;

      &:hover {
        scale: 1.2;
      }

      @media screen and (max-width: 641px) {
        height: 130px;
      }
    }
  }

  .post-body {
    padding: 0 20px;
    height: 290px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-around;
    transition: 0.4s;
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #03070a;

    .category-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 8px;

      .post-date {
        text-align: start;
        width: 100%;
        font-size: 12px;
        margin-bottom: 10px;
        margin-top: 10px;
      }

      .post-category {
        font-size: 12px;
        transition: 0.2s;
        color: #9ec0fa;
      }
    }

    .post-title {
      text-align: start;
      line-height: 26px;
      margin-bottom: 20px;
      font-size: 22px;
      vertical-align: middle;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      @media screen and (max-width: 640px) {
        font-size: 18px;
        line-height: 20px;
      }
    }

    .post-content {
      text-align: start;

      @media screen and (max-width: 640px) {
        font-size: 14px;
      }
    }

    .post-author {
      text-align: start;
      margin-top: 10px;
      font-size: 12px;
      font-weight: 300;
      padding-left: 11px;
    }
  }

  .read-more-wrapper {
    margin-top: 10px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 640px) {
      font-size: 14px;
    }

    p {
      margin-right: 10px;
      transition: 0.2s;
      cursor: pointer;
      color: #9ec0fa;
    }

    img {
      width: 26px;
      padding-top: 9px;
      cursor: pointer;
      display: none;
    }
  }
`;

export default StyledPost;
