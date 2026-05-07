// Mapeamos los slugs a las configuraciones de cada juego
export const getGameConfigBySlug = async (actividadSlug: string) => {
  switch (actividadSlug) {
    case '1-coordinacion': {
      // El import() dinámico es lo que hace el Lazy Loading real
      const moduloJuego1 = await import('@/phaser/categorias/1-coordinacion/actividad_1/src/config-2');
      return moduloJuego1.default;
    }

    // Puedes manejar un caso por defecto o lanzar un error
    default:
      throw new Error('Juego no encontrado');
  }
};