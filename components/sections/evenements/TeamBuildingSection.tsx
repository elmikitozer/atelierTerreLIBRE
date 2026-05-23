import Link from "next/link"
import IntroWithPhoto from "@/components/ui/IntroWithPhoto"
import { getTarifsEvenements } from "@/lib/sanity/queries"
import { Reveal, RevealList, RevealItem } from "@/components/ui/Reveal"

const OBJECTIFS = [
  "Création d'une synergie et d'une énergie positive",
  "Fédération d'une équipe",
  "Expression des désirs et des personnalités de chacun",
  "Expérimentation du travail collectif",
  "Découverte d'un langage créatif intuitif",
]

export default async function TeamBuildingSection() {
  const tarifs = await getTarifsEvenements()

  return (
    <section id="team-building" className="px-5 md:px-12 py-12 md:py-16 bg-ink border-b border-accent/10">

      <Reveal>
        <IntroWithPhoto
          src="/teamBuilding.jpg"
          alt="Session team building à l'Atelier Terre Libre"
          sizes="(max-width: 768px) 100vw, 40vw"
          className="mb-10 md:mb-12"
        >
          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-accent/60 mb-3">
            Pour les entreprises
          </p>
          <h2 className="font-archivo-black text-[28px] md:text-[36px] leading-[0.95] text-accent">
            Team <span className="italic">building.</span>
          </h2>
          <p className="font-news text-[17px] md:text-[19px] leading-[1.45] mt-6 text-cream">
            Partager en équipe une séance de modelage, c&apos;est la promesse d&apos;un
            moment agréable, car cet art a l&apos;avantage d&apos;être immédiatement
            accessible et réjouissant.
          </p>
          <p className="font-news text-[15px] md:text-[16px] leading-[1.6] mt-4 text-cream/80">
            Au-delà de ce premier aspect, c&apos;est aussi l&apos;opportunité de développer
            d&apos;autres objectifs plus stratégiques.
          </p>
          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-accent/60 mt-6 mb-3">
            Cinq objectifs
          </p>
          <RevealList className="flex flex-col gap-2">
            {OBJECTIFS.map((obj, i) => (
              <RevealItem key={i} className="border-b border-accent/10 pb-2">
                <span className="font-news text-[14px] md:text-[15px] text-cream/85 leading-snug">
                  {obj}
                </span>
              </RevealItem>
            ))}
          </RevealList>
        </IntroWithPhoto>
      </Reveal>

      {/* Mention tarif + CTA */}
      <Reveal className="mt-10 border-t border-accent/10 pt-8 md:flex md:items-center md:justify-between md:gap-10">
        {tarifs?.teamBuildingMention && (
          <p className="font-news italic text-[15px] md:text-[16px] text-cream/70">
            {tarifs.teamBuildingMention}
          </p>
        )}
        <Link
          href="/contact"
          className="mt-5 md:mt-0 shrink-0 block md:inline-block bg-accent text-ink rounded-full text-center font-manrope font-semibold text-[13px] md:text-[14px] py-3.5 px-8 hover:opacity-80 transition-opacity"
        >
          Demander un devis →
        </Link>
      </Reveal>

    </section>
  )
}
