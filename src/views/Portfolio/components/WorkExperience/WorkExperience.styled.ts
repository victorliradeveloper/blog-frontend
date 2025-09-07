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

    button{
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
    padding: 16px;
    border: 2px solid #2d2d2d;
    border-radius: 15px;
    margin-top: 1rem;

    .work-wrapper {
      display: flex;
      gap: 1rem;

      .work-content  {
        padding-left: 1rem;
        .work-header {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: .5rem;
        }

        ul {
          li {
            color: #ccc;
          }
        }
      }
    }
  }
`;

export default StyledWorkExperience;
