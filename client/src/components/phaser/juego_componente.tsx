

import { useItems } from "@/hooks/useItems";
import { useEffect, useState } from "react";
import { EventBus } from "../../phaser/event/EventBus";

import { guardarPartida } from "@/api/partida";

import { getGameConfig } from "./registroJuegos";

import { type partida, type PartidaTerminadaEvent } from "@/types/partida";

interface JuegoComponenteProps {
  actividadId: number;
}

export default function JuegoComponente({ actividadId }: JuegoComponenteProps) {

  const { items, isLoading, error } = useItems(actividadId);

  useEffect(() => {

    // Evitamos ejecutar si está cargando, si hay un error o si no hay items disponibles
    if (isLoading || error || !items || !items.length) return ;

    let game: Phaser.Game | null = null;
    let isMounted = true;
    
    const loadAndStartGame = async () => {
      try {
        const importGameConfig = getGameConfig[actividadId];

        if (!importGameConfig) {
          console.error(`No se encontró configuración para la actividad con ID ${actividadId}`);
          return;
        }

        const { createGame } = await importGameConfig();

        if (isMounted) {
          game = createGame(items);
        }
      } catch (err) {
        console.error("Error al cargar la configuración del juego:", err);
      }
    };
    
    loadAndStartGame();
    
    // Funcion de limpieza para destruir el juego cuando el componente se desmonte
    return () => {
      isMounted = false;
      if (game) {
        game.destroy(true);
      }
    };
  }, [items, isLoading, error, actividadId]);
  
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

  if (isLoading) {
    return <div>Cargando preguntas...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return <div
    id="game-container"
    style={{
      width: '100%',
      maxWidth: '1000px',
      aspectRatio: '1446 / 720',
      margin: '0 auto',
      position: 'relative',
    }}
  />;
}