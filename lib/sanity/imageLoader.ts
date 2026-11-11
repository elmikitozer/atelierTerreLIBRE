import type { ImageLoaderProps } from "next/image"

// Qualité fixe : la prop `quality` de next/image est volontairement ignorée.
const QUALITY = 80

// Loader next/image pour les images Sanity : le CDN Sanity redimensionne
// lui-même, sans passer par l'optimiseur Vercel (/_next/image).
// `src` est une URL cdn.sanity.io ; ses autres paramètres (rect…) sont conservés.
export default function sanityImageLoader({ src, width }: ImageLoaderProps) {
  const url = new URL(src)
  url.searchParams.set("w", String(width))
  url.searchParams.set("q", String(QUALITY))
  url.searchParams.set("auto", "format")
  url.searchParams.set("fit", "max")
  return url.toString()
}
