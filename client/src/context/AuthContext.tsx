import { createContext, useState, useContext, useEffect, type ReactNode } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth.ts';
import { type RegisterUser } from "@/types/registro";

import Cookies from 'js-cookie';

import { type AxiosError } from 'axios';
import { type User } from "@/types/user";
import { normalizeErrors } from "@/lib/utils";

// Definir el tipo para el contexto de autenticación
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signup: (user: RegisterUser, captchaToken: string) => Promise<boolean>;
  signin: (user: Omit<RegisterUser, 'num_cta' | 'fecha_nacimiento'>) => Promise<boolean>;
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
  signup: async () => false,
  signin: async () => false,
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

  const signup = async (user: RegisterUser, captchaToken: string) => {
    try {
      const res = await registerRequest({ ...user, captchaToken });
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
      alert("¡Registro exitoso!");
      return true;
    } catch (error) {
      console.log(error);
      const axiosError = error as AxiosError;
      // normalize convierte el array de errores del backend en un array de strings para mostrar en el frontend
      setErrors(normalizeErrors(axiosError.response?.data as string[]));
      return false;
    }
  }

  const signin = async (user: Omit<RegisterUser, 'num_cta' | 'fecha_nacimiento'>) => {
    try {
      setErrors([]);
      const res = await loginRequest(user);
      setIsAuthenticated(true);
      setUser(res.data);
      alert("¡Inicio de sesión exitoso!");
      return true;
    } catch (error) {
      const axiosError = error as AxiosError;
      // normalize convierte el array de errores del backend en un array de strings para mostrar en el frontend
      setErrors(normalizeErrors(axiosError.response?.data as string[]));
      return false;
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