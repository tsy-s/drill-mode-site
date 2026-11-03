import { FOOTER_COLUMNS, FOOTER_LEGAL, SITE } from "../../content/site";
import { Logo } from "../brand/Logo";
import { ColorDots } from "../brand/ColorDots";
import { SmartLink } from "../ui/SmartLink";
import { SocialLinks } from "../ui/SocialLinks";
import { Stars } from "./Stars";

/** The footer. Its columns and links come from src/content/site.ts. */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-border" style={{ background: "#070b14" }}>
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
                  <SmartLink to={link.to} className="text-soft-foreground hover:text-white transition-colors">{link.label}</SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative border-t-2 border-border">
        <div className="container-site flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-muted-foreground">
          <span>{SITE.copyright}</span>
          <nav className="flex flex-wrap gap-6" aria-label="Legal">
            {FOOTER_LEGAL.map((link) => (
              <SmartLink key={link.to} to={link.to} className="hover:text-white transition-colors">{link.label}</SmartLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
