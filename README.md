# ARCHTYP — marketing website

The production marketing site for **ARCHTYP**, the cognitive layer that gives service robots and humanoids a mind: the ability to identify who they are with, understand intent, speak naturally in many languages, and remember across encounters.

Cinematic, dark first, premium. Built to the brand's own design system, with an inertial scroll journey and a pinned, scrubbed faculties sequence as the centerpiece.

---

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme`) with the brand tokens as the single source of truth
- **Lenis** for inertial smooth scrolling, driven by the **GSAP** ticker
- **GSAP + ScrollTrigger** for the pinned/scrubbed faculties sequence
- **react-hook-form + zod** for the branching inquiry form
- A lightweight **canvas particle field** for turquoise depth (3D kept optional; no three.js dependency)
- `next/font` for **Sora** (display) + **Manrope** (body)

---

## Getting started

```bash
# from this directory (archtyp-web/)
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build (static where possible)
npm run start        # serve the production build
npm run typecheck    # tsc --noEmit (strict)
npm run lint         # next lint
npm run format       # prettier --write .
```

### Environment

Copy `.env.example` to `.env.local`. Everything is optional in development:

| Variable | Purpose |
| --- | --- |
| `ATTIO_API_KEY` | Attio CRM key. Destination for Request access / Register interest / Contact leads. **If unset, the API logs the lead and gracefully no-ops, so forms still work end to end.** |
| `ATTIO_OBJECT` | Attio object slug that receives leads (default `people`). |
| `ATTIO_LIST` | Optional list id to attach new records to. |
| `NEXT_PUBLIC_SITE_URL` | Canonical/OG/sitemap base URL (set in production). |

The CRM destination lives behind a clean seam in [`lib/crm.ts`](lib/crm.ts) (`submitLead`), so it can be swapped for any CRM without touching routes or forms.

---

## Project structure

```
app/
  layout.tsx              Root layout: fonts, SEO metadata, OG/Twitter, shell
  page.tsx                Homepage (built in full)
  globals.css             All brand tokens + base + DS component classes + section CSS
  sitemap.ts / robots.ts  SEO
  api/access/route.ts     Form submission endpoint (zod validation → CRM seam)
  technology/             DMN + the four faculties expanded + architecture
  induit/                 The platform: capabilities, hardware, commercial model
  archetypes/             Index + [vertical] (retail, hospitality, eldercare, airports-and-transit)
  robot/                  ARCHTYP Robot, coming soon
  culture/                The philosophical long-form page
  careers/                Values + open roles
  contact/                Branching Request access form
  privacy/ terms/         Placeholder legal pages

components/
  ds/                     Design-system primitives (Button, Badge, Tag, Card, Logo,
                          Input, SectionHeading, StatBlock, PillarCard, ArchetypeCard, icons)
  motion/                 SmoothScroll (Lenis), Reveal, Parallax, ParticleField, hooks
  layout/                 SiteNav, SiteFooter, Preloader
  home/                   Homepage sections (Hero, TheShift, Faculties, Archetypes,
                          Induit, RobotTeaser, Philosophy, Close)

lib/
  content.ts              Single source of truth for all copy and data
  crm.ts                  CRM seam (Attio behind env var, graceful no-op)
  utils.ts                cn() helper

public/
  brand/  glyphs/  img/   Brand SVGs, pillar glyphs, imagery (from the design system)
  media/                  Web-optimized 720p video (transcoded from 4K sources) + posters
```

---

## Design system

All brand decisions are encoded as CSS variables in [`app/globals.css`](app/globals.css) and bridged into Tailwind utilities via `@theme inline`:

- **Dark first.** Near-black midnight-blue field (`--ink-950 … --ink-700`, brand anchor `#161d2a`).
- **One accent.** Turquoise `#00ced1`, used sparingly so it reads as the spark. Soft glow on dark surfaces.
- **Pillar tints** (low-saturation accents only): Identify turquoise, Integrate green, Speak magenta-violet, Remember blue.
- **Type.** Sora display (tight tracking, large), Manrope body, letter-spaced uppercase eyebrows.
- The design-system components are ported 1:1 to typed React in `components/ds/`, with their styling living as global classes (`.atp-*`) so the components stay thin.

## Motion system

- **Smooth scroll** ([`components/motion/SmoothScroll.tsx`](components/motion/SmoothScroll.tsx)): Lenis, lightly damped, driven by the GSAP ticker so ScrollTrigger scrubs in sync. Native feel, never hijacked.
- **Reveals** ([`components/motion/Reveal.tsx`](components/motion/Reveal.tsx)): fade + translate on the expo ease, staggered via `delay`. Settles and stays.
- **Faculties** ([`components/home/Faculties.tsx`](components/home/Faculties.tsx)): pins and scrubs through the four faculties on desktop; the active faculty's tint, glyph, copy and the embedded face-recognition clip crossfade in. Stacks into a readable list on small screens.
- **Parallax + ParticleField** give the dark space depth.
- **Discipline:** only `transform`/`opacity` animate. `prefers-reduced-motion` is honored everywhere (reveals render present, drift stops, the faculties section falls back to the static stack). Video is muted, autoplay, inline, looping, lazy, and paused offscreen.

## Content

Every page reads copy and data from [`lib/content.ts`](lib/content.ts). Edit copy there and it updates across the site. Voice: short, confident, no dashes in visible copy, one dominant CTA per view.

## Media pipeline

The two source clips were 4K (~100–140 MB each). They are transcoded to web-optimized **720p MP4 + WebM** with poster stills in `public/media/`:

- `identify.*` — the face-recognition clip, embedded in the Identify faculty.
- `motionlogo.*` — the brand motion mark, used as an ambient hero on the Technology page.

To re-transcode from new sources, use `ffmpeg` at `-vf scale=-2:720` (h264 CRF 23 for MP4, libvpx-vp9 CRF 34 for WebM, `-an`).

---

## What is complete vs. follow-up

**Complete and production quality**

- **Homepage** end to end with the full motion system: preloader, hero (brain key-visual + parallax + particles), the shift, the pinned/scrubbed four faculties (with the recognition clip), archetypes, INDUIT, the robot teaser, philosophy, close, footer.
- **All routes built with real, on-brand content** (not lorem): `/technology`, `/induit`, `/archetypes` + the four `/archetypes/[vertical]` pages, `/robot`, `/culture`, `/careers`, `/contact`, `/privacy`, `/terms`.
- **Branching contact form** with validation, conditional fields, honeypot, success/error states, wired to the CRM seam.
- SEO (metadata, OG/Twitter, sitemap, robots), reduced-motion fallbacks, keyboard focus, responsive across mobile/tablet/desktop.
- Clean `tsc` and a clean `next build` (20/20 pages prerendered; verticals via `generateStaticParams`).

**Stubbed / for follow-up**

- **Legal pages** (`/privacy`, `/terms`) carry placeholder copy pending legal review.
- **Hardware logos** render as clean text wordmarks (Temi, Keenon, Unitree, Pudu); swap in official SVG logos when available.
- **ARCHTYP Robot render** uses the extracted spec-sheet image as a styled "coming soon" stage; replace with the final robot graphic / 3D when delivered.
- **Open roles** on `/careers` are representative; wire to a real ATS or detail pages when ready.
- **CRM field mapping** in `lib/crm.ts` targets generic Attio attribute slugs; align them to the workspace schema.
- The `attribute`-rich data room imagery and additional dashboard screenshots can be dropped into the INDUIT page as they are produced.

---

## Deployment

Optimized for **Vercel**. Push the repo, set the environment variables above, and deploy. Pages are statically generated where possible; the form endpoint runs as a serverless function.
