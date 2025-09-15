import 'aos/dist/aos.css';
import StyledAbout from './About.styled';
import React from 'react';

const About = function () {
  function returnDevText() {
    return '<dev>';
  }

  return (
    <StyledAbout style={{ background: '#000' }}>
      <h1 data-aos="fade-down" data-aos-delay="100">
        Articles
      </h1>
      <p data-aos="fade-down" data-aos-delay="200">
        Web and Mobile Development and technology in articles! Updated and relevant content for you!{' '}
        <span>{returnDevText()}</span>
      </p>
    </StyledAbout>
  );
};

export default About;
