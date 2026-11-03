import { BrandsSection } from "../components/home/BrandsSection";
import { HeroSection } from "../components/home/HeroSection";
import { HowItWorksSection } from "../components/home/HowItWorksSection";
import { ProductCardSection } from "../components/home/ProductCardSection";
import { StatsSection } from "../components/home/StatsSection";
import { HomeIntro } from "../components/intro/HomeIntro";
import { CtaBand } from "../components/ui/CtaBand";
import { HOME } from "../content/home";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * HOME PAGE. All of its text is in src/content/home.ts.
 * To reorder or remove a section, move or delete its line below.
 */
export function HomePage() {
  usePageMeta("");
  return (
    <>
      <HomeIntro startId="start" />
      <HeroSection id="start" />
      <BrandsSection />
      <HowItWorksSection />
      <ProductCardSection />
      <StatsSection />
      <CtaBand title={HOME.finalCta.title} text={HOME.finalCta.text} button={HOME.finalCta.button} />
    </>
  );
}
