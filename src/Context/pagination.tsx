'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';
import React from 'react';

type ContextProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
};

export const GlobalContext = createContext<ContextProps>({
  page: 1,
  setPage: (): number => 1,
  totalPages: 1,
  setTotalPages: (): number => 1,
});

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <GlobalContext.Provider value={{ page, setPage, totalPages, setTotalPages }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
