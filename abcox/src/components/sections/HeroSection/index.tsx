import Link from "next/link"
import { ArrowRight, MessageCircle, Shield, Clock, Star } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedNumber } from "@/components/shared/AnimatedNumber"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 py-24 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-blue-600/20 text-blue-300 hover:bg-blue-600/20 border-blue-500/30">
            +{siteConfig.yearsOfExperience} años de experiencia
          </Badge>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Servicio Técnico{" "}
            <span className="text-blue-400">Especializado</span>{" "}
            en Lavadoras y Secadoras
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Más de {siteConfig.yearsOfExperience} años entregando soluciones rápidas y
            garantizadas. Atención a domicilio en más de 30 comunas de Santiago.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contacto"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-blue-600 text-white hover:bg-blue-500 sm:w-auto"
              )}
            >
              Solicitar Servicio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "w-full border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
              )}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contactar por WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-400" />
              Garantía en todos los trabajos
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 w-4 text-blue-400" />
              Respuesta en menos de 2 horas
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-blue-400" />
              Técnicos certificados
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <p className="text-3xl font-bold text-white md:text-4xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
