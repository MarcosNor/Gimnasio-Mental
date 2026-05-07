import axios from './axios'

export const getActividades = async (id_categoria: number) => axios.get(`/categorias/${id_categoria}/actividades`);