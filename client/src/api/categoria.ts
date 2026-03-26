import axios from './axios'

export const getCategorias = async () => axios.get(`/categorias`);