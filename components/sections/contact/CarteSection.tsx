import Link from "next/link"

export default function CarteSection() {
  return (
    <section className="px-5 md:px-12 py-10 bg-cream border-b border-ink/10">
      <div className="relative h-[300px] md:h-[500px] rounded-sm overflow-hidden bg-[#d6cfbf] border border-ink/10 flex flex-col items-center justify-center gap-4">

        {/* Point */}
        <div className="w-4 h-4 rounded-full bg-ink" />

        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/40">
          Carte stylée — intégration en cours
        </p>
        <p className="font-news text-[15px] text-ink/60">
          17 rue de Vintimille, 75009 Paris
        </p>

        <Link
          href="https://maps.google.com/?q=17+rue+de+Vintimille+75009+Paris"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 font-news text-[14px] text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink transition-all"
        >
          Voir sur Google Maps →
        </Link>

      </div>
    </section>
  )
}
