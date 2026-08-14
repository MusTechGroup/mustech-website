import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="saalihat" className="w-full">
      {/* Immersive Saalihat Section (Site-within-a-site) */}
      <div className="w-full bg-[#0e1117] py-24 sm:py-32 relative overflow-hidden text-white border-y border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c49a45]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Content Side */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 text-[#d5ad5b] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 w-max">
                FLAGSHIP MOBILE PLATFORM
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <Image src="/saalihat/logo.jpg" alt="Saalihat App Logo" width={56} height={56} className="object-contain border border-white/20 bg-black/40" />
                <h3 className="font-brand text-5xl font-bold tracking-tight text-white">Saalihat</h3>
              </div>

              <h4 className="font-brand text-3xl sm:text-4xl font-bold text-[#d5ad5b] mb-6 leading-tight">
                Connecting Muslims to verified community events and sacred knowledge.
              </h4>
              <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                Saalihat (صالحات) solves a chronic problem across Southeast Asia: vital mosque lectures, charitable programs, and community circles are scattered across disparate social media channels and physical boards. Saalihat aggregates this fragmented ecosystem into a single, verified, real-time schedule.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                Engineered with an offline-first architecture and absolute privacy, Saalihat helps believers cultivate lasting spiritual habits without ads, user tracking, or data brokering.
              </p>
              
              <div className="flex flex-col gap-8">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <a href="https://apps.apple.com/sg/app/saalihat/id6760661366" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#d5ad5b] hover:bg-white text-black text-xs font-bold uppercase tracking-[0.15em] transition-all group">
                    <span className="text-xl leading-none"></span>
                    <span>Download on iOS</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#d5ad5b] hover:bg-white text-black text-xs font-bold uppercase tracking-[0.15em] transition-all group">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5v19l16-9.5z"/></svg>
                    <span>Get it on Android</span>
                  </a>
                </div>
                
                <div className="hidden sm:flex items-center gap-8 border-t border-white/10 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="p-2 border border-white/20 bg-white/5">
                      <Image src="/saalihat/apple-qr.jpg" alt="Apple QR" width={80} height={80} className="w-20 h-20 object-cover" />
                    </div>
                    <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.1em] max-w-[80px]">Scan for iOS</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 border border-white/20 bg-white/5">
                      <Image src="/saalihat/google-qr.jpg" alt="Google QR" width={80} height={80} className="w-20 h-20 object-cover" />
                    </div>
                    <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.1em] max-w-[80px]">Scan for Android</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side - Editorial Single Frame */}
            <div className="lg:col-span-6 relative w-full flex justify-center py-10 lg:py-0 overflow-hidden sm:overflow-visible">
              
              <div className="relative w-64 h-[520px] sm:w-72 sm:h-[580px] border border-white/20 bg-[#0e1117] p-2">
                <div className="relative w-full h-full border border-white/10">
                  <Image src="/saalihat/Screenshot_1.png" alt="Saalihat App Interface" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
                </div>
                
                {/* Editorial Annotations */}
                <div className="hidden sm:flex absolute top-1/4 -left-12 lg:-left-16 items-center gap-2 z-30">
                  <div className="bg-[#0e1117] border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-bold text-white whitespace-nowrap">
                    Offline-First Architecture
                  </div>
                  <div className="w-8 h-[1px] bg-white/30" />
                </div>
                
                <div className="hidden sm:flex absolute bottom-1/4 -right-12 lg:-right-16 items-center gap-2 z-30">
                  <div className="w-8 h-[1px] bg-white/30" />
                  <div className="bg-[#0e1117] border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-bold text-white whitespace-nowrap">
                    Zero-Tracking Verified
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>

      {/* Jenazah.sg Pipeline Section (Back to Modern Editorial) */}
      <div className="w-full bg-[var(--brand-bg)] py-20 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-panel p-0 flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/3 bg-white p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-black/5">
              <a href="https://jenazah.sg" target="_blank" rel="noopener noreferrer" className="font-brand text-4xl font-bold tracking-tight text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors mb-2">jenazah.sg</a>
              <p className="text-[var(--color-primary-dark)]/50 text-[10px] font-bold uppercase tracking-[0.2em] text-center">In Active Development · Singapore Civic Tech</p>
            </div>
            <div className="md:w-2/3 p-12 flex flex-col justify-center bg-white/30">
              <h4 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-4">
                Compassionate Civic Infrastructure for Bereaved Families
              </h4>
              <p className="text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-6">
                When a loved one passes, grieving families face immense emotional distress alongside urgent administrative complexities. <a href="https://jenazah.sg" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] underline underline-offset-4">jenazah.sg</a> is an empathy-first platform that provides Singaporean families with calm, step-by-step guidance—from official death registration via LifeSG to funeral arrangements, mosque coordination, and community notices.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Active Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
