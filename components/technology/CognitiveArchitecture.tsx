import { SectionHeading } from "@/components/ds/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Cognitive architecture diagram: INDUIT configures the DMN reasoning core,
 * which speaks and acts in real time and draws on perception, tools, context
 * and memory. Ported from the supplied architecture spec; styling lives under
 * `.arch-diagram` in globals.css (mapped to brand tokens + Sora).
 */
export function CognitiveArchitecture() {
  return (
    <>
      <Reveal>
        <SectionHeading
          eyebrow="The cognitive architecture"
          title="How the mind works"
          lead="INDUIT configures the mind. The Default Mode Network reasons at the centre, speaks and acts in real time, and draws on perception, tools, context and memory to move through the world."
        />
      </Reveal>
      <div style={{ height: "var(--space-8)" }} />
      <Reveal className="arch-diagram">
        <svg
          viewBox="0 0 1200 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="ARCHTYP cognitive architecture: INDUIT configures the DMN reasoning core, which speaks and acts in real time and draws on perception, tools, context and memory"
        >
          <defs>
            <marker id="arch-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto">
              <path d="M0 0 L7 3 L0 6 Z" fill="rgba(255,255,255,0.5)" />
            </marker>
            <marker id="arch-arrow-live" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto">
              <path d="M0 0 L7 3 L0 6 Z" fill="#00ced1" />
            </marker>
            <filter id="arch-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="14" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="arch-coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0,206,209,0.22)" />
              <stop offset="100%" stopColor="rgba(0,206,209,0)" />
            </radialGradient>
          </defs>

          {/* core glow */}
          <ellipse cx="600" cy="180" rx="300" ry="190" fill="url(#arch-coreGlow)" />

          {/* connectors */}
          <path className="line-live" d="M300 178 L466 178" markerEnd="url(#arch-arrow-live)" />
          <path className="line-live" d="M730 178 L896 178" markerEnd="url(#arch-arrow-live)" />
          <path className="line" d="M600 252 L600 332" />
          <path className="line" d="M230 332 L971 332" />
          <path className="line" d="M230 332 L230 376" markerEnd="url(#arch-arrow)" />
          <path className="line" d="M477 332 L477 376" markerEnd="url(#arch-arrow)" />
          <path className="line" d="M724 332 L724 376" markerEnd="url(#arch-arrow)" />
          <path className="line" d="M971 332 L971 376" markerEnd="url(#arch-arrow)" />

          {/* INDUIT */}
          <g>
            <rect x="90" y="128" width="210" height="100" rx="16" className="n-fill n-stroke" />
            <g transform="translate(114,150)" className="ic">
              <rect x="0" y="3" width="20" height="16" rx="2" />
              <path d="M5 3 V0 M15 3 V0 M5 19 V22 M15 19 V22 M20 8 H23 M20 14 H23 M0 8 H-3 M0 14 H-3" />
            </g>
            <text className="t-title" x="150" y="168" fontSize="20" textAnchor="start">
              INDUIT
            </text>
            <text className="t-sub" x="114" y="206" fontSize="12.5" textAnchor="start">
              Configure & deploy the mind
            </text>
          </g>

          {/* DMN core */}
          <g filter="url(#arch-glow)">
            <rect x="470" y="108" width="260" height="144" rx="22" fill="#101826" className="core-stroke" strokeWidth="1.5" />
          </g>
          <text className="t-title" x="600" y="172" fontSize="40" textAnchor="middle" letterSpacing="3">
            DMN
          </text>
          <text className="t-eyebrow" x="600" y="200" fontSize="11" textAnchor="middle">
            DEFAULT MODE NETWORK
          </text>
          <text className="t-sub" x="600" y="226" fontSize="12.5" textAnchor="middle" fill="#8493ab">
            The reasoning core
          </text>

          {/* VOICE */}
          <g>
            <rect x="900" y="128" width="220" height="100" rx="16" className="n-fill n-stroke" />
            <g transform="translate(924,150)" className="ic">
              <path d="M2 11 V7 M7 15 V3 M12 18 V0 M17 13 V5 M22 11 V7" />
            </g>
            <text className="t-title" x="958" y="168" fontSize="20" textAnchor="start">
              VOICE
            </text>
            <text className="t-sub" x="924" y="206" fontSize="12.5" textAnchor="start">
              Realtime speech, in and out
            </text>
          </g>

          {/* PERCEPTION */}
          <g>
            <rect x="120" y="380" width="220" height="128" rx="16" className="n-fill n-stroke" />
            <g transform="translate(144,402)" className="ic">
              <circle cx="11" cy="9" r="9" />
              <circle cx="11" cy="9" r="3.2" />
            </g>
            <text className="t-eyebrow" x="144" y="446" fontSize="10">
              PERCEPTION
            </text>
            <text className="t-title" x="144" y="468" fontSize="17">
              Sensors & cameras
            </text>
            <text className="t-sub" x="144" y="486" fontSize="11.5" fill="#8493ab">
              Depth · vision · LiDAR
            </text>
            <text className="t-sub" x="144" y="503" fontSize="11.5" fill="#8493ab">
              Spatial awareness of the room
            </text>
          </g>

          {/* TOOLS */}
          <g>
            <rect x="367" y="380" width="220" height="128" rx="16" className="n-fill n-stroke" />
            <g transform="translate(391,402)" className="ic">
              <path d="M14 2 a5 5 0 0 0-6 6 l-6 6 2 2 6-6 a5 5 0 0 0 6-6 l-3 3-2-2 3-3" />
            </g>
            <text className="t-eyebrow" x="391" y="446" fontSize="10">
              TOOLS
            </text>
            <text className="t-title" x="391" y="468" fontSize="17">
              Act in the world
            </text>
            <text className="t-sub" x="391" y="486" fontSize="11.5" fill="#8493ab">
              Speak · navigate · move · call
            </text>
          </g>

          {/* CONTEXT */}
          <g>
            <rect x="614" y="380" width="220" height="128" rx="16" className="n-fill n-stroke" />
            <g transform="translate(638,402)" className="ic">
              <path d="M2 4 h18 M2 10 h18 M2 16 h11" />
            </g>
            <text className="t-eyebrow" x="638" y="446" fontSize="10">
              CONTEXT
            </text>
            <text className="t-title" x="638" y="468" fontSize="17">
              Working context
            </text>
            <text className="t-sub" x="638" y="486" fontSize="11.5" fill="#8493ab">
              Simple & complex
            </text>
          </g>

          {/* MEMORY */}
          <g>
            <rect x="861" y="380" width="220" height="128" rx="16" className="n-fill n-stroke" />
            <g transform="translate(885,402)" className="ic">
              <ellipse cx="10" cy="4" rx="9" ry="3.4" />
              <path d="M1 4 V14 a9 3.4 0 0 0 18 0 V4 M1 9 a9 3.4 0 0 0 18 0" />
            </g>
            <text className="t-eyebrow" x="885" y="446" fontSize="10">
              MEMORY
            </text>
            <text className="t-title" x="885" y="468" fontSize="17">
              Carries the moment
            </text>
            <text className="t-sub" x="885" y="486" fontSize="11.5" fill="#8493ab">
              Short & long term
            </text>
          </g>
        </svg>
      </Reveal>
    </>
  );
}
