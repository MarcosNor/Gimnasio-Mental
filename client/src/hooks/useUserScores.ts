// hooks/useUserScores.ts
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { type puntuacionPorCategoria } from "@/types/partida";
import { getPuntuacionPorUsuario } from "@/api/partida";

export const useUserScores = () => {
  const { user } = useAuth();
  const [scores, setScores] = useState<puntuacionPorCategoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user?.id) return;
    
    const fetchScores = async () => {
      try {
        setLoading(true);
        const {data} = await getPuntuacionPorUsuario(user.id);
        console.log("Respuesta backend:", data);
        setScores(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("No se pudieron cargar los puntajes");
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [user?.id]);

  return { scores, loading, error };
};