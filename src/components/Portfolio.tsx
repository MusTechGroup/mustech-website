import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="saalihat" className="py-24 relative overflow-hidden bg-[var(--brand-bg)] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--color-primary)]/20 text-[var(--color-primary-dark)] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Product Portfolio
          </div>
          <h2 className="font-brand text-3xl sm:text-5xl font-bold text-[var(--color-primary-dark)] tracking-tight mb-4">
            Ecosystem & <span className="text-[var(--color-accent)]">Pipelines</span>
          </h2>
          <p className="text-[var(--color-primary-dark)]/80 text-base sm:text-lg font-sans">
            Our collective builds and scales community-first applications. From flagship spiritual platforms to critical civic infrastructure.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          
          {/* Saalihat Dedicated Branding Section */}
          <div className="w-full bg-[#12141a] rounded-[2rem] border border-[var(--color-primary-dark)]/10 shadow-xl overflow-hidden flex flex-col lg:flex-row text-white">
            {/* Saalihat Visual Side */}
            <div className="lg:w-2/5 bg-black p-8 sm:p-12 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c49a45]/10 to-transparent" />
              
              <div className="relative z-10 w-full max-w-sm flex justify-center">
                <div className="relative w-48 h-96 sm:w-56 sm:h-[450px] shadow-2xl rounded-[2rem] overflow-hidden border-4 border-[#2a2a2a] transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-20">
                  <Image
                    src="/saalihat/Screenshot_1.png"
                    alt="Saalihat App Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-10 right-0 sm:-right-8 w-40 h-80 sm:w-48 sm:h-96 shadow-2xl rounded-[2rem] overflow-hidden border-4 border-[#2a2a2a] transform rotate-6 opacity-80 z-10">
                  <Image
                    src="/saalihat/Screenshot_2.png"
                    alt="Saalihat App Interface Alternate"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="relative z-30 mt-8 flex items-center gap-4 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                <Image
                  src="/saalihat/logo.jpg"
                  alt="Saalihat App Logo"
                  width={40}
                  height={40}
                  className="rounded-lg object-contain"
                />
                <div>
                  <h3 className="font-brand text-2xl font-bold tracking-tight text-[#d5ad5b]">Saalihat</h3>
                  <p className="text-zinc-400 uppercase tracking-[0.2em] text-[10px] font-semibold">Flagship Platform</p>
                </div>
              </div>
            </div>

            {/* Saalihat Content Side */}
            <div className="lg:w-3/5 p-10 sm:p-14 flex flex-col justify-center bg-[#151922]">
              <h4 className="font-brand text-3xl sm:text-4xl font-bold text-white mb-4">
                Turning fragmented community data into something immediate.
              </h4>
              <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                Saalihat (صالحات) was born from a simple realisation: mosque events are often buried by proximity, creating a highly decentralised space with asymmetric information. Built from the ground up — coded at night, after Fajr, and across cities in Central Asia — Saalihat is designed to solve this gap.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-10">
                It aggregates upcoming events at mosques, allowing the community to easily find the next lecture, Qiyam, or family day. The goal of Saalihat is simple: to help users build beautiful spiritual habits and connect Muslims to their communities.
              </p>
              
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://apps.apple.com/sg/app/saalihat/id6760661366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#d5ad5b] hover:bg-white text-black font-bold transition-all shadow-md group"
                  >
                    <span className="text-xl"></span> App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#d5ad5b] hover:bg-white text-black font-bold transition-all shadow-md group"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5v19l16-9.5z"/></svg> Google Play
                  </a>
                </div>
                
                {/* QR Codes for Desktop Users */}
                <div className="hidden sm:flex items-center gap-6 pt-2">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-white rounded-xl overflow-hidden border border-white/10 p-1 shadow-sm">
                      <Image src="/saalihat/apple-qr.jpg" alt="Apple QR" width={80} height={80} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">iOS App</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-white rounded-xl overflow-hidden border border-white/10 p-1 shadow-sm">
                      <Image src="/saalihat/google-qr.jpg" alt="Google QR" width={80} height={80} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">Android App</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jenazah.sg Pipeline Section */}
          <div className="w-full bg-[var(--brand-bg)] rounded-[2rem] border border-[var(--color-primary-dark)]/10 shadow-sm overflow-hidden flex flex-col lg:flex-row-reverse">
            {/* Jenazah Visual Side */}
            <div className="lg:w-1/3 bg-white p-10 flex flex-col items-center justify-center relative border-l border-[var(--color-primary-dark)]/5">
              <a href="https://jenazah.sg" target="_blank" rel="noopener noreferrer" className="font-brand text-2xl font-bold tracking-tight text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors mb-1">jenazah.sg</a>
              <p className="text-[var(--color-primary-dark)]/60 text-xs font-semibold uppercase tracking-wider">In Development Pipeline</p>
            </div>

            {/* Jenazah Content Side */}
            <div className="lg:w-2/3 p-10 sm:p-12 flex flex-col justify-center bg-white/40">
              <h4 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-3">
                Compassionate Civic Infrastructure
              </h4>
              <p className="text-[var(--color-primary-dark)]/80 leading-relaxed mb-6">
                Our next pipeline project, <a href="https://jenazah.sg" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] underline underline-offset-4">jenazah.sg</a>, addresses a profound human problem: the overwhelming communication and administrative burden placed on grieving families. Rather than an economic tool, it is an empathy-first platform designed to guide Singaporeans (especially the elderly) step-by-step through their darkest hours from Life SG logging to parlour coordination. 
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-primary)]">
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
