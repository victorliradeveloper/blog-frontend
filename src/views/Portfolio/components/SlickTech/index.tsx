import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import StyledSlickTech from './SlickTech.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlickTechProps } from './types';
import {
  CSS_ICON,
  HTML_ICON,
  JAVASCRIPT_ICON,
  NEXT_JS_ICON,
  REACT_JS_ICON,
  SASS_ICON,
  STYLED_COMPONENTS_ICON,
  TYPESCRIPT_ICON,
  JEST_ICON,
} from '@/constants/images';

const SlickTech = (props: SlickTechProps) => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <StyledSlickTech onClick={props.onClick}>
      <Slider {...settings}>
        <div className="slider-container">
          <div className="slider-box next">
            <Image
              loading="lazy"
              width={100}
              height={75}
              className="slide-image"
              src={NEXT_JS_ICON}
              alt="Next JS icon"
              data-tech="Next JS"
            />
            <p className="text">Next JS</p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box react">
            <Image
              loading="lazy"
              width={100}
              height={75}
              className="slide-image"
              src={REACT_JS_ICON}
              alt="React JS icon"
              data-tech="React JS"
            />
            <p className="text">React</p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box typescript">
            <Image
              loading="lazy"
              width={100}
              height={75}
              className="slide-image"
              src={TYPESCRIPT_ICON}
              alt="TypeScript icon"
              data-tech="TypeScript"
            />
            <p className="text">TypeScript</p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box javascript">
            <Image
              loading="lazy"
              width={100}
              height={75}
              className="slide-image"
              src={JAVASCRIPT_ICON}
              alt="JavaScript icon"
              data-tech="JavaScript"
            />
            <p className="text">JavaScript</p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box styled-components">
            <Image
              loading="lazy"
              width={100}
              height={75}
              className="slide-image"
              src={STYLED_COMPONENTS_ICON}
              alt="Styled components"
              data-tech="Styled Components"
            />
            <p className="text">Styled Components</p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box sass">
            <Image
              loading="lazy"
              width={100}
              height={75}
              className="slide-image"
              src={SASS_ICON}
              alt="Sass icon"
              data-tech="SASS"
            />
            <p className="text">SASS</p>
          </div>
        </div>

        <div className="slider-container">
          <div className="slider-box html">
            <Image
              loading="lazy"
              width={100}
              height={75}
              className="slide-image"
              src={HTML_ICON}
              alt="HTML icon"
              data-tech="HTML"
            />
            <p className="text">HTML</p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box css">
            <Image
              loading="lazy"
              width={100}
              height={75}
              className="slide-image"
              src={CSS_ICON}
              alt="CSS Icon"
              data-tech="CSS"
            />
            <p className="text">CSS</p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box css">
            <Image
              loading="lazy"
              width={100}
              height={75}
              className="slide-image"
              src={JEST_ICON}
              alt="Jest png"
              data-tech="Jest"
            />
            <p className="text">Jest</p>
          </div>
        </div>
      </Slider>
    </StyledSlickTech>
  );
};

export default SlickTech;
