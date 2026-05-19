type Props = {
  pageName: string
  supraLeft?: string
  supraRight?: string
  tagline?: string
  /** Utilise --fs-page-events (plus petit) pour les noms longs comme "événements" */
  compact?: boolean
}

export default function PageHero({
  pageName,
  supraLeft,
  supraRight,
  tagline,
  compact = false,
}: Props) {
  const fsVar = compact ? "var(--fs-page-events)" : "var(--fs-page-name)"

  return (
    <section className="bg-yellow">

      {/* Barre éditoriale */}
      <div className="px-5 md:px-12 pt-2 pb-2">
        <div className="flex items-end justify-between">
          {supraLeft && (
            <p className="font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-ink">
              {supraLeft}
            </p>
          )}
          {supraRight && (
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink hidden md:block">
              {supraRight}
            </p>
          )}
        </div>
        <div className="h-px bg-ink/20 mt-2" />
      </div>

      {/* Nom de page géant */}
      <div className="px-5 md:px-12 pt-8 pb-10 md:pt-12 md:pb-14">
        <h1
          className="font-archivo-black leading-[0.85] tracking-[-0.02em] text-ink"
          style={{ fontSize: fsVar }}
        >
          {pageName}<span className="italic">.</span>
        </h1>
        {tagline && (
          <p className="font-news italic text-[18px] md:text-[22px] leading-[1.35] mt-6 text-ink max-w-[600px]">
            {tagline}
          </p>
        )}
      </div>

    </section>
  )
}
