import HomeHero from "@/components/sections/home/HomeHero";
import HomeQuote from "@/components/sections/home/HomeQuote";
import HomePillars from "@/components/sections/home/HomePillars";
import HomeGallery from "@/components/sections/home/HomeGallery";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeQuote />
      <HomePillars />
      <HomeGallery />
    </main>
  );
}
