import {  AlertCircle } from "lucide-react"
import { CategoryCard } from "@/components/categorias/category_card"
import { useNavigate } from "react-router-dom"
import { Spinner } from "@/components/ui/spinner"

import { useCategorias } from "@/hooks/useCategorias"

export function GameCategories() {
  const navigate = useNavigate()
  const { categorias, isLoading, error } = useCategorias()

  const handleNavigate = (categoriaSlug: string | undefined) => {
    navigate(`/usuario/home/categorias/${categoriaSlug}`)
  }

  return (
    <div className="min-h-svh font-sans antialiased">

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)] md:text-4xl">
            Categorias
          </h1>
          <p className="mt-2 text-muted-foreground">
            Escoge una categoría para explorar las actividades disponibles
          </p>
        </div>

        {isLoading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <Spinner className="size-8 text-primary" />
              <p className="text-sm text-muted-foreground">Cargando categorias...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10">
                <AlertCircle className="size-6 text-destructive" />
              </div>
              <div>
                <p className="font-medium">Hubo un error al cargar las categorias</p>
                <p className="text-sm text-muted-foreground">{error}</p>
              </div>
              {/* <Button variant="outline" onClick={fetchCategories} className="gap-2">
                <RefreshCw className="size-4" />
                Intentar de nuevo
              </Button> */}
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categorias.map((categoria) => (
              <CategoryCard
              key={categoria.nombre}
              category={categoria}
              onNavigate={() => {handleNavigate(categoria.slug); console.log(categoria.slug)}}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
