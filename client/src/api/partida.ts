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

export const getPuntuacionPorUsuario = async (id_usuario: number) => 
  await axios.get(`/partida/puntuacion/usuario/${id_usuario}`, );
