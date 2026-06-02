import axios from './axios'

// Ruta para obtener las actividades de una categoría por su slug
export const getActividades = async (slug: string) => axios.get(`/categorias/${slug}/actividades`);

// Ruta para obtener todas las actividades sin filtrar por categoría
export const getTodasActividades = async () => axios.get('/actividades');