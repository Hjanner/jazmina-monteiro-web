import { z } from 'zod'

export const registroSchema = z.object({
  nombre: z
    .string()
    .min(3, 'Ingresa tu nombre completo')
    .regex(/^[\p{L}\s'\-]+$/u, 'Solo letras, por favor')
    .refine(
      v => v.trim().split(/\s+/).filter(w => w.length > 0).length >= 2,
      { message: 'Ingresa tu nombre y apellido' }
    ),
  email: z.string().email('Ingresa un email válido'),
  telefono: z
    .string()
    .min(1, 'Ingresa tu número de teléfono')
    .regex(/^[\d\s\-()+]+$/, 'Solo números, espacios o guiones')
    .refine(v => v.replace(/\D/g, '').length >= 6, 'El número es demasiado corto'),
  consentimiento: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar para continuar' }),
  }),
})

export const modalSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  whatsapp: z.string().min(8, 'Ingresa un número de WhatsApp válido').regex(/^[+\d\s\-()]+$/, 'Formato inválido'),
  mensaje: z.string().optional(),
})
