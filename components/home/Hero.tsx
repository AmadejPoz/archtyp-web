"use client";

import Image from "next/image";
import { Button } from "@/components/ds/Button";
import { ParticleField } from "@/components/motion/ParticleField";
import { Parallax } from "@/components/motion/Parallax";
import { home, assets } from "@/lib/content";

export function Hero() {
  const { eyebrow, headline, sub, primary, secondary } = home.hero;
  return (
    <header className="hero">
      <Parallax speed={0.12} className="hero__media">
        <Image
          src={assets.heroBrain}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.5 }}
        />
      </Parallax>
      <div className="hero__scrim" aria-hidden />
      <ParticleField className="hero__particles" opacity={0.45} />

      <div className="sec">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <span className="dot" />
            <span>{eyebrow}</span>
          </div>
          <h1>
            {headline[0]}
            <em>{headline[1]}</em>
            {headline[2]}
          </h1>
          <p className="hero__sub">{sub}</p>
          <div className="hero__cta">
            <Button href={primary.href} variant="primary" arrow>
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="text">
              {secondary.label}
            </Button>
          </div>
        </div>
      </div>

      <a href="#faculties" className="hero__scroll" aria-label="Scroll to explore">
        <span>Scroll</span>
        <span className="line" />
      </a>
    </header>
  );
}
