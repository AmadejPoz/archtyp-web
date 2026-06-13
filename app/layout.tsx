import type { Metadata, Viewport } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Preloader } from "@/components/layout/Preloader";
import { site } from "@/lib/content";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — ARCHTYP",
  },
  description: site.description,
  applicationName: "ARCHTYP",
  authors: [{ name: "ARCHTYP" }],
  keywords: [
    "cognitive layer",
    "service robots",
    "humanoids",
    "robot AI",
    "multilingual speech",
    "face recognition",
    "robot memory",
    "fleet management",
    "ARCHTYP",
    "INDUIT",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/brand/symbol.svg", type: "image/svg+xml" }],
    shortcut: "/brand/symbol.svg",
  },
  openGraph: {
    type: "website",
    siteName: "ARCHTYP",
    title: site.title,
    description: site.description,
    url: site.url,
    images: [{ url: site.ogImage, width: 1920, height: 1080, alt: "ARCHTYP, the cognitive layer for robots" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060810",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only"
          style={{ position: "absolute", left: 12, top: 12, zIndex: 300 }}
        >
          Skip to content
        </a>
        <Preloader />
        <SmoothScroll>
          <SiteNav />
          <main id="main">{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
