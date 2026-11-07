import { FOOTER_COLUMNS as FOOTER_COLUMNS_EN, FOOTER_LEGAL as FOOTER_LEGAL_EN, SITE as SITE_EN, UI } from "../../content/site";
import { useContent } from "../../i18n/content";
import { Logo } from "../brand/Logo";
import { ColorDots } from "../brand/ColorDots";
import { SmartLink } from "../ui/SmartLink";
import { SocialLinks } from "../ui/SocialLinks";
import { Stars } from "./Stars";

/** The footer. Its columns and links come from src/content/site.ts. */
export function Footer() {
  const SITE = useContent(SITE_EN);
  const FOOTER_COLUMNS = useContent(FOOTER_COLUMNS_EN);
  const FOOTER_LEGAL = useContent(FOOTER_LEGAL_EN);
  const ui = useContent(UI);
  return (
    <footer className="relative overflow-hidden border-t-4 border-border" style={{ background: "var(--surface-deep)" }}>
      <Stars count={30} />
      <div className="container-site relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-5 max-w-sm">
          <Logo />
          <p className="text-soft-foreground" style={{ margin: 0 }}>{SITE.oneLiner}</p>
          <ColorDots />
          <SocialLinks />
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading}>
            <h3 className="eyebrow" style={{ margin: "0 0 16px" }}>{column.heading}</h3>
            <ul className="flex flex-col gap-3" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {column.links.map((link) => (
                <li key={link.label}>
                  <SmartLink to={link.to} className="text-soft-foreground hover:text-foreground-strong transition-colors">{link.label}</SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative border-t-2 border-border">
        <div className="container-site flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-muted-foreground">
          <span>{SITE.copyright}</span>
          <nav className="flex flex-wrap gap-6" aria-label={ui.footer.legal}>
            {FOOTER_LEGAL.map((link) => (
              <SmartLink key={link.to} to={link.to} className="hover:text-foreground-strong transition-colors">{link.label}</SmartLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
