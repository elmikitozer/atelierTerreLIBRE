import type { ReviewsData } from "@/lib/types/reviews"
import ReviewsCarousel from "./ReviewsCarousel"
import { Reveal } from "@/components/ui/Reveal"

async function getReviews(): Promise<ReviewsData | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
    const res = await fetch(`${baseUrl}/api/google-reviews`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

function Stars({ rating, size = 18 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill={i <= Math.round(rating) ? "var(--color-accent)" : "#d6cfbf"}
          aria-hidden="true"
        >
          <path d="M8 1l1.85 3.75 4.15.6-3 2.92.71 4.13L8 10.25l-3.71 1.95.71-4.13L2 5.35l4.15-.6L8 1z" />
        </svg>
      ))}
    </div>
  )
}

export default async function HomeReviews() {
  const data = await getReviews()

  if (!data || data.reviews.length === 0) return null

  const goodReviews = data.reviews.filter((r) => r.rating >= 4).slice(0, 5)

  if (goodReviews.length === 0) return null

  return (
    <Reveal>
    <section className="bg-cream border-t border-ink/10 py-16 md:py-24 px-5 md:px-12">
      <div className="max-w-screen-lg mx-auto">

        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
              Ils nous font confiance
            </p>
            <h2 className="font-archivo-black text-[36px] md:text-[44px] leading-none text-ink">
              Avis Google
            </h2>
          </div>

          {data.rating && (
            <div className="flex items-center gap-3">
              <span className="font-archivo-black text-[40px] leading-none text-ink">
                {data.rating.toFixed(1)}
              </span>
              <div className="flex flex-col gap-1">
                <Stars rating={data.rating} />
                <span className="font-mono text-[10px] tracking-[0.1em] text-mute">
                  {data.totalReviews} avis
                </span>
              </div>
            </div>
          )}
        </div>

        <ReviewsCarousel reviews={goodReviews} />

        {data.googleMapsUri && (
          <div className="mt-8 text-center">
            <a
              href={data.googleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope text-[13px] text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink transition-all"
            >
              Voir tous les avis sur Google →
            </a>
          </div>
        )}
      </div>
    </section>
    </Reveal>
  )
}
