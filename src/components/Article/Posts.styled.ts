'use client';
import styled from 'styled-components';
import { POST_CONTENT_WRITER, POST_INITIAL_IMAGE, PROJECTS_SLIDER_ARROW } from '@/constants/images';

export const StyledPostNew = styled.div`
  /* Code blocks styling - handled by react-syntax-highlighter */
  pre {
    margin: 0;
    padding: 0;
    border-radius: 0;
  }

  /* Inline code styling */
  code:not(pre code) {
    background: rgba(1, 239, 179, 0.1);
    color: #01efb3;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
    font-weight: 500;
    border: 1px solid rgba(1, 239, 179, 0.2);
  }

  strong {
    color: #ffffff;
    font-weight: 700;
  }

  em {
    font-style: italic;
    color: #e0e0e0;
  }
`;

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;

export const ParallaxContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  opacity: 0.4;
`;

export const ParallaxImage = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('${POST_INITIAL_IMAGE}');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Overlay = styled.div`
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
`;

export const OverlayTitle = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Profile = styled.div`
  color: #8f9ba8;
  margin-bottom: 60px;
`;

export const BodyPost = styled.div`
  max-width: 830px;
  margin: 0 auto;
  padding: 20px 30px;
  padding-top: 60px;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 24px;
    margin-top: 32px;
    color: #ffffff;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;

    &:first-child {
      margin-top: 0;
    }

    @media screen and (max-width: 700px) {
      margin-bottom: 16px;
      margin-top: 24px;
    }
  }

  h1 {
    font-size: 2.5rem;
    border-bottom: 2px solid rgba(1, 239, 179, 0.3);
    padding-bottom: 12px;
    margin-bottom: 32px;

    @media screen and (max-width: 700px) {
      font-size: 1.75rem;
      line-height: 1.4;
    }
  }

  h2 {
    font-size: 2rem;
    color: #e0e0e0;
    margin-top: 40px;

    @media screen and (max-width: 700px) {
      font-size: 1.5rem;
      line-height: 1.4;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: #d0d0d0;

    @media screen and (max-width: 700px) {
      font-size: 1.25rem;
    }
  }

  h4 {
    font-size: 1.25rem;
    color: #c0c0c0;

    @media screen and (max-width: 700px) {
      font-size: 1.1rem;
    }
  }

  h5,
  h6 {
    font-size: 1.1rem;
    color: #b0b0b0;

    @media screen and (max-width: 700px) {
      font-size: 1rem;
    }
  }

  /* Paragraphs */
  p {
    line-height: 1.8;
    margin-bottom: 24px;
    font-size: 17px;
    color: #e5e5e5;
    letter-spacing: 0.01em;

    @media screen and (max-width: 700px) {
      font-size: 15px;
      margin-bottom: 16px;
      line-height: 1.7;
    }

    img {
      max-width: 100%;
      border-radius: 8px;
      background: rgb(32, 32, 32);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    margin: 32px 0;
    padding: 0;
    border-radius: 8px;
    display: block;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 767px) {
      margin: 24px 0;
    }
  }

  /* Code blocks - styled by react-syntax-highlighter */
  pre {
    margin: 24px 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(1, 239, 179, 0.2);
    position: relative;

    @media screen and (max-width: 700px) {
      margin: 20px 0;
      border-radius: 6px;
    }

    code {
      display: block;
      padding: 20px;
      overflow-x: auto;
      font-size: 14px;
      line-height: 1.6;
      background: transparent !important;

      @media screen and (max-width: 700px) {
        font-size: 13px;
        padding: 16px;
      }
    }
  }

  /* SyntaxHighlighter wrapper */
  div[class*='syntax-highlighter'] {
    margin: 24px 0 !important;
    border-radius: 8px !important;
    overflow: hidden !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
    border: 1px solid rgba(1, 239, 179, 0.2) !important;

    @media screen and (max-width: 700px) {
      margin: 20px 0 !important;
      border-radius: 6px !important;
    }

    pre {
      margin: 0 !important;
      padding: 20px !important;
      border-radius: 0 !important;
      border: none !important;
      box-shadow: none !important;
      background: #1e1e1e !important;
      color: #ffffff !important;

      @media screen and (max-width: 700px) {
        padding: 16px !important;
      }

      code {
        color: #ffffff !important;
        background: transparent !important;
        font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace !important;

        /* Forçar todos os elementos a serem brancos por padrão */
        * {
          color: #ffffff !important;
        }

        /* Manter syntax highlighting apenas para tokens específicos */
        .token {
          /* Strings - apenas strings literais */
          &.string {
            color: #ce9178 !important;
          }

          /* Comentários */
          &.comment {
            color: #6a9956 !important;
            font-style: italic !important;
          }

          /* Keywords */
          &.keyword {
            color: #569cd6 !important;
          }

          /* Functions */
          &.function {
            color: #dcdcaa !important;
          }

          /* Numbers */
          &.number {
            color: #b5cea8 !important;
          }

          /* Operators e Punctuation */
          &.operator,
          &.punctuation {
            color: #d4d4d4 !important;
          }

          /* Properties */
          &.property {
            color: #9cdcfe !important;
          }

          /* Class names */
          &.class-name {
            color: #4ec9b0 !important;
          }

          /* Tags JSX/XML */
          &.tag {
            color: #569cd6 !important;
          }

          /* Attributes */
          &.attr-name {
            color: #9cdcfe !important;
          }

          &.attr-value {
            color: #ce9178 !important;
          }

          /* Variables */
          &.variable {
            color: #9cdcfe !important;
          }
        }
      }
    }
  }

  /* Links */
  a {
    color: #01efb3;
    text-decoration: none;
    border-bottom: 1px solid rgba(1, 239, 179, 0.3);
    transition: all 0.2s ease;

    &:hover {
      color: #00d4a3;
      border-bottom-color: rgba(1, 239, 179, 0.6);
    }

    &:visited {
      color: #b6b7f6;
    }
  }

  /* Lists */
  ul,
  ol {
    letter-spacing: 0.01em;
    line-height: 1.8;
    font-size: 17px;
    padding-left: 32px;
    margin-bottom: 24px;
    color: #e5e5e5;

    @media screen and (max-width: 700px) {
      font-size: 15px;
      padding-left: 24px;
      margin-bottom: 20px;
    }

    li {
      margin-bottom: 12px;
      position: relative;

      @media screen and (max-width: 700px) {
        margin-bottom: 10px;
      }

      p {
        margin-bottom: 12px;
      }

      ul,
      ol {
        margin-top: 12px;
        margin-bottom: 12px;
      }
    }
  }

  ul {
    list-style-type: disc;

    li {
      &::marker {
        color: #01efb3;
      }
    }
  }

  ol {
    list-style-type: decimal;

    li {
      &::marker {
        color: #01efb3;
        font-weight: 600;
      }
    }
  }

  /* Blockquotes */
  blockquote {
    border-left: 4px solid #01efb3;
    padding: 16px 24px;
    margin: 24px 0;
    background: rgba(1, 239, 179, 0.05);
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: #d0d0d0;

    @media screen and (max-width: 700px) {
      padding: 12px 16px;
      margin: 20px 0;
    }

    p {
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  /* Horizontal rule */
  hr {
    border: none;
    border-top: 2px solid rgba(1, 239, 179, 0.2);
    margin: 40px 0;
    border-radius: 2px;

    @media screen and (max-width: 700px) {
      margin: 32px 0;
    }
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    overflow-x: auto;
    display: block;

    @media screen and (max-width: 700px) {
      margin: 20px 0;
    }

    thead {
      background: rgba(1, 239, 179, 0.1);
    }

    th,
    td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    th {
      font-weight: 700;
      color: #ffffff;
      background: rgba(1, 239, 179, 0.15);
    }

    td {
      color: #e5e5e5;
    }

    tbody tr {
      transition: background 0.2s ease;

      &:hover {
        background: rgba(1, 239, 179, 0.05);
      }
    }
  }

  /* Task lists */
  input[type='checkbox'] {
    margin-right: 8px;
    accent-color: #01efb3;
  }
`;

export const PostDate = styled.p`
  text-align: center;
  font-weight: bolder;
  color: #9ec0fa;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export const AsideAbsolute = styled.div`
  position: absolute;
  right: -100px;
  top: 10px;
  height: 100%;
  padding: 100px 0 60px 0;

  @media screen and (max-width: 1037px) {
    left: 0;
    width: 100%;
    top: 0px;
    padding: unset;
    height: 0;
  }
`;

export const ShareContent = styled.div`
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
  gap: 10px;

  @media screen and (max-width: 1037px) {
    flex-direction: row;
    width: 100%;
    height: 50px;
    background-color: black;
    top: 80px;
    justify-content: space-evenly;
    gap: 0;
  }

  button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ShareButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 30px;
    display: block;
  }
`;

export const Writer = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 40px;
  border-style: solid;
  border-width: 1px 0px;
  margin: 0px auto;
  border-color: #1c1c1c;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding: 40px;
  }
`;

export const Author = styled.div`
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
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Text1 = styled.p`
  font-size: 18px;
  margin-bottom: 7px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 700px) {
    margin: 10px auto 7px auto;
    font-size: 14px;
  }
`;

export const Text2 = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 70px;
  color: #b4b4b4;

  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
    margin-bottom: 40px;
  }
`;

export const LastPosts = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .slick-slider {
    .slick-track {
      display: flex;
      justify-content: center;
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
`;

export const SliderContent = styled.div`
  display: flex !important;
  justify-content: center !important;
  padding-top: 15px;
`;
