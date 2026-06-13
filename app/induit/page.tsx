import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ds/Badge";
import { Button } from "@/components/ds/Button";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { Check } from "@/components/ds/icons";
import { HardwareRow } from "@/components/ds/HardwareRow";
import { Reveal } from "@/components/motion/Reveal";
import { induit, assets } from "@/lib/content";

export const metadata: Metadata = {
  title: "INDUIT",
  description: induit.lead,
};

/** Browser-chrome frame wrapping a product screenshot. */
function Frame({ src, url, alt }: { src: string; url: string; alt: string }) {
  return (
    <div className="frame">
      <div className="frame__bar">
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="frame__url">{url}</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={3023}
        height={1725}
        sizes="(max-width: 980px) 100vw, 60vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default function InduitPage() {
  const { badge, eyebrow, title, lead, capabilities, brandsLabel, commercial, inquiry } = induit;

  return (
    <>
      {/* 1. Hero */}
      <header className="page-hero">
        <div className="page-hero__bg" aria-hidden />
        <div className="sec page-hero__in">
          <Reveal>
            <Badge variant="accent" dot>
              {badge}
            </Badge>
            <div style={{ height: 18 }} />
            <SectionHeading size="lg" eyebrow={eyebrow} title={title} lead={lead} />
            <div style={{ height: 26 }} />
            <Button href="/contact" variant="primary" arrow>
              Request access
            </Button>
          </Reveal>
        </div>
        <Reveal className="sec" delay={120}>
          <div style={{ marginTop: "var(--space-8)" }}>
            <Frame
              src={assets.dashboardDark}
              url="induit.archtyp.ai/fleet"
              alt="INDUIT fleet dashboard showing every robot by location, usage and status"
            />
          </div>
        </Reveal>
      </header>

      {/* 2. Capability blocks */}
      <section className="sec sec-y">
        {capabilities.map((cap, i) => {
          const reversed = i % 2 === 1;
          const copy = (
            <div className="block__copy">
              <SectionHeading eyebrow={cap.eyebrow} title={cap.title} lead={cap.lead} />
              <ul className="block__feats">
                {cap.feats.map((feat) => (
                  <li key={feat}>
                    <Check className="tick" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          );
          const frame = (
            <Frame
              src={cap.shot}
              url={cap.url}
              alt={`INDUIT ${cap.eyebrow.toLowerCase()} screen. ${cap.title}.`}
            />
          );
          return (
            <Reveal key={cap.title} className={reversed ? "block rev" : "block"}>
              {reversed ? (
                <>
                  {frame}
                  {copy}
                </>
              ) : (
                <>
                  {copy}
                  {frame}
                </>
              )}
            </Reveal>
          );
        })}
      </section>

      {/* 3. Hardware row */}
      <section className="sec sec-yt">
        <Reveal className="brands">
          <div className="brands__label">{brandsLabel}</div>
          <HardwareRow />
        </Reveal>
      </section>

      {/* 4. Commercial model */}
      <section className="sec sec-y">
        <Reveal>
          <SectionHeading align="center" eyebrow={commercial.eyebrow} title={commercial.title} />
        </Reveal>
        <div className="commercial">
          {commercial.cards.map((card, i) => (
            <Reveal key={card.k} delay={i * 80}>
              <div className="ccard">
                <div className="ccard__k">{card.k}</div>
                <div className="ccard__t">{card.t}</div>
                <p className="ccard__d">{card.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Inquiry CTA */}
      <section className="sec sec-y cta-band">
        <Reveal>
          <div className="cta-band__card">
            <h2>{inquiry.title}</h2>
            <p>{inquiry.body}</p>
            <Button href={inquiry.cta.href} variant="primary" arrow>
              {inquiry.cta.label}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
