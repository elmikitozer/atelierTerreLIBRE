"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import type { GoogleReview } from "@/lib/types/reviews"

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill={i <= Math.round(rating) ? "#f1dd6a" : "#d6cfbf"}
          aria-hidden="true"
        >
          <path d="M8 1l1.85 3.75 4.15.6-3 2.92.71 4.13L8 10.25l-3.71 1.95.71-4.13L2 5.35l4.15-.6L8 1z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="bg-white border border-ink/10 rounded-sm p-6 flex flex-col h-full">
      <Stars rating={review.rating} size={14} />

      <p className="font-news italic text-[15px] leading-relaxed text-ink/85 flex-1 mt-4 mb-5">
        &ldquo;
        {review.text.length > 240
          ? review.text.slice(0, 240) + "…"
          : review.text}
        &rdquo;
      </p>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-ink/10">
        {review.authorPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.authorPhoto}
            alt={review.author}
            width={32}
            height={32}
            className="rounded-full shrink-0"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-photo shrink-0 flex items-center justify-center">
            <span className="font-mono text-[10px] text-mute">
              {review.author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-manrope text-[13px] font-semibold text-ink leading-tight">
            {review.author}
          </p>
          <p className="font-mono text-[10px] text-mute">{review.relativeTime}</p>
        </div>
      </div>
    </div>
  )
}

export default function ReviewsCarousel({ reviews }: { reviews: GoogleReview[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    onSelect()
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi, onSelect])

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.33%-14px)] min-w-0"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Contrôles */}
      <div className="flex items-center justify-between mt-8">
        {/* Dots */}
        <div className="flex gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Avis ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === selectedIndex ? "w-6 bg-ink" : "w-1.5 bg-ink/25"
              }`}
            />
          ))}
        </div>

        {/* Flèches */}
        <div className="flex gap-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Avis précédent"
            className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center disabled:opacity-30 hover:bg-ink/5 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Avis suivant"
            className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center disabled:opacity-30 hover:bg-ink/5 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
