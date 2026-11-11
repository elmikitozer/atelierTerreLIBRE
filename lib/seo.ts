import type { Metadata } from "next"

export const SITE_NAME = "Atelier Terre Libre"

// Champs Open Graph / Twitter communs à tout le site. Next fusionne les
// métadonnées en surface : une page qui déclare `openGraph` écrase tout le bloc
// du layout, d'où ces constantes reprises par chaque page.
export const OG_BASE = {
  type: "website",
  locale: "fr_FR",
  siteName: SITE_NAME,
  images: [
    {
      url: "/SylviaDeborah.jpg",
      width: 1200,
      height: 800,
      alt: "Sylvia et Déborah, fondatrices de l'Atelier Terre Libre",
    },
  ],
} satisfies Metadata["openGraph"]

export const TWITTER_BASE = {
  card: "summary_large_image",
  images: ["/SylviaDeborah.jpg"],
} satisfies Metadata["twitter"]

// Métadonnées d'une page : og:title = title, og:description = meta description,
// og:url = canonical (idem pour twitter:title et twitter:description).
// `absoluteTitle` : le title est utilisé tel quel, sans le suffixe du site.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string
  description: string
  path: string
  absoluteTitle?: boolean
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} — ${SITE_NAME}`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { ...OG_BASE, url: path, title: fullTitle, description },
    twitter: { ...TWITTER_BASE, title: fullTitle, description },
  }
}
