import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  margin: 0 auto;
  z-index: 3;
  background: #000;
  position: fixed;
  width: 100vw;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    overflow: auto;
  }

  .container {
    margin: 0 auto;
    max-width: 1200px;
    color: #ffffff;
    padding: 20px;
    background: #000;

    nav {
      width: 100%;
      display: flex;

      @media screen and (max-width: 700px) {
        justify-content: space-between;
      }

      .header-icon {
        width: 34px;
        margin-right: 15px;
        cursor: pointer;
      }

      .menu-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        width: 100%;

        @media screen and (max-width: 700px) {
          transition: 0.5s;
        }

        &.active {
          left: 0px;

          @media screen and (max-width: 700px) {
            transition: 0.5s;
            padding: 70px 20px;
          }
        }

        .close {
          width: 20px;
          position: absolute;
          top: 40px;
          right: 20px;
          display: none;
          z-index: 555;

          @media screen and (max-width: 700px) {
            display: block;
            top: 20px;
          }
        }

        @media screen and (max-width: 700px) {
          background: #000;
          position: fixed;
          left: -100%;
          top: 0;
          bottom: 0;
          height: 100vh;
          width: 100vw;
          flex-direction: column-reverse;
          justify-content: flex-end;
        }

        .div-left {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 8px;

          > div {
            @media screen and (max-width: 700px) {
              display: flex;
              flex-direction: column;
            }
          }

          .home {
            height: 40px;
            margin-bottom: 15px;

            &.active {
              border-bottom: 3px solid rgb(11, 238, 178);
              padding-bottom: 6px;
            }
          }

          .search-wrapper {
            display: flex;

            @media screen and (max-width: 700px) {
              flex-direction: row-reverse;
              justify-content: flex-end;
            }

            .search-icon {
              border: 2px solid #07ebb0;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 100%;
              margin-right: 30px;
              cursor: pointer;

              @media screen and (max-width: 700px) {
                margin-right: 0px;
                margin-left: 30px;
              }
            }

            .google-wrapper {
              height: auto;
              position: relative;
              .profile {
                border: 2px solid #fff;
                padding: 5px 20px;
                border-radius: 4px;
                color: #fff;
                transition: 0.3s;
                position: relative;
                top: 8px;

                &:hover {
                  background-color: rgba(255, 255, 255, 0.4);
                }
              }
            }
          }

          @media screen and (max-width: 700px) {
            flex-direction: column;
            min-width: 87%;
          }

          .menu {
            margin-right: 30px;
            margin-left: 30px;
            display: flex;
            height: 40px;
            list-style: none;

            @media screen and (max-width: 700px) {
              height: auto;
            }

            @media screen and (max-width: 700px) {
              flex-direction: column;
              margin: 0;
            }

            li {
              height: 40px;
              padding-bottom: 6px;
              @media screen and (max-width: 700px) {
                margin-bottom: 15px;
              }

              &.web-option {
                height: 40px;
                margin-bottom: 15px;
                &.active {
                  border-bottom: 3px solid rgb(11, 238, 178);
                  padding-bottom: 6px;
                }
              }

              &.react-option {
                height: 40px;
                margin-bottom: 15px;
                &.active {
                  border-bottom: 3px solid rgb(11, 238, 178);
                  padding-bottom: 6px;
                }
              }

              &.mobile-option {
                height: 40px;
                margin-bottom: 15px;
                &.active {
                  border-bottom: 3px solid rgb(11, 238, 178);
                  padding-bottom: 6px;
                }
              }

              &.others-option {
                height: 40px;
                margin-bottom: 15px;
                &.active {
                  border-bottom: 3px solid rgb(11, 238, 178);
                  padding-bottom: 6px;
                }
              }

              &:not(:last-child) {
                margin-right: 30px;
              }

              &.anchor {
                color: #fff;
                height: 40px;

                a {
                  color: #fff;
                }

                &.active {
                  border-bottom: 3px solid #0beeb2;
                  padding-bottom: 6px;
                  height: 40px;
                }
              }

              &.anchor.active {
                border-bottom: 3px solid #0beeb2;
                padding-bottom: 6px;
                height: 40px;
              }
            }
          }

          .anchor {
            color: #fff;
            height: 40px;

            @media screen and (max-width: 700px) {
              margin-bottom: 15px;

              &:first-child {
                margin-bottom: 40px;
              }
            }
          }

          cursor: pointer;

          a {
            text-decoration: none;

            &:hover {
              color: #c5c5c5;
            }

            @media screen and (max-width: 700px) {
              &:hover {
                color: #fff;
              }
            }
          }
        }

        .anchor {
        }
      }

      .menu-hamburguer {
        display: none;

        @media screen and (max-width: 700px) {
          display: block;
          width: 30px;
          height: 20px;
          margin-top: 8px;
        }
      }
    }
  }
`;

export default StyledHeader;
