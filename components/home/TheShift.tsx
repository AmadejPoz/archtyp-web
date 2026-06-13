import { Reveal } from "@/components/motion/Reveal";
import { home } from "@/lib/content";

export function TheShift() {
  const { eyebrow, line } = home.shift;
  return (
    <section className="sec sec-y shift" id="shift">
      <Reveal className="shift__eyebrow">
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal>
        <p className="shift__line">
          {line[0]}
          <b>{line[1]}</b>
          {line[2]}
        </p>
      </Reveal>
    </section>
  );
}
