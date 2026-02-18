'use client';
import styled from 'styled-components';

export const StyledWorkExperience = styled.div`
  color: #fff;
  max-width: 880px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 16rem;
  margin-top: 5rem;
`;

export const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 880px;
  margin: 0 auto;
  background: #18161d;
  border-radius: 15px;
  padding: 8px;
  height: 60px;
  border: 2px solid #2d2d2d;
`;

interface TabButtonProps {
  $isActive: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  width: 100%;
  cursor: pointer;
  border-radius: 15px;
  background: ${props => (props.$isActive ? '#302c3a' : 'none')};
  border: none;
  color: #fff;
  height: 100%;
  font-size: 18px;
  font-weight: 700;
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const ExperiencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px;
  background: rgba(48, 44, 58, 0.3);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 500px){
  flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;
  border: 2px solid #2d2d2d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 5px;

  img {
    border-radius: 100%;
  }
`;

export const ExperienceContent = styled.div`
  flex: 1;
`;

export const ExperienceHeaderInfo = styled.div`
  margin-bottom: 15px;
`;

export const ExperienceTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 5px 0;
  padding: 0;
`;

export const ExperiencePeriod = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
  padding: 0;
`;

export const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AchievementItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  line-height: 1.6;

  &::before {
    content: '•';
    color: #fff;
    position: absolute;
    left: 0;
  }
`;

export default StyledWorkExperience;
