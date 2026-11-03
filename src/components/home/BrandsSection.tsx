import type { CSSProperties } from "react";
import { HOME } from "../../content/home";
import { Icon } from "../icons/registry";
import { Reveal } from "../layout/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { SmartLink } from "../ui/SmartLink";

type Brand = (typeof HOME.brands.items)[number];

/** "Trusted brands": a scrolling carousel or a still grid, set by HOME.brands.display. */
export function BrandsSection() {
  const brands = HOME.brands;
  return (
    <section className="section" style={{ paddingBlock: "clamp(48px, 7vw, 80px)", background: "#070b14", borderBlock: "4px solid #1a2340" }}>
      <div className="container-site flex flex-col gap-10">
        <SectionHeader eyebrow={brands.eyebrow} title={brands.title} />
        <Reveal>
          {brands.display === "marquee" ? (
            <div className="marquee" style={{ "--marquee-duration": `${brands.speedSeconds}s` } as CSSProperties}>
              {/* The list is drawn twice, so the loop has no visible seam. */}
              <div className="marquee-track">
                {[...brands.items, ...brands.items].map((brand, i) => (
                  <div key={i} style={{ paddingRight: 20 }} aria-hidden={i >= brands.items.length}>
                    <BrandTile brand={brand} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {brands.items.map((brand) => <BrandTile key={brand.name} brand={brand} />)}
            </div>
          )}
        </Reveal>
        {brands.note && <p className="text-center text-sm text-muted-foreground" style={{ margin: 0 }}>{brands.note}</p>}
      </div>
    </section>
  );
}

function BrandTile({ brand }: { brand: Brand }) {
  const tile = (
    <div
      className="group flex items-center justify-center gap-3 px-5 transition-colors"
      style={{ width: 220, height: 96, maxWidth: "100%", background: "#0d1322", border: "3px solid #1a2340" }}
      title={brand.name}
    >
      {brand.logo ? (
        <img src={brand.logo} alt={brand.name} className="max-h-12 w-auto object-contain opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0" />
      ) : (
        <>
          <Icon name={brand.icon} size={22} color={brand.color} />
          <span className="font-pixel uppercase" style={{ fontSize: 10, color: brand.color, lineHeight: 1.6 }}>{brand.name}</span>
        </>
      )}
    </div>
  );
  return brand.href ? <SmartLink to={brand.href}>{tile}</SmartLink> : tile;
}
