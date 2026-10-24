import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = parseInt(
    new Date().toLocaleString("en-SG", {
      timeZone: "Asia/Singapore",
      year: "numeric",
    }),
    10
  );

  return (
    <footer className="bg-[#12141a] border-t border-[var(--color-primary)]/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Corporate Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/brand/Logo_Large_ClearBg.png"
                alt="MusTech Group Logo"
                width={120}
                height={120}
                className="object-contain filter brightness-0 invert"
              />
            </Link>

            <p className="text-[#fdfaf0]/65 text-xs sm:text-sm leading-relaxed max-w-sm">
              Singapore technology holding company building ethical mobile applications and civic digital infrastructure.
            </p>

            <div className="pt-2 space-y-1 text-xs text-[#fdfaf0]/70">
              <a
                href="mailto:admin@mustechgroup.com"
                className="block hover:text-white transition-colors"
              >
                General &amp; Partnerships: <span className="text-[#fdfaf0]/95 font-medium">admin@mustechgroup.com</span>
              </a>
              <a
                href="mailto:saalihat_support@mustechgroup.com"
                className="block hover:text-white transition-colors"
              >
                Saalihat Support: <span className="text-[#fdfaf0]/95 font-medium">saalihat_support@mustechgroup.com</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--color-custard)] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/portfolio" className="inline-block py-2 -my-2 text-[#fdfaf0]/65 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/jumpstart" className="inline-block py-2 -my-2 text-[#fdfaf0]/65 hover:text-white transition-colors">
                  MusTech Jumpstart
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-block py-2 -my-2 text-[#fdfaf0]/65 hover:text-white transition-colors">
                  Governance &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="inline-block py-2 -my-2 text-[#fdfaf0]/65 hover:text-white transition-colors">
                  Philosophy
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--color-custard)] uppercase tracking-wider">
              Ecosystem &amp; Platforms
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/portfolio" className="inline-block py-2 -my-2 text-[var(--color-custard)] hover:text-white transition-colors font-medium">
                  All Platforms
                </Link>
              </li>
              <li>
                <Link href="/portfolio#saalihat" className="inline-block py-2 -my-2 text-[#fdfaf0]/65 hover:text-white transition-colors">
                  Saalihat
                </Link>
              </li>
              <li>
                <a
                  href="https://jenazah.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fdfaf0]/65 hover:text-[var(--color-custard)] transition-colors inline-flex items-center gap-1"
                >
                  jenazah.sg <ExternalLink className="w-3 h-3 text-[#fdfaf0]/50" />
                </a>
              </li>
              <li>
                <a
                  href="https://tarabase.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fdfaf0]/65 hover:text-[var(--color-custard)] transition-colors inline-flex items-center gap-1"
                >
                  TaraBase <ExternalLink className="w-3 h-3 text-[#fdfaf0]/50" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & App Store Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--color-custard)] uppercase tracking-wider">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="py-2 -my-2 text-[var(--color-custard)] hover:text-white transition-colors font-medium flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary-light)]" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="inline-block py-2 -my-2 text-[#fdfaf0]/65 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:saalihat_support@mustechgroup.com?subject=Data%20Deletion%20Request"
                  className="inline-block py-2 -my-2 text-[#fdfaf0]/65 hover:text-white transition-colors"
                >
                  Data Deletion Request
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar — Single Canonical Place for UEN & Ecosystem Signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fdfaf0]/55">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
            <span>
              © {currentYear} <span className="text-[#fdfaf0]/85 font-semibold">MUSTECH GROUP PTE. LTD. (UEN: 202609163C)</span>
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="text-[#fdfaf0]/65">A MusTech Group Initiative · Built on Amanah Digital Standards</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="inline-block py-2 -my-2 hover:text-[#fdfaf0]/90 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="inline-block py-2 -my-2 hover:text-[#fdfaf0]/90 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
