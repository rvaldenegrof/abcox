import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper"

const testimonials = [
  {
    name: "María González",
    commune: "Las Condes",
    rating: 5,
    comment:
      "Excelente servicio. El técnico llegó puntual, diagnosticó el problema en minutos y lo solucionó el mismo día. Mi lavadora quedó como nueva.",
  },
  {
    name: "Carlos Rojas",
    commune: "Providencia",
    rating: 5,
    comment:
      "Muy profesionales. Presupuesto claro, trabajo garantizado y precio justo. Los llamaré nuevamente sin dudarlo.",
  },
  {
    name: "Ana Martínez",
    commune: "Ñuñoa",
    rating: 5,
    comment:
      "Repararon mi secadora cuando otros servicios decían que había que cambiarla. Honestidad y buen trabajo. 100% recomendados.",
  },
  {
    name: "Roberto Silva",
    commune: "Santiago Centro",
    rating: 5,
    comment:
      "Servicio rápido y eficiente. Coordiné la visita por WhatsApp y al día siguiente ya tenía la lavadora funcionando.",
  },
  {
    name: "Claudia Torres",
    commune: "Maipú",
    rating: 5,
    comment:
      "Los mejores que he encontrado. Técnico muy amable y explicó todo con claridad. La garantía es un plus importante.",
  },
  {
    name: "Felipe Morales",
    commune: "La Florida",
    rating: 5,
    comment:
      "Solución rápida a un problema que tenía hace semanas. Precio razonable y excelente atención. Muy satisfecho.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonios" className="bg-slate-50">
      <SectionHeader
        label="Testimonios"
        title="Lo que dicen nuestros clientes"
        description="La satisfacción de nuestros clientes es nuestra mayor recompensa."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-slate-100">
            <CardContent className="pt-6">
              <StarRating rating={t.rating} />
              <blockquote className="mt-3 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.comment}&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-400">{t.commune}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
