import { z } from "zod";
import { validarNumeroCuenta } from "../utils/validarNumCta.ts";

export const registerSchema = z.object({
  num_cta: z.coerce
  .number()
  .int("Número de cuenta debe ser un entero")
  .positive("Número de cuenta debe ser positivo")
  .refine ((num_cta) => validarNumeroCuenta(num_cta), {
    message: "Número de cuenta inválido"
  }),

  email: z
    .string()
    .trim()
    .min(1, "El correo es obligatorio")
    .email("El correo no es válido"),

  password: z
    .string()
    .min(6, "La contraseña debe ser más larga"),

  fecha_nacimiento: z.coerce.date(),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "El correo es obligatorio"),

  password: z
    .string()
    .min(6, "La contraseña debe ser más larga"),
});