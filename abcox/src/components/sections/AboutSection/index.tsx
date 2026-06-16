import { CheckCircle } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper"
import { siteConfig } from "@/config/site"

const highlights = [
  "Más de 25 años de experiencia en el mercado",
  "Equipo de técnicos certificados y especializados",
  "Garantía de 3 meses en mano de obra",
  "Repuestos originales o de primera calidad",
  "Atención personalizada y transparente",
  "Cobertura en Quilpué, Villa Alemana, Viña del Mar y alrededores",
]

export function AboutSection() {
  return (
    <SectionWrapper id="nosotros" className="bg-slate-50">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            label="Quiénes somos"
            title="Más de 25 años cuidando tus electrodomésticos"
            className="text-left mb-8"
          />
          <p className="mb-6 text-slate-600 leading-relaxed">
            ABCOX nació hace más de {siteConfig.yearsOfExperience} años con una misión clara:
            entregar soluciones técnicas rápidas, honestas y garantizadas para lavadoras y
            secadoras en el hogar chileno.
          </p>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Con el tiempo, hemos formado un equipo de técnicos especializados que se mantienen
            permanentemente actualizados con las últimas tecnologías de electrodomésticos,
            permitiéndonos atender cualquier falla con precisión y eficiencia.
          </p>
          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-200">
            Mapa de cobertura
          </p>
          <h3 className="mb-4 text-2xl font-bold">Llegamos a tu hogar</h3>
          <p className="mb-6 text-blue-100">
            Atendemos Quilpué, Villa Alemana, Viña del Mar, Valparaíso, Concón, Limache, Olmué y comunas cercanas. Contáctanos para verificar disponibilidad en tu sector.
          </p>
          <div className="rounded-xl bg-white/10 p-4 text-center text-blue-200 text-sm backdrop-blur-sm">
            {/* Placeholder: reemplazar con Google Maps Embed */}
            <p className="font-medium text-white">Mapa interactivo</p>
            <p className="mt-1">Integración con Google Maps próximamente</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
