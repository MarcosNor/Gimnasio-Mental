import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Clock, Flame } from "lucide-react"
import { type Actividad } from "@/types/actividad"

interface ActividadCardProps {
  actividad: Actividad
}

function ActividadCard({ actividad }: ActividadCardProps) {

  // Por si después queremos agregar dificultad a las actividades
  // const difficultyColor = {
  //   Easy: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  //   Medium: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  //   Hard: "bg-red-500/10 text-red-600 border-red-500/20",
  // }

  return (
    <div className="group flex gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-lg">
        <img
          src={actividad.portada}
          alt={actividad.nombre}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
          crossOrigin="anonymous"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <Badge className="text-xs bg-amber-100 text-black">Categoria: { actividad.categoria.nombre}</Badge>
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
          <Link to="/usuario/home/categorias"> 
            <Button size="icon" variant="secondary" className="rounded-lg">
              <Play className="size-4" />
              <span className="sr-only">Play {actividad.nombre}</span>
            </Button>
          </Link>
      </div>
    </div>
  )
}

interface ActivitiesGridProps {
  activities: Actividad[]
}

export function ActivitiesGrid({ activities }: ActivitiesGridProps) {
  return (
    <div className="flex flex-col gap-3">
      {activities.map((actividad) => (
        <ActividadCard key={actividad.id_actividad} actividad={actividad} />
      ))}
    </div>
  )
}
