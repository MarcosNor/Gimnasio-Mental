
export function Footer() {
  return (
    <footer id="about" className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <a href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <img
              src={"/images/logos/Logo_DGOAESEC.png"}
              alt="Logo"
              className="w-90 max-w-md rounded-lg"
              crossOrigin="anonymous" 
            />
          </div>
          <span className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)]">
            Gimnasio Pumental
          </span>
        </a>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Toda buena construcción empieza por materiales y cimientos adecuados.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#juegos" className="transition-colors hover:text-foreground">Juegos</a>
          <a href="#beneficios" className="transition-colors hover:text-foreground">Beneficios</a>
          <a href="#sobre" className="transition-colors hover:text-foreground">Sobre DGOAE</a>
        </div>
        <p className="text-xs text-muted-foreground">
          {'Built with care for student minds.'}
        </p>
      </div>
    </footer>
  )
}
