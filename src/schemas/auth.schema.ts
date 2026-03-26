import { z } from "zod";

export const registerSchema = z.object({
  num_cta: z.coerce
  .number()
  .gte(100000000, "Numero de cuenta incorrecto")
  .lte(999999999, "Numero de cuenta incorrecto")
  .int("Numero de cuenta debe ser un entero")
  .positive("Numero de cuenta debe ser positivo"),

  email: z
    .string()
    .trim()
    .min(1, "El correo es obligatorio")
    .email("El correo no es válido"),

  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres"),

  fecha_nacimiento: z.coerce.date(),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "El correo es obligatorio")
    .email("El correo no es válido"),

  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});