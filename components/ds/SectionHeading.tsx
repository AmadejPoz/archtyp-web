import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Heading = "h1" | "h2" | "h3" | "h4";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  size = "md",
  wide = false,
  as = "h2",
  className,
  children,
}: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg";
  wide?: boolean;
  as?: Heading;
  className?: string;
  children?: ReactNode;
}) {
  const Title = as;
  return (
    <div
      className={cn(
        "atp-sh",
        align === "center" && "atp-sh--center",
        size === "lg" && "atp-sh--lg",
        wide && "atp-sh--wide",
        className,
      )}
    >
      {eyebrow && <span className="atp-sh__eyebrow">{eyebrow}</span>}
      {title && <Title className="atp-sh__title">{title}</Title>}
      {lead && <p className="atp-sh__lead">{lead}</p>}
      {children}
    </div>
  );
}
