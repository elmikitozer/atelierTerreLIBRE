import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  // absoluteTitle : le gabarit "%s — Atelier Terre Libre" ne s'applique pas.
  title: "Atelier Terre Libre — Cours de poterie et céramique à Paris 9e",
  absoluteTitle: true,
  description:
    "Atelier de modelage et céramique à Paris 9e depuis 40 ans. Cours de modelage et céramique pour adultes et enfants, de mère en fille.",
  path: "/",
})

import WebSiteSchema from "@/components/seo/WebSiteSchema"
import HomeHero from "@/components/sections/home/HomeHero"
import HomePillars from "@/components/sections/home/HomePillars"
import HomeGallery from "@/components/sections/home/HomeGallery"
import HomeReviews from "@/components/sections/home/HomeReviews"

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <HomeHero />
      <HomePillars />
      <HomeGallery />
      <HomeReviews />
    </>
  )
}
