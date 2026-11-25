import { getItemsByActividadId } from "@/api/items"
import { type Item } from "@/types/item"
import { useEffect, useState, useCallback } from "react"


// Hook personalizado para obtener los items de una actividad
export const useItems = (id_actividad: number | null) => {

  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // callback para evitar recrear la función en cada renderizado
  const fetchItems = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {

      // Si una actividad no necesita Items (Demos)
      if (!id_actividad) {
        setItems([]);
        setIsLoading(false);
        return;
      }

      const res = await getItemsByActividadId(id_actividad)
      console.log("Respuesta del backend:", res)

      if (!res.data) {
      throw new Error("Error al cargar las preguntas")
      }
      
      setItems(res.data)

    } catch (err) {
      console.error("Fallo al conectar con el backend:", err);
      setError("No pudimos cargar los items.");
    } finally {
      setIsLoading(false);
    }
  }, [id_actividad])

  useEffect(() => {
    fetchItems();
  }, [fetchItems])

  return { items, isLoading, error, fetchItems }
}