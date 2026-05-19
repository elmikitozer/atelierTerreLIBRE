import { getGaleriePhotos } from "@/lib/sanity/queries"
import GalerieGrid from "./GalerieGrid"

export default async function GalerieSection() {
  const photos = await getGaleriePhotos()

  return (
    <section className="px-5 md:px-12 py-14 md:py-20 bg-ink">

      <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-cream/40 mb-3">
        Dans l&apos;atelier
      </p>
      <h2 className="font-archivo-black text-[28px] md:text-[42px] leading-[0.95] text-cream mb-10 md:mb-14">
        Une vie autour <span className="italic">de la table.</span>
      </h2>

      {photos.length === 0 ? (
        <p className="font-news italic text-[16px] text-cream/40 py-10">
          Galerie en cours de constitution. Revenez bientôt&nbsp;!
        </p>
      ) : (
        <GalerieGrid photos={photos} />
      )}

    </section>
  )
}
