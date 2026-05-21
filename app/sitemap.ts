import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atelier-terre-libre.fr"
  const lastModified = new Date()

  return [
    { url: baseUrl,                        lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/pratiquer`,         lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/evenements`,        lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/l-atelier`,         lastModified, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${baseUrl}/contact`,           lastModified, changeFrequency: "yearly",  priority: 0.7 },
  ]
}
