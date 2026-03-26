import { createContext, useState, useContext, useEffect, type ReactNode } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth';
import { type RegisterUser } from "@/types/registro";

import Cookies from 'js-cookie';

import { type AxiosError } from 'axios';
import { type User } from "@/types/user";

// Definir el tipo para el contexto de autenticación
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signup: (user: RegisterUser) => Promise<void>;
  signin: (user: Omit<RegisterUser, 'num_cta' | 'fecha_nacimiento'>) => Promise<void>;
  logout: () => void;
  errors: string[];
  loading: boolean;
}

// Valor inicial del contexto
const defaultAuthContext: AuthContextType = {
  user: null,
  isAuthenticated: false,
  errors: [],
  loading: true,
  signup: async () => {},
  signin: async () => {},
  logout: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user: RegisterUser) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
      alert("¡Registro exitoso!");
    } catch (error) {
      //console.log(error);
      const axiosError = error as AxiosError;
      setErrors(axiosError.response?.data as string[]);
    }
  }

  const signin = async (user: Omit<RegisterUser, 'num_cta' | 'fecha_nacimiento'>) => {
    try {
      const res = await loginRequest(user);
      //console.log(res)
      setIsAuthenticated(true);
      setUser(res.data);
      alert("¡Inicio de sesión exitoso!");
    } catch (error) {
      const axiosError = error as AxiosError;
      setErrors(axiosError.response?.data as string[]);
    }
  }

  const logout = async () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  }

  // Limpiar errores después de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);



  // Comprobamos que exista una cookie para las peticiones autenticadas
  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        return;
      }

      try{
        const res = await verifyTokenRequest();

        if(!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);

      } catch(error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    } checkLogin();
  }, []);

  const value = {
    signup,
    signin,
    logout,
    user,
    isAuthenticated,
    errors,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}