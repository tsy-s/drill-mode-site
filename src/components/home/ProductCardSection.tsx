import { HOME } from "../../content/home";
import { Icon } from "../icons/registry";
import { Reveal } from "../layout/Reveal";
import { Stars } from "../layout/Stars";
import { CallMock } from "../mocks/PhoneMocks";
import { PixelLink } from "../ui/PixelLink";

/** A big card introducing the product, leading to the Product page. */
export function ProductCardSection() {
  const card = HOME.productCard;
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden grid items-center gap-12 p-8 md:p-12 lg:grid-cols-[1.2fr_1fr]" style={{ background: "linear-gradient(135deg, #111827 0%, #0d1a2b 100%)", border: "4px solid #00ff88", boxShadow: "8px 8px 0 #006633" }}>
            <Stars count={25} />
            <div className="relative flex flex-col gap-6">
              <div className="eyebrow" style={{ color: "#00ff88" }}>{card.eyebrow}</div>
              <h2 className="section-title" style={{ margin: 0 }}>{card.title}</h2>
              <p className="lead" style={{ margin: 0 }}>{card.text}</p>
              <ul className="grid gap-3 sm:grid-cols-2" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {card.highlights.map((h) => (
                  <li key={h.label} className="flex items-center gap-3 px-3 py-3" style={{ background: "#0a0e1a", border: "2px solid #2a3a5c" }}>
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
