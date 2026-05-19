import { getRentree } from "@/lib/sanity/queries"

export default async function AtelierIntroSection() {
  const rentree = await getRentree()

  return (
    <section className="px-5 md:px-12 py-14 md:py-20 bg-cream border-b border-ink/10">

      {/* Citation chapeau */}
      <div className="relative mb-14 md:mb-20 max-w-3xl">
        <span
          className="absolute -top-6 -left-3 md:-left-6 font-archivo-black text-[120px] md:text-[180px] leading-none text-ink/8 select-none pointer-events-none"
          aria-hidden="true"
        >
          «
        </span>
        <blockquote className="relative font-news italic text-[24px] md:text-[34px] leading-[1.25] text-ink">
          Libérez votre créativité, laissez la terre parler.
        </blockquote>
      </div>

      <div className="md:grid md:grid-cols-12 md:gap-16">

        {/* Storytelling */}
        <div className="md:col-span-7">
          <p className="font-news text-[16px] md:text-[18px] leading-[1.75] text-ink [&:first-letter]:float-left [&:first-letter]:font-archivo-black [&:first-letter]:text-[72px] [&:first-letter]:leading-[0.8] [&:first-letter]:mr-3 [&:first-letter]:mt-1">
            Terre Libre, atelier de modelage et de céramique « de mère en fille »,
            accueille son public, enfants et adultes, depuis 40 ans dans le
            9<sup>e</sup> arrondissement de Paris.
          </p>
          <p className="font-news text-[16px] md:text-[18px] leading-[1.75] mt-6 text-ink">
            Créé par Sylvia Katuszewski, il fut un des premiers ateliers de ce genre
            à Paris. Sa fille, Déborah, l&apos;a rejoint il y a une quinzaine
            d&apos;années.
          </p>
          <p className="font-news text-[16px] md:text-[18px] leading-[1.75] mt-6 text-ink">
            Ensemble, elles proposent une approche pédagogique particulière,
            éprouvée par de longues années de pratique et inspirée par les travaux
            du chercheur Arno Stern.
          </p>
        </div>

        {/* Encart inscriptions */}
        <div className="mt-10 md:mt-0 md:col-span-5">
          {rentree ? (
            <div className="bg-yellow rounded-sm p-6 md:p-8">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60 mb-4">
                Inscriptions ouvertes
              </p>
              <div className="flex flex-col gap-3">
                <div className="border-b border-ink/15 pb-3">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/50">
                    Adultes
                  </p>
                  <p className="font-archivo-black text-[18px] md:text-[20px] text-ink mt-1">
                    {rentree.dateAdultes}
                  </p>
                </div>
                <div className="border-b border-ink/15 pb-3">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/50">
                    Enfants
                  </p>
                  <p className="font-archivo-black text-[18px] md:text-[20px] text-ink mt-1">
                    {rentree.dateEnfants}
                  </p>
                </div>
              </div>
              <p className="font-news italic text-[14px] md:text-[15px] mt-4 text-ink/70 leading-snug">
                Contactez-nous pour tout renseignement.
              </p>
            </div>
          ) : (
            <div className="bg-yellow/40 rounded-sm p-6">
              <p className="font-news italic text-[15px] text-ink/60">
                Dates de rentrée à venir.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
