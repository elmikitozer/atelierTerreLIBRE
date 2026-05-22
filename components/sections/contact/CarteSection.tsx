import StyledMap from "@/components/map/StyledMap"
import { Reveal } from "@/components/ui/Reveal"

export default function CarteSection() {
  return (
    <section className="px-5 md:px-12 py-12 md:py-16 bg-cream border-b border-ink/10">
      <Reveal>
        <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-6">
          Sur la carte
        </p>

        <StyledMap />

        <div className="mt-5 text-center">
          <a
            href="https://maps.google.com/?q=17+rue+de+Vintimille+75009+Paris"
            target="_blank"
            rel="noopener noreferrer"
            className="font-news text-[14px] text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink transition-all"
          >
            Voir sur Google Maps →
          </a>
        </div>
      </Reveal>
    </section>
  )
}
