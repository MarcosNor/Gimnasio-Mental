export interface Actividad {
  id_actividad: number
  id_categoria: number
  nombre: string
  explicacion: string
  tiempoLimite: number
  estatus_actividad: boolean
  slug: string // slug para las URLs amigables
}