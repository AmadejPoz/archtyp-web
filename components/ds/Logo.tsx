import Link from "next/link";
import { cn } from "@/lib/utils";
import { assets } from "@/lib/content";

/**
 * ARCHTYP logo — the real triquetra symbol + extracted wordmark artwork.
 * Plain <img> on purpose: these are vector SVGs that next/image would only
 * pass through, and we want crisp glow scaling at any size.
 */
export function Logo({
  layout = "horizontal",
  height = 22,
  symbolSrc = assets.symbol,
  wordmarkSrc = assets.wordmark,
  symbolOnly = false,
  rest = false,
  href = "/",
  className,
}: {
  layout?: "horizontal" | "vertical";
  height?: number;
  symbolSrc?: string;
  wordmarkSrc?: string;
  symbolOnly?: boolean;
  rest?: boolean;
  href?: string;
  className?: string;
}) {
  const symH = layout === "vertical" ? height * 2.5 : height * 1.7;
  return (
    <Link
      href={href}
      aria-label="ARCHTYP"
      className={cn("atp-logo", `atp-logo--${layout}`, rest && "atp-logo--rest", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="atp-logo__symbol" src={symbolSrc} alt="" style={{ height: symH, width: "auto" }} />
      {!symbolOnly && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="atp-logo__wordmark" src={wordmarkSrc} alt="ARCHTYP" style={{ height, width: "auto" }} />
      )}
    </Link>
  );
}
