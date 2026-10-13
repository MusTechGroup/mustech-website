export type MizanSeverity = "warning" | "error" | "critical";

export type MizanLog = {
  service_name: string;
  error_type: string;
  severity?: MizanSeverity;
  payload?: unknown;
  stack_trace?: string;
};

// Fire-and-forget audit write. Never throws — Mizan failures must not block user paths.
// Using 'any' for SupabaseClient since mustech-website doesn't install supabase-js.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function logToMizan(sb: any, log: MizanLog): Promise<void> {
  try {
    if (!sb) {
      console.error("mizan_fallback_log (no db client)", log);
      return;
    }
    const { error } = await sb.from("mizan_audit_logs").insert({
      service_name: log.service_name,
      error_type: log.error_type,
      severity: log.severity ?? "error",
      payload: log.payload ?? {},
      stack_trace: log.stack_trace ?? new Error().stack ?? null,
    });
    if (error) console.error("mizan_insert_failed", error);
  } catch (err) {
    console.error("mizan_crash", err);
  }
}
