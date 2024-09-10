import React, {
    useState,
    useEffect,
    createContext,
    useContext,
    ReactNode,
  } from "react";
  import Cookies from "js-cookie";
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authToken, setAuthToken] = useState<string | null>(null);
  
    useEffect(() => {
      const token = Cookies.get("authToken");
      if (token) {
        setAuthToken(token);
      }
    }, []);
  
    return <>{children}</>;
  };
  