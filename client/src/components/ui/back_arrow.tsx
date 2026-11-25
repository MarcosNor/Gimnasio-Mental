// components/ui/back-button.tsx
import { useNavigate, useLocation } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "./button"

// Rutas base que no necesitan un boton de regreso
const RUTAS_SIN_BOTON = ["/usuario/home", "/"]

export default function BackButton() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  if (RUTAS_SIN_BOTON.includes(pathname)) return null

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <Button
        variant="back"
        onClick={() => window.history.length > 1 ? navigate(-1) : navigate("/usuario/home")}
      >
        <ArrowLeft className="size-4" />
        Regresar
      </Button>
    </div>
  )
}