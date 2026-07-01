import React, { useContext, useState } from "react";

const AuthContext = React.createContext;

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(!!user);
  }, [user]);

  const value = {
    user,
    setUser,
    isLogin,
    setIsLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth = () =>  useContext(AuthContext);

export default AuthContext;
