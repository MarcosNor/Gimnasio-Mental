// Types para guardar las estadísticas de respuestas por dificultad

export type EstadisticaDificultad = {
  respondidas: number;
  correctas: number;
  incorrectas: number;
}

export type Estadisticas = {
  FACIL: EstadisticaDificultad;
  MEDIO: EstadisticaDificultad;
  DIFICIL: EstadisticaDificultad;
}