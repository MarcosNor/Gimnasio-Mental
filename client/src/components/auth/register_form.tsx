import { useState, useCallback} from "react"
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";

import { type RegisterUser } from "@/types/registro";

import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

// Fecha máxima para el campo de fecha de nacimiento (15 años atrás desde hoy)
const maxBirthDate = new Date();
maxBirthDate.setFullYear(maxBirthDate.getFullYear() - 14)
const maxDateString = maxBirthDate.toISOString().split('T')[0];

function RegForm() {

  const navigate = useNavigate();

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaKey, setCaptchaKey] = useState(0);
  
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterUser>();
  const { signup, isAuthenticated, errors : signupErrors } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  
  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const handleCaptchaChange = useCallback((token: string | null) => {
    setCaptchaToken(token);
  }, []);
  
  const onSubmit = handleSubmit(async (values: RegisterUser) => {
    if (!captchaToken) {
      alert("Por favor, completa el captcha antes de registrarte.");
      return;
    }

    const success = await signup(values, captchaToken);
    if (success) {
      navigate('/usuario/home')
    } else {
      // Si el registro falla, reseteamos el captcha para que el usuario pueda intentarlo de nuevo
      setCaptchaKey(k => k + 1);
      setCaptchaToken(null);
    }
  });
  
  return (
    <Card className="w-full max-w-md border-none shadow-lg">
      <CardHeader className="text-center">
        {/* Icono idéntico al Login */}
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" x2="19" y1="8" y2="14" />
            <line x1="22" x2="16" y1="11" y2="11" />
          </svg>
        </div>

        <CardTitle className="text-2xl font-bold tracking-tight">
          Crea tu cuenta
        </CardTitle>

        <CardDescription className="text-muted-foreground">
          Completa tus datos para empezar a entrenar
        </CardDescription>

        {signupErrors.map((error, i) => (
          <p key={i} className="text-sm text-red-500 text-center mt-2 font-medium">
            {error}
          </p>
        ))}
      </CardHeader>

      <CardContent>
        <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
          
          {/* Número de Cuenta */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="num_cta">Número de Cuenta</Label>
            <Input
              id="num_cta"
              type="number"
              placeholder="123456789"
              className="h-11"
              {...register('num_cta', { required: "El número de cuenta es obligatorio", valueAsNumber: true })}
            />
            {errors.num_cta && <p className="text-xs text-red-500">{errors.num_cta.message}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="nombre@ejemplo.com"
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

          {/* Password con toggle de visibilidad */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Contraseña</Label>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="h-11 pr-10"
                {...register('password', { 
                  required: "La contraseña es obligatoria", 
                  minLength: { value: 6, message: "Mínimo 6 caracteres" }
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" x2="23" y1="1" y2="23" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                )}
              </button>

            </div>
            {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
          </div>

          {/* Fecha de Nacimiento */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="fecha_nacimiento">Fecha de Nacimiento</Label>
            <Input
              id="fecha_nacimiento"
              type="date"
              max={maxDateString}
              className="h-11"
              {...register('fecha_nacimiento', { required: "La fecha es obligatoria" })}
            />
            {errors.fecha_nacimiento && <p className="text-xs text-red-500">{errors.fecha_nacimiento.message}</p>}
          </div>

            <ReCAPTCHA 
              key={captchaKey}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange} 
            />

          <Button type="submit" size="lg" className="h-11 w-full mt-2">
            Registrar Usuario
          </Button>
        </form>
      </CardContent>

      <CardFooter className="justify-center border-t pt-6">
        <p className="text-sm text-muted-foreground">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/auth/login"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Inicia sesión
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

export default RegForm;
