import axios from './axios'

// Ruta para obtener todas las categorías disponibles
export const getCategorias = async () => axios.get(`/categorias`);