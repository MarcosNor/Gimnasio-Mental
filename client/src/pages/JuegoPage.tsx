import JuegoComponente from "@/components/phaser/juego_componente";
import { useTodasActividades } from "@/hooks/useActividades";

import { useParams } from "react-router-dom";

export default function JuegoPage() {

  const { actividad } = useParams();

  
  const { actividades, isLoading, error } = useTodasActividades();

  if (isLoading) {
    return <main className="flex justify-center items-center h-screen">Cargando datos de la actividad...</main>;
  }
  if(error) {
    return <main>Error al cargar las actividades: {error}</main>;
  }

  const actividadEncontrada = actividades?.find(
    (act) => act.slug === actividad
  );

  if (!actividadEncontrada) {
    return <main className="flex justify-center items-center h-screen">La actividad que buscas no existe</main>;
  }

  return (
    <main>
        <JuegoComponente actividadId={actividadEncontrada.id_actividad} />
    </main>
  );
}