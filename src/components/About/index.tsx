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
        Artigos
      </h1>
      <p data-aos="fade-down" data-aos-delay="200">
        Desenvolvimento WEB e Mobile e tecnologia em artigos! Conteúdo atualizado e relevante para
        você! <span>{returnDevText()}</span>
      </p>
    </StyledAbout>
  );
};

export default About;
