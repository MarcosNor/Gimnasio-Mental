import axios from 'axios'

const API = 'http://localhost:3000/api'

export interface RegisterUser {
  num_cta: number;
  email: string;
  password: string;
  fecha_nacimiento: string;
}
export const registerRequest = (user: RegisterUser) => axios.post(`${API}/register`, user);