import React, { useState } from "react";

const AuthContext = React.createContext({
  loggedIn: false,
  Login: () => {},
  Logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const Login = () => {
    setLoggedIn(true);
  };

  const Logout = () => {
    setLoggedIn(false);
  };

  // register method will made soon

  return (
    <AuthContext.Provider value={{ loggedIn, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
