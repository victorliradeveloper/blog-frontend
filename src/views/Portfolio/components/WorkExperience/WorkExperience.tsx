import { useEffect, useState } from 'react';
import {
  StyledWorkExperience,
  ExperienceHeader,
  Line,
  HeaderText,
  Tabs,
  TabButton,
  Content,
  ExperiencesContainer,
  ExperienceWrapper,
  LogoWrapper,
  ExperienceContent,
  ExperienceHeaderInfo,
  ExperienceTitle,
  ExperiencePeriod,
  AchievementsList,
  AchievementItem,
} from './WorkExperience.styled';
import Image from 'next/image';
import workExperienceData from '@/data/work-experience.json';
import educationData from '@/data/education.json';
import AOS from 'aos';

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  logo: string;
  achievements: string[];
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  logo: string;
  achievements: string[];
}

function WorkExperience() {
  const [currentDisplay, setCurrentDisplay] = useState('work');

  function toggleDisplay(arg: string) {
    setCurrentDisplay(arg);
  }

  useEffect(() => {
    AOS.refreshHard();
  }, [currentDisplay]);

  return (
    <StyledWorkExperience>
      <ExperienceHeader>
        <Line />
        <HeaderText>Experience</HeaderText>
        <Line />
      </ExperienceHeader>

      <Tabs>
        <TabButton $isActive={currentDisplay === 'work'} onClick={() => toggleDisplay('work')}>
          Carrer
        </TabButton>
        <TabButton
          $isActive={currentDisplay === 'education'}
          onClick={() => toggleDisplay('education')}
        >
          Education
        </TabButton>
      </Tabs>

      <Content>
        {currentDisplay === 'work' && (
          <ExperiencesContainer>
            {workExperienceData.map((experience: WorkExperience) => (
              <ExperienceWrapper key={experience.id}>
                <LogoWrapper>
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={64}
                    height={64}
                  />
                </LogoWrapper>
                <ExperienceContent>
                  <ExperienceHeaderInfo>
                    <ExperienceTitle>
                      {experience.position} @ {experience.company}
                    </ExperienceTitle>
                    <ExperiencePeriod>{experience.period}</ExperiencePeriod>
                  </ExperienceHeaderInfo>
                  <AchievementsList>
                    {experience.achievements.map((achievement, index) => (
                      <AchievementItem key={index}>{achievement}</AchievementItem>
                    ))}
                  </AchievementsList>
                </ExperienceContent>
              </ExperienceWrapper>
            ))}
          </ExperiencesContainer>
        )}

        {currentDisplay === 'education' && (
          <ExperiencesContainer>
            {educationData.map((education: Education) => (
              <ExperienceWrapper key={education.id}>
                <LogoWrapper>
                  <Image
                    src={education.logo}
                    alt={`${education.institution} logo`}
                    width={64}
                    height={64}
                  />
                </LogoWrapper>
                <ExperienceContent>
                  <ExperienceHeaderInfo>
                    <ExperienceTitle>
                      {education.degree} @ {education.institution}
                    </ExperienceTitle>
                    <ExperiencePeriod>{education.period}</ExperiencePeriod>
                  </ExperienceHeaderInfo>
                  <AchievementsList>
                    {education.achievements.map((achievement, index) => (
                      <AchievementItem key={index}>{achievement}</AchievementItem>
                    ))}
                  </AchievementsList>
                </ExperienceContent>
              </ExperienceWrapper>
            ))}
          </ExperiencesContainer>
        )}
      </Content>
    </StyledWorkExperience>
  );
}

export default WorkExperience;
