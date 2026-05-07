

import { useEffect } from "react";
import { createGame } from "../phaser/categorias/1-coordinacion/actividad_1/src/config";

export default function JuegoPage() {
  useEffect(() => {
    const game = createGame();

    return () => {
      game.destroy(true);
    };
  }, []);

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