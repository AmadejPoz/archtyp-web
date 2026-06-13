"use client";

import { useEffect, useState } from "react";
import { assets } from "@/lib/content";

/**
 * First-load preloader. A brief turquoise mark resolve, about two seconds,
 * then it clears. Shows once per session and never under reduced motion.
 */
export function Preloader() {
  const [active, setActive] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("archtyp-preloaded");
    if (reduce || seen) return;

    setActive(true);
    document.documentElement.style.overflow = "hidden";
    sessionStorage.setItem("archtyp-preloaded", "1");

    const leave = window.setTimeout(() => setLeaving(true), 1500);
    const done = window.setTimeout(() => {
      setActive(false);
      document.documentElement.style.overflow = "";
    }, 2100);

    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(done);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!active) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "grid",
        placeItems: "center",
        background: "var(--bg-base)",
        opacity: leaving ? 0 : 1,
        transition: "opacity 0.6s var(--ease-out)",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assets.symbol}
        alt=""
        style={{
          width: "clamp(64px, 12vw, 120px)",
          height: "auto",
          filter: "drop-shadow(0 0 30px var(--turq-glow))",
          animation: "preloader-resolve 1.5s var(--ease-out) forwards",
        }}
      />
      <style>{`
        @keyframes preloader-resolve {
          0%   { opacity: 0; transform: scale(0.82); filter: blur(8px) drop-shadow(0 0 0 var(--turq-glow)); }
          55%  { opacity: 1; transform: scale(1.02); filter: blur(0) drop-shadow(0 0 34px var(--turq-glow)); }
          100% { opacity: 1; transform: scale(1); filter: blur(0) drop-shadow(0 0 20px var(--turq-glow)); }
        }
      `}</style>
    </div>
  );
}
