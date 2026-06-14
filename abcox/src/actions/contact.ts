"use server"

import { prisma } from "@/lib/prisma"
import { resend, FROM_EMAIL, CONTACT_EMAIL } from "@/lib/resend"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact.schema"
import type { ActionResult } from "@/types"
import { ContactConfirmationEmail } from "@/../emails/contact-confirmation"
import { ContactNotificationEmail } from "@/../emails/contact-notification"

export async function submitContact(data: ContactFormData): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: "Datos inválidos. Verifica el formulario." }
  }

  try {
    const submission = await prisma.contactSubmission.create({
      data: parsed.data,
    })

    await Promise.allSettled([
      resend.emails.send({
        from: FROM_EMAIL,
        to: parsed.data.email,
        subject: "Recibimos tu solicitud — ABCOX Servicio Técnico",
        react: ContactConfirmationEmail({ name: parsed.data.name }),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: CONTACT_EMAIL,
        subject: `Nueva solicitud de servicio — ${parsed.data.name} (${parsed.data.commune})`,
        react: ContactNotificationEmail({ submission: { ...parsed.data, id: submission.id } }),
      }),
    ])

    return { success: true, data: undefined }
  } catch {
    return { success: false, error: "Error interno. Por favor intenta nuevamente." }
  }
}
