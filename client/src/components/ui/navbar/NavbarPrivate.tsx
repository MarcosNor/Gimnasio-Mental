import { Link } from 'react-router-dom'
import { useAuth } from "@/context/AuthContext.tsx"

const navLinks = [
  { label: "Games", href: "#games" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#about" },
]

export function NavbarPrivate() {
  const { logout, user } = useAuth()
  
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
            <li
              className="hidden text-sm font-medium text-muted-foreground transition-colors sm:block">
              Bienvenido {user?.num_cta}
            </li>
            <Link to ="/usuario/home/perfil"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Mi Perfil
            </Link>
            <Link to ="/" onClick={() => {
                logout();
              }}
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
              >
                Cerrar Sesión
            </Link>
          </>
      </nav>
    </header>
  )
}
