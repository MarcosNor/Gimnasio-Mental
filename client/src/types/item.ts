import { type Respuesta } from "@/types/respuesta"

type Dificultad = "DIFICIL" | "MEDIO" | "FACIL"

export interface Item {
  id_item: number
  id_actividad: number
  pregunta: string
  estatus_activo: boolean
  dificultad: Dificultad

  respuesta: Respuesta[]
}

export type ItemsPorDificultad = {
  FACILES: Item[]
  MEDIAS: Item[]
  DIFICILES: Item[]
}