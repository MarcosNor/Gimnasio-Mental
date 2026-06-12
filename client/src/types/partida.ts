// tipo para enviar la información de una partida al backend
export type partida = {
  id_actividad: number;
  puntuacion: number;
  estadistica: {
    aciertos_facil: number;
    total_facil: number;
    aciertos_medio: number;
    total_medio: number;
    aciertos_dificil: number;
    total_dificil: number;
  };
};

export type PartidaTerminadaEvent = {
  puntuacion: number;
  estadisticas: {
    FACIL: { respondidas: number; correctas: number, incorrectas: number};
    MEDIO: { respondidas: number; correctas: number, incorrectas: number};
    DIFICIL: { respondidas: number; correctas: number, incorrectas: number};
  };
};

export interface puntuacionPorCategoria {
  categoria: string;
  id_categoria: number;
  puntuacionTotal: number;
  actividades: actividadPuntuacion[];
}

interface actividadPuntuacion {
  id_actividad: number;
  nombre: string;
  puntuacion: number;

  // Valores de 0 a 100
  mejorPorcentaje: number;
  aportePorcentajeCategoria: number;
}