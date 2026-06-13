import { Button } from "@/components/ds/Button";
import { Reveal } from "@/components/motion/Reveal";
import { home } from "@/lib/content";

export function Philosophy() {
  const { line, links } = home.philosophy;
  return (
    <section className="philo sec-y" id="philosophy">
      <div className="sec">
        <Reveal>
          <p className="philo__quote">
            {line[0]}
            <b>{line[1]}</b>
            {line[2]}
          </p>
        </Reveal>
        <Reveal>
          <div className="philo__links">
            {links.map((l) => (
              <Button key={l.label} href={l.href} variant="text">
                {l.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
