// Función para generar un slug, principalmente para convertir nombres a URLs amigables
export const generarSlug = (nombre: string): string => {
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .trim()
    .replace(/\s+/g, "-");
};

// Función para generar un slug único combinando el ID y el nombre
export const generarSlugId = (id: number, nombre: string): string => {
  return `${id}-${generarSlug(nombre)}`;
}