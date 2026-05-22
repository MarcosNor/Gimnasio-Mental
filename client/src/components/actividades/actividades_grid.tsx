import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Clock } from "lucide-react"
import { type Actividad } from "@/types/actividad"

interface ActividadCardProps {
  actividad: Actividad

    // onNavigate para que categorias_dashboard sepa el slug de la categoria a la que nos tenemos que mover
  onNavigate: (categoria: string) => void
}

export function ActividadCard({ actividad, onNavigate }: ActividadCardProps) {

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">

      {/* Imagen */}
      <div className="relative aspect-[16/9] overflow-hidden">

        <img
          src={actividad.portada}
          alt={actividad.nombre}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          crossOrigin="anonymous"
        />

        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />

      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-4 p-5">

        <div>

          <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3" />
            {actividad.tiempoLimite}
          </div>

          <h3 className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)]">
            {actividad.nombre}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {actividad.explicacion}
          </p>

        </div>

        <Button
          onClick={() => onNavigate(actividad.slug)}
          className="w-full gap-2"
        >
          Jugar
          <Play className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>

      </div>

    </div>
  )
}

interface ActividadesGridProps {
  actividades: Actividad[]
  onNavigate: (categoria: string) => void
}

export function ActividadesGrid({ actividades, onNavigate }: ActividadesGridProps) {
  return (
    <div className="flex flex-col gap-3">
      {actividades.map((actividad) => (
        <ActividadCard 
          key={actividad.slug} 
          actividad={actividad} 
          onNavigate={onNavigate} 
        />
      ))}
    </div>
  )
}
