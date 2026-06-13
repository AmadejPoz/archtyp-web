import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  pad = true,
  lift = false,
  glow = false,
  accentEdge = false,
  children,
  className,
}: {
  pad?: boolean;
  lift?: boolean;
  glow?: boolean;
  accentEdge?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "atp-card",
        pad && "atp-card--pad",
        lift && "atp-card--lift",
        glow && "atp-card--glow",
        accentEdge && "atp-card--accent",
        className,
      )}
    >
      {children}
    </div>
  );
}
