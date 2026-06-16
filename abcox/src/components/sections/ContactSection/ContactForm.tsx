"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { MessageCircle } from "lucide-react"
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
import { brands } from "@/config/brands"
import { siteConfig } from "@/config/site"

const communes = [
  "Quilpué", "Villa Alemana", "Viña del Mar", "Valparaíso", "Concón",
  "Limache", "Olmué", "Peñablanca", "Casablanca", "Quillota",
  "La Calera", "Hijuelas",
]

export function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    const text = [
      "Hola ABCOX, quiero solicitar un presupuesto:",
      "",
      `Nombre: ${data.name}`,
      `Teléfono: ${data.phone}`,
      `Email: ${data.email}`,
      `Comuna: ${data.commune}`,
      `Equipo: ${data.equipmentType}`,
      `Marca: ${data.brand}`,
      `Problema: ${data.problem}`,
    ].join("\n")

    const phone = siteConfig.whatsapp.replace(/\D/g, "")
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank")
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

      <Button
        type="submit"
        size="lg"
        className="w-full bg-green-500 hover:bg-green-600"
        disabled={isSubmitting}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Solicitar por WhatsApp
      </Button>
    </form>
  )
}
