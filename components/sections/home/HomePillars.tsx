import Link from "next/link";

const PILLARS = [
  {
    n: "01",
    title: "Cours hebdo",
    desc: "Au trimestre ou à l'année, enfants et adultes, journée et soirée.",
    href: "/pratiquer#cours",
  },
  {
    n: "02",
    title: "Stages",
    desc: "Vacances scolaires et stages dimanche en famille, à la carte.",
    href: "/pratiquer#stages",
  },
  {
    n: "03",
    title: "Anniversaires",
    desc: "On gère pour vous l'anniversaire de vos enfants, de A à Z.",
    href: "/evenements#anniversaires",
  },
  {
    n: "04",
    title: "Entreprises",
    desc: "Team building et privatisation de l'atelier, sur mesure.",
    href: "/evenements#team-building",
  },
] as const;

export default function HomePillars() {
  return (
    <section className="bg-cream border-b border-ink/10 px-8 md:px-12 py-16 md:py-20">

      {/* En-tête */}
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-archivo-black text-[36px] md:text-[44px] leading-none tracking-tight text-ink">
          Ce qu&apos;on fait
        </h2>
        <p className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-mute hidden sm:block">
          4 façons de pratiquer
        </p>
      </div>

      {/* Grille desktop */}
      <div className="hidden md:grid grid-cols-4 gap-5">
        {PILLARS.map(({ n, title, desc, href }) => (
          <Link
            key={n}
            href={href}
            className="bg-white border border-ink/10 rounded-sm p-6 flex flex-col gap-5 hover:bg-yellow/30 transition-colors group"
          >
            {/* <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mute">
              {n}
            </p> */}
            {/* Photo placeholder */}
            <div className="h-[160px] rounded-sm bg-photo" aria-hidden="true" />
            <div className="flex-1">
              <p className="font-archivo-black text-[22px] leading-tight text-ink">
                {title}
              </p>
              <p className="font-manrope text-[14px] leading-snug mt-2 text-ink/75">
                {desc}
              </p>
            </div>
            <p className="font-manrope text-[13px] underline underline-offset-4 text-ink mt-auto group-hover:opacity-70">
              Découvrir →
            </p>
          </Link>
        ))}
      </div>

      {/* Liste mobile */}
      <div className="flex flex-col gap-3 md:hidden">
        {PILLARS.map(({ n, title, desc, href }) => (
          <Link
            key={n}
            href={href}
            className="bg-white border border-ink/10 rounded-sm p-4 flex items-center gap-4 hover:bg-yellow/30 transition-colors"
          >
            {/* Vignette */}
            <div className="w-20 h-20 rounded-sm bg-photo shrink-0" aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-mute">
                {n}
              </p>
              <p className="font-archivo-black text-[18px] leading-tight text-ink mt-0.5">
                {title}
              </p>
              <p className="font-manrope text-[12px] mt-1 text-ink/75 leading-snug">
                {desc}
              </p>
            </div>
            <span className="text-ink/40 text-xl shrink-0">→</span>
          </Link>
        ))}
      </div>

    </section>
  );
}
