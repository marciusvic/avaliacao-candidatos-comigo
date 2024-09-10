import React, {
    useState,
    useEffect,
    createContext,
    useContext,
    ReactNode,
  } from "react";
import { useNavigate } from "react-router-dom";
import { login as ApiLogin, register as ApiRegister } from "../services/api";
import Cookies from "js-cookie";
  
  interface AuthContextType {
    user: any;
    login: (
      email: string,
      password: string,
      navigate: (path: string) => void,
    ) => Promise<void>;
    register: (
      name: string,
      email: string,
      password: string,
      role: string,
      navigate: (path: string) => void,
    ) => Promise<void>;
    logout: (navigate: (path: string) => void) => void;
  }

  interface AuthProviderProps {
    children: ReactNode;
  }

  const AuthContext = createContext<AuthContextType | undefined>(undefined);

  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [authToken, setAuthToken] = useState<string | null>(null);
  
    useEffect(() => {
      const token = Cookies.get("authToken");
      if (token) {
        setAuthToken(token);
      }
    }, []);

    const login = async (
      email: string,
      password: string,
      navigate: (path: string) => void,
    ) => {
      try{
        const data = await ApiLogin({ email, password });
        const { user, token } = data;
        const { id, name, role } = user;
        Cookies.set("authToken", token);
        setUser({ id, name, role, email });
        setAuthToken(token);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };

    const register = async (
      name: string,
      email: string,
      password: string,
      role: string,
      navigate: (path: string) => void,
    ) => {
      try {
        const data = await ApiRegister({ name, email, password, role });
        const dataLogin = await ApiLogin({ email, password });
        const { token, user } = dataLogin;
        const { id } = user;
        Cookies.set("authToken", token);
        setUser({ id, name, role, email });
        setAuthToken(token);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };

    const logout = (navigate: (path: string) => void) => {
      Cookies.remove("authToken");
      setUser(null);
      setAuthToken(null);
      navigate("/login");
    };
  
    return (
      <AuthContext.Provider value={{ user, login, register, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };