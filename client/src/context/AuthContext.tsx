import { createContext, useState, useContext, type ReactNode } from "react";
import { registerRequest, type RegisterUser } from '../api/auth';
import { type AxiosError } from 'axios';

interface User {
  num_cta: number;
  email: string;
  password: string;
  fecha_nacimiento: string;
}

// Definir el tipo para el contexto de autenticación
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signup: (user: RegisterUser) => Promise<void>;
  errors: string[];
}

// Valor inicial del contexto
const defaultAuthContext: AuthContextType = {
  user: null,
  isAuthenticated: false,
  errors: [],
  signup: async () => {},
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

  return (
    <AuthContext.Provider 
      value={{
        signup,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}