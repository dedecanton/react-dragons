/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { signOut } from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase.config";

type Props = {
  children?: React.ReactNode;
};

const AuthContext = createContext({
  isLoggedIn: false,
  setUserToken: (token: string) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");

  return { token: storedToken };
};

const AuthProvider = ({ children }: Props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const [userIsLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    setIsLoggedIn(!!token);

    if (token === null) {
      return;
    }

    if (typeof token === "string") {
      localStorage.setItem("token", token);
    }
  }, [token]);

  const setUserToken = (token: string) => {
    setToken(token);
  };

  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("token");
    setToken(null);
    window.history.pushState({}, "", "/");
  };

  const authContextValue = {
    isLoggedIn: userIsLoggedIn,
    token,
    setUserToken,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
