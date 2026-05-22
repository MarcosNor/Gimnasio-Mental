

import { useItems } from "@/hooks/useItems";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { createGame } from "../phaser/categorias/1-coordinacion/actividad_1/src/config";

export default function JuegoPage() {

  const { actividad } = useParams();
  const { items, isLoading, error } = useItems(1); // Reemplaza 1 con el ID de la actividad deseada

  useEffect(() => {
    if (items.length < 0) return ;

    const game = createGame(items);
    
    return () => {
      if (game) {
        game.destroy(true);
      }
    };
  }, [items]);

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