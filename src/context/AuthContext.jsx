import React, { createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return <AuthContext value={{}}>{children}</AuthContext>;
};

export default AuthContext;
