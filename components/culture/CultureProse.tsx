"use client";

import { Fragment, useEffect, useRef } from "react";

/**
 * Long-form reading column for the Culture page.
 *
 * Renders the body paragraphs and the pull-quote as *direct* children of the
 * `.prose` element so the global cascade keeps working: only the very first
 * `<p>` gets the turquoise drop-cap (`.prose p:first-of-type::first-letter`)
 * and the `<blockquote>` keeps its turquoise left border. Wrapping each
 * paragraph in its own element would break `:first-of-type`, so instead every
 * block is its own scroll-reveal target — calm, slow, gently staggered for a
 * reading rhythm rather than a flashy entrance.
 *
 * `pullAfter` is the 1-based paragraph count after which the pull-quote is
 * inserted in document order (defaults to 3, per the page spec).
 */
export function CultureProse({
  paragraphs,
  pull,
  pullAfter = 3,
}: {
  paragraphs: readonly string[];
  pull: string;
  pullAfter?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const blocks = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!("IntersectionObserver" in window)) {
      blocks.forEach((b) => b.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    blocks.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);

  const insertAt = Math.min(Math.max(pullAfter, 1), paragraphs.length);

  return (
    <div className="prose" ref={ref}>
      {paragraphs.map((text, i) => (
        <Fragment key={i}>
          <p data-reveal className="archtyp-reveal">
            {text}
          </p>
          {pull && i + 1 === insertAt ? (
            <blockquote data-reveal className="archtyp-reveal">
              {pull}
            </blockquote>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
