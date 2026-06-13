import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ds/Badge";
import { Button } from "@/components/ds/Button";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { Tag } from "@/components/ds/Tag";
import { Reveal } from "@/components/motion/Reveal";
import { ParticleField } from "@/components/motion/ParticleField";
import { cn } from "@/lib/utils";
import { robot, assets } from "@/lib/content";
import styles from "./robot.module.css";

export const metadata: Metadata = {
  title: "Alto",
  description: robot.lead,
};

export default function RobotPage() {
  const { badge, eyebrow, title, lead, registerCta, specs, sensors, note } = robot;

  return (
    <>
      {/* 1. Hero stage — the unveiling. A glowing dark field, a particle layer
          and the robot standing centre stage, with badge, heading and CTA. */}
      <section className={cn("sec sec-y robot", styles.stageSection)}>
        <ParticleField className="z-0" opacity={0.45} />
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
                sizes="(max-width: 980px) 92vw, 860px"
                style={{ objectFit: "cover" }}
              />
              <span className="alto-shot__vignette" aria-hidden />
            </figure>
          </Reveal>
          <Reveal className={styles.intro} delay={120}>
            <Badge variant="soon" dot>
              {badge}
            </Badge>
            <div style={{ height: 18 }} />
            <SectionHeading align="center" size="lg" eyebrow={eyebrow} title={title} lead={lead} />
            <div style={{ height: 26 }} />
            <Button href={registerCta.href} variant="primary" size="lg" arrow>
              {registerCta.label}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 2. Specifications */}
      <section className="sec sec-y">
        <Reveal>
          <SectionHeading align="center" eyebrow="Specifications" title="Built for the floor." />
        </Reveal>
        <Reveal delay={80}>
          <dl className={cn("robot__specs", styles.specs)}>
            {specs.map(([k, v]) => (
              <div className="robot__spec" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* 3. Sensor suite, with the indicative-spec note beneath it. */}
      <section className="sec sec-yt">
        <Reveal className={styles.suite}>
          <span className="eyebrow">Sensor suite</span>
          <div className={cn("robot__sensors", styles.sensors)}>
            {sensors.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          {/* 4. Indicative-spec note, small and muted. */}
          <p className={styles.note}>{note}</p>
        </Reveal>
      </section>

      {/* 5. Register-interest CTA band */}
      <section className="sec sec-y cta-band">
        <Reveal>
          <div className="cta-band__card">
            <h2>Be first to put it to work.</h2>
            <p>The body is coming. Tell us where it should stand, and we will bring you in early.</p>
            <Button href={registerCta.href} variant="primary" arrow>
              {registerCta.label}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
