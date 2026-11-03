import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 * One link component for every kind of `to` used in the content files:
 * pages on this site ("/about", "/product#drills"), other websites ("https://…", opened in
 * a new tab), and "mailto:" / "tel:" links.
 */
export function SmartLink({ to, children, ...rest }: {
  to: string; children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  if (to.startsWith("/")) return <Link to={to} {...rest}>{children}</Link>;
  const external = /^https?:\/\//.test(to);
  return (
    <a href={to} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}
