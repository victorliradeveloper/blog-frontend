import styled from 'styled-components';

const StyledTackStack = styled.div`
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
    white-space: nowrap;

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

  .tech-stack-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;

    .tech-stack-item {
      border: 2px solid #2d2d2d;
      border-radius: 10px;
      padding: 15px;
      display: flex;
      align-items: center;
      gap: 15px;
      background: rgba(48, 44, 58, 0.3);
      transition: all 0.3s ease;

      &:hover {
        border-color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
      }

      img {
        border-radius: 10px;
        flex-shrink: 0;
      }

      div {
        flex: 1;

        p:first-child {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 5px;
          color: #fff;
        }

        p:last-child {
          font-size: 0.9rem;
          color: #ccc;
        }
      }
    }
  }

  // Responsividade
  @media (max-width: 768px) {
    .tech-stack-container {
      grid-template-columns: 1fr;
      gap: 0.8rem;

      .tech-stack-item {
        padding: 12px;
        gap: 12px;

        img {
          width: 48px;
          height: 48px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .tech-stack-container {
      .tech-stack-item {
        flex-direction: column;
        text-align: center;
        gap: 10px;

        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

export default StyledTackStack;
