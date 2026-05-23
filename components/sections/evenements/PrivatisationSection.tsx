import Link from "next/link"
import { Reveal } from "@/components/ui/Reveal"

export default function PrivatisationSection() {
  return (
    <section id="privatisation" className="px-5 md:px-12 py-12 md:py-16 bg-accent border-b border-ink/10">
      <Reveal className="md:grid md:grid-cols-12 md:gap-10 md:items-end">

        <div className="md:col-span-7">
          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-ink/60 mb-3">
            En famille, entre amis
          </p>
          <h2
            className="font-archivo-black leading-[0.9] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            privatisation<span className="italic">.</span>
          </h2>
          <p className="font-news text-[17px] md:text-[20px] leading-[1.45] mt-6 max-w-[560px] text-ink">
            Possibilité de privatiser l&apos;atelier pour des événements entre amis,
            en famille… ou toute autre occasion à partager autour de la terre.
          </p>
        </div>

        <div className="md:col-span-5 mt-8 md:mt-0 flex flex-col gap-4 md:items-start">
          <Link
            href="/contact"
            className="inline-block bg-ink text-accent rounded-full font-manrope font-semibold text-[13px] md:text-[14px] py-3.5 px-8 hover:opacity-80 transition-opacity"
          >
            Nous écrire →
          </Link>
          <a
            href="tel:0618938588"
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-ink/70 hover:text-ink transition-colors"
          >
            06 18 93 85 88 — Déborah
          </a>
        </div>

      </Reveal>
    </section>
  )
}
