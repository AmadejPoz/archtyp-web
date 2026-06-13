import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ds/Badge";
import { Button } from "@/components/ds/Button";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { StatBlock } from "@/components/ds/StatBlock";
import { Tag } from "@/components/ds/Tag";
import { Reveal } from "@/components/motion/Reveal";
import { ParticleField } from "@/components/motion/ParticleField";
import { cn } from "@/lib/utils";
import { robot, assets } from "@/lib/content";
import styles from "./alto.module.css";

export const metadata: Metadata = {
  title: "Alto",
  description:
    "Alto is the first robot ARCHTYP is deploying: a retail host co-designed by Temi and ARCHTYP, the smartest robot in the world, with more than 1000 preorders.",
};

export default function AltoPage() {
  const { badge, eyebrow, title, lead, positioning, coDesign, stats, registerCta, sensors, note, specSheet } =
    robot;

  return (
    <>
      {/* 1. Hero — the photoreal Alto on the floor, the claim, the preorder CTA. */}
      <section className={cn("sec sec-y robot", styles.stageSection)}>
        <ParticleField className="z-0" opacity={0.4} />
        <div className={cn("robot__glow", styles.glow)} aria-hidden />
        <div className={styles.hero}>
          <Reveal className={cn("robot__stage", styles.stage)}>
            <figure className="alto-shot">
              <Image
                className="alto-shot__img"
                src={assets.robot}
                alt="Alto, the ARCHTYP robot, on a retail floor"
                fill
                priority
                sizes="(max-width: 980px) 92vw, 880px"
                style={{ objectFit: "cover" }}
              />
              <span className="alto-shot__vignette" aria-hidden />
            </figure>
          </Reveal>
          <Reveal className={styles.intro} delay={120}>
            <Badge variant="accent" dot>
              {badge}
            </Badge>
            <div style={{ height: 18 }} />
            <SectionHeading align="center" size="lg" eyebrow={eyebrow} title={title} lead={lead} />
            <div style={{ height: 22 }} />
            <span className={styles.codesign}>{coDesign}</span>
            <div style={{ height: 26 }} />
            <Button href={registerCta.href} variant="primary" size="lg" arrow>
              {registerCta.label}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 2. The numbers + how Alto sits in the archetype model. */}
      <section className="sec sec-y">
        <Reveal className="stat-row">
          {stats.map((s, i) => (
            <StatBlock key={s.label} value={s.value} label={s.label} accent={i === 0} rule={i === 0} />
          ))}
        </Reveal>
        <div style={{ height: "var(--space-8)" }} />
        <Reveal>
          <p className={styles.positioning}>{positioning}</p>
        </Reveal>
        <div style={{ height: "var(--space-6)" }} />
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button href="/archetypes/retail" variant="text">
              See the retail archetype
            </Button>
          </div>
        </Reveal>
      </section>

      {/* 3. The full specification sheet (the supplied infographic), framed. */}
      <section className="sec sec-y">
        <Reveal>
          <SectionHeading align="center" eyebrow="Inside Alto" title="The full specification" />
        </Reveal>
        <div style={{ height: "var(--space-8)" }} />
        <Reveal>
          <div className={styles.sheet}>
            <Image
              src={specSheet}
              alt="Alto specification sheet: advanced sensor suite, dimensions and key specifications"
              width={1024}
              height={1535}
              sizes="(max-width: 600px) 92vw, 560px"
            />
          </div>
        </Reveal>
        <div style={{ height: "var(--space-8)" }} />
        <Reveal className={styles.suite}>
          <span className="eyebrow">Sensor suite</span>
          <div className={cn("robot__sensors", styles.sensors)}>
            {sensors.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          <p className={styles.note}>{note}</p>
        </Reveal>
      </section>

      {/* 4. Preorder CTA. */}
      <section className="sec sec-y cta-band">
        <Reveal>
          <div className="cta-band__card">
            <h2>Put the smartest robot in the world to work.</h2>
            <p>More than 1000 teams have already reserved Alto. Tell us where it should stand, and we will bring you in early.</p>
            <Button href={registerCta.href} variant="primary" size="lg" arrow>
              {registerCta.label}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
