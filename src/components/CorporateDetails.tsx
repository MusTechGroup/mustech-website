"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Building2, 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  ShieldCheck, 
  Send,
  User,
  Award
} from "lucide-react";

export default function CorporateDetails() {
  const [copiedAdmin, setCopiedAdmin] = useState(false);
  const [copiedSupport, setCopiedSupport] = useState(false);

  const copyToClipboard = (text: string, type: "admin" | "support") => {
    navigator.clipboard.writeText(text);
    if (type === "admin") {
      setCopiedAdmin(true);
      setTimeout(() => setCopiedAdmin(false), 2000);
    } else {
      setCopiedSupport(true);
      setTimeout(() => setCopiedSupport(false), 2000);
    }
  };

  return (
    <section id="credentials" className="py-24 relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="about" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--brand-bg)] border border-[var(--color-primary)]/20 text-[var(--color-primary-dark)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            Corporate Entity & Leadership
          </div>
          <h2 className="font-brand text-3xl sm:text-5xl font-bold text-[var(--color-primary-dark)] tracking-tight mb-4">
            Holding Entity & <span className="text-[var(--color-accent)]">Founder</span>
          </h2>
          <p className="text-[var(--color-primary-dark)]/80 text-base sm:text-lg font-sans">
            MusTech Group operates as a registered Singapore technology holding entity, driving regional measurement programs, ethical data governance, and ecosystem development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Left Card: Official ACRA Registration */}
          <div className="lg:col-span-5 rounded-[2rem] p-8 sm:p-10 bg-[var(--brand-bg)] border border-[var(--color-primary)]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-black/5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[var(--color-primary)]/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-brand text-xl font-bold text-[var(--color-primary-dark)]">MusTech Group</h3>
                    <p className="text-xs text-[var(--color-primary-dark)]/60">Holding Company & Venture Studio</p>
                  </div>
                </div>
              </div>

              {/* Entity Information Rows */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-black/5">
                  <span className="text-xs text-[var(--color-primary-dark)]/70 font-medium">Jurisdiction</span>
                  <span className="text-xs font-bold text-[var(--color-primary-dark)] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" /> Singapore
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-black/5">
                  <span className="text-xs text-[var(--color-primary-dark)]/70 font-medium">ACRA Reg (UEN)</span>
                  <span className="text-xs font-mono font-bold text-[var(--color-primary-dark)] bg-[var(--brand-bg)] px-2.5 py-1 rounded border border-black/10">
                    202609163C
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-black/5">
                  <span className="text-xs text-[var(--color-primary-dark)]/70 font-medium">Compliance</span>
                  <span className="text-xs font-medium text-[var(--color-primary-dark)] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary)]" /> SG PDPA
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Card: Founder Profile */}
          <div className="lg:col-span-7 rounded-[2rem] p-8 sm:p-10 bg-[var(--brand-bg)] border border-[var(--color-primary)]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-black/5">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-primary)]/20 shadow-sm shrink-0 bg-[var(--color-primary)]/10">
                    <Image
                      src="/brand/founder.jpg"
                      alt="Taufiq Rashid"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">Taufiq Rashid</h3>
                    <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mt-1">Founder & Technical Product Lead</p>
                  </div>
                </div>
              </div>

              {/* Founder Information */}
              <div className="space-y-4">
                <p className="text-[var(--color-primary-dark)]/80 leading-relaxed font-sans">
                  Taufiq brings over a decade of regional data architecture, analytics, and business intelligence leadership across global giants including <strong>Google, LVMH (Sephora), WPP, and OCBC Bank</strong>.
                </p>
                <p className="text-[var(--color-primary-dark)]/80 leading-relaxed font-sans">
                  This background combines enterprise data leadership and rigorous stakeholder management with hands-on technical AI application development. MusTech Group is the culmination of this experience, dedicated to building community-first impact.
                </p>
                
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-black/5">
                    <Award className="w-4 h-4 text-[var(--color-primary)]" />
                    <span className="text-sm font-medium text-[var(--color-primary-dark)]">10+ Years Data Leadership</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-black/5">
                    <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
                    <span className="text-sm font-medium text-[var(--color-primary-dark)]">APAC Strategy & Governance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wide Card: Official Communications (Softened Brightness) */}
        <div id="contact" className="w-full rounded-[2rem] p-8 sm:p-10 bg-[var(--brand-bg)] border border-[var(--color-primary)]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--color-primary)]/20 flex items-center justify-center shrink-0 shadow-sm">
              <Mail className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <div>
              <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">Official Communications</h3>
              <p className="text-sm text-[var(--color-primary-dark)]/70">Direct inquiries & developer support. Response SLA: 24-48 Hours (SGT)</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto">
            {/* General & Partnership Inquiries */}
            <div className="p-3 pr-4 rounded-xl bg-white border border-black/5 flex items-center justify-between gap-6 shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-0.5">
                  General & Partnerships
                </span>
                <a href="mailto:admin@mustechgroup.com" className="text-sm font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors">
                  admin@mustechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard("admin@mustechgroup.com", "admin")}
                  className="p-2 rounded-lg bg-[var(--brand-bg)] hover:bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)] transition-colors"
                  title="Copy email"
                >
                  {copiedAdmin ? <Check className="w-4 h-4 text-[var(--color-primary)]" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href="mailto:admin@mustechgroup.com"
                  className="p-2 rounded-lg bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-white transition-colors"
                  title="Send email"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="p-3 pr-4 rounded-xl bg-white border border-black/5 flex items-center justify-between gap-6 shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-0.5">
                  Saalihat Support
                </span>
                <a href="mailto:saalihat_support@mustechgroup.com" className="text-sm font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors">
                  saalihat_support@mustechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard("saalihat_support@mustechgroup.com", "support")}
                  className="p-2 rounded-lg bg-[var(--brand-bg)] hover:bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)] transition-colors"
                  title="Copy email"
                >
                  {copiedSupport ? <Check className="w-4 h-4 text-[var(--color-primary)]" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href="mailto:saalihat_support@mustechgroup.com"
                  className="p-2 rounded-lg bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-white transition-colors"
                  title="Send email"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
