import { type Categoria } from "@/types/categoria"
import { useCallback, useEffect, useState } from "react"
import { getCategorias } from "@/api/categoria"

export const useCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // callback para evitar recrear la función en cada renderizado
  const fetchCategorias = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const res = await getCategorias()
      if (!res.data) {
        throw new Error("Error al cargar las categorías")
      }
      setCategorias(res.data)
    } catch (err) {
      console.error("Fallo al conectar con el backend:", err);
      setError("No pudimos cargar los juegos.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategorias();
  }, [fetchCategorias]);
  
  return { categorias, isLoading, error }
}