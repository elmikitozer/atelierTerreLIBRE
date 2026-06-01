import { Reveal } from "@/components/ui/Reveal"

export default function PedagogieSection() {
  return (
    <section className="border-b border-ink/10">

      {/* Intro */}
      <Reveal className="px-5 md:px-12 py-14 md:py-20 bg-cream">
        <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-4">
          La pédagogie
        </p>
        <h2 className="font-archivo-black text-[32px] md:text-[48px] leading-[0.95] text-ink max-w-xl">
          Accompagner,{" "}
          <span className="italic">pas corriger.</span>
        </h2>
        <div className="mt-8 md:grid md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="font-news text-[16px] md:text-[18px] leading-[1.75] text-ink">
              Chez Terre Libre, l&apos;enseignant accompagne chaque élève dans son
              processus créatif, en respectant son rythme, sa personnalité et ses
              différences. Chaque élève est libre de créer selon ses envies.
              Aucun thème n&apos;est imposé.
            </p>
            <p className="font-news text-[16px] md:text-[18px] leading-[1.75] mt-5 text-ink">
              Ce cadre favorise le développement de la créativité et
              l&apos;assimilation progressive de la discipline qu&apos;elle nécessite.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Pull quote — fond accent */}
      <Reveal className="px-5 md:px-12 py-12 md:py-16 bg-accent">
        <blockquote className="font-news italic text-[22px] md:text-[36px] leading-[1.25] text-ink max-w-3xl">
          « Puiser dans vos propres ressources plutôt que dans des recettes toutes faites. »
        </blockquote>
      </Reveal>

      {/* Suite */}
      <Reveal className="px-5 md:px-12 py-14 md:py-20 bg-cream">
        <div className="md:grid md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="font-news text-[16px] md:text-[18px] leading-[1.75] text-ink">
              C&apos;est une rencontre avec soi-même : développer la confiance en
              soi, prendre le temps de trouver ses propres réponses, être à
              l&apos;écoute de l&apos;objet qui se crée et de soi-même.
            </p>
            <p className="font-news italic text-[15px] md:text-[17px] mt-8 text-ink/60">
              « Laisser aller la création là où elle doit aller. »
            </p>
          </div>
        </div>
      </Reveal>

    </section>
  )
}
