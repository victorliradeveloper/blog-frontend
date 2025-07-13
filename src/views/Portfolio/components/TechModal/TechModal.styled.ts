import styled from 'styled-components';

export const StyledSlickTech = styled.div`
  background: white;
  position: fixed;
  z-index: 20;
  color: #000;
  padding: 20px;
  text-align: center;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  width: 600px;
  top: 200px;
  right: 50%;
  top: 50%;
  transform: translate(50%, -250%) !important;

  &.onDomLoad {
    transform: translateY(-100%);
    transition: 0.5s;
  }

  @media screen and (max-width: 1035px) {
    right: 50%;
    top: 50%;
    transform: translate(50%, -113%) !important;
  }

  @media screen and (max-width: 640px) {
    width: 90%;
  }

  &.active {
    position: fixed;
    transform: translateY(0%);
    opacity: 1;
    transition: 0.5s;
    visibility: visible;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%) !important;

    @media screen and (max-width: 1035px) {
      right: 50%;
      top: 50%;
      transform: translate(50%, -50%) !important;
    }
  }

  h1 {
    line-height: 30px;
  }

  .error-box {
    padding: 20px;
    position: absolute;
    right: -10px;
    top: -10px;
    display: flex;
    align-items: center;
    justify-content: center;

    .error-icon {
      min-width: 30px;
      min-height: 30px;
      max-width: 30px;
      max-height: 30px;
      cursor: pointer;
    }
  }

  .tech-documentation {
    margin: 20px 0;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
  .documentation-anchor {
    background: #6449ff;
    padding: 5px 10px;
    border-radius: 6px;
    color: #fff;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      background: #4730c9;
    }

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

export const StyledSlickTechWrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 1400px;
  height: 100vh;
  visibility: hidden;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  @media screen and (max-width: 1035px) {
    right: 50%;
  }

  @media screen and (max-width: 1286px) {
    width: 100vw;
    height: 100vh;

    &.active {
      display: block;
      visibility: visible;
    }
  }
`;
