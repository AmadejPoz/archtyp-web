import type { Metadata } from "next";
import { Button } from "@/components/ds/Button";
import { CultureProse } from "@/components/culture/CultureProse";
import { Reveal } from "@/components/motion/Reveal";
import { culture, assets } from "@/lib/content";

export const metadata: Metadata = {
  title: "Culture",
  description: culture.lead,
};

/** The one emphasized word in the headline. Split from the verbatim title so
 *  the copy stays sourced from content; the `.spark` styles the cognitive word. */
const SPARK_WORD = "soul";

export default function CulturePage() {
  const { eyebrow, title, lead, body, pull, links } = culture;

  const sparkAt = title.toLowerCase().indexOf(SPARK_WORD);
  const headline =
    sparkAt === -1 ? (
      title
    ) : (
      <>
        {title.slice(0, sparkAt)}
        <span className="spark">{title.slice(sparkAt, sparkAt + SPARK_WORD.length)}</span>
        {title.slice(sparkAt + SPARK_WORD.length)}
      </>
    );

  return (
    <>
      {/* 1. Hero — narrow, centered, with the triquetra as a quiet presence */}
      <header className="page-hero">
        <div className="page-hero__bg" aria-hidden />
        <img
          src={assets.symbol}
          alt=""
          aria-hidden
          className="drift"
          style={{
            position: "absolute",
            top: "clamp(2rem, 8vh, 7rem)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(220px, 36vw, 460px)",
            opacity: 0.06,
            zIndex: 0,
            pointerEvents: "none",
            filter: "drop-shadow(0 0 40px var(--turq-glow))",
          }}
        />
        <div className="sec sec-narrow page-hero__in">
          <Reveal>
            <div className="atp-sh atp-sh--center">
              <span className="atp-sh__eyebrow">{eyebrow}</span>
              <h1
                className="atp-sh__title"
                style={{
                  fontSize: "var(--fs-display)",
                  lineHeight: "var(--lh-tight)",
                  letterSpacing: "var(--ls-tight)",
                  maxWidth: "20ch",
                }}
              >
                {headline}
              </h1>
              <p className="atp-sh__lead">{lead}</p>
            </div>
          </Reveal>
        </div>
      </header>

      {/* 2. Long-form body — narrow reading measure, calm staggered reveal */}
      <section className="sec sec-narrow sec-y">
        <CultureProse paragraphs={body} pull={pull} pullAfter={3} />
      </section>

      {/* 3. Closing — a quiet centered row of links, kept literary */}
      <section className="sec sec-narrow sec-yt">
        <Reveal>
          <div
            style={{
              display: "flex",
              gap: "var(--space-6)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {links.map((link) => (
              <Button key={link.href} href={link.href} variant="text">
                {link.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
