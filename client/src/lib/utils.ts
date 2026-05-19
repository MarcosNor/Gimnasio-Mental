import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { type Categoria } from "@/types/categoria"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Función para obtener el nombre "bonito" con el que guarda la categoria en la db
// Esto porque en las rutas se usa el slug sin mayúsculas y sin acentos
export const obtenerNombreVisible = (slug: string, categorias: Categoria[]) => {
  
  const categoria = categorias.find(c => c.slug === slug);
  return categoria?.nombre || slug.charAt(0).toUpperCase() + slug.slice(1);
}