/**
 * ARCHTYP — content source of truth.
 *
 * Every page pulls copy and data from here so the voice stays consistent:
 * short, sophisticated English, confidence without hype, and no dashes in
 * visible copy (periods and commas only). The brand speaks as "we" and
 * addresses the reader as "you / your fleet". One idea per surface, one
 * dominant CTA per view (almost always "Request access").
 */

/* ----------------------------------------------------------------
   Types
   ---------------------------------------------------------------- */
export type PillarTint = "identify" | "integrate" | "speak" | "remember";

export interface NavLink {
  label: string;
  href: string;
}

export interface Faculty {
  tint: PillarTint;
  name: string;
  role: string;
  short: string;
  glyph: string;
  /** Extended copy for the Technology page. */
  long: string;
  jung: string;
}

export interface VerticalSummary {
  slug: string;
  vertical: string;
  archetype: string;
  line: string;
  glyph: string;
  tint: PillarTint;
}

export interface Vertical extends VerticalSummary {
  eyebrow: string;
  headline: string;
  lead: string;
  scene: string;
  capabilities: { title: string; body: string }[];
  proof: { value: string; unit?: string; label: string }[];
}

/* ----------------------------------------------------------------
   Site + navigation
   ---------------------------------------------------------------- */
export const site = {
  name: "ARCHTYP",
  domain: "archtyp.ai",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://archtyp.ai",
  title: "ARCHTYP, Cognitive Layer for Robots",
  description:
    "ARCHTYP is the hardware agnostic cognitive layer for service robots and humanoids, combining multilingual speech, recognition, memory, retrieval, and enterprise integration.",
  tagline: "We give robots a mind.",
  ogImage: "/img/hero-brain.jpg",
};

export const assets = {
  symbol: "/brand/symbol.svg",
  wordmark: "/brand/wordmark.svg",
  wordmarkDark: "/brand/wordmark-dark.svg",
  lockupVertical: "/brand/lockup-vertical.svg",
  lockupHorizontal: "/brand/lockup-horizontal.svg",
  heroBrain: "/img/hero-brain.jpg",
  robot: "/img/alto.png",
  altoSpecSheet: "/img/alto-spec-sheet.png",
  dashboardDark: "/img/induit-dashboard-dark.png",
  dashboardLight: "/img/induit-dashboard-light.png",
  flow: "/img/induit-flow.png",
  glyphs: {
    identify: "/glyphs/identify.png",
    integrate: "/glyphs/integrate.png",
    speak: "/glyphs/speak.png",
    remember: "/glyphs/remember.png",
  },
  media: {
    motionLogo: { mp4: "/media/motionlogo.mp4", webm: "/media/motionlogo.webm", poster: "/media/motionlogo-poster.jpg" },
    identify: { mp4: "/media/identify.mp4", webm: "/media/identify.webm", poster: "/media/identify-poster.jpg" },
  },
};

/** Lean primary nav. Verticals, robot, careers and contact are reached contextually. */
export const primaryNav: NavLink[] = [
  { label: "Technology", href: "/technology" },
  { label: "INDUIT", href: "/induit" },
  { label: "Archetypes", href: "/archetypes" },
  { label: "Culture", href: "/culture" },
];

export const hardware = ["Temi", "Keenon", "Unitree", "Pudu"];

export const footer = {
  tagline: "A cognitive core for machines, built on the structured logic of archetypal evolution.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Technology", href: "/technology" },
        { label: "INDUIT", href: "/induit" },
        { label: "Archetypes", href: "/archetypes" },
        { label: "Alto", href: "/robot" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Culture", href: "/culture" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Request access", href: "/contact" },
        { label: "Press", href: "/contact?intent=press" },
        { label: "Partners", href: "/contact?intent=distribute" },
      ],
    },
  ],
  legal: [
    { label: "Investors", href: "/contact?intent=other" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  social: [
    { type: "linkedin", href: "https://www.linkedin.com/company/archtyp" },
    { type: "x", href: "https://x.com/archtyp" },
    { type: "github", href: "https://github.com/archtyp" },
  ],
};

/* ----------------------------------------------------------------
   The four faculties (one continuous mind)
   ---------------------------------------------------------------- */
export const faculties: Faculty[] = [
  {
    tint: "identify",
    name: "Identify",
    role: "It knows who",
    short: "It knows who it is speaking with.",
    glyph: assets.glyphs.identify,
    long: "Face and presence recognition at the edge, in milliseconds. The robot knows a returning guest from a stranger, a member from a visitor, a colleague from a passer by, and adapts before it says a word.",
    jung: "The Ego recognizing itself in relation to the collective unconscious. The Explorer, the Definer.",
  },
  {
    tint: "integrate",
    name: "Understand",
    role: "It grasps intent",
    short: "It grasps what they actually mean.",
    glyph: assets.glyphs.integrate,
    long: "Beyond words to intent. The mind reads context, history and the systems around it, then decides what the moment actually calls for. It connects to the infrastructure you already run rather than asking the world to change for it.",
    jung: "Individuation. The merging of the conscious and the subconscious into a unified whole. The Connector.",
  },
  {
    tint: "speak",
    name: "Speak",
    role: "It answers",
    short: "It answers in their language, and means it.",
    glyph: assets.glyphs.speak,
    long: "Natural, multilingual conversation that carries warmth, not a script. The mind switches language the instant it hears one, and holds a tone that feels considered rather than canned.",
    jung: "The Persona, the mask the archetype wears when it meets the world. Personality through language and empathy.",
  },
  {
    tint: "remember",
    name: "Remember",
    role: "It carries on",
    short: "It carries the moment into the next one.",
    glyph: assets.glyphs.remember,
    long: "Memory that persists across encounters. The mind recalls a preference, a name, a last conversation, so every interaction starts further along than the last. Privacy first, retained only where it is welcome.",
    jung: "The Collective Unconscious and archetypal memory. The reservoir of knowledge the mind draws on.",
  },
];

/* ----------------------------------------------------------------
   Homepage
   ---------------------------------------------------------------- */
export const home = {
  hero: {
    eyebrow: "The cognitive layer for robots",
    headline: ["We give robots a ", "mind", "."],
    sub: "The cognitive layer that lets service robots and humanoids understand, remember, and belong in the human world.",
    primary: { label: "Request access", href: "/contact" },
    secondary: { label: "See how it thinks", href: "#faculties" },
  },
  shift: {
    eyebrow: "The shift",
    line: ["Hardware is becoming a commodity. The ", "mind", " is the product."],
  },
  faculties: {
    eyebrow: "Cognition, not automation",
    title: "Four faculties, one continuous mind",
    lead: "The same intelligence moves through four capabilities, the way a person does.",
  },
  archetypes: {
    eyebrow: "Archetypes",
    title: "One mind. Many roles.",
    lead: "The same intelligence becomes a host, a concierge, a companion, a guide, depending on where it works.",
  },
  induit: {
    badge: "The platform",
    eyebrow: "INDUIT",
    title: "The platform behind the mind",
    lead: "The brain that controls the robot, and everything needed to run a fleet of them.",
    capabilities: [
      { icon: "flow", title: "Configure flows", body: "Design how every robot behaves, stage by stage, in a visual editor." },
      { icon: "connect", title: "Connect your systems", body: "Plug into existing CRM, ERP and PMS with no rebuild." },
      { icon: "fleet", title: "Manage the fleet", body: "Every unit by location, usage and subscription." },
      { icon: "analytics", title: "Read it all", body: "One analytics dashboard across every site." },
    ],
    brandsLabel: "Runs on the robots you already deploy",
    primary: { label: "Request access", href: "/contact" },
    secondary: { label: "Explore INDUIT", href: "/induit" },
  },
  robot: {
    badge: "Coming soon",
    eyebrow: "Alto",
    title: "And a body built for the mind",
    lead: "Until now the mind has lived in other people's machines. Soon it will have one of its own. Its name is Alto.",
    cta: { label: "Meet Alto", href: "/robot" },
  },
  philosophy: {
    line: ["We are building one of the most important technologies of the coming century. It has to be built with ", "care", "."],
    links: [
      { label: "Read our philosophy", href: "/culture" },
      { label: "We are hiring", href: "/careers" },
    ],
  },
  close: {
    line: "Bring a mind to your robots.",
    cta: { label: "Request access", href: "/contact" },
  },
};

/* ----------------------------------------------------------------
   Archetype verticals
   ---------------------------------------------------------------- */
export const verticals: Vertical[] = [
  {
    slug: "retail",
    vertical: "Retail",
    archetype: "The Host",
    line: "The floor host who never forgets a face.",
    glyph: assets.glyphs.identify,
    tint: "identify",
    eyebrow: "Retail",
    headline: "The floor host who never forgets a face.",
    lead: "On the shop floor the mind greets returning customers by name, knows the regulars from the first time visitors, and guides each one to exactly what they came for.",
    scene: "A customer walks in for the third time this month. The robot recognizes them, recalls what they browsed last time, and offers a hand before they have to look for one.",
    capabilities: [
      { title: "Recognize and welcome", body: "Members, regulars and first time visitors, each met the right way." },
      { title: "Guide to the shelf", body: "Live inventory and store maps turn a question into a route." },
      { title: "Lift the basket", body: "Personalized suggestions grounded in what this person actually likes." },
      { title: "Hand off cleanly", body: "When a human is better, the mind brings staff in with full context." },
    ],
    proof: [
      { value: "12", unit: "ms", label: "Edge recognition latency" },
      { value: "40", unit: "+", label: "Languages spoken natively" },
      { value: "24/7", label: "On the floor, never off shift" },
    ],
  },
  {
    slug: "hospitality",
    vertical: "Hospitality",
    archetype: "The Concierge",
    line: "The concierge who speaks every guest's language.",
    glyph: assets.glyphs.speak,
    tint: "speak",
    eyebrow: "Hospitality",
    headline: "The concierge who speaks every guest's language.",
    lead: "In the lobby the mind checks guests in, answers in their own language the moment they speak it, and remembers the room, the routine and the request from last stay.",
    scene: "A guest arrives at midnight after a long flight. The mind greets them in their language, has their key ready, and knows they asked for a quiet floor last time.",
    capabilities: [
      { title: "Greet in any language", body: "The mind switches the instant it hears a new one. No menus, no friction." },
      { title: "Concierge the stay", body: "Bookings, directions, requests and local knowledge, on demand." },
      { title: "Remember the guest", body: "Preferences carry from one stay to the next, where the guest welcomes it." },
      { title: "Connect to the PMS", body: "Runs on top of the property systems you already operate." },
    ],
    proof: [
      { value: "40", unit: "+", label: "Languages, switched live" },
      { value: "0", label: "Front desk queues at peak" },
      { value: "100%", label: "Of guests met in their language" },
    ],
  },
  {
    slug: "eldercare",
    vertical: "Eldercare",
    archetype: "The Companion",
    line: "The companion who remembers what matters.",
    glyph: assets.glyphs.remember,
    tint: "remember",
    eyebrow: "Eldercare",
    headline: "The companion who remembers what matters.",
    lead: "In care the mind is a steady presence. It remembers names, routines and the small things that make a day feel like home, and it brings people in when they are needed.",
    scene: "A resident tells the same story they told yesterday. The mind listens as if it were the first time, then gently reminds them it is nearly time for their afternoon walk.",
    capabilities: [
      { title: "Familiar presence", body: "It recognizes each resident and meets them with patience and warmth." },
      { title: "Gentle reminders", body: "Medication, meals and appointments, offered without nagging." },
      { title: "Stay connected", body: "Calls with family, on a single spoken request." },
      { title: "Escalate to people", body: "When something is wrong, the mind alerts staff with what it saw." },
    ],
    proof: [
      { value: "Always", label: "Present, patient, on call" },
      { value: "1", label: "Familiar face, every day" },
      { value: "Private", label: "Memory kept only where welcome" },
    ],
  },
  {
    slug: "airports-and-transit",
    vertical: "Airports & Transit",
    archetype: "The Guide",
    line: "The guide who keeps thousands moving.",
    glyph: assets.glyphs.integrate,
    tint: "integrate",
    eyebrow: "Airports & Transit",
    headline: "The guide who keeps thousands moving.",
    lead: "In the terminal the mind answers the same urgent question for thousands of travelers, in their own language, and routes each one to the gate, the desk or the exit they need.",
    scene: "A traveler is about to miss a connection. The mind reads the boarding pass, gives the fastest route to the gate in their language, and flags the delay before they ask.",
    capabilities: [
      { title: "Wayfinding at scale", body: "Gates, desks, baggage and exits, answered instantly and in any language." },
      { title: "Live operations", body: "Connected to flight and transit data so answers are always current." },
      { title: "Crowd aware", body: "It handles thousands of short interactions without losing the thread." },
      { title: "Accessible to all", body: "Voice first, multilingual, and patient with every traveler." },
    ],
    proof: [
      { value: "1000s", label: "Of travelers guided daily" },
      { value: "40", unit: "+", label: "Languages at the gate" },
      { value: "Live", label: "Tied to operations data" },
    ],
  },
];

export const archetypesIndex = {
  eyebrow: "Archetypes",
  title: "One mind. Many roles.",
  lead: "The same intelligence becomes a host, a concierge, a companion, a guide, depending on where it works. The faculties stay the same. The role changes with the room.",
};

/* ----------------------------------------------------------------
   Technology (DMN) page
   ---------------------------------------------------------------- */
export const technology = {
  eyebrow: "Technology",
  title: "DMN, the cognitive core",
  lead: "One mind, hardware agnostic, running at the edge. DMN is the layer that turns a service robot into something a person can talk to, be known by, and trust.",
  hero: {
    headline: ["A mind, not a ", "script", "."],
    sub: "DMN combines recognition, understanding, speech and memory into a single cognitive loop that runs on the robots you already deploy.",
  },
  pillarsIntro: {
    eyebrow: "The four faculties",
    title: "Four faculties, one continuous mind",
    lead: "Drawn from four archetypal pillars. Each is a real capability, working today.",
  },
  proof: [
    { value: "12", unit: "ms", label: "End to end recognition latency at the edge" },
    { value: "40", unit: "+", label: "Languages, switched mid conversation" },
    { value: "ROS 2", label: "Native, with a hardware abstraction layer" },
    { value: "Edge", label: "Inference on device, cloud optional" },
  ],
  architecture: {
    eyebrow: "Architecture",
    title: "How the mind is built",
    layers: [
      { name: "Perception", body: "Vision, audio and presence fused into a live read of the room." },
      { name: "Cognition", body: "Intent, context and memory resolved into a decision, every turn." },
      { name: "Expression", body: "Multilingual speech and motion that carry the decision back out." },
      { name: "Integration", body: "A hardware abstraction layer and connectors to the systems you run." },
    ],
  },
};

/* ----------------------------------------------------------------
   INDUIT platform page
   ---------------------------------------------------------------- */
export const induit = {
  badge: "The platform",
  eyebrow: "INDUIT",
  title: "The platform behind the mind",
  lead: "The brain that controls the robot, and everything needed to run a fleet of them. Configure how each unit thinks, connect the systems you already run, and watch it all on one screen.",
  capabilities: [
    {
      eyebrow: "Configure",
      title: "Design how every robot behaves",
      lead: "Build the flow stage by stage in a visual editor. Patrol, greet, guide, hand off. Publish once and every unit on site follows it.",
      feats: ["Visual stage editor", "LLM driven decisions and fallbacks", "Versioned, publish in one click"],
      shot: assets.flow,
      url: "induit.archtyp.ai/flows",
    },
    {
      eyebrow: "Operate",
      title: "Manage the whole fleet",
      lead: "Every unit by location, usage and subscription. A live log streams what each robot is doing, the moment it does it.",
      feats: ["Sites, bots and live status", "Streaming activity log", "Per unit usage and billing"],
      shot: assets.dashboardDark,
      url: "induit.archtyp.ai/sites",
    },
    {
      eyebrow: "Integrate",
      title: "Connect the systems you already run",
      lead: "INDUIT sits on top of your CRM, ERP and PMS rather than replacing them. The mind reads and writes where your business already lives.",
      feats: ["CRM, ERP and PMS connectors", "Webhooks and REST API", "Single sign on, role based access"],
      shot: assets.dashboardLight,
      url: "induit.archtyp.ai/integrations",
    },
  ],
  brandsLabel: "Runs on the robots you already deploy",
  commercial: {
    eyebrow: "Commercial model",
    title: "Pay for the minds you run",
    cards: [
      { k: "Per robot", t: "Subscription", d: "A monthly mind for every active unit. Scale up and down as your fleet moves." },
      { k: "By usage", t: "Metered", d: "Pay for conversations and interactions where volume is seasonal." },
      { k: "Enterprise", t: "Platform", d: "Fleet wide deployment, integrations and support, priced per site." },
    ],
  },
  inquiry: {
    title: "Run your fleet on INDUIT.",
    body: "Tell us what you deploy and where. We will map it to a pilot.",
    cta: { label: "Request access", href: "/contact" },
  },
};

/* ----------------------------------------------------------------
   ARCHTYP Robot page
   ---------------------------------------------------------------- */
export const robot = {
  name: "Alto",
  badge: "Coming soon",
  eyebrow: "Alto",
  title: "A body built for the mind",
  lead: "Until now the mind has lived in other people's machines. Soon it will have one of its own. Alto is a robot designed from the ground up around the cognitive layer.",
  registerCta: { label: "Register interest", href: "/contact?intent=register-interest" },
  specs: [
    ["Height", "1200 mm"],
    ["Width", "450 mm"],
    ["Weight", "~35 kg"],
    ["Max speed", "1.2 m/s"],
    ["Battery", "8 to 10 hours"],
    ["Navigation", "LiDAR SLAM"],
  ] as [string, string][],
  sensors: [
    "3D depth cameras",
    "Stereo HD RGB",
    "AI vision",
    "LiDAR 360",
    "Ultrasonic",
    "ToF",
    "Mic array",
    "IMU + encoders",
  ],
  note: "Alto specifications are indicative and subject to change before release.",
};

/* ----------------------------------------------------------------
   Culture (philosophy) page — the one place the writing opens up
   ---------------------------------------------------------------- */
export const culture = {
  eyebrow: "Culture",
  title: "We don't just build systems. We give them a soul.",
  lead: "ARCHTYP is a synthesis of two worlds. The primordial wisdom of human psychology, and the future facing precision of robotics.",
  body: [
    "For a century we built machines that obey. They moved, they lifted, they repeated. They were tools, and they asked nothing of us but instruction. That era is ending. The machines arriving now are meant to stand among us, in the lobby and on the ward and on the shop floor, and a machine that stands among people cannot only obey. It has to understand.",
    "Our symbol is an interlaced triad, the trinity knot, with a single point at its center. In the language of Carl Jung that point is the Self, the archetype of wholeness, and the interwoven arcs are the drivers beneath behaviour, the things a person never says out loud but always means. We chose it deliberately. The mark is the software of the soul. The wordmark, sharp and geometric, is the hardware of the platform. The brand is the meeting of the two.",
    "We talk about giving robots a mind, and we mean something precise by it. Not a personality painted onto a product. A cognitive core. The ability to recognize a person, to grasp what they actually want, to answer in their own language and to carry the memory of the encounter into the next one. Four faculties, one continuous mind, the way a person moves through the world.",
    "This is among the most consequential technologies of the coming century, and consequence cuts both ways. A mind that can recognize you can also surveil you. A memory that makes service feel human can also be used against the person it remembers. We hold these as design constraints, not afterthoughts. Recognition runs at the edge. Memory is kept only where it is welcome. Privacy is a feature of the architecture, not a policy bolted on at the end.",
    "We are a small company building something that will outlast us. We would rather move carefully and be right than move loudly and be sorry. If that sounds like the work you want to do, we are hiring.",
  ],
  pull: "A machine that stands among people cannot only obey. It has to understand.",
  links: [
    { label: "We are hiring", href: "/careers" },
    { label: "Request access", href: "/contact" },
  ],
};

/* ----------------------------------------------------------------
   Careers page
   ---------------------------------------------------------------- */
export const careers = {
  eyebrow: "Careers",
  title: "Build the mind with us.",
  lead: "We are a small team in the right place at the right time, building a cognitive layer for the machines that will share our spaces. The work is hard, the stakes are real, and the people are everything.",
  values: [
    { title: "Care over speed", body: "We would rather be right than first. The technology is too consequential to rush." },
    { title: "Soul and structure", body: "Psychology and engineering in the same room. The duality is the company." },
    { title: "Edge first", body: "We respect the person in front of the machine. Privacy is built in, not added on." },
    { title: "Small and senior", body: "Few people, high trust, real ownership. Everyone here moves the needle." },
  ],
  roles: [
    { title: "Robotics Engineer", team: "Engineering", location: "On site", type: "Full time" },
    { title: "ML Engineer, Perception", team: "Engineering", location: "On site / Hybrid", type: "Full time" },
    { title: "Conversation Designer", team: "Product", location: "Remote", type: "Full time" },
    { title: "Solutions Engineer", team: "Go to market", location: "Hybrid", type: "Full time" },
    { title: "Head of Partnerships", team: "Go to market", location: "Hybrid", type: "Full time" },
  ],
  cta: { label: "Introduce yourself", href: "/contact?intent=other" },
  ctaNote: "Don't see your role. Tell us how you would help.",
};

/* ----------------------------------------------------------------
   Contact / Request access page
   ---------------------------------------------------------------- */
export const contact = {
  eyebrow: "Request access",
  title: "Bring a mind to your robots.",
  lead: "Tell us what you deploy and where, and what you want the mind to do. We will map it to a pilot.",
  intents: [
    { value: "deploy", label: "Deploy robots", hint: "I operate or want to operate robots in my spaces." },
    { value: "build", label: "Build on the platform", hint: "I want to build on INDUIT and the cognitive layer." },
    { value: "distribute", label: "Distribute", hint: "I want to resell or distribute ARCHTYP." },
    { value: "press", label: "Press", hint: "I am a journalist or analyst." },
    { value: "other", label: "Something else", hint: "Investors, careers, partnerships and everything else." },
  ] as { value: import("@/lib/crm").LeadIntent; label: string; hint: string }[],
  success: {
    title: "Thank you. The signal is received.",
    body: "We read every request ourselves. Expect a reply from a person, not a form.",
  },
};
