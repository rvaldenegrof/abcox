"use client"

import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/config/site"

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
