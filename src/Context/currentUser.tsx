import React, { createContext, useContext, ReactNode, useState } from 'react';

type CurrentUser = {
  name: string;
  picture: string;
  email: string;
};

const initialValue = {
  name: '',
  picture: '',
  email: '',
};

type CurrentUserContextProps = {
  callSetCurrentUser: (a: CurrentUser) => void;
  currentUser: CurrentUser;
};

const CurrentUserContext = createContext<CurrentUserContextProps | undefined>(undefined);

export const useCurrentUser = (): CurrentUserContextProps => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider');
  }
  return context;
};

type CurrentUserProps = {
  children: ReactNode;
};

export const CurrentUserProvider: React.FC<CurrentUserProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(initialValue);

  const callSetCurrentUser = (user: CurrentUser) => {
    setCurrentUser(user);
  };

  const contextValue: CurrentUserContextProps = {
    callSetCurrentUser,
    currentUser,
  };

  return <CurrentUserContext.Provider value={contextValue}>{children}</CurrentUserContext.Provider>;
};
