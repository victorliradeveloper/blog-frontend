import 'aos/dist/aos.css';
import React from 'react';
import { StyledAbout, Title, Description, DevTag } from './About.styled';

const About = function () {
  const DEV_TAG = '<dev>';

  return (
    <StyledAbout>
      <Title data-aos="fade-down" data-aos-delay="100">
        Articles
      </Title>
      <Description data-aos="fade-down" data-aos-delay="200">
        Web and Mobile Development and technology in articles! Updated and relevant content for you!{' '}
        <DevTag>{DEV_TAG}</DevTag>
      </Description>
    </StyledAbout>
  );
};

export default About;
