"use client"

import Image, { type ImageProps } from "next/image"
import localImageLoader from "@/lib/localImageLoader"

// next/image pour les photos de /public listées dans scripts/build-images.ts.
// Composant client : une prop fonction (loader) ne peut pas être passée
// depuis un Server Component.
export default function LocalImage({ alt, ...props }: Omit<ImageProps, "loader">) {
  return <Image {...props} alt={alt} loader={localImageLoader} />
}
