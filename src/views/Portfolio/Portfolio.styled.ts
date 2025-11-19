'use client';
import styled, { keyframes } from 'styled-components';

export const StyledPortfolio = styled.div`
  margin: 0 auto;
  background: #000;
`;

export const ContainerVh = styled.div`
  margin: 0 auto;
`;

export const Item = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
`;

export const MainItem = styled(Item)`
  /* height: calc(100vh - 86.5px); */
`;

export const Item3 = styled(Item)`
  height: 600px;
  margin-top: 100px;
  margin-bottom: 200px;

  @media screen and (max-width: 1274px) {
    margin-top: 200px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 250px;
  }

  @media screen and (max-width: 450px) {
    margin-top: 300px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 186px;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: rgba(7, 235, 176, 0.1);

  @media screen and (max-width: 767px) {
    width: 240px;
    height: 240px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(7, 235, 176, 0.3);
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
    z-index: 1;
  }
`;

export const CardImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 767px) {
    width: 170px;
    height: 170px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: -20px;
  margin-top: 15px;
`;

export const Name = styled.h1`
  margin-right: 10px;
  margin: 0 10px 0 0;
  padding: 0;
`;

export const ProfileH1 = styled.h1`
  margin: 50px auto;
  max-width: 42rem;
  font-size: 3rem;
  line-height: 1;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 1040px) {
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    max-width: 300px;
    line-height: 21px;
    font-weight: 500;
  }

  @media screen and (max-width: 400px) {
    font-size: 34px;
  }
`;

export const ProfileSpan1 = styled.span`
  font-size: 18px;
  letter-spacing: 4px;
  text-align: center;
  display: block;
`;

export const ProfileSpan2 = styled.span`
  font-size: 70px;
  line-height: 70px;
  font-weight: 700;
  background-size: 100%;
  background-image: linear-gradient(135deg, #80ffea 0%, #8aff80 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  display: block;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export const FormWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
`;

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 60px;
  margin-bottom: 20px;
  margin: 0 0 20px 0;
  padding: 0;

  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
`;

export const FormDescription = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    padding: 0 20px;
  }
`;

export const Form = styled.form`
  /* Form styles */
`;

export const FormBox1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FormBox2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FormBox3 = styled.div`
  /* Box 3 styles */
`;

interface FormControlProps {
  $width?: string;
}

export const FormControl = styled.div<FormControlProps>`
  padding: 10px 20px;
  text-align: start;
  width: ${props => props.$width || 'auto'};

  @media screen and (max-width: 800px) {
    padding: 5px 20px;
    width: 100%;
  }
`;

interface InputProps {
  $hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  border: ${props => (props.$hasError ? '1px solid red' : '1px solid #ccc')};
  background: ${props => (props.$hasError ? '#f9e8e8' : '#fff')};
  padding: 13px 20px;
  width: 100%;
  outline: none;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 7px;
  font-size: 16px;
  color: #333;

  @media screen and (max-width: 800px) {
    padding: 10px 20px;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea<InputProps>`
  border: ${props => (props.$hasError ? '1px solid red' : 'none')};
  background: ${props => (props.$hasError ? '#f9e8e8' : '#fff')};
  padding: 13px 20px;
  width: 100%;
  outline: none;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 7px;
  font-size: 16px;
  color: #333;
  height: 200px;
  resize: vertical;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  white-space: nowrap;
  text-transform: uppercase;
  display: block;
  margin-bottom: 5px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  border: 2px solid #fff;
  border-radius: 30px;
  padding: 10px 30px;
  display: block;
  width: 100%;
  max-width: 300px;
  margin: auto;
  font-weight: bold;
  cursor: pointer;
  height: 50px;
  text-transform: uppercase;
  color: #fff;
  background: transparent;
  transition: 0.5s ease-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const LoadingButton = styled.button`
  border: 2px solid #fff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: auto;
  font-weight: bold;
  height: 50px;
  text-transform: uppercase;
  color: #fff;
  background: transparent;
  cursor: not-allowed;
  padding: 0;

  img {
    width: 50px;
    height: 50px;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

export default StyledPortfolio;
