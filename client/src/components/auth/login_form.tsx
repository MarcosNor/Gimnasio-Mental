import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, Link  } from "react-router-dom"

import { useAuth } from "@/context/AuthContext"
import { type LoginUser } from "@/types/login"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export function LogForm() {
  const [isLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const { 
    register, 
    handleSubmit, 
    formState: {errors},
  } = useForm<LoginUser>();
   
  const { signin, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit (async (data) => {
    const success = await signin(data);
    if (success) navigate('/usuario/home');
  });

  return (
    <Card className="w-full max-w-md border-none shadow-lg">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary-foreground"
            aria-hidden="true"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
          </svg>
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">
          ¡Bienvenido!
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Introduce tus datos para ingresar a tu cuenta
        </CardDescription>
        {signinErrors.map((error, i) => (
          <p key={i} className="text-sm text-red-500 text-center my-2">
            {error}
          </p>
        ))}
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
          <div className="flex flex-col gap-2">

            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="nombre@ejemplo.com"
              autoComplete="email"
              className="h-11"
              {...register('email', {
                 required: "El correo es obligatorio",
                 pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Ingresa un correo electrónico válido"
                  }
                 })}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Contraseña</Label>
              {/*
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                ¿Olvidaste tu contraseña? 
              </a>
                */}
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                autoComplete="current-password"
                className="h-11 pr-10"
                {...register("password", { required: "La contraseña es requerida" })}
              />
              {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" x2="23" y1="1" y2="23" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <Button type="submit" size="lg" className="h-11 w-full" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Iniciando sesión...
              </span>
            ) : (
              "Iniciar sesión"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          {"¿No tienes una cuenta? "}
          <Link
            to="/auth/register"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Regístrate
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
