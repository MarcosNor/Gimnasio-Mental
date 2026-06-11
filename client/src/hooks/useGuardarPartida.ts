import { useEffect, useState } from "react";
import { EventBus } from "../phaser/event/EventBus";
import { guardarPartida } from "@/api/partida";
import type { PartidaTerminadaEvent } from "@/types/partida";

export const useGuardarPartida = (actividadId: number) => {
  const [estadoGuardado, setEstadoGuardado] = useState<'idle' | 'guardando' | 'error'>('idle');
  useEffect(() => {

    const handlePartidaFinalizada = async (data: PartidaTerminadaEvent) => {

      setEstadoGuardado('guardando');
      console.log("Partida finalizada con datos:", data);

      try {
        await guardarPartida({
          id_actividad: actividadId,
          puntuacion: data.puntuacion,
          estadistica: {
            aciertos_facil:   data.estadisticas.FACIL.correctas,
            total_facil:      data.estadisticas.FACIL.respondidas,
            aciertos_medio:   data.estadisticas.MEDIO.correctas,
            total_medio:      data.estadisticas.MEDIO.respondidas,
            aciertos_dificil: data.estadisticas.DIFICIL.correctas,
            total_dificil:    data.estadisticas.DIFICIL.respondidas,
          }
        });
        setEstadoGuardado('idle');

      } catch (error) {
        console.error("Error al guardar la partida:", error);
        setEstadoGuardado('error');
      }
    }
    EventBus.on('partida-terminada', handlePartidaFinalizada);

    return () => {
      EventBus.off('partida-terminada', handlePartidaFinalizada);
    }
  }, [actividadId]);

  return {estadoGuardado};
}