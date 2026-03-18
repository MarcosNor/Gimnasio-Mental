import { Brain, Puzzle, BookOpen, Calculator, Award, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScoreCards } from "./score-cards"
import { SkillsRadar } from "./skills-radar"
import { ActivitiesGrid } from "./activities_grid"

import { useAuth } from "@/context/AuthContext.tsx"

const userScores = [
  { game: "Memory Match", score: 2450, maxScore: 5000, trend: "up" as const, trendValue: "+12%" },
  { game: "Logic Puzzles", score: 1820, maxScore: 5000, trend: "up" as const, trendValue: "+8%" },
  { game: "Word Scramble", score: 3100, maxScore: 5000, trend: "neutral" as const, trendValue: "0%" },
  { game: "Speed Math", score: 980, maxScore: 5000, trend: "down" as const, trendValue: "-3%" },
]

const gameIcons: Record<string, React.ReactNode> = {
  "Memory Match": <Brain className="size-5" />,
  "Logic Puzzles": <Puzzle className="size-5" />,
  "Word Scramble": <BookOpen className="size-5" />,
  "Speed Math": <Calculator className="size-5" />,
}

const skillsData = [
  { skill: "Memory", level: 78, maxLevel: 100 },
  { skill: "Logic", level: 65, maxLevel: 100 },
  { skill: "Speed", level: 52, maxLevel: 100 },
  { skill: "Focus", level: 88, maxLevel: 100 },
  { skill: "Language", level: 71, maxLevel: 100 },
  { skill: "Math", level: 45, maxLevel: 100 },
  { skill: "Pattern", level: 82, maxLevel: 100 },
  { skill: "Problem", level: 69, maxLevel: 100 },
]

const activities = [
  {
    id: "1",
    title: "Memory Match",
    description: "Test your visual memory with card matching challenges",
    image: "/images/game-memory.jpg",
    difficulty: "Easy" as const,
    duration: "3 min",
    streak: 5,
  },
  {
    id: "2",
    title: "Logic Puzzles",
    description: "Solve complex spatial and pattern recognition puzzles",
    image: "/images/game-puzzle.jpg",
    difficulty: "Hard" as const,
    duration: "10 min",
    streak: 0,
  },
  {
    id: "3",
    title: "Word Scramble",
    description: "Unscramble letters to form words and build vocabulary",
    image: "/images/game-word.jpg",
    difficulty: "Medium" as const,
    duration: "5 min",
    streak: 12,
  },
  {
    id: "4",
    title: "Speed Math",
    description: "Race against time solving arithmetic equations",
    image: "/images/game-math.jpg",
    difficulty: "Medium" as const,
    duration: "5 min",
    streak: 2,
  },
]

export function UserDashboard() {

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
            Track your progress and keep training your brain
          </p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold font-[family-name:var(--font-heading)]">
            Your Scores
          </h2>
          <ScoreCards scores={userScores} icons={gameIcons} />
        </section>

        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_380px]">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
                Available Activities
              </h2>
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline"
              >
                View all
              </a>
            </div>
            <ActivitiesGrid activities={activities} />
          </section>

          <section>
            <Card className="h-fit">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-[family-name:var(--font-heading)]">
                  <Target className="size-5 text-primary" />
                  Skills Overview
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
