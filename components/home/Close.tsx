import { Button } from "@/components/ds/Button";
import { Reveal } from "@/components/motion/Reveal";
import { home } from "@/lib/content";

export function Close() {
  return (
    <section className="sec sec-y closing">
      <Reveal>
        <div className="closing__card">
          <h2>{home.close.line}</h2>
          <div className="row">
            <Button href={home.close.cta.href} variant="primary" size="lg" arrow>
              {home.close.cta.label}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
