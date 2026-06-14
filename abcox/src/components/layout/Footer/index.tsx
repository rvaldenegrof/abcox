import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="mb-2 text-xl font-bold text-white">ABCOX</p>
            <p className="text-sm leading-relaxed text-slate-400">
              Más de {siteConfig.yearsOfExperience} años entregando soluciones
              rápidas y garantizadas en reparación de lavadoras y secadoras.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Servicios
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#servicios" className="hover:text-white transition-colors">
                  Reparación de Lavadoras
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-white transition-colors">
                  Reparación de Secadoras
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-white transition-colors">
                  Mantención Preventiva
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-white transition-colors">
                  Servicio a Domicilio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Contacto
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. Todos los derechos reservados.
          </p>
          <p>Diseñado y desarrollado con Next.js</p>
        </div>
      </div>
    </footer>
  )
}
