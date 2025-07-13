'use client';
import styled from 'styled-components';

const StyledProfile = styled.div`
  margin: 0 auto;
  color: #fff;
  border-radius: 4px;
  margin: 0 auto;
  color: #b4b4b4;
  box-shadow: none;
  border-radius: 7px;
  text-align: center;
  padding-top: 186px;
  background: #000;
  min-height: 100vh;

  @media screen and (max-width: 700px) {
    padding-top: 186px;
  }
  .profile {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #111111;

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }

    .profile-information {
      padding: 10px;
      border-left: 2px solid #fff;
      max-width: 500px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 30px;

      @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: unset;
        width: 100%;
      }

      img {
        border-radius: 100%;
        margin-right: 50px;
        @media screen and (max-width: 600px) {
          margin-right: unset;
        }
      }

      .box {
        text-align: start;
        @media screen and (max-width: 600px) {
          text-align: center;
          margin-top: 20px;
        }
        .name {
          font-weight: 600;
          font-size: 23px;
        }
      }
    }

    .logout-box {
      @media screen and (max-width: 600px) {
        margin-top: 10px;
      }

      button {
        background: transparent;
        border: 2px solid #fff;
        padding: 5px 20px;
        border-radius: 4px;
        color: #fff;
        transition: 0.3s;
        font-size: 16px;
        cursor: pointer;

        &:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }
      }
    }
  }

  .favorit-post-title {
    font-size: 48px;
    background-size: 100%;
    background-image: linear-gradient(135deg, #80ffea 0%, #8aff80 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;

    @media screen and (max-width: 700px) {
      font-size: 26px;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 60px;
  }
`;

export default StyledProfile;
