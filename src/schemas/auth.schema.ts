import { z } from "zod";

export const registerSchema = z.object({
  num_cta: z
    .number()
    .gte(100000000, "El numero de cuenta debe tener 9 digitos")
    .lte(999999999, "El numero de cuenta debe tener 9 digitos")
    .int("Account number must be an integer")
    .positive("Account number must be positive"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Email is not valid"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

  fecha_nacimiento: z
    .string()
    .refine((date) => {
      const parsedDate = Date.parse(date);
      return !isNaN(parsedDate);
    }, "Fecha de nacimiento must be a valid date string"),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Email is not valid"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});