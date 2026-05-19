import Link from "next/link"

const METRO = [
  { station: "Place de Clichy", lines: "M2, M13" },
  { station: "Liège", lines: "M13" },
]

const BUS = [
  "Ligne 68 — Place de Clichy",
  "Ligne 74 — Trinité d'Estienne d'Orves",
]

export default function ContactInfoSection() {
  return (
    <section className="px-5 md:px-12 py-14 md:py-20 bg-cream border-b border-ink/10">
      <div className="md:grid md:grid-cols-12 md:gap-16">

        {/* Colonne gauche — coordonnées */}
        <div className="md:col-span-6 flex flex-col gap-10">

          {/* Adresse */}
          <div>
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
              L&apos;adresse
            </p>
            <h2 className="font-archivo-black text-[28px] md:text-[36px] leading-[0.95] text-ink mb-4">
              Atelier terre <span className="italic">libre.</span>
            </h2>
            <p className="font-news text-[17px] md:text-[19px] leading-[1.5] text-ink">
              17 rue de Vintimille
              <br />
              75009 Paris
            </p>
            <Link
              href="https://maps.google.com/?q=17+rue+de+Vintimille+75009+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block bg-ink text-cream rounded-full font-manrope font-semibold text-[13px] py-3 px-7 hover:opacity-80 transition-opacity"
            >
              Voir l&apos;itinéraire →
            </Link>
          </div>

          {/* Téléphone */}
          <div className="border-t border-ink/10 pt-8">
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
              Nous appeler
            </p>
            <a
              href="tel:+33618938588"
              className="font-archivo-black text-[28px] md:text-[32px] leading-none text-ink hover:opacity-70 transition-opacity"
            >
              06 18 93 85 88
            </a>
            <p className="font-news italic text-[15px] text-mute mt-1">Déborah</p>
          </div>

          {/* Email */}
          <div className="border-t border-ink/10 pt-8">
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
              Nous écrire
            </p>
            <a
              href="mailto:bonjour.atelierterrelibre@gmail.com"
              className="font-news text-[15px] md:text-[16px] text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink transition-all"
            >
              bonjour.atelierterrelibre@gmail.com
            </a>
          </div>

          {/* Réseaux */}
          <div className="border-t border-ink/10 pt-8">
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
              Réseaux
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/atelierterrelibre/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-news text-[15px] text-ink hover:opacity-60 transition-opacity"
              >
                Instagram →
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-news text-[15px] text-ink hover:opacity-60 transition-opacity"
              >
                Facebook →
              </a>
            </div>
          </div>

        </div>

        {/* Colonne droite — accès */}
        <div className="mt-12 md:mt-0 md:col-span-6">

          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-6">
            Accès
          </p>

          {/* Métro */}
          <div className="mb-7">
            <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-mute/70 mb-3">
              Métro
            </p>
            <div className="flex flex-col gap-2">
              {METRO.map((m) => (
                <div key={m.station} className="flex items-center justify-between bg-ink text-yellow rounded-sm px-4 py-3">
                  <span className="font-news text-[15px]">{m.station}</span>
                  <span className="font-mono text-[10px] tracking-[0.15em] opacity-60">{m.lines}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bus */}
          <div className="border-t border-ink/10 pt-6 mb-7">
            <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-mute/70 mb-3">
              Bus
            </p>
            <ul className="flex flex-col gap-2">
              {BUS.map((ligne) => (
                <li key={ligne} className="font-news text-[15px] text-ink/80 leading-snug">
                  {ligne}
                </li>
              ))}
            </ul>
          </div>

          {/* À pied */}
          <div className="border-t border-ink/10 pt-6">
            <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-mute/70 mb-3">
              À pied
            </p>
            <ul className="flex flex-col gap-2">
              <li className="font-news text-[15px] text-ink/80">4 minutes depuis Place de Clichy</li>
              <li className="font-news text-[15px] text-ink/80">Square Berlioz juste à côté</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
