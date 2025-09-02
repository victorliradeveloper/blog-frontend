import styled from 'styled-components';

export const StyledLoginAlertModal = styled.div`
  width: 400px;
  height: 230px;
  background: #434242;
  position: fixed;
  z-index: 10;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  padding: 20px;
  color: #fff;

  @media screen and (max-width: 501px) {
    width: 90%;
    height: 210px;
  }

  h1 {
    font-size: 20px;
    text-align: center;

    @media screen and (max-width: 501px) {
      font-size: 16px;
    }

    &.txt-2 {
      margin-bottom: 50px;
      @media screen and (max-width: 501px) {
        font-size: 16px;
      }
    }
  }

  .close-modal {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 70px;
    height: 70px;
    cursor: pointer;
    padding: 20px;
  }
`;
