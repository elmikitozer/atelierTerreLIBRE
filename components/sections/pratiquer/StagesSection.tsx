import Link from "next/link"
import { getStagesVacances, getStagesDimanche } from "@/lib/sanity/queries"
import { Reveal, RevealList, RevealItem } from "@/components/ui/Reveal"

export default async function StagesSection() {
  const [vacances, dimanche] = await Promise.all([
    getStagesVacances(),
    getStagesDimanche(),
  ])

  return (
    <div id="stages">

      {/* ── Stage dimanche ──────────────────────────── */}
      <Reveal>
        <section className="px-5 md:px-12 py-12 md:py-16 border-b border-ink/10">
          <div className="md:grid md:grid-cols-12 md:gap-10 md:items-start">

            {/* Texte */}
            <div className="md:col-span-7">
              <h2
                className="font-archivo-black leading-[0.9] tracking-tight text-ink"
                style={{ fontSize: "clamp(2.5rem, 9vw, 6.5rem)" }}
              >
                stage <span className="italic">dimanche.</span>
              </h2>
              <p className="font-news text-[17px] md:text-[20px] leading-[1.45] mt-6 max-w-[640px] text-ink">
                Terre Libre met en place régulièrement des stages à réaliser en famille
                (binôme ou plus) afin de découvrir la terre ou de se redécouvrir autour
                d&apos;une activité commune.
              </p>
              <p className="font-news text-[15px] md:text-[17px] leading-[1.55] mt-4 max-w-[640px] text-ink/85">
                Ce stage de 4 heures (de 11h30 à 15h30) est encadré par Déborah.
                Déjeuner convivial au rendez-vous (chacun est invité à apporter un petit
                quelque chose à grignoter).
              </p>
            </div>

            {/* Cartes */}
            <div className="md:col-span-5 mt-8 md:mt-0 space-y-3">

              {/* Tarif */}
              <div className="bg-ink text-accent rounded-sm p-5">
                <p className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase opacity-70">
                  Tarif famille
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {dimanche.length > 0 ? (
                    <>
                      <div>
                        <p className="font-archivo-black text-[26px] md:text-[28px] leading-none">
                          {dimanche[0].tarifAdulte} €
                        </p>
                        <p className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] uppercase opacity-70 mt-1">
                          par adulte
                        </p>
                      </div>
                      <div>
                        <p className="font-archivo-black text-[26px] md:text-[28px] leading-none">
                          {dimanche[0].tarifEnfant} €
                        </p>
                        <p className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] uppercase opacity-70 mt-1">
                          par enfant
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="font-news italic text-[14px] col-span-2">
                      Tarifs à venir.
                    </p>
                  )}
                </div>
              </div>

              {/* Dates */}
              {dimanche.length > 0 && (
                <div className="bg-white border border-ink/10 rounded-sm p-5">
                  <p className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-mute">
                    Prochaines dates
                  </p>
                  <div className="mt-3 space-y-2">
                    {dimanche.map((s, i) => (
                      <div
                        key={s._id}
                        className={`flex items-baseline justify-between text-[13px] md:text-[14px] ${
                          i < dimanche.length - 1
                            ? "border-b border-ink/10 pb-2"
                            : ""
                        }`}
                      >
                        <span className="font-archivo font-semibold text-ink">
                          Dim. {s.date}
                        </span>
                        <span className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] text-mute shrink-0 ml-3">
                          {s.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <Link
                href="/contact"
                className="block bg-ink text-accent rounded-full text-center font-manrope font-semibold text-[13px] md:text-[14px] py-3.5 hover:opacity-80 transition-opacity"
              >
                Réserver un stage dimanche →
              </Link>

            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Stages vacances ─────────────────────────── */}
      <section className="px-5 md:px-12 py-12 md:py-16 bg-accent border-b border-ink/10">

        <Reveal className="mb-10 md:mb-12">
          <h2
            className="font-archivo-black leading-[0.9] tracking-tight text-ink"
            style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}
          >
            stages <span className="italic">vacances.</span>
          </h2>
          <div className="mt-5 md:max-w-[480px]">
            <p className="font-news text-[17px] md:text-[20px] leading-[1.45] text-ink">
              Pendant les vacances scolaires, nous vous accueillons pour des stages de
              modelage céramique de <strong>10h à 12h</strong>. Ouverts à tous, sans
              distinction d&apos;âge ou de pratique.
            </p>
            <p className="font-news italic text-[14px] md:text-[16px] mt-3 text-ink/75">
              Échanges et belles rencontres garantis autour de notre grande table conviviale.
              Nos stages sont à la carte.
            </p>
          </div>
        </Reveal>

        {/* Tarifs + dates */}
        {vacances.length > 0 ? (
          <RevealList className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <RevealItem className="bg-white border border-ink/10 rounded-sm p-5 md:p-6">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute">
                À la carte
              </p>
              <p className="font-archivo-black text-[22px] md:text-[24px] mt-2 text-ink">
                Tarif enfant
              </p>
              <div className="mt-4 space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="font-archivo-black text-[26px] md:text-[28px] text-ink">
                    {vacances[0].tarifEnfantSemaine} €
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-mute">
                    la semaine
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-archivo-black text-[20px] md:text-[22px] text-ink">
                    {vacances[0].tarifEnfantSeance} €
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-mute">
                    la séance
                  </span>
                </div>
              </div>
            </RevealItem>

            <RevealItem className="bg-white border border-ink/10 rounded-sm p-5 md:p-6">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute">
                À la carte
              </p>
              <p className="font-archivo-black text-[22px] md:text-[24px] mt-2 text-ink">
                Tarif adulte
              </p>
              <div className="mt-4 space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="font-archivo-black text-[26px] md:text-[28px] text-ink">
                    {vacances[0].tarifAdulteSemaine} €
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-mute">
                    la semaine
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-archivo-black text-[20px] md:text-[22px] text-ink">
                    {vacances[0].tarifAdulteSeance} €
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-mute">
                    la séance
                  </span>
                </div>
              </div>
            </RevealItem>

            <RevealItem className="bg-ink text-accent rounded-sm p-5 md:p-6">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">
                Prochaines dates
              </p>
              <p className="font-archivo-black text-[18px] md:text-[20px] mt-2 leading-tight">
                Prochains stages
              </p>
              <div className="mt-4 space-y-3">
                {vacances.map((s, i) => (
                  <div
                    key={s._id}
                    className={`flex items-baseline justify-between text-[13px] md:text-[14px] ${
                      i < vacances.length - 1
                        ? "border-b border-accent/15 pb-3"
                        : ""
                    }`}
                  >
                    <span className="font-archivo">{s.dateRange}</span>
                    <span className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] shrink-0 ml-3">
                      {s.hours}
                    </span>
                  </div>
                ))}
              </div>
            </RevealItem>

          </RevealList>
        ) : (
          <p className="font-news italic text-[16px] text-ink/60">
            Prochains stages à venir — contactez-nous pour être prévenu.
          </p>
        )}
      </section>

    </div>
  )
}
