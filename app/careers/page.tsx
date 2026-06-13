import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ds/Button";
import { Card } from "@/components/ds/Card";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { ArrowRight } from "@/components/ds/icons";
import { Reveal } from "@/components/motion/Reveal";
import { careers } from "@/lib/content";
import styles from "@/components/careers/careers.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.lead,
};

/**
 * Careers — inner page.
 * Hero, "How we work" values grid, an "Open roles" ruled list, and a closing
 * invitation. One dominant CTA throughout: introduce yourself.
 */
/** Wrap one word of a headline in the turquoise `.spark` accent, in place. */
function sparkWord(text: string, word: string) {
  const i = text.indexOf(word);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="spark">{word}</span>
      {text.slice(i + word.length)}
    </>
  );
}

export default function CareersPage() {
  const { eyebrow, title, lead, values, roles, cta, ctaNote } = careers;

  return (
    <>
      {/* 1. Hero */}
      <header className="page-hero">
        <div className="page-hero__bg" aria-hidden />
        <div className="sec page-hero__in">
          <Reveal>
            <SectionHeading
              size="lg"
              eyebrow={eyebrow}
              title={sparkWord(title, "mind")}
              lead={lead}
            />
            <div style={{ height: 26 }} />
            <Button href={cta.href} variant="primary" arrow>
              {cta.label}
            </Button>
          </Reveal>
        </div>
      </header>

      {/* 2. Values — how we work */}
      <section className="sec sec-y" aria-label="How we work">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A small team, building with care."
            as="h2"
          />
        </Reveal>
        <div style={{ height: "var(--space-7)" }} />
        <div className="feature-grid">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={(i % 2) * 90}>
              <Card>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--fs-h3)",
                    color: "var(--text-1)",
                    margin: 0,
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--fs-body)",
                    lineHeight: "var(--lh-normal)",
                    color: "var(--text-2)",
                    margin: "var(--space-3) 0 0",
                  }}
                >
                  {value.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Open roles */}
      <section className="sec sec-y" aria-label="Open roles">
        <Reveal>
          <SectionHeading
            eyebrow="Open roles"
            title="Where we need you now."
            lead="Senior, hands on, high ownership. If one fits, introduce yourself and we will take it from there."
            as="h2"
          />
        </Reveal>
        <div style={{ height: "var(--space-7)" }} />
        <ul className={styles.roles}>
          {roles.map((role, i) => (
            <li key={role.title}>
              <Reveal delay={(i % 5) * 70}>
                <Link
                  href={cta.href}
                  className={styles.row}
                  aria-label={`${role.title}, ${role.team}, ${role.location}, ${role.type}. Introduce yourself.`}
                >
                  <span className={styles.main}>
                    <span className={styles.team}>{role.team}</span>
                    <span className={styles.title}>{role.title}</span>
                  </span>
                  <span className={styles.meta}>
                    <span className={styles.metaItem}>{role.location}</span>
                    <span className={styles.metaItem}>{role.type}</span>
                    <span className={styles.arrow} aria-hidden>
                      <ArrowRight width={18} height={18} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Closing invitation */}
      <section className="sec sec-y cta-band">
        <Reveal>
          <div className="cta-band__card">
            <h2>{ctaNote}</h2>
            <Button href={cta.href} variant="primary" arrow>
              {cta.label}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
