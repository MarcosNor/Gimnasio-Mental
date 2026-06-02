import { type Item, type ItemsPorDificultad } from '@/types/item';

// Función para ordenar las preguntas por dificultad
const shuffleArray = <T> (array: T[]): T[] => {

  const copia = structuredClone(array);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

export const prepararPreguntas = (preguntas: Item[]): ItemsPorDificultad => {

  // Separamos las preguntas por dificultad
  const preguntasFaciles = preguntas.filter(
    p => p.dificultad === 'FACIL'
  );
  const preguntasMedias = preguntas.filter(
    p => p.dificultad === 'MEDIO'
  );
  const preguntasDificiles = preguntas.filter(
    p => p.dificultad === 'DIFICIL'
  );

  // Hacemos el shuffle de las preguntas por cada dificultad
  return {
    FACILES: shuffleArray(preguntasFaciles),
    MEDIAS: shuffleArray(preguntasMedias),
    DIFICILES: shuffleArray(preguntasDificiles)
  };
}