// actividades_dashboard.tsx
import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react"
import { ActividadCard } from "@/components/actividades/actividades_grid"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { useActividades } from "@/hooks/useActividades"
import { obtenerIdDeSlug } from "@/lib/utils"

import { useParams, useNavigate } from "react-router-dom"

export function ActivitiesDashboard() {

  // Extraemos el ID de la URL
  // Usamos el slug para obtener el ID de la categoría
  const { categoria, actividad } = useParams();
  const idCategoria = obtenerIdDeSlug(categoria);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1)
  }
  
  // Usamos el hook
  const { 
    actividades: actividades, 
    isLoading, 
    error, 
    fetchActividades 
  } = useActividades(Number(idCategoria));

  const handlePlay = (categoriaSlug: string, actividadSlug: string | undefined) => {
    console.log(`Starting actividad: ${categoriaSlug}/${actividadSlug}`)
    navigate(`/usuario/home/categorias/${categoriaSlug}/${actividadSlug}`)
  }

  return (
    <div className="min-h-svh font-sans antialiased">
      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)] md:text-4xl">
            {}
          </h1>
          <p className="mt-2 text-muted-foreground">
            Choose an actividad to start training
          </p>
        </div>

        {isLoading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <Spinner className="size-8 text-primary" />
              <p className="text-sm text-muted-foreground">Loading actividades...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10">
                <AlertCircle className="size-6 text-destructive" />
              </div>
              <div>
                <p className="font-medium">Failed to load actividades</p>
                <p className="text-sm text-muted-foreground">{error}</p>
              </div>
              <Button variant="outline" onClick={fetchActividades} className="gap-2">
                <RefreshCw className="size-4" />
                Try again
              </Button>
            </div>
          </div>
        ) : actividades.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="font-medium">No se encontraro actividades</p>
              <p className="text-sm text-muted-foreground">
                Esta categoria todavía no tiene actividades
              </p>
              <Button variant="outline" onClick={handleBack} className="gap-2">
                <ArrowLeft className="size-4" />
                Regresar
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {actividades.map((actividad) => (
              <ActividadCard
                key={actividad.nombre}
                actividad={actividad}
                onNavigate={() => {handlePlay(actividad.slug); console.log(actividad.slug)}}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}