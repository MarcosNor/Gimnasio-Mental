import { Brain, Puzzle, BookOpen, Calculator, Award, Target } from "lucide-react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScoreCards } from "./score-cards"
import { SkillsRadar } from "./skills-radar"
import { ActivitiesGrid } from "./activities_grid"

import { useTodasActividades } from "@/hooks/useActividades"
import { type Actividad } from "@/types/actividad"

import { useAuth } from "@/context/AuthContext.tsx"

const userScores = [
  { game: "Coordinación", score: 2450, maxScore: 5000, trend: "up" as const, trendValue: "+12%" },
  { game: "Comparación", score: 1820, maxScore: 5000, trend: "up" as const, trendValue: "+8%" },
  { game: "Oposición", score: 3100, maxScore: 5000, trend: "neutral" as const, trendValue: "0%" },
  { game: "Espacial", score: 980, maxScore: 5000, trend: "down" as const, trendValue: "-3%" },
]

const gameIcons: Record<string, React.ReactNode> = {
  "Coordinación": <Brain className="size-5" />,
  "Comparación": <Puzzle className="size-5" />,
  "Oposición": <BookOpen className="size-5" />,
  "Espacial": <Calculator className="size-5" />,
}

const skillsData = [
  { skill: "Coordinación", level: 78, maxLevel: 100 },
  { skill: "Comparación", level: 65, maxLevel: 100 },
  { skill: "Oposición", level: 52, maxLevel: 100 },
  { skill: "Espacial", level: 88, maxLevel: 100 },
  { skill: "Temporal", level: 71, maxLevel: 100 },
  { skill: "Condicionalidad", level: 45, maxLevel: 100 },
  { skill: "Jerárquico", level: 82, maxLevel: 100 },
  { skill: "Deíctico", level: 69, maxLevel: 100 },
]



const activities = [
  {
    id: "1",
    title: "Coordinación",
    description: "Test your visual memory with card matching challenges",
    image: "/images/portadas/actividades/coordinacion.png",
    difficulty: "Easy" as const,
    duration: "3 min",
    streak: 5,
  },
  {
    id: "2",
    title: "Matemáticas locas",
    description: "Resuelve rompecabezas complejos de reconocimiento espacial y patrones",
    image: "/images/portadas/actividades/Actividad 2.jpg",
    difficulty: "Hard" as const,
    duration: "10 min",
    streak: 0,
  },
  {
    id: "3",
    title: "Cubo-Juego",
    description: "Unscramble letters to form words and build vocabulary",
    image: "/images/portadas/actividades/Actividad de comparacion.jpeg",
    difficulty: "Medium" as const,
    duration: "5 min",
    streak: 12,
  },
]

export function UsuarioDashboard() {

  const { user } = useAuth();

  return (
    <div className="min-h-svh font-sans antialiased">

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)] md:text-4xl">
              Bienvenido {user?.num_cta}
            </h1>
            <Badge variant="secondary" className="flex items-center gap-1 rounded-full">
              <Award className="size-3.5" />
              Top 10%
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Controla tu progreso y sigue entrenando tu cerebro.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold font-[family-name:var(--font-heading)]">
            Tus puntuaciones
          </h2>
          <ScoreCards scores={userScores} icons={gameIcons} />
        </section>

        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_380px]">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
                Actividades disponibles
              </h2>
              <Link 
                to="categorias"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver las categorias
              </Link>
            </div>
            <ActivitiesGrid activities={activities} />
          </section>

          <section>
            <Card className="h-fit">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-[family-name:var(--font-heading)]">
                  <Target className="size-5 text-primary" />
                  Árbol de habilidades
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center pb-4">
                <SkillsRadar data={skillsData} size={280} />
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}
