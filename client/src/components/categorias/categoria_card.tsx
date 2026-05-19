import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { type Categoria } from "@/types/categoria"

interface CategoriaCardProps {
  categoria: Categoria
  
  // onNavigate para que categorias_dashboard sepa el id de la categoria a la que nos tenemos que mover
  // Le pasamos el slug sin ID para que el dashboard de actividades pueda usarlo para navegar a la actividad concreta
  onNavigate: (slugCategoria: string) => void
}

export function CategoriaCard({ categoria, onNavigate }: CategoriaCardProps) {
  //const percentage = Math.round((categoria.userScore / categoria.maxScore) * 100)

  return (
    <Card className="group overflow-hidden py-0 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative aspect-[16/9] overflow-hidden">
        {/* <img
          src={categoria.image}
          alt={`${categoria.name} categoria preview`}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          crossOrigin="anonymous"
        /> */}
        <div className="absolute inset-0 bg-foreground/10 transition-opacity group-hover:opacity-0" />
        
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 backdrop-blur-sm">
          {/* <span className="text-xs font-medium text-muted-foreground">
            {categoria.gamesCount} games
          </span> */}
        </div>
      </div>

      <CardContent className="flex flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)]">
            {categoria.nombre}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {categoria.beneficios}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center gap-1.5 text-sm font-medium">
              <Trophy className="size-4 text-primary" />
              <span>{categoria.userScore.toLocaleString()} pts</span>
            </div> */}
            {/* <span className="text-xs font-medium text-muted-foreground">
              {percentage}% completed
            </span> */}
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            {/* <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${percentage}%` }}
            /> */}
          </div>
        </div>

        <Button
          onClick={() => onNavigate(categoria.slug)}
          className="w-full gap-2"
        >
          Ver actividades
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </CardContent>
    </Card>
  )
}
