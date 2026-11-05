import { HOME } from "../../content/home";
import { useContent } from "../../i18n/content";
import { Icon } from "../icons/registry";
import { Reveal } from "../layout/Reveal";
import { Stars } from "../layout/Stars";
import { CallMock } from "../mocks/PhoneMocks";
import { PixelLink } from "../ui/PixelLink";

/** A big card introducing the product, leading to the Product page. */
export function ProductCardSection() {
  const card = useContent(HOME).productCard;
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden grid items-center gap-12 p-8 md:p-12 lg:grid-cols-[1.2fr_1fr]" style={{ background: "linear-gradient(135deg, var(--card) 0%, var(--surface) 100%)", border: "4px solid var(--green)", boxShadow: "8px 8px 0 color-mix(in srgb, var(--green) 40%, var(--background))" }}>
            <Stars count={25} />
            <div className="relative flex flex-col gap-6">
              <div className="eyebrow" style={{ color: "var(--green)" }}>{card.eyebrow}</div>
              <h2 className="section-title" style={{ margin: 0 }}>{card.title}</h2>
              <p className="lead" style={{ margin: 0 }}>{card.text}</p>
              <ul className="grid gap-3 sm:grid-cols-2" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {card.highlights.map((h) => (
                  <li key={h.label} className="flex items-center gap-3 px-3 py-3" style={{ background: "var(--background)", border: "2px solid var(--border)" }}>
                    <Icon name={h.icon} size={18} />
                    <span className="text-sm">{h.label}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <PixelLink to={card.cta.to} size="lg">{card.cta.label} →</PixelLink>
              </div>
            </div>
            <div className="relative flex justify-center" style={{ transform: "rotate(2deg)" }}>
              <CallMock />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
