"use client";

import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "./icons";

type Variant = "primary" | "secondary" | "text";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  /** Show the trailing line arrow. */
  arrow?: boolean;
  icon?: ReactNode;
  iconAfter?: boolean;
  children: ReactNode;
  className?: string;
  /** When present the button renders as a Next.js Link. */
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  "aria-label"?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  block = false,
  arrow = false,
  icon = null,
  iconAfter = true,
  children,
  className,
  href,
  target,
  rel,
  type = "button",
  disabled = false,
  onClick,
  ...rest
}: ButtonProps) {
  const cls = cn(
    "atp-btn",
    `atp-btn--${variant}`,
    size !== "md" && `atp-btn--${size}`,
    block && "atp-btn--block",
    className,
  );

  const iconNode = icon ?? (arrow ? <ArrowRight width={16} height={16} /> : null);
  const inner = (
    <>
      {!iconAfter && iconNode && <span className="atp-btn__icon">{iconNode}</span>}
      <span className="atp-btn__label">{children}</span>
      {iconAfter && iconNode && <span className="atp-btn__icon">{iconNode}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={cls} target={target} rel={rel} onClick={onClick} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}
