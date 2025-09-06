import styled from 'styled-components';

const StyledWorkExperience = styled.div`
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;

  .experience-header {
    display: flex;
    align-items: center;

    .line-left,
    .line-right {
      width: 100%;
      height: 2px;
      background: #fff;
    }
    p {
      padding: 0 20px;
      font-size: 1.5rem;
    }
  }
`;

export default StyledWorkExperience;
