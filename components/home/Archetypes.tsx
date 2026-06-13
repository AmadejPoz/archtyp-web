import { SectionHeading } from "@/components/ds/SectionHeading";
import { ArchetypeCard } from "@/components/ds/ArchetypeCard";
import { Button } from "@/components/ds/Button";
import { Reveal } from "@/components/motion/Reveal";
import { home, verticals } from "@/lib/content";

export function Archetypes() {
  return (
    <section className="sec sec-y" id="archetypes">
      <div className="arch__head">
        <Reveal>
          <SectionHeading
            eyebrow={home.archetypes.eyebrow}
            title={home.archetypes.title}
            lead={home.archetypes.lead}
          />
        </Reveal>
        <Reveal>
          <Button href="/archetypes" variant="text">
            View all verticals
          </Button>
        </Reveal>
      </div>
      <div className="arch__grid">
        {verticals.map((v, i) => (
          <Reveal key={v.slug} delay={(i % 4) * 70}>
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
  );
}
