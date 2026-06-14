import { Phone, MessageCircle, Mail, Clock } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper"
import { ContactForm } from "./ContactForm"
import { siteConfig } from "@/config/site"

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.phone,
    href: siteConfig.socialLinks.whatsapp,
    description: "Respuesta inmediata",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    description: "Llamada directa",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Respuesta en 24 horas",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun-Vie 8:30-19:00",
    href: null,
    description: "Sáb 9:00-14:00",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
]

export function ContactSection() {
  return (
    <SectionWrapper id="contacto" className="bg-slate-50">
      <SectionHeader
        label="Contacto"
        title="¿Necesitas ayuda? Contáctanos"
        description="Estamos disponibles para atenderte. Escríbenos o llámanos y te responderemos a la brevedad."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-4"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${method.bg}`}>
                  <method.icon className={`h-5 w-5 ${method.color}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {method.label}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-sm font-medium text-slate-900 hover:text-blue-600"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-medium text-slate-900">{method.value}</p>
                  )}
                  <p className="text-xs text-slate-400">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-6 text-xl font-semibold text-slate-900">
            Solicitar presupuesto
          </h3>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  )
}
