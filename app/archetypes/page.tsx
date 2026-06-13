import type { Metadata } from "next";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { ArchetypeCard } from "@/components/ds/ArchetypeCard";
import { Button } from "@/components/ds/Button";
import { Reveal } from "@/components/motion/Reveal";
import { archetypesIndex, verticals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Archetypes",
  description: archetypesIndex.lead,
};

export default function ArchetypesPage() {
  return (
    <>
      {/* 1. Hero */}
      <header className="page-hero">
        <div className="page-hero__bg" aria-hidden />
        <div className="sec page-hero__in">
          <Reveal>
            <SectionHeading
              size="lg"
              wide
              eyebrow={archetypesIndex.eyebrow}
              title={archetypesIndex.title}
              lead={archetypesIndex.lead}
            />
          </Reveal>
        </div>
      </header>

      {/* 2. Vertical grid */}
      <section className="sec sec-y">
        <div className="arch__grid">
          {verticals.map((v, i) => (
            <Reveal key={v.slug} delay={i * 70}>
              <ArchetypeCard
                role={v.vertical}
                name={v.archetype}
                line={v.line}
                glyphSrc={v.glyph}
                href={`/archetypes/${v.slug}`}
                cta="Learn more"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Closing CTA */}
      <section className="sec sec-y cta-band">
        <Reveal>
          <div className="cta-band__card">
            <h2>Find the role for your floor.</h2>
            <p>Tell us where the mind will work, and we will map it to a pilot.</p>
            <Button href="/contact" variant="primary" arrow>
              Request access
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
