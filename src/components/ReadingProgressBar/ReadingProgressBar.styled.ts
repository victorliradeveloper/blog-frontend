import styled from 'styled-components';

export const ReadingProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: transparent;
  z-index: 9999;
  pointer-events: none;

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #06eeb2 0%, rgb(87, 244, 202) 100%);
    transition: width 0.05s linear;
    box-shadow: 0 0 10px rgba(6, 238, 178, 0.5);
    will-change: width;
  }
`;

