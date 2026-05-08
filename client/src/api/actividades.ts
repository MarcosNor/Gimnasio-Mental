import axios from './axios'

// Ruta para obtener las actividades de una categoría específica por su id
export const getActividades = async (id_categoria: number) => axios.get(`/categorias/${id_categoria}/actividades`);