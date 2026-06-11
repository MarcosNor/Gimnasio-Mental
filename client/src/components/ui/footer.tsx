import { Link } from "react-router";

export function Footer() {
  return (
    <footer id="sobre" className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">


        <div className="flex items-center justify-center">
          <a
            href="https://www.dgoae.unam.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2">
            <img
              src={"/images/logos/Logo_DGOAESEC.png"}
              alt="Logo"
              className="w-90 max-w-md rounded-lg"
              crossOrigin="anonymous" 
            />
          </a>

          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Gimnasio Pumental
            </span>
          </Link>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Toda buena construcción empieza por materiales y cimientos adecuados.
        </p>

        <p className="text-xs text-muted-foreground">
          {/* © {new Date().getFullYear()} Gimnasio Pumental. Todos los derechos reservados. */}
        </p>
      </div>
    </footer>
  )
}
