import axios from './axios'

export interface RegisterUser {
  num_cta: number;
  email: string;
  password: string;
  fecha_nacimiento: string;
}

export const registerRequest = (user: RegisterUser) => axios.post(`/register`, user);

// Omitimos num_cta y fecha_nacimiento para el login
export const loginRequest = (user: Omit<RegisterUser, 'num_cta' | 'fecha_nacimiento'>) => axios.post(`/login`, user);

// Endpoint para verificar el token
export const verifyTokenRequest = async () => axios.get(`/verify`);