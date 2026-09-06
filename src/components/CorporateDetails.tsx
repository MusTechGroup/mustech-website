import Image from "next/image";
import { 
  Building2, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send,
  Award
} from "lucide-react";
import CopyButton from "./CopyButton";

export default function CorporateDetails() {

  return (
    <>
      <div id="about" className="scroll-mt-32" aria-hidden="true" />
      <section id="credentials" className="py-24 relative overflow-hidden bg-[var(--brand-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Editorial Section Header */}
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 pb-8 border-b border-black/5">
            <h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight">
              Corporate Entity & Leadership
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-primary-dark)]/80 font-sans max-w-xl md:text-right mt-6 md:mt-0">
              MusTech Group operates as a registered Singapore technology holding entity, building privacy-first mobile applications and civic digital infrastructure across Southeast Asia.
            </p>
          </div>

        {/* Prospectus Layout */}
        <div className="editorial-panel p-0 border border-black/5 flex flex-col mb-16">
          
          {/* Top Row: Founder & ACRA */}
          <div className="flex flex-col lg:flex-row items-stretch border-b border-black/5">
            
            {/* Founder Profile */}
            <div className="lg:w-2/3 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/5 bg-white flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-36 h-44 sm:w-44 sm:h-52 shrink-0 border border-black/15 bg-zinc-100 overflow-hidden shadow-sm">
                <Image
                  src="/brand/founder.jpg"
                  alt="Taufiq Rashid"
                  fill
                  priority
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-cover object-[center_40%] transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex-1">
                <div className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-2">Leadership</div>
                <h3 className="font-brand text-3xl font-bold text-[var(--color-primary-dark)] mb-1">Taufiq Rashid</h3>
                <p className="text-xs font-semibold text-[var(--color-primary-dark)]/70 mb-6">Founder &amp; Data Analytics Lead</p>
                
                <p className="text-[var(--color-primary-dark)]/80 leading-relaxed font-sans text-base mb-4">
                  Taufiq brings over a decade of enterprise data analytics and strategic leadership across global institutions, currently driving regional data initiatives across APAC at WPP Media alongside prior experience at Google, LVMH (Sephora), and OCBC Bank.
                </p>
                <p className="text-[var(--color-primary-dark)]/80 leading-relaxed font-sans text-base mb-8">
                  Combining deep experience in large-scale analytics with commercial business strategy, he founded MusTech Group to build mission-driven software that solves civic and community challenges. He is also an academic consultant, having conducted lectures and industry panels across SMU, ESSEC Business School, and HKU.
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 border-t border-black/5 text-xs text-[var(--color-primary-dark)]/70">
                  <span className="flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                    APAC Data Analytics Leadership
                  </span>
                  <span className="flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                    Commercial &amp; Business Strategy
                  </span>
                  <span className="flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                    Academic Consultant (SMU · ESSEC · HKU)
                  </span>
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
                  Direct enquiries, civic partnerships, and developer support. Response time: 1 - 2 business days (SGT).
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* General & Partnership Enquiries */}
              <div className="p-4 border border-black/10 flex flex-col gap-2 min-w-[240px] bg-[var(--brand-bg)]/40">
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-[0.2em]">
                  General &amp; Partnerships
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a href="mailto:admin@mustechgroup.com" className="text-sm font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors">
                    admin@mustechgroup.com
                  </a>
                  <CopyButton textToCopy="admin@mustechgroup.com" ariaLabel="Copy admin email" />
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
                  <CopyButton textToCopy="saalihat_support@mustechgroup.com" ariaLabel="Copy support email" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      </section>
    </>
  );
}
