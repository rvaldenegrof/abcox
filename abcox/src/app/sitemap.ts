import { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { services } from "@/config/services"

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((s) => ({
    url: `${siteConfig.url}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/nosotros`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
  ]
}
