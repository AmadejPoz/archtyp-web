"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ParticleField } from "@/components/motion/ParticleField";
import { AmbientVideo } from "@/components/motion/AmbientVideo";
import { faculties, home, assets, type PillarTint } from "@/lib/content";

const TINTS: Record<PillarTint, string> = {
  identify: "var(--pillar-identify)",
  integrate: "var(--pillar-integrate)",
  speak: "var(--pillar-speak)",
  remember: "var(--pillar-remember)",
};

const N = faculties.length;
const tintVar = (t: PillarTint) => ({ "--_tint": TINTS[t] }) as CSSProperties;

function IdentifyVideo() {
  return (
    <div className="fac-detail__media" data-anim>
      <AmbientVideo
        mp4={assets.media.identify.mp4}
        webm={assets.media.identify.webm}
        poster={assets.media.identify.poster}
        ariaLabel="Live face recognition"
      />
    </div>
  );
}

export function Faculties() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const [staticMode, setStaticMode] = useState(false);

  // Pin the stage and scrub through the four faculties.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const stage = stageRef.current;
    if (!stage) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStaticMode(true);
      return;
    }

    const mm = gsap.matchMedia();
    mm.add("(min-width: 981px) and (prefers-reduced-motion: no-preference)", () => {
      const st = ScrollTrigger.create({
        trigger: stage,
        start: "center center",
        end: "+=3200",
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${self.progress.toFixed(4)})`;
          }
          const i = Math.max(0, Math.min(N - 1, Math.floor(self.progress * N - 1e-6)));
          setActive((prev) => (prev === i ? prev : i));
        },
      });
      triggerRef.current = st;
      return () => {
        triggerRef.current = null;
        st.kill();
      };
    });

    return () => mm.revert();
  }, []);

  // Choreograph the active faculty as it becomes active: the glyph pops, the
  // role, name, description and media rise in on a stagger.
  useEffect(() => {
    if (staticMode) return;
    const root = detailRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const panel = root.querySelector<HTMLElement>(`[data-panel="${active}"]`);
    if (!panel) return;

    const ctx = gsap.context(() => {
      const glyph = panel.querySelector(".fac-detail__glyph");
      const items = panel.querySelectorAll("[data-anim]");
      if (glyph) {
        gsap.fromTo(
          glyph,
          { scale: 0.8, rotate: -8, opacity: 0 },
          { scale: 1, rotate: 0, opacity: 1, duration: 0.7, ease: "back.out(1.6)", overwrite: true },
        );
      }
      gsap.fromTo(
        items,
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: "power3.out", overwrite: true },
      );
    }, panel);

    return () => ctx.revert();
  }, [active, staticMode]);

  const jumpTo = (i: number) => {
    const st = triggerRef.current;
    setActive(i);
    if (!st) return;
    const target = st.start + ((i + 0.5) / N) * (st.end - st.start);
    const lenis = (window as unknown as { lenis?: { scrollTo: (n: number) => void } }).lenis;
    if (lenis) lenis.scrollTo(target);
    else window.scrollTo({ top: target, behavior: "smooth" });
  };

  const activeFaculty = faculties[active];

  return (
    <section className={`sec sec-y${staticMode ? " fac--static" : ""}`} id="faculties" ref={sectionRef}>
      <Reveal className="fac__head">
        <SectionHeading
          eyebrow={home.faculties.eyebrow}
          title={home.faculties.title}
          lead={home.faculties.lead}
        />
      </Reveal>

      {/* Desktop: pinned, scrubbed sequence */}
      <div className="fac-stage" ref={stageRef} style={tintVar(activeFaculty.tint)}>
        <ul className="fac-index">
          {faculties.map((f, i) => (
            <li
              key={f.name}
              className={`fac-index__item${i === active ? " is-active" : ""}`}
              style={tintVar(f.tint)}
              onClick={() => jumpTo(i)}
            >
              <span className="fac-index__num">Faculty {String(i + 1).padStart(2, "0")}</span>
              <p className="fac-index__name">{f.name}</p>
            </li>
          ))}
        </ul>

        <div className="fac-detail" ref={detailRef}>
          <ParticleField className="fac-detail__particles" opacity={0.22} density={0.00006} />
          <div className="fac-detail__glowwrap" aria-hidden>
            <div className="fac-detail__glow" />
          </div>

          {faculties.map((f, i) => (
            <div
              key={f.name}
              className="fac-detail__body"
              data-panel={i}
              aria-hidden={i !== active}
              style={{
                position: i === 0 ? "relative" : "absolute",
                inset: i === 0 ? undefined : 0,
                padding: i === 0 ? undefined : "var(--space-8)",
                opacity: i === active ? 1 : 0,
                transition: "opacity .5s var(--ease-out)",
                pointerEvents: i === active ? "auto" : "none",
              }}
            >
              <span className="fac-detail__glyphwrap">
                <Image className="fac-detail__glyph" src={f.glyph} alt="" width={76} height={76} />
              </span>
              <span className="fac-detail__role" data-anim>
                {f.role}
              </span>
              <h3 className="fac-detail__name" data-anim>
                {f.name}
              </h3>
              <p className="fac-detail__desc" data-anim>
                {f.long}
              </p>
              {f.tint === "identify" && <IdentifyVideo />}
            </div>
          ))}

          <div className="fac-foot">
            <div className="fac-counter">
              <span className="fac-counter__cur">{String(active + 1).padStart(2, "0")}</span>
              <span className="fac-counter__tot">/ {String(N).padStart(2, "0")}</span>
            </div>
            <div className="fac-progress" aria-hidden>
              <div className="fac-progress__bar" ref={progressRef} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / reduced motion: stacked, each revealing in turn */}
      <div className="fac-stack">
        {faculties.map((f, i) => (
          <Reveal key={f.name} delay={(i % 2) * 80}>
            <div className="fac-detail" style={tintVar(f.tint)}>
              <div className="fac-detail__glowwrap" aria-hidden>
                <div className="fac-detail__glow" />
              </div>
              <div className="fac-detail__body" style={{ position: "relative" }}>
                <span className="fac-detail__glyphwrap">
                  <Image className="fac-detail__glyph" src={f.glyph} alt="" width={64} height={64} />
                </span>
                <span className="fac-detail__role">{f.role}</span>
                <h3 className="fac-detail__name">{f.name}</h3>
                <p className="fac-detail__desc">{f.long}</p>
                {f.tint === "identify" && <IdentifyVideo />}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
