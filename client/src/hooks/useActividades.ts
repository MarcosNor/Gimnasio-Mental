import { getActividades, getTodasActividades } from "@/api/actividades"
import { type Actividad } from "@/types/actividad"
import { useEffect, useState, useCallback } from "react"

export const useActividades = (slugCategoria: string) => {

  const [actividades, setActividades] = useState<Actividad[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // callback para evitar recrear la función en cada renderizado
  const fetchActividades = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {

      const res = await getActividades(slugCategoria)
      console.log("Respuesta del backend:", res)

      if (!res.data) {
      throw new Error("Error al cargar las actividades")
      }
      
      setActividades(res.data)

    } catch (err) {
      console.error("Fallo al conectar con el backend:", err);
      setError("No pudimos cargar los juegos.");
    } finally {
      setIsLoading(false);
    }
  }, [slugCategoria])

  useEffect(() => {
    fetchActividades();
  }, [fetchActividades])

  return { actividades, isLoading, error, fetchActividades }
}

export const useTodasActividades = () => {
  const [actividades, setActividades] = useState<Actividad[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // callback para evitar recrear la función en cada renderizado
  const fetchActividades = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {

      const res = await getTodasActividades()
      console.log("Respuesta del backend:", res)

      if (!res.data) {
      throw new Error("Error al cargar las actividades")
      }
      
      setActividades(res.data)

    } catch (err) {
      console.error("Fallo al conectar con el backend:", err);
      setError("No pudimos cargar los juegos.");
    } finally {
      setIsLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchActividades();
  }, [fetchActividades])

  return { actividades, isLoading, error, fetchActividades }
}