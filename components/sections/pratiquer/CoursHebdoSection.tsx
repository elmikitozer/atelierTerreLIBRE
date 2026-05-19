import { getCoursEnfants, getCoursAdultes } from "@/lib/sanity/queries"
import ScheduleTable from "@/components/ui/ScheduleTable"
import PriceCard from "@/components/ui/PriceCard"
import SectionPhoto from "@/components/ui/SectionPhoto"
import IntroWithPhoto from "@/components/ui/IntroWithPhoto"

export default async function CoursHebdoSection() {
  const [enfants, adultes] = await Promise.all([getCoursEnfants(), getCoursAdultes()])

  return (
    <div id="cours">

      {/* ── Intro ───────────────────────────────────── */}
      <section className="px-5 md:px-12 py-12 md:py-14 border-b border-ink/10">
        <IntroWithPhoto
          src="/enfants/_DSC0885.jpg"
          alt="Atelier Terre Libre — cours hebdomadaires"
          objectPosition="center 25%"
          sizes="(max-width: 768px) 0px, 42vw"
          caption="↑ Autour de la grande table"
          hidePhotoOnMobile
        >
          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-5">
            Cours hebdomadaires
          </p>
          <p className="font-news text-[20px] md:text-[24px] leading-[1.4] text-ink">
            En cours, les élèves se retrouvent autour d&apos;une grande table conviviale
            pour créer librement — par groupe d&apos;enfants ou d&apos;adultes, sans
            distinction d&apos;âge. Chacun est libre de créer selon ses envies.{" "}
            <em>Pas de thème imposé.</em>
          </p>
          <p className="font-news text-[16px] md:text-[18px] leading-[1.6] mt-4 text-ink/80">
            Toutes les étapes de la terre sont ici abordées : modelage, creusage,
            séchage, ponçage, cuisson, émaillage.
          </p>
          {enfants?.essaiPossible && (
            <p className="font-news italic text-[15px] md:text-[16px] mt-4 text-ink/70">
              Cours d&apos;essai possible.
            </p>
          )}
        </IntroWithPhoto>
      </section>

      {/* ── Cours enfants ───────────────────────────── */}
      <section className="px-5 md:px-12 py-12 md:py-14 border-b border-ink/10">

        {/* En-tête */}
        <div className="mb-7">
          <h2 className="font-archivo-black text-[28px] md:text-[32px] leading-[0.95] text-ink">
            Cours <span className="italic">enfants.</span>
          </h2>
          {enfants && (
            <p className="font-news text-[14px] md:text-[15px] mt-2 text-ink/75">
              À partir de {enfants.minAge} ans.
            </p>
          )}
        </div>

        {/* Photo · Créneaux · Tarifs — alignés */}
        <div className="md:grid md:grid-cols-12 md:gap-10">

          <div className="hidden md:block md:col-span-4">
            <SectionPhoto
              src="/enfants/_DSC0896.jpg"
              alt="Atelier Terre Libre — cours enfants"
              sizes="(max-width: 768px) 0px, 33vw"
            />
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
              Créneaux
            </p>
            {enfants?.schedule?.length ? (
              <ScheduleTable slots={enfants.schedule} />
            ) : (
              <p className="font-news italic text-[14px] text-ink/60">
                Créneaux à venir.
              </p>
            )}
          </div>

          <div className="md:col-span-4 mt-8 md:mt-0">
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
              Tarifs
            </p>
            {enfants?.prices?.length ? (
              <div className="flex flex-col gap-2">
                {enfants.prices.map((p, i) => (
                  <PriceCard
                    key={i}
                    duration={p.duration}
                    amount={p.amount}
                    unit={p.unit}
                  />
                ))}
              </div>
            ) : null}
          </div>

        </div>
      </section>

      {/* ── Cours adultes ───────────────────────────── */}
      <section className="px-5 md:px-12 py-12 md:py-14 border-b border-ink/10 bg-cream/60">

        {/* En-tête */}
        <div className="mb-7">
          <h2 className="font-archivo-black text-[28px] md:text-[32px] leading-[0.95] text-ink">
            Cours <span className="italic">adultes.</span>
          </h2>
          <p className="font-news text-[14px] md:text-[15px] mt-2 text-ink/75">
            En journée et en soirée, du lundi au samedi. Tous niveaux.
          </p>
          {adultes?.adulteSurCreneauEnfant && (
            <div className="mt-4 md:inline-block bg-yellow rounded-sm px-4 py-3">
              <p className="font-news italic text-[14px] md:text-[15px] leading-snug text-ink">
                Les adultes sont les bienvenus sur les créneaux enfants !
              </p>
            </div>
          )}
        </div>

        {/* Photo · Créneaux · Tarifs — alignés */}
        <div className="md:grid md:grid-cols-12 md:gap-10">

          <div className="hidden md:block md:col-span-4">
            <SectionPhoto
              src="/adultes/_DSC0989.jpg"
              alt="Atelier Terre Libre — cours adultes"
              objectPosition="center 1%"
              sizes="(max-width: 768px) 0px, 33vw"
            />
            <div className="mt-3 bg-ink text-yellow rounded-sm p-4">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">
                Cours d&apos;essai
              </p>
              <p className="font-news italic text-[14px] md:text-[15px] mt-1 leading-snug">
                Venez modeler une première fois, sans engagement. Nous écrire pour réserver.
              </p>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
              Créneaux
            </p>
            {adultes?.schedule?.length ? (
              <ScheduleTable slots={adultes.schedule} />
            ) : (
              <p className="font-news italic text-[14px] text-ink/60">
                Créneaux à venir.
              </p>
            )}
          </div>

          <div className="md:col-span-4 mt-8 md:mt-0">
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
              Tarifs
            </p>
            {adultes?.prices?.length ? (
              <div className="flex flex-col gap-2">
                {adultes.prices.map((p, i) => (
                  <PriceCard
                    key={i}
                    duration={p.duration}
                    amount={p.amount}
                    unit={p.unit}
                  />
                ))}
              </div>
            ) : null}
          </div>

        </div>
      </section>

    </div>
  )
}
