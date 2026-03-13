import { Brain, Clock, Lightbulb, Users } from "lucide-react"
import { Badge } from "@/components/ui/main/badge"

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
    title: "Sharper Memory",
    description:
      "Regular brain training strengthens neural pathways, making it easier to retain information for tests and daily life.",
  },
  {
    icon: <Clock className="size-6" />,
    title: "Faster Thinking",
    description:
      "Timed challenges push your brain to process information quicker, improving reaction time and decision-making under pressure.",
  },
  {
    icon: <Lightbulb className="size-6" />,
    title: "Better Problem Solving",
    description:
      "Logic and pattern games train you to think critically and approach problems from multiple angles.",
  },
  {
    icon: <Users className="size-6" />,
    title: "Study Confidence",
    description:
      "Building cognitive fitness translates directly to stronger focus, better grades, and more confidence in the classroom.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="border-t border-border bg-secondary/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium">
            Why Brain Gym?
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)] md:text-5xl">
            Real Benefits for Your Brain
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Brain games are more than just fun. Here is how consistent cognitive training
            can help you perform better in school and life.
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
