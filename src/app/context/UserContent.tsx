"use client";
import React, { createContext, useContext, useState } from 'react';

interface UserData {
  username: string;
  userEmail: string;
}

interface UserContextType {
  userData: UserData;
  setUserData: (userData: UserData) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<({ children: React.ReactNode })> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({
    username: 'saiful',
    userEmail: 'saiful@gmail.com',
  });

  const value = {
    userData,
    setUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
