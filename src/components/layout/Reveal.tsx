import type { ElementType, ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

/** Fades its children up into place the first time they scroll into view. */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: {
  children: ReactNode; delay?: number; className?: string; as?: ElementType;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <Tag ref={ref} className={`reveal ${inView ? "is-visible" : ""} ${className}`} style={{ "--delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}
