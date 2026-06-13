import type { SVGProps } from "react";

/** Thin (2px, round cap) line icon set — matches the ARCHTYP UI icon language. */

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

const SOCIAL_PATHS: Record<string, string> = {
  x: "M18 2h3l-7 8 8 12h-6l-5-7-6 7H1l8-9L1 2h6l4 6z",
  linkedin:
    "M4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 9h2v12H3zM9 9h2v2h.1c.5-1 1.8-2 3.4-2 3 0 4.5 2 4.5 5.5V21h-2v-5.5c0-1.5-.6-2.5-2-2.5s-2 1-2 2.5V21H9z",
  github:
    "M12 2a10 10 0 0 0-3 19.5c.5 0 .7-.2.7-.5v-2c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6 0-.6 0-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1 2.9.8.1-.7.4-1 .6-1.3-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.6 0-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9 9 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.1 2.4.1 2.7.6.6 1 1.5 1 2.6 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2z",
};

export function SocialIcon({ type, ...props }: { type: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d={SOCIAL_PATHS[type] ?? SOCIAL_PATHS.x} />
    </svg>
  );
}

/** Small line icons for INDUIT capability rows. */
export function CapIcon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  const paths: Record<string, React.ReactNode> = {
    flow: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1.5" />
        <rect x="15" y="15" width="6" height="6" rx="1.5" />
        <path d="M9 6h4a2 2 0 0 1 2 2v7" />
      </>
    ),
    connect: <path d="M8 7H6a4 4 0 0 0 0 8h2M16 7h2a4 4 0 0 1 0 8h-2M8 11h8" />,
    fleet: (
      <>
        <rect x="3" y="4" width="7" height="7" rx="1" />
        <rect x="14" y="4" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    analytics: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  };
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {paths[name] ?? paths.flow}
    </svg>
  );
}
