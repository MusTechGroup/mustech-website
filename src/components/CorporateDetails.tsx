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
    <section id="credentials" className="py-24 relative overflow-hidden bg-[var(--brand-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div id="about" className="flex flex-col md:flex-row items-baseline justify-between mb-16 pb-8 border-b border-black/5">
          <h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight">
            Corporate Entity & Leadership
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-primary-dark)]/80 font-sans max-w-xl md:text-right mt-6 md:mt-0">
            MusTech Group operates as a registered Singapore technology holding entity, driving regional measurement programs, ethical data governance, and ecosystem development.
          </p>
        </div>

        {/* Prospectus Layout */}
        <div className="editorial-panel p-0 border border-black/5 flex flex-col mb-16">
          
          {/* Top Row: Founder & ACRA */}
          <div className="flex flex-col lg:flex-row items-stretch border-b border-black/5">
            
            {/* Founder Profile */}
            <div className="lg:w-2/3 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/5 bg-white flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-32 h-32 md:w-44 md:h-44 shrink-0 border border-black/15 bg-zinc-100">
                <Image
                  src="/brand/founder.jpg"
                  alt="Taufiq Rashid"
                  fill
                  sizes="176px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="flex-1">
                <div className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-2">Leadership</div>
                <h3 className="font-brand text-3xl sm:text-4xl font-bold text-[var(--color-primary-dark)] mb-1">Taufiq Rashid</h3>
                <p className="text-xs font-semibold text-[var(--color-primary-dark)]/70 mb-6">Founder & Technical Product Lead</p>
                
                <p className="text-[var(--color-primary-dark)]/80 leading-relaxed font-sans text-base mb-4">
                  Taufiq brings over a decade of enterprise data architecture and technology leadership across global institutions, including Google, LVMH (Sephora), WPP, and OCBC Bank.
                </p>
                <p className="text-[var(--color-primary-dark)]/80 leading-relaxed font-sans text-base mb-8">
                  Combining deep experience in large-scale analytics infrastructure with full-stack product engineering, he founded MusTech Group to build mission-driven software that solves neglected civic and community challenges.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 border border-black/10 bg-[var(--brand-bg)]">
                    <Award className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span className="text-xs font-bold text-[var(--color-primary-dark)] uppercase tracking-wider">10+ Years Data Leadership</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 border border-black/10 bg-[var(--brand-bg)]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span className="text-xs font-bold text-[var(--color-primary-dark)] uppercase tracking-wider">APAC Strategy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ACRA Information */}
            <div className="lg:w-1/3 p-8 md:p-12 bg-white flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-2">Legal Entity & Governance</div>
                <h3 className="font-brand text-3xl font-bold text-[var(--color-primary-dark)] mb-1">MusTech Group</h3>
                <p className="text-xs font-semibold text-[var(--color-primary-dark)]/70 mb-8">Registered Singapore Technology Holding Entity</p>
                
                <div className="space-y-4 border-t border-black/5 pt-6">
                  <div className="flex items-center justify-between border-b border-black/5 pb-3">
                    <span className="text-[10px] text-[var(--color-primary-dark)]/60 uppercase font-bold tracking-wider">Jurisdiction</span>
                    <span className="text-xs font-bold text-[var(--color-primary-dark)]">Republic of Singapore</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-black/5 pb-3">
                    <span className="text-[10px] text-[var(--color-primary-dark)]/60 uppercase font-bold tracking-wider">ACRA Registration</span>
                    <span className="text-xs font-mono font-bold text-[var(--color-primary-dark)]">UEN 202609163C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[var(--color-primary-dark)]/60 uppercase font-bold tracking-wider">Regulatory Standard</span>
                    <span className="text-xs font-bold text-[var(--color-primary-dark)]">Singapore PDPA Compliant</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Row: Official Communications */}
          <div id="contact" className="p-8 md:p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-start gap-6">
              <Mail className="w-8 h-8 text-[var(--color-primary)] mt-1 shrink-0" />
              <div>
                <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-1">Official Communications</h3>
                <p className="text-sm text-[var(--color-primary-dark)]/70">
                  Direct inquiries, partnerships, and developer support. Response time: 1–2 business days (SGT).
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* General & Partnership Inquiries */}
              <div className="p-4 border border-black/10 flex flex-col gap-2 min-w-[240px] bg-[var(--brand-bg)]/40">
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-[0.2em]">
                  General & Partnerships
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a href="mailto:admin@mustechgroup.com" className="text-sm font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors">
                    admin@mustechgroup.com
                  </a>
                  <button onClick={() => copyToClipboard("admin@mustechgroup.com", "admin")} className="text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] p-1" title="Copy email address" aria-label="Copy admin email">
                    {copiedAdmin ? <Check className="w-4 h-4 text-[var(--color-primary)]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              {/* Support */}
              <div className="p-4 border border-black/10 flex flex-col gap-2 min-w-[260px] bg-[var(--brand-bg)]/40">
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-[0.2em]">
                  Saalihat Support
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a href="mailto:saalihat_support@mustechgroup.com" className="text-sm font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors">
                    saalihat_support@mustechgroup.com
                  </a>
                  <button onClick={() => copyToClipboard("saalihat_support@mustechgroup.com", "support")} className="text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] p-1" title="Copy support email address" aria-label="Copy support email">
                    {copiedSupport ? <Check className="w-4 h-4 text-[var(--color-primary)]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
