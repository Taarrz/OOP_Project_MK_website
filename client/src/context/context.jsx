import { useState, createContext } from "react";

const AuthContext = createContext();

export default function Auth() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return <AuthContext.Provider value={{ isAdmin, isLogin }} />;
}
