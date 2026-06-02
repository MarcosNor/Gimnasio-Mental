import { useCategorias } from "./useCategorias";
import { useTodasActividades } from "./useActividades";

export const useNombreVisible = () => {

  const { categorias } = useCategorias();
  const { actividades } = useTodasActividades();

  const obtenerNombreVisible = (slug: string) => {
    const categoria = categorias.find(c => c.slug === slug);

    if (categoria) {
      return categoria.nombre;
    }

    const actividad = actividades.find(a => a.slug === slug);

    if (actividad) {
      return actividad.nombre;
    }

    return slug.charAt(0).toUpperCase() + slug.slice(1);

  }

  return { obtenerNombreVisible }
}