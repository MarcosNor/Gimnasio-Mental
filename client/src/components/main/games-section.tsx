import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom";

import type { Actividad } from "@/types/actividad";
import { useTodasActividades } from "@/hooks/useActividades";


interface GameCardProps {
  actividad: Actividad
}


// onSubmit para cuando el usuario de click en "Jugar"

function GameCard({ actividad }: GameCardProps) {
  const navigate = useNavigate();

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={actividad.portada}
          alt={`${actividad.nombre} game preview`}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-foreground/5 transition-opacity group-hover:opacity-0" />
      </div>
      <div className="flex flex-col gap-3 p-5">
        {/*
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-md text-xs font-medium">
                {tag}
              </Badge>
          ))} 
        </div>
        */}
        <h3 className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)]">
          {actividad.nombre}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {actividad.explicacion}
        </p>
        <button onClick={() => navigate("/auth/login")} className="mt-1 inline-flex h-9 w-full items-center justify-center rounded-lg bg-secondary text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
          Jugar ahora
        </button>
      </div>
    </div>
  )
}

export function GamesSection() {

  const { actividades } = useTodasActividades();

  return (
    <section id="juegos" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium">
            Juegos destacados
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)] md:text-5xl">
            Elige el reto de hoy
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Cada juego trabaja diferentes habilidades cognitivas. Juega a todos para desarrollar una mente más ágil y completa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {actividades.map((actividad) => (
            <GameCard 
              key={actividad.nombre} 
              actividad = {actividad} />
          ))}
        </div>
      </div>
    </section>
  )
}
