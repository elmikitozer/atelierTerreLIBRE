import { Reveal, RevealList, RevealItem } from "@/components/ui/Reveal"

const STATS = [
  { value: "40", label: "ANS D'ATELIER" },
  { value: "25+", label: "ANNÉES POUR LES PLUS FIDÈLES" },
  { value: "2", label: "GÉNÉRATIONS À LA TABLE" },
]

export default function FideliteSection() {
  return (
    <section className="px-5 md:px-12 py-14 md:py-20 bg-cream border-b border-ink/10">

      <Reveal>
        <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-10 md:mb-14">
          Fidélité
        </p>
      </Reveal>

      <RevealList className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16">
        {STATS.map((stat) => (
          <RevealItem key={stat.label} className="border-t border-ink/15 pt-6">
            <p className="font-archivo-black text-[72px] md:text-[88px] leading-none text-ink">
              {stat.value}
            </p>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute mt-3">
              {stat.label}
            </p>
          </RevealItem>
        ))}
      </RevealList>

      <Reveal>
        <blockquote className="font-news italic text-[17px] md:text-[20px] leading-[1.55] text-ink/70 max-w-2xl border-l-2 border-ink/20 pl-5">
          Certains élèves viennent depuis plus de 25 ans. Chez Terre Libre,
          il est aussi question de fidélité et de liens affectifs.
        </blockquote>
      </Reveal>

    </section>
  )
}
