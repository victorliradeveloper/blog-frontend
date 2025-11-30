import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { MarkdownProps } from './types';
import { MarkdownContainer } from './MarkdownRenderer.styled';

const MarkdownRenderer: React.FC<MarkdownProps> = ({ children }) => {
  const contentArray = typeof children === 'string' ? [children] : (children as string[]);

  return (
    <MarkdownContainer>
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            const codeString = String(children).replace(/\n$/, '');

            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style={vscDarkPlus as any}
                language={language}
                PreTag="div"
                {...props}
              >
                {codeString}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {contentArray.join('\n')}
      </ReactMarkdown>
    </MarkdownContainer>
  );
};

export default MarkdownRenderer;
