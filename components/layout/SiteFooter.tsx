import Link from "next/link";
import { Logo } from "@/components/ds/Logo";
import { SocialIcon } from "@/components/ds/icons";
import { footer, hardware, assets } from "@/lib/content";

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="atp-footer">
      <div className="atp-footer__inner">
        <div className="atp-footer__top">
          <div className="atp-footer__brand">
            <Logo layout="vertical" height={24} href="/" wordmarkSrc={assets.wordmark} rest />
            <p className="atp-footer__tag">{footer.tagline}</p>
          </div>
          {footer.columns.map((col) => (
            <div className="atp-footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="atp-footer__hw">
          <div className="atp-footer__hw-label">Supported hardware</div>
          <div className="atp-footer__hw-row">
            {hardware.map((h) => (
              <span className="atp-footer__hw-item" key={h}>
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="atp-footer__bottom">
          <div className="atp-footer__legal">
            <span>© {year} ARCHTYP. All rights reserved.</span>
            {footer.legal.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="atp-footer__social">
            {footer.social.map((s) => (
              <a key={s.type} href={s.href} aria-label={s.type} target="_blank" rel="noreferrer">
                <SocialIcon type={s.type} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
