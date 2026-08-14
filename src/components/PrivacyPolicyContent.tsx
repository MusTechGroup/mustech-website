import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  Trash2, 
  Baby, 
  FileText, 
  Mail, 
  CheckCircle2, 
  ArrowLeft,
  Building2,
  RefreshCw
} from "lucide-react";

export default function PrivacyPolicyContent() {
  const lastUpdated = "August 2026";

  return (
    <div className="pt-48 sm:pt-64 pb-24 relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--color-primary-dark)]/60 hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--color-primary)]" />
            <span>Return to MusTech Group Home</span>
          </Link>
        </div>

        {/* Policy Header */}
        <div className="text-center pb-10 mb-10 border-b border-black/5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--brand-bg)] border border-[var(--color-primary)]/20 text-[var(--color-primary-dark)] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            Official App Store & Google Play Privacy Policy
          </div>
          <h1 className="font-brand text-3xl sm:text-5xl font-bold text-[var(--color-primary-dark)] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--color-primary-dark)]/70">
            Governing Application: <strong className="text-[var(--color-primary-dark)]">Saalihat</strong> · Operating Entity: <strong className="text-[var(--color-primary-dark)]">MusTech Group (ACRA: 202609163C)</strong>
          </p>
          <p className="text-xs text-[var(--color-primary-dark)]/50 mt-1">
            Last Updated & Reviewed: {lastUpdated}
          </p>
        </div>

        {/* Amanah Trust Callout Card */}
        <div className="editorial-panel p-8 sm:p-10 mb-12 flex flex-col justify-between border border-black/10">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-12 h-12 bg-[var(--brand-bg)] border border-black/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div className="space-y-3">
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                Privacy as an Amanah (Sacred Trust)
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed font-sans">
                At <strong>MusTech Group</strong>, we view the privacy of our users as an <strong className="text-[var(--color-primary)]">Amanah (a sacred trust)</strong>. We built <strong>Saalihat</strong> to serve the community, not to exploit its data. This Privacy Policy explains how we collect, use, and protect your information in compliance with Islamic ethics, the Apple App Store Guidelines, and the Google Play Developer Policies.
              </p>
            </div>
          </div>
        </div>

        {/* Structured Clauses */}
        <div className="space-y-8 text-[var(--color-primary-dark)]/80 text-sm sm:text-base leading-relaxed font-sans">
          
          {/* Section 1 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-[var(--brand-bg)] border border-black/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                1. Data Collection (Data Minimisation)
              </h2>
            </div>
            <p>
              We believe in collecting only what is strictly necessary to make the Saalihat app function.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--color-primary-dark)] block mb-1">Local Data:</strong> Features such as &quot;Bookmarking&quot; events are saved via Local Device Storage. This data remains on your physical device and is not continuously transmitted to our servers.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--color-primary-dark)] block mb-1">Usage Data:</strong> We may collect anonymous, non-identifying crash logs and app performance data (such as page load times) to fix bugs and improve the app experience.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-[var(--brand-bg)] border border-black/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                2. How We Use Your Information
              </h2>
            </div>
            <p>Any data collected is used exclusively to:</p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Provide and maintain the Saalihat directory of mosque events and Kuliahs.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Ensure the technical stability, performance, and uptime of the application.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Provide direct user support when you contact our developer team.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-[var(--brand-bg)] border border-black/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                3. Third-Party Sharing (Our Guarantee)
              </h2>
            </div>
            <p>
              We <strong className="text-[var(--color-primary-dark)]">do not sell, rent, or trade your personal information</strong>. We do not integrate with third-party advertising networks that track your behaviour across other apps. Data is only processed through secure, industry-standard infrastructure strictly for operational purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-[var(--brand-bg)] border border-black/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Trash2 className="w-6 h-6" />
              </div>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                4. User Rights and Data Deletion
              </h2>
            </div>
            <p>
              You maintain full ownership of your data. If you have provided us with any personal information and wish for it to be permanently deleted from our active records, you may request deletion at any time by contacting us directly.
            </p>
            <div className="pt-4">
              <a
                href="mailto:saalihat_support@mustechgroup.com?subject=Data%20Deletion%20Request"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Mail className="w-4 h-4" />
                Submit Data Deletion Request
              </a>
            </div>
          </section>

          {/* Section 5 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-[var(--brand-bg)] border border-black/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Baby className="w-6 h-6" />
              </div>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                5. Children&apos;s Privacy
              </h2>
            </div>
            <p>
              Saalihat is designed as a family-friendly community directory. We do not knowingly collect personal, identifiable information from children under the age of 13.
            </p>
          </section>

          {/* Section 6 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-[var(--brand-bg)] border border-black/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                6. Changes to This Policy
              </h2>
            </div>
            <p>
              If we add new features that require a change in how we handle data, we will update this policy and notify users within the app.
            </p>
          </section>

          {/* Section 7 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-[var(--brand-bg)] border border-black/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                7. Contact & Developer Details
              </h2>
            </div>
            <p>
              If you have any questions about this Privacy Policy or how your data is handled, please reach out to our team:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-[var(--brand-bg)] border border-black/10 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider mb-1">Developer / Holding Entity</span>
                <p className="text-base font-bold text-[var(--color-primary-dark)]">MusTech Group</p>
                <p className="text-xs font-mono text-[var(--color-primary-dark)]/70">ACRA Reg: 202609163C</p>
              </div>
              <div className="p-5 bg-[var(--brand-bg)] border border-black/10 flex flex-col justify-center overflow-hidden">
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider mb-1">Official Support Email</span>
                <a
                  href="mailto:saalihat_support@mustechgroup.com"
                  className="text-xs font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors mb-1 break-all"
                >
                  saalihat_support@mustechgroup.com
                </a>
                <p className="text-xs text-[var(--color-primary-dark)]/70">Singapore (SGT / UTC+8)</p>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
