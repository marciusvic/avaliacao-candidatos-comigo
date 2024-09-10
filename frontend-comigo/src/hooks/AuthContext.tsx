import React, {useState, useEffect, createContext, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { login as ApiLogin, register as ApiRegister, getUserByToken } from "../services/api";
import Cookies from "js-cookie";

interface AuthContextType {
  user: any;
  login: (
    email: string,
    password: string,
    navigate: (path: string) => void
  ) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    role: string,
    navigate: (path: string) => void
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

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("authToken");

    if (token) {
      setAuthToken(token);

      const fetchUser = async () => {
        try {
          const userData = await getUserByToken(token);
          setUser(userData.user);
        } catch (error) {
          console.error("Erro ao recuperar o usuário pelo token:", error);
          logout(navigate);
        }
      };

      fetchUser();
    }
  }, [navigate]);

  const login = async (
    email: string,
    password: string,
    navigate: (path: string) => void
  ) => {
    try {
      const data = await ApiLogin({ email, password });
      const { user, token } = data;

      Cookies.set("authToken", token);
      setAuthToken(token);

      setUser(user);

      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    role: string,
    navigate: (path: string) => void
  ) => {
    try {
      const data = await ApiRegister({ name, email, password, role });
      const dataLogin = await ApiLogin({ email, password });
      const { token, user } = dataLogin;

      Cookies.set("authToken", token);
      setAuthToken(token);
      setUser(user);

      navigate("/");
    } catch (error) {
      console.error("Erro ao registrar:", error);
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
