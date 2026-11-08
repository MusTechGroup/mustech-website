// High-leverage founder + AI co-execution playbooks in MusTech OS.
// Names, domains, and figures are illustrative.

export type Job = {
  id: string;
  label: string;
  tab: string;
  dept: string;
  ask: string;
  skill: string;
  title: string;
  summary: string;
  lines: { k: string; v: string; tone?: "flag" | "ok" }[];
  footer: string;
};

export const JOBS: Job[] = [
  {
    id: "website",
    tab: "1 · Build a Website",
    label: "Need a website? Work with your AI to create it.",
    dept: "Brand House & Product Build",
    ask: "Co-design and ship halcyonstudio.sg from scratch on your laptop.",
    skill: "site-and-domain",
    title: "Production website built with you on localhost",
    summary:
      "You set the positioning and visual direction with your AI. It writes the copy, codes the responsive pages, checks contrast and mobile layout, and prepares the live deployment.",
    lines: [
      { k: "Co-design", v: "Define your brand board, typography, colour tokens, and page structure together before a line of code is written." },
      { k: "Build & preview", v: "Your AI codes the full site locally, wires up lead capture forms, and opens a live localhost preview for you to review." },
      { k: "Quality gate", v: "Mobile responsiveness, page speed, SEO metadata, and contrast ratios are verified automatically across every page." },
      { k: "Go live", v: "Domain DNS, SSL, and static edge hosting are staged and ready. You give the final go-ahead to publish.", tone: "ok" },
    ],
    footer: "You direct the creative call; your AI writes, codes, and tests the build.",
  },
  {
    id: "trends",
    tab: "2 · Trend Research",
    label: "Need to research trends? Define the scope and let it run social listening.",
    dept: "Market Intelligence & Strategy",
    ask: "Scope a market brief on Q1 demand and run social listening across our niche.",
    skill: "market-research",
    title: "Scoped social listening & competitor intelligence brief",
    summary:
      "Work with your AI to define the exact research scope, buyer questions, and competitor watchlist. Your AI conducts social listening and distils real market signals into an actionable brief.",
    lines: [
      { k: "Define scope", v: "Set the target segment, competitor list, keywords, and decision criteria with your AI in five minutes." },
      { k: "Social listening", v: "Scans public discussions, customer complaints, and competitor launches to capture the exact phrases buyers use." },
      { k: "Gap analysis", v: "Maps where competitors are overcharging or under-delivering, and highlights the clearest positioning angle for you.", tone: "flag" },
      { k: "Actionable output", v: "Delivers a cited strategy brief with content hooks, offer framing, and pricing recommendations.", tone: "ok" },
    ],
    footer: "Evidence-backed market intelligence without spending your week in browser tabs.",
  },
  {
    id: "launch",
    tab: "3 · Launch a Product",
    label: "Need to launch a product? Strategy, compliance, testing, and daily project management.",
    dept: "Go-To-Market, Legal & Delivery",
    ask: "Orchestrate our 1 December product launch from strategy to go-live.",
    skill: "launch-plan",
    title: "End-to-end launch: social strategy, privacy checks, testing & daily PM",
    summary:
      "Your AI works across departments to propose your social strategy, run regulatory and privacy policy checks, execute final go-to-market testing, and project-manage what needs doing every day and week.",
    lines: [
      { k: "Social strategy", v: "Builds your channel rollout, launch narrative, email sequence, and social content calendar around your launch date." },
      { k: "Privacy & rules", v: "Checks your PDPA privacy policy, terms of service, refund disclosures, and statutory requirements before launch.", tone: "flag" },
      { k: "GTM testing", v: "Runs final pre-flight checks across checkout links, onboarding emails, mobile flows, and pricing tiers." },
      { k: "Daily / weekly PM", v: "Breaks the launch into daily and weekly milestones in your Commitments Ledger so nothing slips.", tone: "ok" },
    ],
    footer: "Strategy, compliance, QA, and project management coordinated in one workspace.",
  },
  {
    id: "operations",
    tab: "4 · Daily & Weekly Ops",
    label: "Run active projects, retainers, and cash flow without dropping a ball.",
    dept: "Founder's Office & Finance",
    ask: "Keep our weekly sprints, client variations, and receivables on track.",
    skill: "daily-command",
    title: "Daily and weekly execution across projects, scope, and cash",
    summary:
      "Every active project, retainer renewal, scope variation, and invoice lives in one Commitments Ledger. Your AI tracks weekly progress and brings only the calls that need your judgement to your 8 am briefing.",
    lines: [
      { k: "Weekly sprints", v: "Tracks deliverables across every client project and flags timeline risks before a deadline is missed." },
      { k: "Scope protection", v: "Checks extra client requests against your signed agreement and drafts priced variation notices for your approval.", tone: "flag" },
      { k: "Cash & filings", v: "Reconciles incoming payments, queues overdue invoice reminders, and tracks ACRA and IRAS filing dates.", tone: "ok" },
    ],
    footer: "Your company runs on a clear daily and weekly rhythm, with you in command.",
  },
];
