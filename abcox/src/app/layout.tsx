import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { siteConfig } from "@/config/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Reparación de Lavadoras y Secadoras`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [
    "reparación de lavadoras",
    "servicio técnico lavadoras",
    "reparación de secadoras",
    "técnico lavadoras a domicilio",
    "reparación de secadoras Santiago",
    "mantención de lavadoras",
    "servicio técnico secadoras",
    "ABCOX",
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} | Reparación de Lavadoras y Secadoras`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | Reparación de Lavadoras y Secadoras`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans antialiased">
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
