import { Resend } from "resend"

export const resend = new Resend(process.env.RESEND_API_KEY)

export const FROM_EMAIL = "ABCOX <noreply@abcox.cl>"
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "contacto@abcox.cl"
