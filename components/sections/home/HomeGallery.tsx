import Link from "next/link";

export default function HomeGallery() {
  return (
    <section className="bg-ink px-8 md:px-12 py-16 md:py-20">

      {/* En-tête */}
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-archivo-black text-[36px] md:text-[44px] leading-none text-cream">
          Dans l&apos;atelier
        </h2>
        <Link
          href="/l-atelier"
          className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase underline underline-offset-4 text-cream hidden sm:block hover:opacity-70"
        >
          Voir toutes les photos →
        </Link>
      </div>

      {/* Grille desktop — asymétrique 6 cols × 2 rows */}
      <div className="hidden md:grid grid-cols-6 grid-rows-2 gap-3 h-[440px]">
        {/* Grande photo gauche */}
        <div className="col-span-2 row-span-2 rounded-sm bg-photo/40" aria-label="Photo atelier" />
        {/* Ligne 1, milieu-droite */}
        <div className="col-span-2 rounded-sm bg-photo/30" aria-label="Photo atelier" />
        <div className="col-span-2 rounded-sm bg-photo/50" aria-label="Photo atelier" />
        {/* Ligne 2, milieu-droite */}
        <div className="col-span-1 rounded-sm bg-photo/35" aria-label="Photo atelier" />
        <div className="col-span-1 rounded-sm bg-photo/45" aria-label="Photo atelier" />
        <div className="col-span-2 rounded-sm bg-photo/30" aria-label="Photo atelier" />
      </div>

      {/* Grille mobile — 2 × 2 */}
      <div className="grid grid-cols-2 gap-2 md:hidden">
        {[0.4, 0.3, 0.45, 0.35].map((opacity, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm bg-photo"
            style={{ opacity }}
            aria-label="Photo atelier"
          />
        ))}
      </div>

      {/* CTA mobile */}
      <Link
        href="/l-atelier"
        className="mt-6 inline-block font-mono text-[10px] tracking-[0.2em] uppercase underline underline-offset-4 text-cream sm:hidden"
      >
        Voir toutes les photos →
      </Link>

      {/* CTA desktop */}
      <div className="mt-8 hidden md:flex justify-center">
        <Link
          href="/l-atelier"
          className="px-8 py-3.5 rounded-full bg-yellow text-ink font-manrope font-semibold text-[14px] hover:opacity-90 transition-opacity"
        >
          Voir toutes les photos →
        </Link>
      </div>

    </section>
  );
}
