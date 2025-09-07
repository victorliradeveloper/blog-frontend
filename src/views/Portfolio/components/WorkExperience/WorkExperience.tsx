import { useState } from 'react';
import StyledWorkExperience from './WorkExperience.styled';
import Image from 'next/image';
import { HEART_WHITE } from '@/constants/images';

function WorkExperience() {
  const [currentDisplay, setCurrentDisplay] = useState('work');

  function toggleDisplay(arg: string) {
    setCurrentDisplay(arg);
  }

  return (
    <StyledWorkExperience>
      <div className="experience-header">
        <div className="line-left"></div>
        <p>Experiência</p>
        <div className="line-right"></div>
      </div>

      <div className="tabs">
        <button
          className={currentDisplay === 'work' ? 'active' : ''}
          onClick={() => toggleDisplay('work')}
        >
          Work
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
          <div className="work-wrapper">
            <Image src={HEART_WHITE} alt="work" width={64} height={64} />
            <div className='work-content'>
              <div className='work-header'>
                <p>Software Engineer @ Wine</p>
                <p>Oct 2023 - Present</p>
              </div>
              <ul>
                <li>
                  Optimized a geolocation microservice by applying classification algorithms and
                  caching, increasing accuracy by 95% and reducing costs by 50%.
                </li>
                <li>
                  Optimized a geolocation microservice by applying classification algorithms and
                  caching, increasing accuracy by 95% and reducing costs by 50%.
                </li>
                <li>
                  Optimized a geolocation microservice by applying classification algorithms and
                  caching, increasing accuracy by 95% and reducing costs by 50%.
                </li>
                <li>
                  Optimized a geolocation microservice by applying classification algorithms and
                  caching, increasing accuracy by 95% and reducing costs by 50%.
                </li>
                <li>
                  Optimized a geolocation microservice by applying classification algorithms and
                  caching, increasing accuracy by 95% and reducing costs by 50%.
                </li>
              </ul>
            </div>
          </div>
        )}
        {currentDisplay === 'education' && <p>Education</p>}
      </div>
    </StyledWorkExperience>
  );
}

export default WorkExperience;
