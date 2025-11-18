import { StyledEmptyState } from './EmptyState.styled';
import { EmptyStateProps } from './types';
import Image from 'next/image';

const EmptyState = function ({ title, message, icon = '/error.png' }: EmptyStateProps) {
  return (
    <StyledEmptyState>
      <div className="icon-wrapper">
        <Image src={icon} alt="Empty state icon" width={60} height={60} />
      </div>
      <h1>{title}</h1>
      {message && <p>{message}</p>}
    </StyledEmptyState>
  );
};

export default EmptyState;

