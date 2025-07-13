import React, { useState } from 'react';
import Slider from 'react-slick';
import StyledSlickTech from './SlickProjects.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlickProjectsProps } from './types';
import projects from '@/data/slider-projects.json';

const SlickProjects = (props: SlickProjectsProps) => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 634,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <StyledSlickTech onClick={props.onClick}>
      <div className="arrows-containers">
        <h1>Projetos</h1>
        <p>
          Aqui estão algumas das soluções que desenvolvi e implementei para empresas ao longo da
          minha trajetória profissional.
        </p>
      </div>
      <Slider {...settings}>
        {projects.projects.map(item => {
          return (
            <div className="slider-container" key={item.id}>
              <div className="slider-box project-1">
              <div className="background-image" style={{ backgroundImage: `url(${item.background})` }}></div>
                <div className="overlay">
                  <div>
                    <h1>{item.name}</h1>
                    <button>Em construção: 🚧</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </StyledSlickTech>
  );
};

export default SlickProjects;
