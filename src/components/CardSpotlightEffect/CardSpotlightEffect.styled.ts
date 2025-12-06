'use client';
import styled from 'styled-components';

interface SpotlightEffectProps {
  $opacity: number;
  $positionX: number;
  $positionY: number;
}

export const SpotlightContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;

export const SpotlightEffect = styled.div<SpotlightEffectProps>`
  pointer-events: none;
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  opacity: ${props => props.$opacity};
  transition: opacity 0.3s ease;
  z-index: 1;
  background: ${props =>
    `radial-gradient(600px circle at ${props.$positionX}px ${props.$positionY}px, rgba(255,255,255,.15), transparent 40%)`};
`;
