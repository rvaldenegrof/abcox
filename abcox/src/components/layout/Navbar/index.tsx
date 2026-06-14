"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-blue-700">
            ABCOX
          </span>
          <span
            className={cn(
              "hidden text-sm font-medium sm:block",
              scrolled ? "text-slate-500" : "text-slate-300"
            )}
          >
            Servicio Técnico
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                scrolled ? "text-slate-700" : "text-slate-200"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className={cn(
              "hidden items-center gap-1.5 text-sm font-medium transition-colors hover:text-blue-600 md:flex",
              scrolled ? "text-slate-700" : "text-slate-200"
            )}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>

          <a
            href={siteConfig.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}
          >
            Solicitar Servicio
          </a>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("md:hidden", scrolled ? "text-slate-700" : "text-white")}
                />
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-6 flex flex-col gap-1">
                <p className="mb-4 text-lg font-bold text-blue-700">ABCOX</p>
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2 border-t pt-4">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={siteConfig.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants(), "mt-2")}
                  >
                    Solicitar Servicio
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
