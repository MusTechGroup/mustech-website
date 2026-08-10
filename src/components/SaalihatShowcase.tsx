import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  MapPin, 
  BookmarkCheck, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Download
} from "lucide-react";

export default function SaalihatShowcase() {
  return (
    <section id="saalihat" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/30 text-[var(--color-custard)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary-light)]" />
            Flagship Product
          </div>
          <h2 className="font-brand text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Meet <span className="text-gradient-primary">Saalihat</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            A privacy-first mobile application designed to connect communities with mosque events, verified kuliahs, and spiritual knowledge across Southeast Asia.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Feature Card & Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl p-1 bg-gradient-to-b from-[var(--color-primary)]/40 via-[#1d222e] to-[#0e1117] shadow-2xl shadow-[var(--color-primary)]/20">
              <div className="w-full bg-[#12151c] rounded-[22px] p-6 border border-white/5 flex flex-col justify-between">
                
                {/* Phone Header Mock */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center p-1">
                      <Image
                        src="/brand/Logo_Large_ClearBg.png"
                        alt="Saalihat Icon"
                        width={20}
                        height={20}
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Saalihat</h4>
                      <p className="text-[10px] text-zinc-400">Official Mobile App</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Live on Stores
                  </span>
                </div>

                {/* Mock Event Cards in App */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-[#1a1e28] border border-white/5">
                    <div className="flex items-center justify-between text-xs text-[var(--color-custard)] mb-1 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-light)]" /> Masjid Sultan
                      </span>
                      <span className="text-zinc-400 text-[11px]">Today · 7:45 PM</span>
                    </div>
                    <p className="text-xs font-bold text-white">Tafsir Surah Al-Kahf with Ustaz</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] bg-[var(--color-primary)]/20 text-[var(--color-custard)] px-2 py-0.5 rounded border border-[var(--color-primary)]/30">Kuliah</span>
                      <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">Free Admission</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1a1e28] border border-white/5">
                    <div className="flex items-center justify-between text-xs text-[var(--color-custard)] mb-1 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-light)]" /> Masjid Al-Falah
                      </span>
                      <span className="text-zinc-400 text-[11px]">Saturday · 10:00 AM</span>
                    </div>
                    <p className="text-xs font-bold text-white">Youth Halaqah & Community Circle</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] bg-[var(--color-primary)]/20 text-[var(--color-custard)] px-2 py-0.5 rounded border border-[var(--color-primary)]/30">Youth Circle</span>
                      <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">In-Person</span>
                    </div>
                  </div>
                </div>

                {/* Privacy Guarantee Banner inside Mockup */}
                <div className="p-3 rounded-xl bg-[#0b0d13] border border-[var(--color-primary)]/30 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-primary-light)] shrink-0" />
                  <p className="text-[11px] text-zinc-300">
                    <strong className="text-white">Amanah Guarantee:</strong> Zero ads, local bookmarking, no data brokering.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Store Badges */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-brand text-2xl sm:text-3xl font-bold text-white">
                Built to serve the community, not exploit its data.
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Finding reliable, up-to-date mosque schedules and verified Islamic lectures should be effortless and respectful of your privacy. Saalihat curates community events in a distraction-free, privacy-preserving mobile environment.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-custard)]">
                  <Calendar className="w-4 h-4 text-[var(--color-primary-light)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Verified Kuliah Schedules</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Accurate event timings, speakers, and topics updated continuously.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-custard)]">
                  <MapPin className="w-4 h-4 text-[var(--color-primary-light)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Mosque & Venue Directory</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Locate nearby prayer halls, facilities, and contact details seamlessly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-custard)]">
                  <BookmarkCheck className="w-4 h-4 text-[var(--color-primary-light)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Local-First Bookmarking</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Saved lectures remain securely on your device storage without tracking.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-custard)]">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-primary-light)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Behavioral Ads</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Complies strictly with Apple App Store & Google Play privacy standards.</p>
                </div>
              </div>
            </div>

            {/* Store Download Buttons */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-wider text-[var(--color-custard)] font-bold mb-3 flex items-center gap-2">
                <Download className="w-3.5 h-3.5 text-[var(--color-primary-light)]" />
                Download Saalihat for iOS & Android
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                {/* Apple App Store */}
                <a
                  href="https://apps.apple.com/sg/app/saalihat/id6760661366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#151922] hover:bg-[#1d222e] border border-white/10 hover:border-[var(--color-primary)]/50 text-white transition-all duration-200 shadow-lg hover:shadow-[var(--color-primary)]/20"
                >
                  <svg className="w-7 h-7 fill-current text-white group-hover:text-[var(--color-primary-light)] transition-colors" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.87-.9.04-2 .6-2.63 1.34-.56.64-.99 1.69-.87 2.71 1 .08 2.01-.52 2.58-1.18z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase text-zinc-400 leading-tight">Download on the</div>
                    <div className="text-sm font-bold text-white tracking-wide">Apple App Store</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-[var(--color-primary-light)] transition-colors ml-1" />
                </a>

                {/* Google Play Store */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#151922] hover:bg-[#1d222e] border border-white/10 hover:border-[var(--color-primary)]/50 text-white transition-all duration-200 shadow-lg hover:shadow-[var(--color-primary)]/20"
                >
                  <svg className="w-7 h-7 fill-current text-white group-hover:text-[var(--color-primary-light)] transition-colors" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.944 1.944 0 0 1-.22-.924V2.738c0-.34.08-.654.219-.924zm11.238 11.24L4.854 3.061l11.458 6.548-1.465 3.445zm0-2.108l1.465 3.445 4.39-2.508c.784-.448.784-1.176 0-1.624l-4.39-2.508-1.465 3.195zm-1.055 1.054L4.854 20.939l9.993-9.939z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase text-zinc-400 leading-tight">Get it on</div>
                    <div className="text-sm font-bold text-white tracking-wide">Google Play</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-[var(--color-primary-light)] transition-colors ml-1" />
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Legally compliant with App Store privacy guidelines.</span>
                <Link href="/home/privacy-policy" className="text-[var(--color-primary-light)] underline hover:text-white ml-1">
                  View Privacy Policy
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
