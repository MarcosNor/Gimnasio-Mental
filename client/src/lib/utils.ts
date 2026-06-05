import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

// Utilidad para normalizar cualquier error a string[]
export const normalizeErrors = (data: unknown): string[] => {
  if (Array.isArray(data)) return data;
  if (typeof data === "string") return [data];
  if (typeof data === "object" && data !== null) {
    const obj = data as Record<string, unknown>;
    if (typeof obj.message === "string") return [obj.message];
  }
  return ["Ocurrió un error inesperado"];
};