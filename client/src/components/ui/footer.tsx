import { Brain } from "lucide-react"

export function Footer() {
  return (
    <footer id="about" className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <a href="/" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <Brain className="size-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)]">
            GImnasio Pumental
          </span>
        </a>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Free brain training games designed for high school students.
          Sharpen your mind, boost your grades, and have fun doing it.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#games" className="transition-colors hover:text-foreground">Games</a>
          <a href="#benefits" className="transition-colors hover:text-foreground">Benefits</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
        </div>
        <p className="text-xs text-muted-foreground">
          {'Built with care for student minds.'}
        </p>
      </div>
    </footer>
  )
}
