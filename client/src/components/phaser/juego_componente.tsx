import { useNavigate } from "react-router-dom";

import { useItems } from "@/hooks/useItems";
import { useJuegoPhaser } from "@/hooks/useJuegoPhaser";
import { useGuardarPartida } from "@/hooks/useGuardarPartida";

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Proximamente } from "@/components/ui/proximamente"
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";

interface JuegoComponenteProps {
  actividadId: number;
}

export default function JuegoComponente({ actividadId }: JuegoComponenteProps) {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const { items, isLoading, error, fetchItems } = useItems(actividadId);

  useJuegoPhaser(actividadId, items, isLoading, error);
  const { estadoGuardado } = useGuardarPartida(actividadId);

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Spinner className="size-8 text-primary" />
          <p className="text-sm text-muted-foreground">Loading actividades...</p>
        </div>
      </div>
    );
  }

  if (!items || !items.length) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
            <Proximamente />
          <p className="text-sm text-muted-foreground">
            Esta actividad está en desarrollo
          </p>
          <Button variant="outline" onClick={handleBack} className="bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            <ArrowLeft className="size-4" />
            Regresar
          </Button>
        </div>
      </div>
    )
  };

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertCircle className="size-6 text-destructive" />
          </div>
          <div>
            <p className="font-medium">Error al cargar la actividad</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
          <Button variant="outline" onClick={fetchItems} className="gap-2">
            <RefreshCw className="size-4" />
            Intentar de nuevo
          </Button>
        </div>
      </div>
    )
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