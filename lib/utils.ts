import { clsx, type ClassValue } from "clsx";

/** Compose class names. Thin wrapper over clsx kept as the single project helper. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
