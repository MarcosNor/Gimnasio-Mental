import { Badge } from "@/components/ui/main/badge"

interface GameCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

function GameCard({ title, description, image, tags }: GameCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`${title} game preview`}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-foreground/5 transition-opacity group-hover:opacity-0" />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-md text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <button className="mt-1 inline-flex h-9 w-full items-center justify-center rounded-lg bg-secondary text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
          Play Now
        </button>
      </div>
    </div>
  )
}

const games: GameCardProps[] = [
  {
    title: "Memory Match",
    description:
      "Flip cards and find matching pairs. Trains visual memory and concentration under time pressure.",
    image: "/images/game-memory.jpg",
    tags: ["Memory", "Focus"],
  },
  {
    title: "Logic Puzzles",
    description:
      "Solve increasingly complex spatial and pattern puzzles that strengthen logical thinking skills.",
    image: "/images/game-puzzle.jpg",
    tags: ["Logic", "Problem Solving"],
  },
  {
    title: "Word Scramble",
    description:
      "Unscramble letters to form words. Builds vocabulary, language processing, and mental flexibility.",
    image: "/images/game-word.jpg",
    tags: ["Language", "Speed"],
  },
  {
    title: "Speed Math",
    description:
      "Race against the clock solving math equations. Sharpens mental arithmetic and processing speed.",
    image: "/images/game-math.jpg",
    tags: ["Math", "Speed"],
  },
]

export function GamesSection() {
  return (
    <section id="games" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium">
            Featured Games
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)] md:text-5xl">
            Pick Your Challenge
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Each game targets different cognitive skills. Play them all to build a
            well-rounded, sharper mind.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </div>
    </section>
  )
}
