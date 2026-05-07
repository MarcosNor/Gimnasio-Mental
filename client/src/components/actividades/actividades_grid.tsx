import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Clock } from "lucide-react"
import { type Actividad } from "@/types/actividad"
import { obtenerIdDeSlug } from "@/lib/utils"

interface ActividadCardProps {
  actividad: Actividad

    // onNavigate para que categories dashboard sepa el id de la categoria a la que nos tenemos que mover
  onNavigate: (categoryId: number) => void
}

export function ActividadCard({ actividad, onNavigate }: ActividadCardProps) {
  // const difficultyColor = {
  //   Easy: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  //   Medium: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  //   Hard: "bg-red-500/10 text-red-600 border-red-500/20",
  // }

  return (
    <div className="group flex gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-lg">
        {/* <img
          src={actividad.image}
          alt={actividad.title}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
          crossOrigin="anonymous"
        /> */}
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              // className={`rounded-md text-[10px] font-semibold uppercase ${difficultyColor[actividad.difficulty]}`}
            >
              {/* {actividad.difficulty} */}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3" />
              {actividad.tiempoLimite}
            </div>
            {/* {actividad.streak && actividad.streak > 0 && (
              <div className="flex items-center gap-1 text-xs font-medium text-amber-500">
                <Flame className="size-3" />
                {actividad.streak} day streak
              </div>
            )} */}
          </div>
          <h4 className="font-semibold font-[family-name:var(--font-heading)]">
            {actividad.nombre}
          </h4>
          <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
            {actividad.explicacion}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Button 
          onClick={() => onNavigate(Number(obtenerIdDeSlug(actividad.slug)))}
          size="icon" variant="secondary" className="rounded-lg">
          <Play className="size-4" />
          <span className="sr-only">Play {actividad.nombre}</span>
        </Button>
      </div>  
    </div>
  )
}

interface ActividadesGridProps {
  actividades: Actividad[]
  onNavigate: (categoryId: number) => void
}

export function ActividadesGrid({ actividades, onNavigate }: ActividadesGridProps) {
  return (
    <div className="flex flex-col gap-3">
      {actividades.map((actividad) => (
        <ActividadCard key={actividad.slug} actividad={actividad} onNavigate={onNavigate} />
      ))}
    </div>
  )
}
