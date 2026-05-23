import type { Metadata } from "next"

export const metadata: Metadata = {
  description:
    "Atelier de poterie et céramique à Paris 9e depuis 40 ans. Cours de modelage et tournage pour adultes et enfants, de mère en fille.",
}

import HomeHero from "@/components/sections/home/HomeHero"
import HomePillars from "@/components/sections/home/HomePillars"
import HomeGallery from "@/components/sections/home/HomeGallery"
import HomeReviews from "@/components/sections/home/HomeReviews"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomePillars />
      <HomeGallery />
      <HomeReviews />
    </>
  )
}
