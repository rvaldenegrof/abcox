import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper"
import { brands } from "@/config/brands"

export function BrandsSection() {
  return (
    <SectionWrapper id="marcas">
      <SectionHeader
        label="Marcas que reparamos"
        title="Especialistas en todas las marcas"
        description="Contamos con técnicos capacitados y repuestos para las principales marcas del mercado."
      />
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-5">
        {brands.map((brand) => (
          <div
            key={brand.slug}
            className="flex h-20 items-center justify-center rounded-xl border border-slate-100 bg-white px-4 transition-all hover:border-blue-100 hover:shadow-md"
          >
            <span className="text-base font-semibold text-slate-500">{brand.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
