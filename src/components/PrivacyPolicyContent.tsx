import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import CopyButton from "./CopyButton";

export default function PrivacyPolicyContent() {
  const lastUpdated = "August 2026";

  return (
    <div className="pt-32 sm:pt-36 pb-24 bg-[var(--brand-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link / Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-dark)]/60 hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to MusTech Group Home</span>
          </Link>
        </div>

        {/* Policy Header */}
        <div className="pb-10 mb-12 border-b border-black/10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3">
            Governance &amp; Data Protection
          </p>
          <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-primary-dark)]/80 font-sans leading-relaxed max-w-3xl mb-8">
            The official data stewardship standard for MusTech Group and the Saalihat mobile application. Engineered for strict data minimisation, zero advertising tracking, and absolute user sovereignty.
          </p>

          {/* Governance Metadata Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-black/5 text-xs text-[var(--color-primary-dark)]/80">
            <div>
              <span className="block text-[10px] uppercase font-bold tracking-wider text-[var(--color-primary-dark)]/50 mb-0.5">Governing Entity</span>
              <span className="font-semibold text-[var(--color-primary-dark)]">MusTech Group</span>
              <span className="block text-[11px] font-mono text-[var(--color-primary-dark)]/60">UEN: 202609163C</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold tracking-wider text-[var(--color-primary-dark)]/50 mb-0.5">Application Scope</span>
              <span className="font-semibold text-[var(--color-primary-dark)]">Saalihat Mobile Platform</span>
              <span className="block text-[11px] text-[var(--color-primary-dark)]/60">iOS &amp; Android Ecosystem</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold tracking-wider text-[var(--color-primary-dark)]/50 mb-0.5">Jurisdiction &amp; Review</span>
              <span className="font-semibold text-[var(--color-primary-dark)]">Republic of Singapore</span>
              <span className="block text-[11px] text-[var(--color-primary-dark)]/60">Effective: {lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* Amanah Foundation Charter Panel */}
        <div className="editorial-panel p-8 sm:p-10 mb-12 border border-black/10 bg-white">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-[0.2em]">
              Foundational Charter
            </span>
            <h2 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)]">
              Privacy as an Amanah (Sacred Trust)
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mt-2">
              At <strong>MusTech Group</strong>, we believe digital technology should protect human dignity rather than extract behavioural capital. Under our <strong>Tayyib Architecture</strong> framework, user privacy is not a regulatory checkbox - it is an <strong>Amanah</strong> (a sacred trust). We build <strong>Saalihat</strong> to serve civic and spiritual life without commercial surveillance, behavioural profiling, or third-party data monetisation.
            </p>
          </div>
        </div>

        {/* Legal & Operational Clauses */}
        <div className="space-y-6 text-[var(--color-primary-dark)]/80 text-sm sm:text-base leading-relaxed font-sans">
          
          {/* Section 1 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
            <div className="border-b border-black/5 pb-4">
              <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 01</span>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                Data Minimisation by Design
              </h2>
            </div>
            <p>
              Saalihat is engineered so that you can access verified mosque schedules, lectures, and community programmes without creating an account or submitting personal identifying information.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 mt-2" />
                <div>
                  <strong className="text-[var(--color-primary-dark)]">Local Device Storage:</strong> Personal preferences, saved reminders, and bookmarked lectures reside exclusively in on-device storage. This data is not uploaded to our remote database servers.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 mt-2" />
                <div>
                  <strong className="text-[var(--color-primary-dark)]">Non-Identifying Technical Telemetry:</strong> We may collect anonymised crash logs and baseline latency metrics strictly to maintain app stability across varying network conditions in Southeast Asia.
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
            <div className="border-b border-black/5 pb-4">
              <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 02</span>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                Purpose of Information Processing
              </h2>
            </div>
            <p>Any technical data processed during app execution is utilised solely for:</p>
            <ul className="space-y-2 pt-1 pl-1">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Delivering accurate, verified schedules for mosque lectures and community initiatives.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Diagnosing technical faults, edge pipeline latency, and client-side rendering anomalies.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Responding directly to user enquiries and technical support tickets.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
            <div className="border-b border-black/5 pb-4">
              <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 03</span>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                Absolute Prohibition on Data Monetisation
              </h2>
            </div>
            <p>
              MusTech Group guarantees that we <strong className="text-[var(--color-primary-dark)]">never sell, rent, trade, or broker personal information</strong> to third parties, data aggregators, or marketing syndicates.
            </p>
            <p>
              Saalihat contains zero third-party advertising SDKs, zero cross-app tracking scripts, and zero behavioural fingerprinting tools.
            </p>
          </section>

          {/* Section 4 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
            <div className="border-b border-black/5 pb-4">
              <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 04</span>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                User Rights &amp; Permanent Data Erasure
              </h2>
            </div>
            <p>
              Under the Singapore Personal Data Protection Act (PDPA) and international privacy frameworks, users retain complete sovereignty over their data. If you have provided identifying information through our support channels and wish for it to be purged, you may submit a direct erasure request.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="mailto:saalihat_support@mustechgroup.com?subject=Data%20Deletion%20Request"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Submit Data Erasure Request</span>
              </a>
              <span className="text-xs text-[var(--color-primary-dark)]/60 font-mono">
                SLA: Processed within 2 business days
              </span>
            </div>
          </section>

          {/* Section 5 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
            <div className="border-b border-black/5 pb-4">
              <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 05</span>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                Protection of Children&apos;s Digital Welfare
              </h2>
            </div>
            <p>
              Saalihat is built as an educational and civic community directory suitable for all ages. We do not knowingly solicit or collect personal identifiable data from children under 13 years of age.
            </p>
          </section>

          {/* Section 6 */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
            <div className="border-b border-black/5 pb-4">
              <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 06</span>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                Regulatory Standards &amp; App Store Compliance
              </h2>
            </div>
            <p>
              This policy complies with the statutory mandates of the <strong>Singapore Personal Data Protection Act 2012 (PDPA)</strong>, the <strong>Apple App Store Review Guidelines (Section 5.1 - Privacy)</strong>, and the <strong>Google Play Developer Distribution Agreement</strong>.
            </p>
          </section>

          {/* Section 7: Official DPO & Contact */}
          <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-6">
            <div className="border-b border-black/5 pb-4">
              <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 07</span>
              <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                Data Protection Officer &amp; Official Enquiries
              </h2>
            </div>
            <p>
              For formal data enquiries, regulatory notices, or privacy policy questions, please contact our designated compliance team:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-[var(--brand-bg)] border border-black/10 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider mb-1">Holding Entity</span>
                <p className="text-base font-bold text-[var(--color-primary-dark)]">MusTech Group</p>
                <p className="text-xs font-mono text-[var(--color-primary-dark)]/70">ACRA Reg: 202609163C</p>
                <p className="text-xs text-[var(--color-primary-dark)]/60 mt-1">Republic of Singapore</p>
              </div>
              <div className="p-5 bg-[var(--brand-bg)] border border-black/10 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider mb-1">Data Protection &amp; Support</span>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <a
                    href="mailto:saalihat_support@mustechgroup.com"
                    className="text-xs font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors break-all"
                  >
                    saalihat_support@mustechgroup.com
                  </a>
                  <CopyButton textToCopy="saalihat_support@mustechgroup.com" ariaLabel="Copy support email" />
                </div>
                <p className="text-xs text-[var(--color-primary-dark)]/60">Response SLA: 1 - 2 business days (SGT)</p>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
