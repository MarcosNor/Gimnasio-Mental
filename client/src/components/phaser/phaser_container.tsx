import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

interface PhaserContainerProps {
  config: Phaser.Types.Core.GameConfig;
}

export default function PhaserContainer({ config }: PhaserContainerProps) {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    // Si es que no se está ejecutando un juego:
    if (!gameRef.current) {
      // Inyectamos ID del contenedor en la configuración si no viene
      const gameConfig = { ...config, parent: 'phaser-game-container' };
      gameRef.current = new Phaser.Game(gameConfig);
    }

    // Cleanup
    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, [config]);

  return (
    <div className="w-full h-[600px] flex justify-center items-center bg-gray-900 rounded-lg shadow-lg">
      {/* Phaser inyectará su <canvas> dentro de este div */}
      <div id="phaser-game-container" />
    </div>
  );
}