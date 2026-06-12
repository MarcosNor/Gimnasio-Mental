import { Brain, Puzzle, ArrowLeftRight, Map, Award, Target, Clock, Flame, TrendingUp, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScoreCards } from "./score-cards"
import { SkillsRadar } from "./skills-radar"
import { ActivitiesGrid } from "./activities_grid"

import { useUserScores } from "@/hooks/useUserScores"

import { useAuth } from "@/context/AuthContext.tsx"

// const exampleScores = [
//   { game: "Coordinación", score: 2450, maxScore: 5000},
//   { game: "Comparación", score: 1820, maxScore: 5000},
//   { game: "Oposición", score: 3100, maxScore: 5000},
//   { game: "Espacial", score: 980, maxScore: 5000 },
// ]

const gameIcons: Record<string, React.ReactNode> = {
  "Coordinación": <Brain className="size-5" />,
  "Comparación": <Puzzle className="size-5" />,
  "Oposición": <ArrowLeftRight className="size-5" />,
  "Espacial": <Map className="size-5" />,
  "Temporal": <Clock className="size-5" />,
  "Condicionalidad": <Flame className="size-5" />,
  "Jerárquico": <TrendingUp className="size-5" />,
  "Deíctico": <Search className="size-5" />,
}

// const exampleSkillsData = [
//   { skill: "Coordinación", level: 78, maxLevel: 100 },
//   { skill: "Comparación", level: 65, maxLevel: 100 },
//   { skill: "Oposición", level: 52, maxLevel: 100 },
//   { skill: "Espacial", level: 88, maxLevel: 100 },
//   { skill: "Temporal", level: 71, maxLevel: 100 },
//   { skill: "Condicionalidad", level: 45, maxLevel: 100 },
//   { skill: "Jerárquico", level: 82, maxLevel: 100 },
//   { skill: "Deíctico", level: 69, maxLevel: 100 },
// ]



const activities = [
  {
    id: "1",
    title: "Relación-ando",
    description: 'Preguntas sencillas para relacionar dos o más temas',
    image: "/images/portadas/actividades/coordinacion.png",
  },
  {
    id: "2",
    title: "Matemáticas locas",
    description: 'Actividad de prueba',
    image: "/images/portadas/actividades/Actividad 2.jpg",
  },
  {
    id: "3",
    title: "Siluetas",
    description: 'Actividad de prueba',
    image: "/images/portadas/actividades/Actividad de comparacion.jpeg",
  },
]

export function UsuarioDashboard() {

  const { user } = useAuth();
  const { scores, loading, error } = useUserScores();

  const userScores = scores.map(({ categoria, actividades }) => {
    const porcentajeCategoria = actividades.reduce(
      (acc, act) => acc + act.aportePorcentajeCategoria,
      0
    );

    return {
      game: categoria,
      score: Math.round(porcentajeCategoria),
      maxScore: 100,
    };
  });

  const skillsData = scores.map(({ categoria, actividades }) => {
    const porcentajeCategoria = actividades.reduce(
      (acc, act) => acc + act.aportePorcentajeCategoria,
      0
    );

    return {
      skill: categoria,
      level: Math.round(porcentajeCategoria),
      maxLevel: 100,
    };
  }); 

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
          {loading && <p className="text-muted-foreground text-sm">Cargando puntajes...</p>}
          {error && <p className="text-destructive text-sm">{error}</p>}
          {!loading && !error && <ScoreCards scores={userScores} icons={gameIcons} />}
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
