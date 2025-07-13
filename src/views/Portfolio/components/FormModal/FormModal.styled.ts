import styled from 'styled-components';

const StyledFormModal = styled.div`
  background: #fff;
  position: fixed;
  z-index: 10;
  border-radius: 4px;
  color: #000;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  width: 600px;
  opacity: 0;
  top: 200px;
  right: 50%;
  top: 50%;
  transform: translate(50%, -300%);
  transition: 0.5s;

  @media screen and (max-width: 768px) {
    width: 95%;
  }

  &.active {
    position: fixed;
    transform: translateY(0%);
    opacity: 1;
    transition: 0.5s;
    visibility: visible;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
  }

  .check-icon {
    width: 100px;
    height: auto;

    @media screen and (max-width: 500px) {
      width: 30px;
    }
  }

  h1 {
    color: #444444;
    margin-top: 20px;

    @media screen and (max-width: 500px) {
      font-size: 20px;
      margin-top: 10px;
    }
  }

  p {
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }

  .text-1 {
    margin-top: 20px;
    @media screen and (max-width: 500px) {
      margin-top: 10px;
    }
  }

  button {
    background: #00cd6b;
    color: #fff;
    font-size: 20px;
    padding: 10px 40px;
    border: none;
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.2s;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }

    &:hover {
      background: #00b25d;
    }
  }
`;

export default StyledFormModal;
