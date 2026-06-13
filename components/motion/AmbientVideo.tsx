"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Muted, inline, looping background video that reliably autoplays.
 *
 * Bare `autoPlay` is unreliable (browser autoplay policy + `preload`), so we
 * explicitly call play() once the element is in view, retry on `canplay`, and
 * pause it again when it scrolls offscreen (per the perf spec). Under reduced
 * motion we never play and the poster frame stands in.
 */
export function AmbientVideo({
  mp4,
  webm,
  poster,
  className,
  style,
  ariaLabel,
}: {
  mp4: string;
  webm?: string;
  poster?: string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React does not reliably reflect the `muted` attribute to the DOM
    // property, so production builds can present the video as non-muted and the
    // browser BLOCKS autoplay (it plays in dev only because of the double
    // render). Force it on the element so muted autoplay is always allowed.
    v.muted = true;
    v.defaultMuted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else v.pause();
      },
      { threshold: 0.05 },
    );
    io.observe(v);

    v.addEventListener("canplay", tryPlay);
    // First attempt as soon as we mount (covers the in-view-on-load case).
    tryPlay();

    return () => {
      io.disconnect();
      v.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={cn(className)}
      style={style}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      poster={poster}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
    >
      {webm && <source src={webm} type="video/webm" />}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
