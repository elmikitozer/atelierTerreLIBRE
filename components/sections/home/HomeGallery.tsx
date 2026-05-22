import Link from "next/link"
import Image from "next/image"
import { getGaleriePhotos } from "@/lib/sanity/queries"
import { urlFor } from "@/lib/sanity/image"
import { Reveal, RevealList, RevealItem } from "@/components/ui/Reveal"

const DESKTOP_SPANS = [
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
]

export default async function HomeGallery() {
  const allPhotos = await getGaleriePhotos()
  const photos = allPhotos.slice(0, 6)

  return (
    <section className="bg-ink px-8 md:px-12 py-16 md:py-20">

      {/* En-tête */}
      <Reveal className="flex items-end justify-between mb-8">
        <h2 className="font-archivo-black text-[36px] md:text-[44px] leading-none text-cream">
          Dans l&apos;atelier
        </h2>
        <Link
          href="/l-atelier"
          className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase underline underline-offset-4 text-cream hidden sm:block hover:opacity-70"
        >
          Voir toutes les photos →
        </Link>
      </Reveal>

      {photos.length === 0 ? (
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/30 py-16 text-center">
          Galerie en cours de constitution
        </p>
      ) : (
        <>
          {/* Grille desktop asymétrique — 6 cols × 2 rows */}
          <RevealList className="hidden md:grid grid-cols-6 grid-rows-2 gap-3 h-[440px]">
            {photos.map((photo, i) => (
              <RevealItem
                key={photo._id}
                className={`relative rounded-sm overflow-hidden ${DESKTOP_SPANS[i]}`}
              >
                <Image
                  src={urlFor(photo.image).width(1200).quality(85).url()}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 33vw, 25vw"
                  alt={photo.caption || "Atelier Terre Libre"}
                />
              </RevealItem>
            ))}
          </RevealList>

          {/* Grille mobile — 2 colonnes */}
          <RevealList className="grid grid-cols-2 gap-2 md:hidden">
            {photos.slice(0, 4).map((photo) => (
              <RevealItem
                key={photo._id}
                className="relative aspect-square rounded-sm overflow-hidden"
              >
                <Image
                  src={urlFor(photo.image).width(600).quality(80).url()}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  alt={photo.caption || "Atelier Terre Libre"}
                />
              </RevealItem>
            ))}
          </RevealList>
        </>
      )}

      {/* CTA mobile */}
      <Reveal>
        <Link
          href="/l-atelier"
          className="mt-6 inline-block font-mono text-[10px] tracking-[0.2em] uppercase underline underline-offset-4 text-cream sm:hidden"
        >
          Voir toutes les photos →
        </Link>
      </Reveal>

      {/* CTA desktop */}
      <Reveal className="mt-8 hidden md:flex justify-center">
        <Link
          href="/l-atelier"
          className="px-8 py-3.5 rounded-full bg-yellow text-ink font-manrope font-semibold text-[14px] hover:opacity-90 transition-opacity"
        >
          Voir toutes les photos →
        </Link>
      </Reveal>

    </section>
  )
}
