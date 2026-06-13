import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function StatBlock({
  value,
  unit,
  label,
  accent = false,
  rule = false,
  className,
}: {
  value: ReactNode;
  unit?: string;
  label?: ReactNode;
  accent?: boolean;
  rule?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("atp-stat", accent && "atp-stat--accent", className)}>
      {rule && <span className="atp-stat__rule" aria-hidden />}
      <div className="atp-stat__value">
        {value}
        {unit && <span className="atp-stat__unit">{unit}</span>}
      </div>
      {label && <div className="atp-stat__label">{label}</div>}
    </div>
  );
}
