'use client';
import styled from 'styled-components';

interface StyledFormModalProps {
  $isActive: boolean;
}

export const StyledFormModal = styled.div<StyledFormModalProps>`
  background: #fff;
  position: fixed;
  z-index: 10;
  border-radius: 4px;
  color: #000;
  padding: 20px;
  text-align: center;
  width: 600px;
  opacity: ${props => (props.$isActive ? 1 : 0)};
  visibility: ${props => (props.$isActive ? 'visible' : 'hidden')};
  right: 50%;
  top: 50%;
  transform: ${props =>
    props.$isActive ? 'translate(50%, -50%)' : 'translate(50%, -300%)'};
  transition: 0.5s;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const CheckIconWrapper = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 30px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h1`
  color: #444444;
  margin-top: 20px;
  margin: 20px 0 0 0;
  padding: 0;

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const Text1 = styled.p`
  margin-top: 20px;
  margin: 20px 0 0 0;
  padding: 0;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const Text2 = styled.p`
  margin: 0;
  padding: 0;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
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
`;

export default StyledFormModal;
