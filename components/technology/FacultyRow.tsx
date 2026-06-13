import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/motion/Reveal";
import type { Faculty, PillarTint } from "@/lib/content";

const TINTS: Record<PillarTint, string> = {
  identify: "var(--pillar-identify)",
  integrate: "var(--pillar-integrate)",
  speak: "var(--pillar-speak)",
  remember: "var(--pillar-remember)",
};

/**
 * One faculty presented as an editorial row. Even rows lead with the glyph,
 * odd rows reverse (`.block.rev`) so the page reads as an alternating column.
 * The faculty tint flows through `--_tint`: it lights the glyph glow and
 * colors the small uppercase role line, the one accent each row is allowed.
 *
 * Reuses the design-system faculty classes (`.fac-detail__*`) so type, glow
 * and tinting match the homepage exactly, composed inside the shared `.block`
 * grid. Only the index number and the quiet Jung caption carry inline styles,
 * built from existing tokens.
 */
export function FacultyRow({ faculty, index }: { faculty: Faculty; index: number }) {
  const reversed = index % 2 === 1;
  const tintStyle = { "--_tint": TINTS[faculty.tint] } as CSSProperties;

  const art = (
    <div
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)",
        justifyContent: reversed ? "flex-start" : "flex-end",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-bold)",
          fontSize: "var(--fs-h2)",
          lineHeight: 1,
          color: "color-mix(in srgb, var(--_tint) 70%, transparent)",
          letterSpacing: "var(--ls-tight)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <Image
        className="fac-detail__glyph"
        src={faculty.glyph}
        alt=""
        width={132}
        height={132}
        sizes="(max-width: 980px) 96px, 132px"
        style={{ width: "clamp(88px, 12vw, 132px)", height: "auto", margin: 0 }}
      />
    </div>
  );

  const copy = (
    <div className="block__copy">
      <span className="fac-detail__role">{faculty.role}</span>
      <h3 className="fac-detail__name" style={{ fontSize: "var(--fs-h1)" }}>
        {faculty.name}
      </h3>
      <p className="fac-detail__desc">{faculty.long}</p>
      <p
        style={{
          marginTop: "var(--space-5)",
          fontSize: "var(--fs-sm)",
          lineHeight: "var(--lh-normal)",
          color: "var(--text-4)",
          fontStyle: "italic",
          maxWidth: "44ch",
        }}
      >
        {faculty.jung}
      </p>
    </div>
  );

  return (
    <Reveal delay={(index % 2) * 70}>
      <div className={`block${reversed ? " rev" : ""}`} style={tintStyle}>
        {copy}
        {art}
      </div>
    </Reveal>
  );
}
