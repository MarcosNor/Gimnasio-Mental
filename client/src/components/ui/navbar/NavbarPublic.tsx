import { Zap } from "lucide-react"
import { Link } from 'react-router-dom'

const navLinks = [
  { label: "Games", href: "#games" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#about" },
]

export function NavbarPublic() {
  //const { isAuthenticated, logout, user } = useAuth()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <img
              src={"/images/emblemaAzul.png"}
              alt="Logo"
              className="h-9 w-9 object-contain"
              crossOrigin="anonymous" 
            />
          </div>
          <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            Gimnasio Pumental
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
          <>
            <div className="flex items-center gap-3">
              <Link
                to="/auth/login"
                className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
              >
                Iniciar sesión
              </Link>
              <Link
                to="#games"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                <Zap className="mr-1.5 size-4" />
                Jugar
              </Link>
            </div>
          </>

      </nav>
    </header>
  )
}
