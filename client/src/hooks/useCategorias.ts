import { type Categoria } from "@/types/categoria"
import { useEffect, useState } from "react"
import { getCategorias } from "@/api/categoria"

export const useCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategorias = async () => {
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
    };

    fetchCategorias();
  }, []);

  return { categorias, isLoading, error }
}