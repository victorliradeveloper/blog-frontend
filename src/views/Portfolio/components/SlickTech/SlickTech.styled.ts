import styled from 'styled-components';

const StyledSlickTech = styled.div`
  //slick dots
  width: 100%;
  .slick-dots {
    @media screen and (max-width: 453px) {
      bottom: -75px;
      line-height: 0;
    }

    li {
      button {
        &::after {
          font-family: 'slick';
          font-size: 12px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          content: '•';
          text-align: center;
          opacity: 0.25;
          -webkit-font-smoothing: antialiased;
          color: rgb(255, 255, 255);
        }
      }
    }

    li {
      &.slick-active {
        &::after {
          font-family: 'slick';
          font-size: 12px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          content: '•';
          text-align: center;
          /* opacity: 0.5; */
          color: #0beeb2;
          -webkit-font-smoothing: antialiased;
        }
      }
    }
  }

  //arrow
  .slick-arrow {
    display: none !important;
  }

  .slider-container {
    .slider-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 150px;
      height: 130px;
      margin: 0 auto;
      .slide-image {
        width: 70px;
        height: auto;
        cursor: pointer;
      }

      &.next {
        img {
          width: 90px;
        }

        .text {
          font-size: 13px;
          margin-top: 10px;
        }
      }

      &.react {
        img {
          width: 90px;
        }
        .text {
          font-size: 13px;
          margin-top: 10px;
        }
      }

      &.typescript {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 20px;
        }
      }

      &.javascript {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 20px;
        }
      }

      &.wordpress {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 20px;
        }
      }

      &.styled-components {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 20px;
        }
      }

      &.html {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 18px;
        }
      }

      &.sass {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 18px;
        }
      }

      &.css {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 18px;
        }
      }
    }
  }
`;

export default StyledSlickTech;
