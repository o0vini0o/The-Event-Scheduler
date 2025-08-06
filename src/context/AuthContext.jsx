import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(() => {
    const authToken = localStorage.getItem("token");
    if (authToken) setIsLogIn(true);
  }, []);

  const logout = () => {
    setIsLogIn(false);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext value={{ isLogIn, setIsLogIn, logout }}>
      {children}
    </AuthContext>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "useAuth muss innerhalb eines AuthProvider verwendet werden!"
    );
  return context;
};
