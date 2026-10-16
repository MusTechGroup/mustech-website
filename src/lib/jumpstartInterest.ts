// Sends a Jumpstart sign-up to the Saalihat Supabase project (wilbnfgrgwzvgetqdhqv).
//
// The site is a static export, so this runs in the browser with the project's
// publishable key. That key is public by design: anon can only EXECUTE
// register_jumpstart_interest(), and cannot read, write or list the table.
// Schema and grants: Saalihat-Pipeline/supabase/migrations/20261016120000_jumpstart_interest.sql
//
// The database is the only authority on what is valid. This file only maps its
// refusals (SQLSTATE JS001..JS003) to the field they concern.

const SUPABASE_URL = "https://wilbnfgrgwzvgetqdhqv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_sKe_KZHUyDc9ihUvkMs3Xg_gixsA881";
const TIMEOUT_MS = 15_000;

export type VentureStage = "idea" | "mvp" | "growth" | "operator";

export type InterestResult =
  | { kind: "ok" }
  | { kind: "busy" }
  | { kind: "invalid"; field: "email" | "name" | "stage" }
  | { kind: "failed" };

const FIELD_BY_CODE: Record<string, "email" | "name" | "stage"> = {
  JS001: "email",
  JS002: "name",
  JS003: "stage",
};

export async function registerInterest(input: {
  email: string;
  fullName: string;
  ventureStage: VentureStage;
}): Promise<InterestResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/register_jumpstart_interest`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p_email: input.email,
        p_full_name: input.fullName,
        p_venture_stage: input.ventureStage,
      }),
      signal: controller.signal,
    });

    const body = await res.text();

    if (res.ok) {
      const status = JSON.parse(body) as string;
      if (status === "ok") return { kind: "ok" };
      if (status === "busy") return { kind: "busy" };
      console.error("jumpstart_interest_unexpected_status", { status });
      return { kind: "failed" };
    }

    let code: string | undefined;
    try {
      code = (JSON.parse(body) as { code?: string }).code;
    } catch {
      // Non-JSON error body (gateway or proxy page). Logged below with the raw body.
    }
    const field = code ? FIELD_BY_CODE[code] : undefined;
    if (field) return { kind: "invalid", field };

    // The browser holds only the publishable key, which cannot write to
    // mizan_audit_log, so the console is the only log available here.
    // Server-side refusals (flood guard) are logged to Mizan by the RPC itself.
    console.error("jumpstart_interest_failed", {
      status: res.status,
      body: body.slice(0, 2000),
    });
    return { kind: "failed" };
  } catch (err) {
    console.error("jumpstart_interest_network_error", err);
    return { kind: "failed" };
  } finally {
    clearTimeout(timer);
  }
}
