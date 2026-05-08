import axios from './axios'

//Ruta para obtener las preguntas de una actividad específicapor su id
export const getItemsByActividadId = async (id_actividad: number) => axios.get(`/actividad/${id_actividad}`);