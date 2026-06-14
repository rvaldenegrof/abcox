import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z
    .string()
    .min(9, "Ingresa un número de teléfono válido")
    .regex(/^[+\d\s()-]+$/, "Formato de teléfono inválido"),
  email: z.string().email("Ingresa un email válido"),
  commune: z.string().min(2, "Selecciona tu comuna"),
  brand: z.string().min(1, "Selecciona la marca del equipo"),
  equipmentType: z.enum(["lavadora", "secadora"]),
  problem: z
    .string()
    .min(10, "Describe el problema con al menos 10 caracteres")
    .max(500, "Máximo 500 caracteres"),
})

export type ContactFormData = z.infer<typeof contactSchema>
