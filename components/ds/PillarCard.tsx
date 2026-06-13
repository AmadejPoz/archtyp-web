import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { PillarTint } from "@/lib/content";

const TINTS: Record<PillarTint, string> = {
  identify: "var(--pillar-identify)",
  integrate: "var(--pillar-integrate)",
  speak: "var(--pillar-speak)",
  remember: "var(--pillar-remember)",
};

/** One archetypal faculty — glyph, role, name, line. Used in the faculty sequence. */
export function PillarCard({
  index,
  name,
  role,
  description,
  glyphSrc,
  tint = "identify",
  active = false,
  className,
}: {
  index?: number;
  name: string;
  role?: string;
  description?: string;
  glyphSrc?: string;
  tint?: PillarTint;
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("atp-pillar", active && "atp-pillar--active", className)}
      style={{ "--_tint": TINTS[tint] } as CSSProperties}
    >
      <div className="atp-pillar__glow" aria-hidden />
      <div className="atp-pillar__head">
        <span className="atp-pillar__num">
          {index != null ? `Pillar ${String(index).padStart(2, "0")}` : ""}
        </span>
        {glyphSrc && (
          <Image className="atp-pillar__glyph" src={glyphSrc} alt="" width={48} height={48} />
        )}
      </div>
      <h3 className="atp-pillar__name">{name}</h3>
      {role && <span className="atp-pillar__role">{role}</span>}
      {description && <p className="atp-pillar__desc">{description}</p>}
    </div>
  );
}
