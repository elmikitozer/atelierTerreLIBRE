import { SITE_URL } from "@/lib/site"

// Fil d'Ariane à deux niveaux : Accueil > page courante.
export default function BreadcrumbSchema({
  name,
  path,
}: {
  name: string
  path: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
