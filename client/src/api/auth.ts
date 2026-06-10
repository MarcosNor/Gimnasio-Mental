import axios from './axios'
import { type RegisterUser } from "@/types/registro";

export const registerRequest = (user: RegisterUser & {captchaToken: string}) => axios.post(`/register`, user);

// Omitimos num_cta y fecha_nacimiento para el login
export const loginRequest = (user: Omit<RegisterUser, 'num_cta' | 'fecha_nacimiento'>) => axios.post(`/login`, user);

// Endpoint para verificar el token
export const verifyTokenRequest = async () => axios.get(`/verify`);