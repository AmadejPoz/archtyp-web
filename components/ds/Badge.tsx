import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "accent" | "soon" | "identify" | "integrate" | "speak" | "remember";

export function Badge({
  variant = "neutral",
  dot = false,
  children,
  className,
}: {
  variant?: BadgeVariant;
  dot?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("atp-badge", variant !== "neutral" && `atp-badge--${variant}`, className)}>
      {dot && <span className="atp-badge__dot" aria-hidden />}
      {children}
    </span>
  );
}
