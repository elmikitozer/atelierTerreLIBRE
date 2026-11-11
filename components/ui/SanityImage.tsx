"use client"

import Image, { type ImageProps } from "next/image"
import sanityImageLoader from "@/lib/sanity/imageLoader"

// next/image avec le loader Sanity. Composant client : une prop fonction
// (loader) ne peut pas être passée depuis un Server Component.
export default function SanityImage({ alt, ...props }: Omit<ImageProps, "loader">) {
  return <Image {...props} alt={alt} loader={sanityImageLoader} />
}
