import React, { createContext, useContext, ReactNode, useState } from 'react';

type IGoogleSignInContext = {
  setCurrentUser: (a: { picture: string }) => void;
  currentUser: { picture: string };
};

const GoogleSignInContext = createContext<IGoogleSignInContext | undefined>(undefined);

export const GoogleSignInProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState({
    picture: '',
  });

  return (
    <GoogleSignInContext.Provider value={{ setCurrentUser, currentUser }}>
      {children}
    </GoogleSignInContext.Provider>
  );
};

export const useGoogleSignInContext = () => {
  const context = useContext(GoogleSignInContext);
  if (context === undefined) {
    throw new Error('useGoogleSignInContext must be used within an GoogleSignInProvider');
  }
  return context;
};
