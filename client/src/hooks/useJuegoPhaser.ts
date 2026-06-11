import { useEffect } from "react";
import { getGameConfig } from "../components/phaser/registroJuegos";
import type { Item } from "@/types/item";

export function useJuegoPhaser(
  actividadId: number,
  items: Item[] | undefined,
  isLoading: boolean,
  error: string | null
) {
  useEffect(() => {
    if (isLoading || error || !items || !items.length) return;

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

    return () => {
      isMounted = false;
      if (game) {
        game.destroy(true);
      }
    };
  }, [items, isLoading, error, actividadId]);
}