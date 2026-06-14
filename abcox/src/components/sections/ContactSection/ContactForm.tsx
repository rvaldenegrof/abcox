"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact.schema"
import { submitContact } from "@/actions/contact"
import { brands } from "@/config/brands"

const communes = [
  "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central",
  "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja",
  "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo",
  "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda",
  "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal",
  "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón",
  "Santiago", "Vitacura",
]

export function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    const result = await submitContact(data)
    if (result.success) {
      toast.success("¡Solicitud enviada!", {
        description: "Te contactaremos en menos de 2 horas hábiles.",
      })
      reset()
    } else {
      toast.error("Error al enviar", {
        description: result.error,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Nombre completo</Label>
          <Input id="name" placeholder="Juan Pérez" {...register("name")} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Teléfono</Label>
          <Input id="phone" placeholder="+56 9 1234 5678" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="juan@ejemplo.cl" {...register("email")} />
        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="commune">Comuna</Label>
          <Select onValueChange={(v) => setValue("commune", v as string)}>
            <SelectTrigger id="commune">
              <SelectValue placeholder="Selecciona tu comuna" />
            </SelectTrigger>
            <SelectContent>
              {communes.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.commune && <p className="text-xs text-red-500">{errors.commune.message}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="equipmentType">Tipo de equipo</Label>
          <Select onValueChange={(v) => setValue("equipmentType", v as "lavadora" | "secadora")}>
            <SelectTrigger id="equipmentType">
              <SelectValue placeholder="Selecciona el equipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lavadora">Lavadora</SelectItem>
              <SelectItem value="secadora">Secadora</SelectItem>
            </SelectContent>
          </Select>
          {errors.equipmentType && <p className="text-xs text-red-500">{errors.equipmentType.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="brand">Marca del equipo</Label>
        <Select onValueChange={(v) => setValue("brand", v as string)}>
          <SelectTrigger id="brand">
            <SelectValue placeholder="Selecciona la marca" />
          </SelectTrigger>
          <SelectContent>
            {brands.map((b) => (
              <SelectItem key={b.slug} value={b.name}>{b.name}</SelectItem>
            ))}
            <SelectItem value="Otra">Otra marca</SelectItem>
          </SelectContent>
        </Select>
        {errors.brand && <p className="text-xs text-red-500">{errors.brand.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="problem">Descripción del problema</Label>
        <Textarea
          id="problem"
          rows={4}
          placeholder="Describe brevemente el problema que presenta tu equipo..."
          {...register("problem")}
        />
        {errors.problem && <p className="text-xs text-red-500">{errors.problem.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
      </Button>
    </form>
  )
}
