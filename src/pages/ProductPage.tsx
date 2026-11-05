import { ProductIntro } from "../components/intro/ProductIntro";
import { DrillTabs } from "../components/product/DrillTabs";
import { FeatureTree } from "../components/product/FeatureTree";
import { SafetySection } from "../components/product/SafetySection";
import { CtaBand } from "../components/ui/CtaBand";
import { PRODUCT as PRODUCT_EN } from "../content/product";
import { UI } from "../content/site";
import { usePageMeta } from "../hooks/usePageMeta";
import { useContent } from "../i18n/content";

/**
 * PRODUCT PAGE. All of its text is in src/content/product.ts.
 * The ids ("features", "drills", "safety") are what links like /product#drills jump to.
 */
export function ProductPage() {
  const PRODUCT = useContent(PRODUCT_EN);
  usePageMeta(useContent(UI).pageTitles.product, PRODUCT.intro.subtitle);
  return (
    <>
      <ProductIntro startId="features" />
      <FeatureTree id="features" />
      <DrillTabs id="drills" />
      <SafetySection id="safety" />
      <CtaBand title={PRODUCT.cta.title} text={PRODUCT.cta.text} button={PRODUCT.cta.button} />
    </>
  );
}
