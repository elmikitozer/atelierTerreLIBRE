import Link from "next/link"
import IntroWithPhoto from "@/components/ui/IntroWithPhoto"
import { getTarifsEvenements } from "@/lib/sanity/queries"
import { Reveal, RevealList, RevealItem } from "@/components/ui/Reveal"

const PROGRAMME = [
  {
    step: "01",
    duration: "1h",
    title: "Modelage avec les enfants",
    desc: "Sous la conduite de Déborah, autour de la grande table.",
  },
  {
    step: "02",
    duration: "30 min",
    title: "Peinture",
    desc: "Pour obtenir un objet fini à apporter à la maison.",
  },
  {
    step: "03",
    duration: "30 min",
    title: "Goûter & cadeaux",
    desc: "Les parents prennent le relais pour le goûter et l’ouverture des cadeaux. Cette partie n’est pas encadrée par l’atelier.",
  },
]

export default async function AnniversairesSection() {
  const tarifs = await getTarifsEvenements()

  return (
    <section id="anniversaires" className="px-5 md:px-12 py-12 md:py-16 border-b border-ink/10">

      {/* En-tête — texte + photo */}
      <Reveal>
        <IntroWithPhoto
          src="/enfants/_DSC0877.jpg"
          alt="Anniversaire d'enfants à l'Atelier Terre Libre"
          sizes="(max-width: 768px) 100vw, 40vw"
          className="mb-10 md:mb-14"
        >
          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
            Anniversaires
          </p>
          <h2 className="font-archivo-black text-[28px] md:text-[36px] leading-[0.95] text-ink">
            Anniversaires <span className="italic">d&apos;enfants.</span>
          </h2>
          <p className="font-news italic text-[17px] md:text-[19px] leading-[1.45] mt-6 text-ink">
            Vous avez épuisé vos idées et votre énergie lors des anniversaires précédents ?
            Vous avez peu de temps ou peu d&apos;espace pour recevoir la longue liste
            d&apos;invités que vous a présentée votre bambin ?
          </p>
          <p className="font-news italic text-[17px] md:text-[19px] leading-[1.45] mt-3 text-ink">
            On gère pour vous, et on adore ça !
          </p>
          <p className="font-news text-[15px] md:text-[16px] leading-[1.6] mt-5 text-ink/80">
            Depuis de nombreuses années déjà, Terre Libre organise et prend en main
            l&apos;anniversaire de ses mini stagiaires qui souhaitent faire découvrir leur
            passion à leurs camarades — mais aussi à tous ceux en quête d&apos;une activité
            ludique, originale et créative !
          </p>
        </IntroWithPhoto>
      </Reveal>

      {/* Programme */}
      <div className="border-t border-ink/10 pt-10">
        <Reveal>
          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-6">
            Programme — 2 heures
          </p>
        </Reveal>
        <RevealList className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROGRAMME.map((item) => (
            <RevealItem key={item.step} className="bg-white border border-ink/10 rounded-sm p-5 md:p-6">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute">
                {item.step}
              </p>
              <p className="font-archivo-black text-[26px] md:text-[28px] mt-3 text-ink leading-none">
                {item.duration}
              </p>
              <p className="font-archivo-black text-[15px] md:text-[16px] mt-2 text-ink">
                {item.title}
              </p>
              <p className="font-news text-[14px] md:text-[15px] mt-3 text-ink/70 leading-snug">
                {item.desc}
              </p>
            </RevealItem>
          ))}
        </RevealList>
      </div>

      {/* Tarif + CTA */}
      <Reveal className="mt-8 md:grid md:grid-cols-12 md:gap-10 md:items-center">
        <div className="md:col-span-7">
          {tarifs ? (
            <div className="bg-ink text-accent rounded-sm p-5 md:p-6">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">
                Tarifs
              </p>
              <p className="font-archivo-black text-[28px] md:text-[32px] mt-2 leading-none">
                {tarifs.anniversaireBase} €
              </p>
              <p className="font-news text-[14px] md:text-[15px] mt-2 leading-snug opacity-90">
                Pour {tarifs.anniversaireSeuilEnfants} enfants, puis{" "}
                {tarifs.anniversaireEnfantSupp} € par enfant supplémentaire.
              </p>
            </div>
          ) : (
            <p className="font-news italic text-[15px] text-ink/70">
              Tarifs sur demande —{" "}
              <Link href="/contact" className="underline underline-offset-4">
                nous écrire
              </Link>
            </p>
          )}
        </div>
        <div className="md:col-span-5 mt-5 md:mt-0">
          <Link
            href="/contact"
            className="block md:inline-block bg-ink text-accent rounded-full text-center font-manrope font-semibold text-[13px] md:text-[14px] py-3.5 px-8 hover:opacity-80 transition-opacity"
          >
            Réserver un anniversaire →
          </Link>
        </div>
      </Reveal>

    </section>
  )
}
