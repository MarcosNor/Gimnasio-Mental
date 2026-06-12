import { type Item } from "@/types/item";

type GameConfigModule = {
  createGame: (items: Item[]) => Phaser.Game;
}

// Diccionario que mapea el ID de la actividad con su import dinámico
export const getGameConfig: Record<number, () => Promise<GameConfigModule>> = {
  1: () => import ("@/phaser/categorias/1-coordinacion/actividad_1/src/config"),
  2: () => import ("@/phaser/categorias/1-coordinacion/actividad_2/src/config"),


  6: () => import ("@/phaser/categorias/4-espacial/actividad_1/src/config"),
  // Espacio para las actividades futuras
  
};