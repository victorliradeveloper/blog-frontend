import React from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownProps } from './types';

const MarkdownRenderer: React.FC<MarkdownProps> = ({ children }) => {
  const contentArray = typeof children === 'string' ? [children] : (children as string[]);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{contentArray.join('\n')}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
