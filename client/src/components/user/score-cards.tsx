import { Card, CardContent } from "@/components/ui/card"

interface ScoreCardProps {
  game: string
  score: number
  maxScore: number
  icon: React.ReactNode
}

function ScoreCard({ game, score, maxScore, icon }: ScoreCardProps) {
  const percentage = Math.round((score / maxScore) * 100)

  return (
    <Card className="py-4">
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{game}</p>
          <p className="text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            {score.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {percentage}%
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

interface ScoreCardsProps {
  scores: Omit<ScoreCardProps, "icon">[]
  icons: Record<string, React.ReactNode>
}

export function ScoreCards({ scores, icons }: ScoreCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {scores.map((score) => (
        <ScoreCard
          key={score.game}
          {...score}
          icon={icons[score.game]}
        />
      ))}
    </div>
  )
}
