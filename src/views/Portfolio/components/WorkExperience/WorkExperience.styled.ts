import styled from 'styled-components';

const StyledWorkExperience = styled.div`
  color: #fff;
  max-width: 880px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 16rem;
  margin-top: 5rem;

  .experience-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .line-left,
    .line-right {
      width: 100%;
      height: 2px;
      background: #2d2d2d;
    }
    p {
      padding: 0 20px;
      font-size: 1.5rem;
      color: #b5b5b5;
    }
  }

  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 880px;
    margin: 0 auto;
    background: #18161d;
    border-radius: 15px;
    padding: 8px;
    height: 60px;
    border: 2px solid #2d2d2d;

    button {
      width: 100%;
      cursor: pointer;
      border-radius: 15px;
      background: none;
      border: none;
      color: #fff;
      height: 100%;
      font-size: 18px;
      font-weight: 700;

      &.active {
        background: #302c3a;
      }
    }
  }

  .content {
    margin-top: 20px;
  }

  .work-experiences {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .work-wrapper {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    padding: 20px;
    background: rgba(48, 44, 58, 0.3);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .work-logo {
    flex-shrink: 0;
    border: 2px solid #2d2d2d;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: 5px;
    img {
      border-radius: 100%;
    }
  }

  .work-content {
    flex: 1;
  }

  .work-header {
    margin-bottom: 15px;

    p:first-child {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 5px;
    }

    p:last-child {
      font-size: 0.9rem;
      color: #ccc;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;
      line-height: 1.6;

      &::before {
        content: '•';
        color: #fff;
        position: absolute;
        left: 0;
      }
    }
  }

  .education-experiences {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .education-wrapper {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    padding: 20px;
    background: rgba(48, 44, 58, 0.3);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .education-logo {
    flex-shrink: 0;
    border: 2px solid #2d2d2d;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: 5px;

    img {
      border-radius: 100%;
    }
  }

  .education-content {
    flex: 1;
  }

  .education-header {
    margin-bottom: 15px;

    p:first-child {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 5px;
    }

    p:last-child {
      font-size: 0.9rem;
      color: #ccc;
    }
  }
`;

export default StyledWorkExperience;
