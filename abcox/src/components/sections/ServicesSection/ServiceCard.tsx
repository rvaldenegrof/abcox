import { WashingMachine, Wind, Shield, Search, Settings, Home } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Service } from "@/config/services"

const iconMap = {
  WashingMachine,
  Wind,
  Shield,
  Search,
  Settings,
  Home,
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Shield

  return (
    <Card className="group border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
        <p className="text-sm text-slate-500">{service.shortDescription}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
