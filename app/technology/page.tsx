import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { StatBlock } from "@/components/ds/StatBlock";
import { Button } from "@/components/ds/Button";
import { Reveal } from "@/components/motion/Reveal";
import { FacultyRow } from "@/components/technology/FacultyRow";
import { CognitiveArchitecture } from "@/components/technology/CognitiveArchitecture";
import { technology, faculties, assets } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technology",
  description: technology.lead,
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  const { eyebrow, title, lead, hero, pillarsIntro, proof } = technology;

  return (
    <>
      {/* 1 — Hero. The motion-logo plays quietly behind the headline. */}
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden />
        <Image
          src={assets.heroBrain}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.4, zIndex: 0 }}
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

      {/* 3 — Cognitive architecture diagram (DMN first). */}
      <section className="sec sec-y">
        <CognitiveArchitecture />
      </section>

      {/* 4 — The four faculties, expanded as alternating editorial rows. */}
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
