import Image from "next/image";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { Badge } from "@/components/ds/Badge";
import { Button } from "@/components/ds/Button";
import { Tag } from "@/components/ds/Tag";
import { Reveal } from "@/components/motion/Reveal";
import { home, robot, assets } from "@/lib/content";

export function RobotTeaser() {
  return (
    <section className="sec sec-y robot" id="robot">
      <div className="robot__glow" aria-hidden />
      <div className="robot__grid">
        <Reveal className="robot__stage">
          <Image
            className="robot__img drift"
            src={assets.robot}
            alt="Alto, the ARCHTYP robot"
            width={314}
            height={1006}
            sizes="(max-width: 980px) 60vw, 30vw"
          />
        </Reveal>
        <Reveal>
          <Badge variant="soon">{home.robot.badge}</Badge>
          <div style={{ height: 18 }} />
          <SectionHeading eyebrow={home.robot.eyebrow} title={home.robot.title} lead={home.robot.lead} />
          <div className="robot__sensors">
            {robot.sensors.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          <dl className="robot__specs">
            {robot.specs.map(([k, v]) => (
              <div className="robot__spec" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div style={{ height: 22 }} />
          <Button href={home.robot.cta.href} variant="primary" arrow>
            {home.robot.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
