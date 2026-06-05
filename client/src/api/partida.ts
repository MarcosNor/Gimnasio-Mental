import axios from "./axios";
import { type partida } from '@/types/partida'

export const guardarPartida = async (data: partida) => {

  // Ruta para crear una partida
  const response = await axios.post('/partida', data, 
    {
      withCredentials: true 
    }
  );
  console.log('respuesta axios', response)
  return response.data;
}

export const obtenerPartidasPorUsuarioYActividad = async (id_usuario: number, id_actividad: number) => 
  await axios.get(`/partida/usuario/${id_usuario}/actividad/${id_actividad}`, );
