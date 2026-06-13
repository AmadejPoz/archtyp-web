import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({
  icon = null,
  ghost = false,
  children,
  className,
}: {
  icon?: ReactNode;
  ghost?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("atp-tag", ghost && "atp-tag--ghost", className)}>
      {icon && <span className="atp-tag__icon" aria-hidden>{icon}</span>}
      {children}
    </span>
  );
}
