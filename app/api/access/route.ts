import { NextResponse } from "next/server";
import { z } from "zod";
import { submitLead, type Lead } from "@/lib/crm";

/**
 * Single inbound endpoint for Request access, Register interest and the
 * branching Contact form. Validates with zod, then hands off to the CRM seam
 * (lib/crm.ts → Attio by default). Without an API key the seam logs and
 * no-ops, so this route always returns success in dev.
 */

const schema = z.object({
  email: z.string().email("Enter a valid email."),
  name: z.string().max(120).optional(),
  company: z.string().max(160).optional(),
  role: z.string().max(120).optional(),
  message: z.string().max(4000).optional(),
  intent: z.enum([
    "request-access",
    "register-interest",
    "deploy",
    "build",
    "distribute",
    "press",
    "other",
  ]),
  source: z.string().max(80).default("website"),
  fleetSize: z.string().max(80).optional(),
  hardware: z.string().max(200).optional(),
  // Honeypot — bots fill it, humans never see it.
  company_website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot tripped — pretend success, drop silently.
  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const { company_website: _hp, ...lead } = parsed.data;
  const result = await submitLead(lead as Lead);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: "We could not record that just now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
