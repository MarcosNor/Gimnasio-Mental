import { Brain, Clock, Lightbulb, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

const benefits: BenefitCardProps[] = [
  {
    icon: <Brain className="size-6" />,
    title: "Memoria más aguda",
    description:
      "El entrenamiento cerebral constante refuerza tus conexiones neuronales, facilitando la retención de información para tus exámenes y el día a día.",
  },
  {
    icon: <Clock className="size-6" />,
    title: "Pensamiento veloz",
    description:
      "Los desafíos contrarreloj obligan a tu cerebro a procesar información más rápido, mejorando tu tiempo de reacción y la toma de decisiones bajo presión.",
  },
  {
    icon: <Lightbulb className="size-6" />,
    title: "Dominio espacial",
    description:
      "Desafía tu mente acomodando objetos, siguiendo secuencias de movimientos y descifrando rutas en mapas para dominar tu entorno en 3D."
  },
  {
    icon: <Users className="size-6" />,
    title: "Precisión temporal",
    description:
      "Ordena eventos cronológicamente, domina la secuencia de acciones en una historia y conecta momentos clave para perfeccionar tu lógica del tiempo.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="border-t border-border bg-secondary/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium">
            Qué queremos lograr?
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)] md:text-5xl">
            ¿Qué buscamos entrenar?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Gimnasio Pumental es un programa estructurado de ejercicios cognitivos
          basados en el entrenamiento de Respuestas Relacionales Derivadas (DRR).
          La aplicación de las RRD en la educación ha demostrado ser efectiva para mejorar
          habilidades de razonamiento lógico, comprensión verbal, capacidad de abstracción,
          velocidad perceptual; todas ellas cruciales para el desempeño intelectual y académico.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}
