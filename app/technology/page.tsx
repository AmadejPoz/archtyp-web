import type { Metadata } from "next";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { StatBlock } from "@/components/ds/StatBlock";
import { Card } from "@/components/ds/Card";
import { Button } from "@/components/ds/Button";
import { Reveal } from "@/components/motion/Reveal";
import { AmbientVideo } from "@/components/motion/AmbientVideo";
import { FacultyRow } from "@/components/technology/FacultyRow";
import { technology, faculties, assets } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technology",
  description: technology.lead,
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  const { eyebrow, title, lead, hero, pillarsIntro, proof, architecture } = technology;

  return (
    <>
      {/* 1 — Hero. The motion-logo plays quietly behind the headline. */}
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden />
        <AmbientVideo
          mp4={assets.media.motionLogo.mp4}
          webm={assets.media.motionLogo.webm}
          poster={assets.media.motionLogo.poster}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        <div className="sec page-hero__in">
          <Reveal>
            <div className="hero__eyebrow">
              <span className="dot" />
              <span>{eyebrow}</span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "var(--fw-extra)",
                fontSize: "var(--fs-hero)",
                lineHeight: "var(--lh-tight)",
                letterSpacing: "var(--ls-tight)",
                color: "var(--text-1)",
                margin: "0 0 var(--space-5)",
                maxWidth: "16ch",
                textWrap: "balance",
              }}
            >
              {hero.headline[0]}
              <em className="spark" style={{ fontStyle: "normal" }}>
                {hero.headline[1]}
              </em>
              {hero.headline[2]}
            </h1>
            <p
              style={{
                fontSize: "var(--fs-lead)",
                lineHeight: "var(--lh-normal)",
                color: "var(--text-2)",
                maxWidth: "52ch",
                margin: "0 0 var(--space-7)",
              }}
            >
              {hero.sub}
            </p>
            <Button href="/contact" variant="primary" arrow>
              Request access
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 2 — DMN intro. */}
      <section className="sec sec-y">
        <Reveal>
          <SectionHeading eyebrow={pillarsIntro.eyebrow} title={title} lead={lead} size="lg" wide />
        </Reveal>
      </section>

      {/* 3 — The four faculties, expanded as alternating editorial rows. */}
      <section className="sec sec-yt">
        {faculties.map((faculty, i) => (
          <FacultyRow key={faculty.name} faculty={faculty} index={i} />
        ))}
      </section>

      {/* 4 — Proof. */}
      <section className="sec sec-y">
        <Reveal className="stat-row">
          {proof.map((stat, i) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              unit={stat.unit}
              label={stat.label}
              accent={i === 0}
              rule={i === 0}
            />
          ))}
        </Reveal>
      </section>

      {/* 5 — Architecture. */}
      <section className="sec sec-yt">
        <Reveal>
          <SectionHeading eyebrow={architecture.eyebrow} title={architecture.title} />
        </Reveal>
        <div style={{ height: "var(--space-8)" }} />
        <div className="feature-grid">
          {architecture.layers.map((layer, i) => (
            <Reveal key={layer.name} delay={i * 70}>
              <Card accentEdge>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "var(--fw-bold)",
                    fontSize: "var(--fs-h3)",
                    color: "var(--text-1)",
                    margin: "0 0 var(--space-3)",
                    letterSpacing: "var(--ls-snug)",
                  }}
                >
                  {layer.name}
                </h3>
                <p
                  style={{
                    fontSize: "var(--fs-sm)",
                    lineHeight: "var(--lh-normal)",
                    color: "var(--text-3)",
                    margin: 0,
                  }}
                >
                  {layer.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6 — Close. One dominant CTA. */}
      <section className="sec sec-y">
        <Reveal className="cta-band">
          <div className="cta-band__card">
            <h2>Put a mind in your fleet.</h2>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Request access
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
