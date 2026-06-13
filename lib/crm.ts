/**
 * CRM seam. All inbound leads (Request access, Register interest, Contact)
 * flow through `submitLead`. Attio is the default destination, wired behind
 * environment variables. The endpoint is intentionally isolated so it can be
 * swapped for any CRM without touching the routes or forms that call it.
 *
 * If no API key is configured, the call logs the payload and gracefully
 * no-ops (returns `skipped`) so the build and the full form flow still work.
 */

export type LeadIntent =
  | "request-access"
  | "register-interest"
  | "deploy"
  | "build"
  | "distribute"
  | "press"
  | "other";

export interface Lead {
  email: string;
  name?: string;
  company?: string;
  role?: string;
  message?: string;
  intent: LeadIntent;
  /** Where the lead originated, e.g. "home-hero", "robot", "contact". */
  source: string;
  fleetSize?: string;
  hardware?: string;
}

export interface CrmResult {
  ok: boolean;
  skipped?: boolean;
  error?: string;
}

const ATTIO_BASE = "https://api.attio.com/v2";

/**
 * Map a Lead onto Attio record attribute slugs. Adjust the right-hand slugs to
 * match the workspace's object schema. Unknown attributes are ignored by Attio
 * when `partial` is used, so this stays resilient across schema differences.
 */
function toAttioValues(lead: Lead): Record<string, unknown> {
  return {
    email_addresses: [lead.email],
    name: lead.name ?? undefined,
    company: lead.company ?? undefined,
    job_title: lead.role ?? undefined,
    // Custom attributes (create these in Attio, or rename to your slugs):
    archtyp_intent: lead.intent,
    archtyp_source: lead.source,
    archtyp_fleet_size: lead.fleetSize ?? undefined,
    archtyp_hardware: lead.hardware ?? undefined,
    archtyp_message: lead.message ?? undefined,
  };
}

export async function submitLead(lead: Lead): Promise<CrmResult> {
  const apiKey = process.env.ATTIO_API_KEY;
  const object = process.env.ATTIO_OBJECT ?? "people";

  if (!apiKey) {
    // Graceful no-op so dev and CI work without secrets.
    console.info("[crm] ATTIO_API_KEY not set — logging lead and skipping send:", {
      intent: lead.intent,
      source: lead.source,
      email: lead.email,
    });
    return { ok: true, skipped: true };
  }

  try {
    const res = await fetch(`${ATTIO_BASE}/objects/${object}/records?matching_attribute=email_addresses`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { values: toAttioValues(lead) } }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[crm] Attio responded", res.status, detail.slice(0, 500));
      return { ok: false, error: `CRM responded ${res.status}` };
    }

    return { ok: true };
  } catch (err) {
    console.error("[crm] submitLead failed:", err);
    return { ok: false, error: "CRM request failed" };
  }
}
