import styled from 'styled-components';

const SlickProjects = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1274px) {
    width: 100%;
  }
  .arrows-containers {
    width: 300px;
    height: 400px;
    position: absolute;
    padding: 30px;
    background: linear-gradient(135deg, #182517 0%, #71cd6a 100%);

    h1 {
      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }

    @media screen and (max-width: 768px) {
      height: 150px !important;
      display: none !important;
      p {
        display: none;
      }
    }

    p {
      font-size: 13px;
      letter-spacing: 2px;
      line-height: 24px;
      margin-top: 20px;
      text-transform: uppercase;
    }

    @media screen and (max-width: 1274px) {
      width: 100%;
      top: 600px;
      height: 350px;
    }
  }

  .slick-dots {
    bottom: -65px;

    @media screen and (max-width: 453px) {
      bottom: -60px;
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
    display: block;
    border: 1px solid #fff;
    border-radius: 20px;
  }

  .slick-prev {
    left: 50px;
    top: -10px !important;
    transform: rotate(-180deg);
    top: 300px !important;
    width: 40px !important;
    height: 40px !important;
    z-index: 1;

    @media screen and (max-width: 1274px) {
      top: 780px !important;
    }

    @media screen and (max-width: 768px) {
      top: 590px !important;
      display: none !important;
    }

    &::before {
      content: '';
      background-image: url('../../../teste.svg');
      display: inline-block; /* Ensure the pseudo-element takes up space */
      width: 20px; /* Adjust the size as needed */
      height: 20px; /* Adjust the size as needed */
      opacity: 0.75;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .slick-next {
    right: 0;
    width: 40px;
    height: 40px;
    left: 200px;
    top: 320px !important;
    z-index: 1;

    @media screen and (max-width: 1274px) {
      left: unset;
      right: 50px;
      top: 790px !important;
    }

    @media screen and (max-width: 768px) {
      left: unset;
      right: 50px;
      top: 610px !important;
      display: none !important;
    }

    &::before {
      content: '';
      background-image: url('../../../teste.svg');
      display: inline-block; /* Ensure the pseudo-element takes up space */
      width: 20px; /* Adjust the size as needed */
      height: 20px; /* Adjust the size as needed */
      opacity: 0.75;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .slick-list {
    width: 940px;
    right: 0;
    height: 400px;
    top: 0;
    margin-left: 300px;

    @media screen and (max-width: 1274px) {
      margin-left: 0px;
      width: 100%;
    }
  }

  .slider-container {
    overflow: none !important;

    .slider-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      justify-content: center;
      width: 297px;
      height: 400px;
      margin: 0 auto;
      position: relative;
      overflow: none !important;

      @media screen and (max-width: 500px) {
        width: 90%;
      }

      &:not(:last-child) {
        margin-right: 20px;
      }

      &.project-1 {
        border: 1px solid #a6fb98;
      }

      &.project-2 {
        border: 1px solid #a6fb98;
      }

      &.project-3 {
        border: 1px solid #a6fb98;
      }

      &.project-4 {
        border: 1px solid #a6fb98;
      }

      h1 {
        font-size: 26px;
      }

      p {
        margin: 24px 0px;
        text-align: center;
      }

      .background-image {
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; /* Mantém proporção da imagem */
        flex: 1;
        overflow: none !important;
      }

      .slider-date-wrapper {
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .date {
          font-size: 14px;
        }

        .button {
        }
      }

      .overlay {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: none;
        div {
          transition: 0.3s;
          width: 90%;
          text-align: center;
          padding: 0 10px;

          button {
            width: 100%;
            border: none;
            border-radius: 30px;
            padding: 10px 30px;
            display: inline-block;
            transition: 0.5s ease-out;
            color: #fff;
            background: transparent;
            display: block;
            width: 100%;
            max-width: 300px;
            margin: auto;
            font-weight: bold;
            cursor: pointer;
            height: 50px;
            border: 2px solid #fff;
            text-transform: uppercase;
            margin-top: 10px;

            &:hover {
              transition: 0.3s;
              scale: 1.1;
            }
          }
        }
      }
    }
  }
`;

export default SlickProjects;
