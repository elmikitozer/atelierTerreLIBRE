"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { urlFor } from "@/lib/sanity/image"
import type { GaleriePhoto } from "@/lib/sanity/queries"

const SPANS = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
]

type Props = { photos: GaleriePhoto[] }

export default function GalerieGrid({ photos }: Props) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = photos.map((p) => ({
    src: urlFor(p.image).width(2400).quality(95).url(),
    alt: p.caption || "Atelier Terre Libre",
  }))

  function openAt(i: number) {
    setIndex(i)
    setOpen(true)
  }

  return (
    <>
      {/* Desktop — grille asymétrique */}
      <div className="hidden md:grid grid-cols-4 grid-rows-[200px_200px_200px] gap-2 auto-rows-[200px]">
        {photos.map((photo, i) => (
          <button
            key={photo._id}
            onClick={() => openAt(i)}
            className={`relative overflow-hidden rounded-sm group cursor-zoom-in ${SPANS[i % SPANS.length]}`}
            aria-label={`Voir la photo ${i + 1} en grand`}
          >
            <Image
              src={urlFor(photo.image).width(1600).quality(90).url()}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 50vw, 33vw"
              alt={photo.caption || "Atelier Terre Libre"}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Mobile — 2 colonnes */}
      <div className="grid md:hidden grid-cols-2 gap-2">
        {photos.map((photo, i) => (
          <button
            key={photo._id}
            onClick={() => openAt(i)}
            className="relative aspect-square overflow-hidden rounded-sm cursor-zoom-in"
            aria-label={`Voir la photo ${i + 1} en grand`}
          >
            <Image
              src={urlFor(photo.image).width(800).quality(85).url()}
              fill
              className="object-cover"
              sizes="50vw"
              alt={photo.caption || "Atelier Terre Libre"}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: false }}
      />
    </>
  )
}
