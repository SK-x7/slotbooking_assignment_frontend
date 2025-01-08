"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type UserContextType = {
  username: string|undefined;
  setUsername: (name: string|undefined) => void;
  isLoggedIn:boolean;
  setIsLoggedIn: (loggedInOrNot: boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string|undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  // useEffect(() => {
  //   // Safely fetch the username from localStorage on the client
  //   const storedUsername = localStorage.getItem("username") || "Username";
  //   setUsername(storedUsername);
  // }, [username]);
  
  
  // useEffect(() => {
  //   // Safely fetch the username from localStorage on the client
  //   const storedUsername = localStorage.getItem("username") || "Username";
  //   setUsername(storedUsername);
  // }, [username]);

  return (
    <UserContext.Provider value={{ username, setUsername,isLoggedIn,setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
