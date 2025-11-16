import { useEffect, useState } from 'react';
import StyledWorkExperience from './WorkExperience.styled';
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
      <div className="experience-header">
        <div className="line-left"></div>
        <p>Experience</p>
        <div className="line-right"></div>
      </div>

      <div className="tabs">
        <button
          className={currentDisplay === 'work' ? 'active' : ''}
          onClick={() => toggleDisplay('work')}
        >
          Carrer
        </button>
        <button
          className={currentDisplay === 'education' ? 'active' : ''}
          onClick={() => toggleDisplay('education')}
        >
          Education
        </button>
      </div>

      <div className="content">
        {currentDisplay === 'work' && (
          <div className="work-experiences">
            {workExperienceData.map((experience: WorkExperience) => (
              <div key={experience.id} className="work-wrapper">
                <div className="work-logo">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="work-content">
                  <div className="work-header">
                    <p>
                      {experience.position} @ {experience.company}
                    </p>
                    <p>{experience.period}</p>
                  </div>
                  <ul>
                    {experience.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {currentDisplay === 'education' && (
          <div className="education-experiences">
            {educationData.map((education: Education) => (
              <div key={education.id} className="education-wrapper">
                <div className="education-logo">
                  <Image
                    src={education.logo}
                    alt={`${education.institution} logo`}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="education-content">
                  <div className="education-header">
                    <p>
                      {education.degree} @ {education.institution}
                    </p>
                    <p>{education.period}</p>
                  </div>
                  <ul>
                    {education.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledWorkExperience>
  );
}

export default WorkExperience;
