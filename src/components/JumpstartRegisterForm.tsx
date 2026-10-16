"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, Mail, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { registerInterest, type VentureStage } from "@/lib/jumpstartInterest";

type Field = "email" | "name" | "stage";

const FIELD_ERRORS: Record<Field, string> = {
  name: "Enter your name, up to 120 characters.",
  email: "Enter a full email address, such as name@company.com.",
  stage: "Choose the stage that fits your venture best.",
};

const FORM_ERRORS = {
  busy: "We are receiving more sign-ups than usual. Please try again in an hour. Your details are still in the form.",
  failed: "We could not send your details. Check your connection and try again. Your details are still in the form.",
};

const inputClass =
  "w-full px-4 py-3 border bg-[var(--brand-bg)]/40 text-sm font-sans text-[var(--color-primary-dark)] focus:border-[var(--color-primary)] focus:outline-none transition-colors";

export default function JumpstartRegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectStage, setProjectStage] = useState<VentureStage>("idea");
  // Honeypot: hidden from people, filled in by simple bots.
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fieldError, setFieldError] = useState<Field | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    if (website) {
      // A bot filled the hidden field. Show the normal success state and send nothing.
      setSubmitted(true);
      return;
    }

    setSending(true);
    setFieldError(null);
    setFormError(null);

    const result = await registerInterest({ email, fullName: name, ventureStage: projectStage });

    setSending(false);
    switch (result.kind) {
      case "ok":
        setSubmitted(true);
        break;
      case "invalid":
        setFieldError(result.field);
        break;
      case "busy":
        setFormError(FORM_ERRORS.busy);
        break;
      case "failed":
        setFormError(FORM_ERRORS.failed);
        break;
    }
  };

  const borderFor = (field: Field) =>
    fieldError === field ? "border-[var(--color-accent)]" : "border-black/15";

  return (
    <div id="register" className="scroll-mt-28 w-full max-w-xl mx-auto">
      <div className="editorial-panel p-8 sm:p-12 border border-black/10 bg-white shadow-sm">
        {submitted ? (
          <div className="flex flex-col items-center text-center py-8" role="status">
            <div className="w-14 h-14 rounded-full bg-[#92ae94]/20 text-[#233219] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h3 className="font-brand text-3xl font-bold text-[var(--color-primary-dark)] mb-3">
              Interest Received
            </h3>
            <p className="text-[var(--color-primary-dark)]/80 leading-relaxed font-sans max-w-md mb-6">
              Thank you for registering your interest in <strong>MusTech Jumpstart</strong>. We will email you at <strong>{email}</strong> once the inaugural cohort schedule is finalised.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-start mb-6">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Early Expression of Interest</span>
              </div>
              <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] tracking-tight">
                Secure Priority Access
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="founder-name" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-primary-dark)]/80 mb-2">
                  Your Full Name
                </label>
                <input
                  id="founder-name"
                  type="text"
                  required
                  maxLength={120}
                  autoComplete="name"
                  placeholder="e.g. Sarah Tan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={fieldError === "name"}
                  aria-describedby={fieldError === "name" ? "founder-name-error" : undefined}
                  className={`${inputClass} ${borderFor("name")}`}
                />
                {fieldError === "name" && (
                  <p id="founder-name-error" className="mt-2 text-xs text-[var(--color-accent)]">
                    {FIELD_ERRORS.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="founder-email" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-primary-dark)]/80 mb-2">
                  Email Address
                </label>
                <input
                  id="founder-email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="e.g. sarah@venture.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={fieldError === "email"}
                  aria-describedby={fieldError === "email" ? "founder-email-error" : undefined}
                  className={`${inputClass} ${borderFor("email")}`}
                />
                {fieldError === "email" && (
                  <p id="founder-email-error" className="mt-2 text-xs text-[var(--color-accent)]">
                    {FIELD_ERRORS.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="founder-stage" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-primary-dark)]/80 mb-2">
                Current Venture Stage
              </label>
              <select
                id="founder-stage"
                value={projectStage}
                onChange={(e) => setProjectStage(e.target.value as VentureStage)}
                aria-invalid={fieldError === "stage"}
                aria-describedby={fieldError === "stage" ? "founder-stage-error" : undefined}
                className={`${inputClass} ${borderFor("stage")}`}
              >
                <option value="idea">Concept / Pre-build (validating the core problem)</option>
                <option value="mvp">Early MVP / Prototype built (refining architecture)</option>
                <option value="growth">In-market / Seeking data traction &amp; scalability</option>
                <option value="operator">Non-technical operator seeking engineering literacy</option>
              </select>
              {fieldError === "stage" && (
                <p id="founder-stage-error" className="mt-2 text-xs text-[var(--color-accent)]">
                  {FIELD_ERRORS.stage}
                </p>
              )}
            </div>

            {/* Honeypot. Off-screen rather than display:none, which some bots skip. */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              <label htmlFor="founder-website">Website</label>
              <input
                id="founder-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            {formError && (
              <div role="alert" className="flex items-start gap-2 p-4 border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/5 text-sm text-[var(--color-primary-dark)]">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <span>{formError}</span>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={sending}
                aria-busy={sending}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] disabled:opacity-60 disabled:cursor-wait text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors shadow-sm"
              >
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>{sending ? "Registering…" : "Register Interest for Inaugural Cohort"}</span>
              </button>
              <p className="mt-3 text-center text-[11px] text-[var(--color-primary-dark)]/60">
                We use these details only to contact you about Jumpstart.{" "}
                <Link href="/privacy-policy#jumpstart" className="font-semibold underline hover:text-[var(--color-primary)]">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[var(--color-primary-dark)]/60">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct correspondence: <a href="mailto:jumpstart@mustechgroup.com?subject=MusTech%20Jumpstart%20Inquiry" className="font-semibold underline hover:text-[var(--color-primary)]">jumpstart@mustechgroup.com</a></span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
