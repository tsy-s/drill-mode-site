import { SOCIALS } from "../../content/site";
import { useContent } from "../../i18n/content";
import { Icon, type IconName } from "../icons/registry";
import { SmartLink } from "./SmartLink";

/** Square pixel icon buttons for social links. Defaults to the site's SOCIALS (src/content/site.ts). */
export function SocialLinks({ links, size = 40 }: {
  links?: { label: string; icon: IconName; href: string }[]; size?: number;
}) {
  const socials = useContent(SOCIALS);
  const visible = (links ?? socials).filter((l) => l.href);
  if (!visible.length) return null;
  return (
    <ul className="flex flex-wrap gap-3" style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {visible.map((link) => (
        <li key={link.label}>
          <SmartLink
            to={link.href}
            aria-label={link.label}
            title={link.label}
            className="flex items-center justify-center bg-card border-2 border-border hover:border-teal transition-colors"
            style={{ width: size, height: size }}
          >
            <Icon name={link.icon} size={Math.round(size * 0.45)} />
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}
