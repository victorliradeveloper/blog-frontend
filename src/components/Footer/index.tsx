import {
  StyledFooter,
  IconsWrapper,
  IconGroup,
  IconWrapper,
  Copyright,
  CopyrightText,
  TechLink,
  Strong,
} from './Footer.styled';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { GITHUB_ICON, LINKEDIN_ICON } from '@/constants/images';
import { GITHUB_LINk, LINKEDIN_LINK, MYSQL_LINK, NEXT_LINK, NODE_LINK } from '@/constants/links';

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <StyledFooter data-aos="fade-down" data-aos-delay="100" data-aos-offset="0">
      <IconsWrapper>
        <Link href={GITHUB_LINk} target="_blank">
          <IconGroup>
            <IconWrapper>
              <Image loading="lazy" width={30} height={30} alt="GitHub" src={GITHUB_ICON} />
            </IconWrapper>
          </IconGroup>
        </Link>

        <Link href={LINKEDIN_LINK} target="_blank">
          <IconGroup>
            <IconWrapper>
              <Image loading="lazy" width={30} height={30} alt="LinkedIn" src={LINKEDIN_ICON} />
            </IconWrapper>
          </IconGroup>
        </Link>
      </IconsWrapper>

      <Copyright>
        <CopyrightText>
          All rights reserved © {getCurrentYear()} <Strong>Victor Lira</Strong>
        </CopyrightText>
        <CopyrightText>
          Blog built with{' '}
          <TechLink href={NEXT_LINK} target="_blank" rel="noopener noreferrer">
            <Strong>Next.js</Strong>
          </TechLink>
          ,{' '}
          <TechLink href={NODE_LINK} target="_blank" rel="noopener noreferrer">
            <Strong>Node</Strong>
          </TechLink>{' '}
          and{' '}
          <TechLink href={MYSQL_LINK} target="_blank" rel="noopener noreferrer">
            <Strong>MySQL</Strong>
          </TechLink>
        </CopyrightText>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
