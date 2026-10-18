import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import CopyButton from "./CopyButton";

export default function PrivacyPolicyContent() {
  const lastUpdated = "October 2026";

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[var(--brand-bg)] text-[var(--color-primary-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link / Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-dark)]/60 hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to MusTech Group Home</span>
          </Link>
        </div>

        {/* Policy Editorial Header — Clean, Uncluttered */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 mb-12 border-b border-black/10 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3">
              MUSTECH GROUP PTE. LTD. · UEN 202609163C · Effective {lastUpdated}
            </p>
            <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight leading-[1.08]">
              Privacy Policy
            </h1>
          </div>
          <p className="lg:col-span-5 text-base sm:text-lg text-[var(--color-primary-dark)]/75 font-sans leading-relaxed">
            How we handle personal data in the Saalihat app (iOS &amp; Android), on this website, and for MusTech Jumpstart sign-ups, under Singapore&apos;s Personal Data Protection Act (PDPA). TaraBase has{" "}
            <a href="https://tarabase.co/privacy" className="underline hover:text-[var(--color-primary)]">
              its own privacy policy
            </a>
            .
          </p>
        </div>

        {/* Single Unified Editorial Ledger */}
        <div className="editorial-panel bg-white border border-black/10 p-8 sm:p-10 lg:p-12">
          
          {/* Foundational Charter */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 mb-10 border-b border-black/10">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] block mb-1">
                Foundational Charter
              </span>
              <h2 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)]">
                Privacy as an Amanah (Sacred Trust)
              </h2>
            </div>
            <div className="lg:col-span-8 text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed">
              <p>
                At <strong>MusTech Group</strong>, we believe digital technology should protect human dignity rather than extract behavioural capital. Under our <strong>Tayyib Architecture</strong> framework, user privacy is not a regulatory checkbox - it is an <strong>Amanah</strong> (a sacred trust). We build <strong>Saalihat</strong> to serve civic and spiritual life without commercial surveillance, behavioural profiling, or third-party data monetisation.
              </p>
            </div>
          </div>

          {/* Clauses 01 – 08 Ledger */}
          <div className="divide-y divide-black/10 text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed">
            
            {/* Clause 01 */}
            <section className="py-8 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">
                  Clause 01
                </span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Data Minimisation by Design
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p>
                  Saalihat is engineered so that you can access verified mosque schedules, lectures, and community programmes without creating an account or submitting personal identifying information.
                </p>
                <ul className="space-y-2.5">
                  <li>
                    <strong className="text-[var(--color-primary-dark)]">Local Device Storage:</strong> Personal preferences, saved reminders, and bookmarked lectures reside exclusively in on-device storage. This data is not uploaded to our remote database servers.
                  </li>
                  <li>
                    <strong className="text-[var(--color-primary-dark)]">Non-Identifying Technical Telemetry:</strong> We may collect anonymised crash logs and baseline latency metrics strictly to maintain app stability across network conditions in Singapore.
                  </li>
                </ul>
              </div>
            </section>

            {/* Clause 02 */}
            <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">
                  Clause 02
                </span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Purpose of Information Processing
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-3">
                <p>Any technical data processed during app execution is utilised solely for:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Delivering accurate, verified schedules for mosque lectures and community initiatives.</li>
                  <li>Diagnosing technical faults, edge pipeline latency, and client-side rendering anomalies.</li>
                  <li>Responding directly to user enquiries and technical support tickets.</li>
                </ul>
              </div>
            </section>

            {/* Clause 03 */}
            <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">
                  Clause 03
                </span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Absolute Prohibition on Data Monetisation
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-3">
                <p>
                  MusTech Group guarantees that we <strong className="text-[var(--color-primary-dark)]">never sell, rent, trade, or broker personal information</strong> to third parties, data aggregators, or marketing syndicates.
                </p>
                <p>
                  Saalihat contains zero third-party advertising SDKs, zero cross-app tracking scripts, and zero behavioural fingerprinting tools.
                </p>
              </div>
            </section>

            {/* Clause 04 */}
            <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">
                  Clause 04
                </span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  User Rights &amp; Permanent Data Erasure
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p>
                  Under the Singapore Personal Data Protection Act (PDPA) and international privacy frameworks, users retain complete sovereignty over their data. If you have provided identifying information through our support channels and wish for it to be purged, you may submit a direct erasure request.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                  <a
                    href="mailto:saalihat_support@mustechgroup.com?subject=Data%20Deletion%20Request"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Submit Data Erasure Request</span>
                  </a>
                  <span className="text-xs text-[var(--color-primary-dark)]/60">
                    SLA: Processed within 2 business days
                  </span>
                </div>
              </div>
            </section>

            {/* Clause 05 */}
            <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">
                  Clause 05
                </span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Protection of Children&apos;s Digital Welfare
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p>
                  Saalihat is built as an educational and civic community directory suitable for all ages. We do not knowingly solicit or collect personal identifiable data from children under 13 years of age.
                </p>
              </div>
            </section>

            {/* Clause 06 */}
            <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">
                  Clause 06
                </span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Regulatory Standards &amp; App Store Compliance
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p>
                  This policy is written to meet the requirements of the <strong>Singapore Personal Data Protection Act 2012 (PDPA)</strong>, the <strong>Apple App Store Review Guidelines (Section 5.1 - Privacy)</strong>, and the <strong>Google Play Developer Distribution Agreement</strong>.
                </p>
              </div>
            </section>

            {/* Clause 07 */}
            <section id="website" className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-32">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">
                  Clause 07
                </span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  This Website
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-3">
                <p>
                  This website uses <strong>Cloudflare Web Analytics</strong> to count visits. It sets no cookies and does not identify you.
                </p>
                <p>
                  We see only totals, such as how many people visited a page, which site sent them, and their country. We use this to see whether people find MusTech Jumpstart and sign up.
                </p>
              </div>
            </section>

            {/* Clause 08 */}
            <section id="jumpstart" className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-32">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">
                  Clause 08
                </span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  MusTech Jumpstart Sign-ups
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-3">
                <p>
                  When you register your interest in MusTech Jumpstart, we collect only what the form asks for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Your name, your email address, and the stage of your venture.</li>
                  <li>When you signed up, and how many times you submitted the form.</li>
                </ul>
                <p>
                  <strong className="text-[var(--color-primary-dark)]">Purpose:</strong> We use these details only to contact you about Jumpstart, such as the cohort schedule and how to register. We do not add you to any other mailing list, and Clause 03 applies in full.
                </p>
                <p>
                  <strong className="text-[var(--color-primary-dark)]">Storage and access:</strong> Your details are stored in a database hosted in Singapore. The public website can add a sign-up but cannot read, change, or list them. Only MusTech Group&apos;s administrators can view them.
                </p>
                <p>
                  <strong className="text-[var(--color-primary-dark)]">Retention:</strong> We keep your details for 12 months after you last signed up, then delete them.
                </p>
                <p>
                  <strong className="text-[var(--color-primary-dark)]">Withdrawal:</strong> You can ask us to remove your details at any time by emailing{" "}
                  <a
                    href="mailto:jumpstart@mustechgroup.com?subject=Remove%20my%20Jumpstart%20details"
                    className="font-semibold underline hover:text-[var(--color-primary)]"
                  >
                    jumpstart@mustechgroup.com
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Clause 09 */}
            <section className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">
                  Clause 09
                </span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Data Protection Officer &amp; Official Enquiries
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p>
                  For formal data enquiries, regulatory notices, or privacy policy questions, please contact our data protection officer:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-sm">
                  <div className="p-5 bg-[var(--brand-bg)] border border-black/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/55 block mb-1">
                      Holding Entity
                    </span>
                    <p className="font-bold text-[var(--color-primary-dark)]">
                      MUSTECH GROUP PTE. LTD. (UEN: 202609163C)
                    </p>
                    <p className="text-xs text-[var(--color-primary-dark)]/70 mt-0.5">
                      Built on Amanah Digital Standards · Republic of Singapore
                    </p>
                  </div>
                  <div className="p-5 bg-[var(--brand-bg)] border border-black/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/55 block mb-1">
                      Data Protection &amp; Support
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href="mailto:saalihat_support@mustechgroup.com"
                        className="font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors break-all"
                      >
                        saalihat_support@mustechgroup.com
                      </a>
                      <CopyButton textToCopy="saalihat_support@mustechgroup.com" ariaLabel="Copy support email" />
                    </div>
                    <p className="text-xs text-[var(--color-primary-dark)]/60 mt-1">
                      Response SLA: 1 - 2 business days (SGT)
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
}
