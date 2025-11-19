import React from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownProps } from './types';
import { MarkdownContainer } from './MarkdownRenderer.styled';

const MarkdownRenderer: React.FC<MarkdownProps> = ({ children }) => {
  const contentArray = typeof children === 'string' ? [children] : (children as string[]);

  return (
    <MarkdownContainer>
      <ReactMarkdown>{contentArray.join('\n')}</ReactMarkdown>
    </MarkdownContainer>
  );
};

export default MarkdownRenderer;
