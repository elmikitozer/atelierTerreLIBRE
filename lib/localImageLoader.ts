import type { ImageLoaderProps } from "next/image"

// Largeurs pré-générées par `npm run build:images` (scripts/build-images.ts).
// Doivent rester alignées sur deviceSizes + imageSizes de next.config.ts.
export const LOCAL_IMAGE_WIDTHS = [256, 384, 640, 828, 1200, 1920]

// Loader next/image pour les photos de /public : sert des fichiers WebP
// statiques pré-redimensionnés, sans passer par l'optimiseur Vercel.
//   /enfants/_DSC0885.jpg, 640  →  /optimized/enfants/_DSC0885-640.webp
export default function localImageLoader({ src, width }: ImageLoaderProps) {
  const w =
    LOCAL_IMAGE_WIDTHS.find((candidate) => candidate >= width) ??
    LOCAL_IMAGE_WIDTHS[LOCAL_IMAGE_WIDTHS.length - 1]
  return `/optimized${src.replace(/\.[a-z]+$/i, "")}-${w}.webp`
}
