import { StyledSlickTech, StyledSlickTechWrapper } from './TechModal.styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IModalProps } from './types';
import { CLOSE_MODAL_ICON } from '@/constants/images';

const TechModal = function (props: IModalProps) {
  const [fadeDownOnLoad, setFadeDownOnLoad] = useState(false);

  const onCloseModalHandler = function () {
    props.closeModal();
  };

  useEffect(() => {
    setFadeDownOnLoad(true);
  }, []);

  return (
    <StyledSlickTechWrapper className={props.className}>
      <StyledSlickTech className={`${props.className} ${fadeDownOnLoad ? 'onDomLoad' : ''} `}>
        <div className="error-box" onClick={onCloseModalHandler}>
          <Image
            className="error-icon"
            width={50}
            height={50}
            src={CLOSE_MODAL_ICON}
            alt="Error icon"
            data-aos="fade-down"
          />
        </div>
        <h1 data-aos="fade-down">{props.techName}</h1>
        <p className="tech-documentation">{props.techDescription}</p>
        <a
          className="documentation-anchor"
          href={props.techLink}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-down"
        >
          Documentação oficial
        </a>
      </StyledSlickTech>
    </StyledSlickTechWrapper>
  );
};

export default TechModal;
