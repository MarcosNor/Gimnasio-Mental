

import { useItems } from "@/hooks/useItems";
import { useEffect } from "react";

import { getGameConfig } from "./gameRegistry";

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