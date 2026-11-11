import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { getPagesLastModified } from "@/lib/sanity/queries"

export const revalidate = 3600

// lastmod = dernière modification des documents Sanity dont la page dépend.
// Pas de lastmod quand la page n'en dépend pas (/contact) ou si Sanity ne
// répond pas : mieux vaut aucune date qu'une date de build.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL
  const dates = await getPagesLastModified().catch(() => null)
  const lastmod = (date?: string | null) => (date ? { lastModified: date } : {})

  return [
    { url: baseUrl,                 ...lastmod(dates?.home),       changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/pratiquer`,  ...lastmod(dates?.pratiquer),  changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/evenements`, ...lastmod(dates?.evenements), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/l-atelier`,  ...lastmod(dates?.atelier),    changeFrequency: "yearly",  priority: 0.7 },
    { url: `${baseUrl}/contact`,                                   changeFrequency: "yearly",  priority: 0.7 },
  ]
}
