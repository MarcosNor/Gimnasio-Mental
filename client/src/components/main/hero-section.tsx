import { Zap, Brain, Target, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Target className="size-3.5" />
          Built for High School Students
        </div> */}

        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight font-[family-name:var(--font-heading)] md:text-7xl md:leading-[1.1]">
          Entrena tu mente,{" "}
          <span className="text-primary">Ponte a</span>{" "}
          Prueba
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Pruebas basadas en la gamificación para poner a prueba tus habilidades.
          Resuelve retos rápidamente, mejora tus records, desarrolla tus habilidades cognitivas
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#games"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            <Zap className="mr-2 size-5" />
            Jugar
          </a>
          <a
            href="#benefits"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-card px-8 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Sobre la DGOAE
          </a>
        </div>

        <div className="mt-14 flex items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <TrendingUp className="size-4 text-primary" />
            <span className="font-medium">10+ Games</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Brain className="size-4 text-primary" />
            <span className="font-medium">Science-Backed</span>
          </div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="hidden items-center gap-2 sm:flex">
            <Target className="size-4 text-primary" />
            <span className="font-medium">100% Free</span>
          </div>
        </div>
      </div>
    </section>
  )
}
