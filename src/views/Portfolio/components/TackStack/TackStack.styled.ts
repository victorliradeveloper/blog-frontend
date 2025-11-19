'use client';
import styled from 'styled-components';

export const StyledTackStack = styled.div`
  color: #fff;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 16rem;
  margin-top: 5rem;
`;

export const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  white-space: nowrap;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #2d2d2d;
`;

export const HeaderText = styled.p`
  padding: 0 20px;
  font-size: 1.5rem;
  color: #b5b5b5;
  margin: 0;
`;

export const TechStackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

export const TechStackItem = styled.div`
  border: 2px solid #2d2d2d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(48, 44, 58, 0.3);
  transition: all 0.3s ease;
  padding: 0.5rem;

  &:hover {
    border-color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 12px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

export const TechStackImage = styled.div`
  border-radius: 10px;
  flex-shrink: 0;

  img {
    border-radius: 10px;
    width: 64px;
    height: 64px;

    @media (max-width: 768px) {
      width: 48px;
      height: 48px;
    }

    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const TechStackInfo = styled.div`
  flex: 1;
`;

export const TechStackName = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: #fff;
  margin: 0 0 5px 0;
  padding: 0;
`;

export const TechStackCategory = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
  padding: 0;
`;

export default StyledTackStack;
