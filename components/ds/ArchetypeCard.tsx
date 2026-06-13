import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "./icons";

/** Archetype card — vertical media, role, name, one line, hover lift. Links to a vertical page. */
export function ArchetypeCard({
  image,
  glyphSrc,
  role,
  name,
  line,
  href = "#",
  cta = "Explore vertical",
  className,
}: {
  image?: string;
  glyphSrc?: string;
  role?: string;
  name: string;
  line?: string;
  href?: string;
  cta?: string;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("atp-arch", className)}>
      <div className="atp-arch__media">
        {image && <Image src={image} alt="" fill sizes="(max-width: 980px) 50vw, 25vw" style={{ objectFit: "cover" }} />}
        {!image && glyphSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="atp-arch__watermark" src={glyphSrc} alt="" />
        )}
        <div className="atp-arch__scrim" aria-hidden />
      </div>
      <div className="atp-arch__body">
        {role && <span className="atp-arch__role">{role}</span>}
        <h3 className="atp-arch__name">{name}</h3>
        {line && <p className="atp-arch__line">{line}</p>}
        <span className="atp-arch__cta">
          {cta}
          <ArrowRight width={16} height={16} />
        </span>
      </div>
    </Link>
  );
}
