import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const obtenerIdDeSlug = (slug: string | undefined): number | null => {
  if(!slug) return null;

  const id = slug.split("-")[0];
  return Number(id);
}