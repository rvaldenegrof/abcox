import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper"
import { ServiceCard } from "./ServiceCard"
import { services } from "@/config/services"

export function ServicesSection() {
  return (
    <SectionWrapper id="servicios" className="bg-slate-50">
      <SectionHeader
        label="Nuestros servicios"
        title="¿Qué podemos hacer por ti?"
        description="Ofrecemos soluciones completas para lavadoras y secadoras de todas las marcas y modelos, con garantía en cada trabajo."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </SectionWrapper>
  )
}
