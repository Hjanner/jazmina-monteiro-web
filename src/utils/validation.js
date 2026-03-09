import { z } from 'zod'

export const modalSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  whatsapp: z.string().min(8, 'Ingresa un número de WhatsApp válido').regex(/^[+\d\s\-()]+$/, 'Formato inválido'),
  mensaje: z.string().optional(),
})

export const registroSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  whatsapp: z.string().min(8, 'Ingresa un número válido').regex(/^[+\d\s\-()]+$/, 'Formato inválido'),
  desafio: z.string().min(1, 'Selecciona una opción'),
})
