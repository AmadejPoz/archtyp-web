import { cn } from "@/lib/utils";

/**
 * Supported-hardware logo cloud. Each brand renders as a clean, monochrome
 * wordmark in its characteristic casing and weight, muted by default and
 * lifting to turquoise on hover. This is the "runs on the robots you already
 * deploy" row.
 *
 * To use official logo artwork instead, drop an SVG into
 * `public/brand/hardware/<key>.svg` and set its `logo` path below; the row
 * renders the file in place of the wordmark, no other change needed.
 */
type Mark = { key: string; label: string; logo?: string };

const MARKS: Mark[] = [
  { key: "temi", label: "temi" },
  { key: "keenon", label: "Keenon" },
  { key: "unitree", label: "unitree" },
  { key: "pudu", label: "Pudu" },
];

export function HardwareRow({ className }: { className?: string }) {
  return (
    <div className={cn("hw-row", className)}>
      {MARKS.map((m) =>
        m.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={m.key} className="hw-logo" src={m.logo} alt={m.label} />
        ) : (
          <span key={m.key} className={cn("hw-mark", `hw-mark--${m.key}`)}>
            {m.label}
          </span>
        ),
      )}
    </div>
  );
}
