import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141a] border-t border-[var(--color-primary)]/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Corporate Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/brand/Logo_Large_ClearBg.png"
                alt="MusTech Group Logo"
                width={120}
                height={120}
                className="object-contain filter brightness-0 invert"
              />
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Singapore-based technology holding company creating mobile applications and ethical digital infrastructure built on trust, privacy, and community value.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white/5 text-zinc-300 text-xs border border-white/10 font-mono">
                ACRA Registered: 202609163C · Singapore
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--color-custard)] uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/#about" className="text-zinc-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#pillars" className="text-zinc-400 hover:text-white transition-colors">
                  Pillars & Values
                </Link>
              </li>
              <li>
                <Link href="/#credentials" className="text-zinc-400 hover:text-white transition-colors">
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Mobile */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--color-custard)] uppercase tracking-wider">
              Flagship App
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/#saalihat" className="text-zinc-400 hover:text-white transition-colors">
                  Saalihat Overview
                </Link>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/sg/app/saalihat/id6760661366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[var(--color-custard)] transition-colors flex items-center gap-1"
                >
                  iOS App Store <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[var(--color-custard)] transition-colors flex items-center gap-1"
                >
                  Google Play Store <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & App Store Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--color-custard)] uppercase tracking-wider">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[var(--color-custard)] hover:text-white transition-colors font-medium flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary-light)]" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:saalihat_support@mustechgroup.com?subject=Data%20Deletion%20Request"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Data Deletion Request
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} <span className="text-zinc-400 font-medium">MusTech Group</span>. All rights reserved. Registered in Singapore.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
