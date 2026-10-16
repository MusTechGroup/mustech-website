import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedJenazahLogo from "@/components/AnimatedJenazahLogo";
import AnimatedTarabaseLogo from "@/components/AnimatedTarabaseLogo";
import AnimatedJumpstartLogo from "@/components/AnimatedJumpstartLogo";

// One frame for every product logo on the page: margin-trimmed files at one height, in
// columns of one width, each with a one-line caption.
const LOGO_COLUMN =
  "md:w-1/3 bg-white px-6 py-8 md:px-8 md:py-10 flex flex-col items-center justify-center gap-4 border-b md:border-b-0 md:border-r border-black/5 overflow-visible";
const LOGO_LINK = "flex h-24 md:h-28 items-center justify-center hover:opacity-95 transition-opacity group relative overflow-visible";
const LOGO_CAPTION = "text-[var(--color-primary-dark)]/60 text-xs font-semibold uppercase tracking-wider text-center whitespace-nowrap";

export default function Portfolio() {
  return (
    <section id="saalihat" className="w-full">
      {/* Immersive Saalihat Section (Site-within-a-site) */}
      <div className="w-full bg-[#0e1117] py-16 sm:py-24 lg:py-28 relative overflow-hidden text-white border-y border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c49a45]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Content Side */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d5ad5b] mb-4">
                Flagship Mobile Platform
              </span>
              
              <div className="flex items-center gap-4 mb-6">
                <Image src="/saalihat/logo.jpg" alt="Saalihat App Logo" width={48} height={48} className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/15" />
                <h3 className="font-brand text-4xl sm:text-5xl font-bold leading-none tracking-tight text-white">Saalihat</h3>
              </div>

              <h4 className="font-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-[#d5ad5b] mb-4 leading-tight">
                Connecting Muslims to verified community events and sacred knowledge.
              </h4>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
                Saalihat (صالحات) aggregates mosque lectures, charitable programmes, and community circles across Southeast Asia into a single, verified schedule. Engineered for absolute privacy, it helps believers cultivate lasting spiritual habits without advertising, behavioural tracking, or data brokering.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <a href="https://apps.apple.com/sg/app/saalihat/id6760661366" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#d5ad5b] hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all group min-h-[44px]">
                    <span className="text-xl leading-none"></span>
                    <span>Download on iOS</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#d5ad5b] hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all group min-h-[44px]">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5v19l16-9.5z"/></svg>
                    <span>Get it on Android</span>
                  </a>
                </div>
                
                <div className="hidden sm:flex items-center gap-8 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 border border-white/20 bg-white/5">
                      <Image src="/saalihat/apple-qr.jpg" alt="QR code to download Saalihat on the Apple App Store" width={72} height={72} className="w-18 h-18 object-cover" />
                    </div>
                    <span className="text-zinc-400 text-xs font-medium">Scan for iOS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 border border-white/20 bg-white/5">
                      <Image src="/saalihat/google-qr.jpg" alt="QR code to download Saalihat on Google Play" width={72} height={72} className="w-18 h-18 object-cover" />
                    </div>
                    <span className="text-zinc-400 text-xs font-medium">Scan for Android</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-6 relative w-full flex flex-col items-center justify-center py-6 lg:py-0">
              <div className="relative w-60 sm:w-72 border border-white/20 bg-[#0e1117] p-2 shadow-2xl">
                <div className="relative w-full aspect-[1096/2560] border border-white/10 overflow-hidden bg-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/saalihat/Screenshot_1.png"
                    className="w-full h-full object-contain block"
                  >
                    <source src="/saalihat/saalihat_boomerang.webm" type="video/webm" />
                    <source src="/saalihat/saalihat_boomerang.mp4" type="video/mp4" />
                    <Image
                      src="/saalihat/saalihat_boomerang.gif"
                      alt="Saalihat App Live Demo"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain"
                      unoptimized
                    />
                  </video>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mt-4 text-zinc-400 text-xs font-medium">
                <span>Zero Ads</span>
                <span>·</span>
                <span>No Tracking</span>
                <span>·</span>
                <span>PDPA Compliant</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Ecosystem & Platforms Section */}
      <div className="w-full bg-[var(--brand-bg)] py-16 sm:py-20 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Jenazah.sg Panel */}
          <div className="editorial-panel p-0 flex flex-col md:flex-row items-stretch md:min-h-[16rem]">
            <div className={LOGO_COLUMN}>
              <a href="https://jenazah.sg" target="_blank" rel="noopener noreferrer" className={LOGO_LINK}>
                <AnimatedJenazahLogo priority />
              </a>
              <p className={LOGO_CAPTION}>Bereavement Care</p>
            </div>
            <div className="md:w-2/3 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/30">
              <h4 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-3">
                Compassionate Guidance for Bereaved Families
              </h4>
              <p className="text-[var(--color-primary-dark)]/85 leading-relaxed font-sans text-base mb-6">
                When a loved one passes, grieving families face immense emotional distress alongside urgent administrative steps. <a href="https://jenazah.sg" target="_blank" rel="noopener noreferrer" className="font-bold text-[#4A5D3F] hover:underline underline-offset-4">jenazah.sg</a> provides Singaporean families with calm, step-by-step guidance: from official death registration via LifeSG to funeral arrangements, mosque coordination, and community notices.
              </p>
              <div className="text-xs font-bold uppercase tracking-wider text-[#4A5D3F]">
                Active in Singapore
              </div>
            </div>
          </div>

          {/* TaraBase Panel */}
          <div className="editorial-panel p-0 flex flex-col md:flex-row items-stretch md:min-h-[16rem]">
            <div className={LOGO_COLUMN}>
              <a href="https://tarabase.co" target="_blank" rel="noopener noreferrer" className={LOGO_LINK}>
                <AnimatedTarabaseLogo priority />
              </a>
              <p className={LOGO_CAPTION}>Micro-Merchant Commerce</p>
            </div>
            <div className="md:w-2/3 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/30">
              <h4 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-3">
                Digital Front-of-House for Home-Based Businesses
              </h4>
              <p className="text-[var(--color-primary-dark)]/85 leading-relaxed font-sans text-base mb-6">
                Home-based food creators face chaotic chat-based order fragmentation and payment verification friction. <a href="https://tarabase.co" target="_blank" rel="noopener noreferrer" className="font-bold text-[#814038] hover:underline underline-offset-4">TaraBase</a> provides automated capacity slotting, kitchen production scheduling, and instant PayNow payment verification.
              </p>
              <div className="text-xs font-bold uppercase tracking-wider text-[#814038]">
                Pilot Kitchens Active
              </div>
            </div>
          </div>

          {/* MusTech Jumpstart Panel */}
          <div className="editorial-panel p-0 flex flex-col md:flex-row items-stretch md:min-h-[16rem]">
            <div className={LOGO_COLUMN}>
              <Link href="/jumpstart" className={LOGO_LINK}>
                <AnimatedJumpstartLogo compact priority />
              </Link>
              <p className={LOGO_CAPTION}>Founder Masterclass</p>
            </div>
            <div className="md:w-2/3 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/30">
              <h4 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-3">
                Autonomous Organisation &amp; AI Masterclass
              </h4>
              <p className="text-[var(--color-primary-dark)]/85 leading-relaxed font-sans text-base mb-6">
                We pre-build a tailored AI organisation aligned directly to your venture&apos;s operational needs. <Link href="/jumpstart" className="font-bold text-[#814038] hover:underline underline-offset-4">MusTech Jumpstart</Link> teaches founders how to deploy autonomous agentic workflows, custom LLM systems, and cost-controlled operations.
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#814038]">
                  Inaugural Cohort Registering
                </div>
                <Link
                  href="/jumpstart"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors group min-h-[44px]"
                >
                  <span>Explore Masterclass</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
