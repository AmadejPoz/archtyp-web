import Image from "next/image";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { Badge } from "@/components/ds/Badge";
import { Button } from "@/components/ds/Button";
import { CapIcon } from "@/components/ds/icons";
import { HardwareRow } from "@/components/ds/HardwareRow";
import { Reveal } from "@/components/motion/Reveal";
import { home, assets } from "@/lib/content";

export function Induit() {
  const { badge, eyebrow, title, lead, capabilities, brandsLabel, primary, secondary } = home.induit;
  return (
    <section className="induit" id="induit">
      <div className="sec sec-y">
        <div className="induit__grid">
          <Reveal>
            <Badge variant="accent" dot>
              {badge}
            </Badge>
            <div style={{ height: 18 }} />
            <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
            <ul className="induit__caps">
              {capabilities.map((c) => (
                <li key={c.title}>
                  <span className="ic">
                    <CapIcon name={c.icon} />
                  </span>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
              <Button href={primary.href} variant="primary" arrow>
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <div className="frame">
              <div className="frame__bar">
                <span className="frame__dot" />
                <span className="frame__dot" />
                <span className="frame__dot" />
                <span className="frame__url">induit.archtyp.ai</span>
              </div>
              <Image
                src={assets.dashboardDark}
                alt="INDUIT fleet dashboard"
                width={3023}
                height={1725}
                sizes="(max-width: 980px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="brands">
          <div className="brands__label">{brandsLabel}</div>
          <HardwareRow />
        </Reveal>
      </div>
    </section>
  );
}
