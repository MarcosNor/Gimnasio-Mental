import { z } from "zod";

export const registerSchema = z.object({
  num_cta: z.coerce
  .number()
  .gte(100000000, "Número de cuenta inválido")
  .lte(999999999, "Número de cuenta inválido")
  .int("Número de cuenta debe ser un entero")
  .positive("Número de cuenta debe ser positivo"),

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