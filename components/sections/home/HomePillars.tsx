import Link from "next/link"
import Image from "next/image"
import { Reveal, RevealList, RevealItem } from "@/components/ui/Reveal"

type Pillar = {
  title: string
  desc: string
  href: string
  image: string
  alt: string
}

const PILLARS: Pillar[] = [
  {
    title: "Cours hebdo",
    desc: "Au trimestre ou à l'année, enfants et adultes, journée et soirée.",
    href: "/pratiquer#cours",
    image: "/enfants/_DSC0885.jpg",
    alt: "Enfant modelant à l'atelier",
  },
  {
    title: "Stages",
    desc: "Vacances scolaires et stages dimanche en famille, à la carte.",
    href: "/pratiquer#stages",
    image: "/adultes/_DSC0989.jpg",
    alt: "Adulte travaillant la terre",
  },
  {
    title: "Anniversaires",
    desc: "On gère pour vous l'anniversaire de vos enfants, de A à Z.",
    href: "/evenements#anniversaires",
    image: "/enfants/_DSC0877.jpg",
    alt: "Anniversaire d'enfants à l'atelier",
  },
  {
    title: "Entreprises",
    desc: "Team building et privatisation de l'atelier, sur mesure.",
    href: "/evenements#team-building",
    image: "/teamBuilding.jpg",
    alt: "Session team building en céramique",
  },
]

export default function HomePillars() {
  return (
    <section id="pillars" className="bg-cream border-b border-ink/10 px-8 md:px-12 py-16 md:py-20">

      {/* En-tête */}
      <Reveal className="flex items-end justify-between mb-10">
        <h2 className="font-archivo-black text-[36px] md:text-[44px] leading-none tracking-tight text-ink">
          Ce qu&apos;on fait
        </h2>
        <p className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-mute hidden sm:block">
          4 façons de pratiquer
        </p>
      </Reveal>

      {/* Grille desktop */}
      <RevealList className="hidden md:grid grid-cols-4 gap-5">
        {PILLARS.map(({ title, desc, href, image, alt }) => (
          <RevealItem key={title}>
            <Link
              href={href}
              className="h-full bg-white border border-ink/10 rounded-sm flex flex-col hover:bg-accent/30 transition-colors group overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={image}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 1280px) 25vw, 20vw"
                  alt={alt}
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <p className="font-archivo-black text-[22px] leading-tight text-ink">
                  {title}
                </p>
                <p className="font-manrope text-[14px] leading-snug text-ink/75 flex-1">
                  {desc}
                </p>
                <p className="font-manrope text-[13px] underline underline-offset-4 text-ink mt-auto group-hover:opacity-70">
                  Découvrir →
                </p>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealList>

      {/* Liste mobile */}
      <RevealList className="flex flex-col gap-3 md:hidden">
        {PILLARS.map(({ title, desc, href, image, alt }) => (
          <RevealItem key={title}>
            <Link
              href={href}
              className="bg-white border border-ink/10 rounded-sm flex items-center gap-4 hover:bg-accent/30 transition-colors overflow-hidden"
            >
              <div className="relative w-20 h-20 shrink-0 overflow-hidden">
                <Image
                  src={image}
                  fill
                  className="object-cover"
                  sizes="80px"
                  alt={alt}
                />
              </div>
              <div className="flex-1 min-w-0 py-4 pr-4">
                <p className="font-archivo-black text-[18px] leading-tight text-ink">
                  {title}
                </p>
                <p className="font-manrope text-[12px] mt-1 text-ink/75 leading-snug">
                  {desc}
                </p>
              </div>
              <span className="text-ink/40 text-xl shrink-0 pr-4">→</span>
            </Link>
          </RevealItem>
        ))}
      </RevealList>

    </section>
  )
}
