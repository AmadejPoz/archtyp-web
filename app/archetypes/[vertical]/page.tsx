import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ds/Button";
import { Card } from "@/components/ds/Card";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { StatBlock } from "@/components/ds/StatBlock";
import { ArrowRight } from "@/components/ds/icons";
import { Reveal } from "@/components/motion/Reveal";
import { verticals } from "@/lib/content";

type Params = { vertical: string };

export function generateStaticParams(): Params[] {
  return verticals.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { vertical } = await params;
  const v = verticals.find((item) => item.slug === vertical);
  if (!v) {
    return {
      title: "Archetypes",
      description:
        "The same intelligence becomes a host, a concierge, a companion, a guide, depending on where it works.",
    };
  }
  return {
    title: v.archetype,
    description: v.lead,
  };
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { vertical } = await params;
  const v = verticals.find((item) => item.slug === vertical);
  if (!v) notFound();

  const tintStyle = { "--_tint": `var(--pillar-${v.tint})` } as CSSProperties;
  const others = verticals.filter((item) => item.slug !== v.slug);

  // Split the headline so a single key word can carry the tinted spark.
  const words = v.headline.trim().replace(/\.$/, "").split(" ");
  const sparkWord = words[words.length - 1];
  const headBefore = words.slice(0, -1).join(" ");

  return (
    <div style={tintStyle}>
      {/* 1. Hero */}
      <header className="page-hero">
        <div className="page-hero__bg" aria-hidden />
        {/* Tinted glyph watermark */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-6%",
            right: "-4%",
            width: "min(46vw, 560px)",
            aspectRatio: "1 / 1",
            zIndex: 0,
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--_tint) 24%, transparent), transparent 66%)",
            pointerEvents: "none",
          }}
        />
        <div className="sec page-hero__in">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) auto",
              gap: "var(--space-7)",
              alignItems: "center",
            }}
          >
            <Reveal>
              <span
                className="eyebrow"
                style={{ color: "var(--_tint)", display: "block" }}
              >
                {v.eyebrow}
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "var(--fw-extra)",
                  fontSize: "var(--fs-display)",
                  lineHeight: "var(--lh-tight)",
                  letterSpacing: "var(--ls-tight)",
                  color: "var(--text-1)",
                  margin: "var(--space-4) 0 0",
                  maxWidth: "16ch",
                  textWrap: "balance",
                }}
              >
                {headBefore ? `${headBefore} ` : ""}
                <span
                  style={{
                    color: "var(--_tint)",
                    textShadow:
                      "0 0 22px color-mix(in srgb, var(--_tint) 50%, transparent)",
                  }}
                >
                  {sparkWord}
                </span>
                .
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--fs-lead)",
                  lineHeight: "var(--lh-normal)",
                  color: "var(--text-2)",
                  margin: "var(--space-5) 0 0",
                  maxWidth: "52ch",
                }}
              >
                {v.lead}
              </p>
              <div style={{ marginTop: "var(--space-6)" }}>
                <Button href="/contact" variant="primary" arrow>
                  Request access
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <Image
                src={v.glyph}
                alt={`${v.archetype} glyph`}
                width={220}
                height={220}
                priority
                sizes="(max-width: 880px) 96px, 220px"
                style={{
                  width: "clamp(96px, 18vw, 220px)",
                  height: "auto",
                  objectFit: "contain",
                  filter:
                    "drop-shadow(0 0 32px color-mix(in srgb, var(--_tint) 60%, transparent))",
                }}
              />
            </Reveal>
          </div>
        </div>
      </header>

      {/* 2. Scene — pulled quote */}
      <section className="sec sec-yt">
        <Reveal>
          <figure style={{ margin: 0, maxWidth: "62ch" }}>
            <blockquote
              style={{
                margin: 0,
                paddingLeft: "var(--space-6)",
                borderLeft: "2px solid var(--_tint)",
                fontFamily: "var(--font-display)",
                fontWeight: "var(--fw-light)",
                fontSize: "var(--fs-h2)",
                lineHeight: "var(--lh-snug)",
                letterSpacing: "var(--ls-snug)",
                color: "var(--text-1)",
              }}
            >
              {v.scene}
            </blockquote>
          </figure>
        </Reveal>
      </section>

      {/* 3. Capabilities */}
      <section className="sec sec-y">
        <Reveal>
          <SectionHeading
            eyebrow="What it does"
            title="What the mind does here"
          />
        </Reveal>
        <div className="feature-grid" style={{ marginTop: "var(--space-7)" }}>
          {v.capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 80}>
              <Card pad lift>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "var(--fw-bold)",
                    fontSize: "var(--fs-h4)",
                    letterSpacing: "var(--ls-snug)",
                    color: "var(--text-1)",
                    margin: 0,
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--fs-body)",
                    lineHeight: "var(--lh-normal)",
                    color: "var(--text-3)",
                    margin: "var(--space-3) 0 0",
                  }}
                >
                  {cap.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Proof */}
      <section className="sec sec-yt">
        <div className="stat-row">
          {v.proof.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <StatBlock
                value={stat.value}
                unit={stat.unit}
                label={stat.label}
                accent={i === 0}
                rule
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Other archetypes */}
      <section className="sec sec-y">
        <Reveal>
          <SectionHeading
            eyebrow="One mind, many roles"
            title="Other archetypes"
          />
        </Reveal>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-4)",
            marginTop: "var(--space-6)",
          }}
        >
          {others.map((o, i) => {
            const otherTint = {
              "--_tint": `var(--pillar-${o.tint})`,
            } as CSSProperties;
            return (
              <Reveal key={o.slug} delay={i * 70}>
                <Link
                  href={`/archetypes/${o.slug}`}
                  style={{
                    ...otherTint,
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-4)",
                    padding: "var(--space-4) var(--space-5)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border-hairline)",
                    background:
                      "linear-gradient(180deg, var(--ink-850), var(--ink-900))",
                    textDecoration: "none",
                  }}
                >
                  <Image
                    src={o.glyph}
                    alt=""
                    width={40}
                    height={40}
                    sizes="40px"
                    style={{
                      width: 40,
                      height: 40,
                      objectFit: "contain",
                      filter:
                        "drop-shadow(0 0 12px color-mix(in srgb, var(--_tint) 55%, transparent))",
                    }}
                  />
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--fs-eyebrow)",
                        letterSpacing: "var(--ls-eyebrow)",
                        textTransform: "uppercase",
                        color: "var(--_tint)",
                        fontWeight: "var(--fw-semibold)",
                      }}
                    >
                      {o.vertical}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--fs-h4)",
                        fontWeight: "var(--fw-bold)",
                        color: "var(--text-1)",
                      }}
                    >
                      {o.archetype}
                    </span>
                  </span>
                  <ArrowRight
                    width={16}
                    height={16}
                    style={{ color: "var(--text-3)" }}
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="sec sec-y cta-band">
        <Reveal>
          <div className="cta-band__card">
            <h2>Bring this role to your floor.</h2>
            <p>Tell us what you deploy and where. We will map it to a pilot.</p>
            <Button href="/contact" variant="primary" arrow>
              Request access
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
