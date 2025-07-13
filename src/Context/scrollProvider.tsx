import React, { createContext, useContext, useRef, ReactNode } from 'react';

type ScrollContextProps = {
  scrollIntoViewHandler: () => void;
  containerRef: React.RefObject<HTMLElement>;
};

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const useScrollContext = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

type ScrollProviderProps = {
  children: ReactNode;
};

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const containerRef = useRef<HTMLElement>(null);

  const scrollIntoViewHandler = () => {
    const container = containerRef.current;

    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contextValue: ScrollContextProps = {
    scrollIntoViewHandler,
    containerRef,
  };

  return <ScrollContext.Provider value={contextValue}>{children}</ScrollContext.Provider>;
};
