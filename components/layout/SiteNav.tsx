"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ds/Logo";
import { Button } from "@/components/ds/Button";
import { Menu, Close } from "@/components/ds/icons";
import { useScrolled } from "@/components/motion/hooks";
import { primaryNav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const scrolled = useScrolled(80);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className={cn("atp-nav", scrolled && "atp-nav--scrolled")}>
      <div className="atp-nav__inner">
        <Logo layout="horizontal" height={20} href="/" />

        <ul className="atp-nav__links">
          {primaryNav.map((l) => (
            <li key={l.href}>
              <Link
                className="atp-nav__link"
                href={l.href}
                aria-current={isCurrent(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="atp-nav__right">
          <Button href="/contact" variant="primary" size="sm">
            Request access
          </Button>
          <button
            className="atp-nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="atp-nav__mobile">
          <ul>
            {primaryNav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(l.href) ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" variant="primary" block onClick={() => setOpen(false)}>
            Request access
          </Button>
        </div>
      )}
    </nav>
  );
}
