import { StyledEmptyState, IconWrapper, Title, Message } from './EmptyState.styled';
import { EmptyStateProps } from './types';
import Image from 'next/image';

const EmptyState = function ({ title, message, icon = '/error.png' }: EmptyStateProps) {
  return (
    <StyledEmptyState>
      <IconWrapper>
        <Image src={icon} alt="Empty state icon" width={60} height={60} />
      </IconWrapper>
      <Title>{title}</Title>
      {message && <Message>{message}</Message>}
    </StyledEmptyState>
  );
};

export default EmptyState;
