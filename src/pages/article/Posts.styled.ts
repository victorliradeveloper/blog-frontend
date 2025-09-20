'use client';
import styled from 'styled-components';
import { POST_CONTENT_WRITER, POST_INITIAL_IMAGE, PROJECTS_SLIDER_ARROW } from '@/constants/images';

const StyledPostNew = styled.div`
  .hljs {
    background-color: #2e2e2e;
    color: #ccc;
    background: #1f1f1f;
  }

  //javascript start
  pre {
    .hljs-keyword,
    .hljs-literal,
    .hljs-subst {
      color: #569cd6 !important;
    }

    .hljs-variable.lastName {
      color: green !important;
    }

    .hljs-string {
      color: #ce9178 !important;
    }

    .hljs-comment {
      color: #6a9956 !important;
      font-style: italic !important;
    }

    .hljs-number {
      color: #b5cea8 !important;
    }

    .hljs-variable {
      color: #9cdcfe !important;
    }

    .hljs-function {
      color: #cccccc !important;
    }

    .hljs-built_in {
      color: #dbdba9 !important;
    }

    .hljs-title.function_ {
      color: #dbdba9 !important;
    }

    .hljs-titl.class_ {
      color: #dbdba9 !important;
    }

    .hljs-title.class_ {
      color: #dbdba9 !important;
    }

    .hljs-attr {
      color: #9cdcfe !important;
    }
  }
  //javascript end

  //XML
  pre {
    .language-xml {
      .hljs-tag {
        .hljs-name {
          color: #569cd6 !important;
        }

        .hljs-string {
        }
      }
    }
  }

  .hljs-keyword {
    color: #f92672;
  }

  .hljs-string {
    /* color: red;  */
  }

  .hljs-comment {
    color: #75715e;
  }

  .hljs-title.function_ {
    /* color: red;  */
  }

  .hljs-number {
    color: #ae81ff;
  }

  .container {
    position: relative;

    .parallax {
      height: 100vh;
      width: 100%;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      overflow: hidden;
      opacity: 0.4;

      &.image--1 {
        background-image: url('${POST_INITIAL_IMAGE}');
      }
    }

    .overlay {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;

      h1 {
        color: white;
        font-size: 3rem;
        font-weight: 900;
        text-align: center;
        @media screen and (max-width: 768px) {
          font-size: 2rem;
        }
      }
    }
  }

  //XML
  .profile {
    color: #8f9ba8;
    margin-bottom: 60px;

    .body-post {
      max-width: 830px;
      margin: 0 auto;
      padding: 20px 30px;
      padding-top: 60px;
      position: relative;

      .aside-absolute {
        position: absolute;
        right: -100px;
        top: 10px;
        height: 100%;
        padding: 100px 0 60px 0;

        @media screen and (max-width: 1037px) {
          left: 0;
          width: 100%;
          top: 0px;
          left: 0;
          padding: unset;
          height: 0;

          img {
            &.img-twitter {
              margin-left: 20px;
            }

            &.img-reddit {
              margin-left: 20px;
            }

            &.img-whatsapp {
              margin-left: 20px;
            }

            &.img-telegram {
              margin-left: 20px;
            }
          }
        }

        .content {
          position: sticky;
          width: 100px;
          height: auto;
          top: 100px;
          left: 0;
          color: white;
          flex-grow: 0;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          @media screen and (max-width: 1037px) {
            flex-direction: row;
            width: 100%;
            height: 50px;
            background-color: black;
            top: 80px;
            justify-content: space-evenly;
          }

          img {
            padding: unset;
            width: 30px;
            height: 30px;
            background: unset;
            cursor: pointer;

            &.img-twitter {
              width: 25px;
              height: 25px;
            }
            &.img-facebook {
              width: 25px;
              height: 25px;
            }

            &.img-reddit {
              width: 25px;
              height: 25px;
            }

            &.img-telegram {
              width: 25px;
              height: 25px;
            }
          }
        }
      }

      .date {
        text-align: center;
        font-weight: bolder;
        color: #9ec0fa;
        @media screen and (max-width: 700px) {
          font-size: 14px;
        }
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-bottom: 30px;
        margin-top: 30px;
        color: #fff;

        @media screen and (max-width: 700px) {
          margin-bottom: 20px;
          margin-top: 20px;
        }
      }

      h1 {
        @media screen and (max-width: 700px) {
          font-size: 22px;
          line-height: 30px;
        }
      }

      h2 {
        @media screen and (max-width: 700px) {
          font-size: 20px;
          line-height: 24px;
        }
      }

      p {
        line-height: 30px;
        margin-bottom: 20px;
        font-size: 16px;

        @media screen and (max-width: 700px) {
          font-size: 14px;
          margin-bottom: 10px;
          line-height: 26px;
        }

        img {
          max-width: 100%;
          border-radius: 5px;
          background: rgb(32, 32, 32);
        }
      }

      img {
        max-width: 100%;
        margin-top: 10px;
        padding: 20px;

        @media screen and (max-width: 767px) {
          padding: unset;
          background: unset;
        }
      }

      pre {
        justify-content: flex-start;
        border-left: 2px solid #01efb3;
        border-bottom-right-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        font-family: monospace, Monaco;
        font-size: 13px;
        line-height: 27px;
        background: #1e1e1e;
        padding: 30px 12px;
        padding-left: 20px;
        border-radius: 4px;
        margin: 15px 0;
        overflow: overlay;

        @media screen and (max-width: 700px) {
          font-size: 12px;
          padding-left: 15px;
        }
      }

      a {
        color: #b6b7f6;
        text-decoration: none;
      }

      ul,
      ol {
        letter-spacing: 0.3px;
        line-height: 1.6;
        font-size: 16px;
        padding-left: 20px;
        margin-bottom: 20px;

        @media screen and (max-width: 700px) {
          font-size: 14px;
          padding-left: 20px;
          margin-bottom: 15px;
        }

        li {
          margin-bottom: 20px;

          @media screen and (max-width: 700px) {
            margin-bottom: 10px;
          }
        }
      }
    }

    .writter {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      padding: 60px 40px;
      border-style: solid;
      border-width: 1px 0px;
      margin: 0px auto;
      border-color: #1c1c1c;

      @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        padding: 40px 40px 40px 40px;
      }

      .author {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
        margin-right: 30px;
        background-image: url('${POST_CONTENT_WRITER}');
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        @media screen and (max-width: 700px) {
          margin-right: unset;
          width: 70px;
          height: 70px;
        }
      }

      .name-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .text-1 {
          font-size: 18px;
          margin-bottom: 7px;

          @media screen and (max-width: 700px) {
            margin: 0 auto;
            margin-bottom: 7px;
            font-size: 14px;
            margin-top: 10px;
          }
        }

        .text-2 {
          font-size: 14px;
        }
      }
    }
  }

  .title {
    text-align: center;
    margin-bottom: 70px;
    color: #b4b4b4;

    @media screen and (max-width: 700px) {
      font-size: 1.25rem;
      margin-bottom: 40px;
    }
  }

  .last-posts {
    max-width: 1200px;
    margin: 0 auto;

    .slider-content {
      display: flex !important;
      justify-content: center !important;
      padding-top: 15px;
    }

    //SLIDER
    .slick-slider {
      .slick-track {
        display: flex;
        justify-content: center;
      }

      .slick-slide {
      }
      .slick-arrow {
        &.slick-prev {
          left: 7px;
          z-index: 10;
          transform: rotate(180deg);
          border-radius: 100%;
          width: 30px;
          height: 30px;
          background-color: #3b3b3b;
          top: 220px;
          background-image: url('${PROJECTS_SLIDER_ARROW}');
          background-position: 9px 9px;
          background-size: 13px;
          background-repeat: no-repeat;

          &::before {
            display: none;
          }
        }

        &.slick-next {
          right: 7px;
          color: #fff;
          border-radius: 100%;
          width: 30px;
          height: 30px;
          background-color: #3b3b3b;
          background-image: url('${PROJECTS_SLIDER_ARROW}');
          background-position: 9px 9px;
          background-size: 13px;
          background-repeat: no-repeat;

          &::before {
            display: none;
          }
        }
      }
    }
  }
`;

export default StyledPostNew;
