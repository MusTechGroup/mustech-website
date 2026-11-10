// What a founder does after AI Jumpstart, from the demand research (founder-course,
// jumpstart/review/audits/2026-11-09-demand-research.md) and the skills that ship. No counts on the page (founder, 2026-11-10).
// Every line says what the product does today. Names and figures in examples are illustrative.

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
    id: "customers",
    tab: "1 · Customers",
    label: "The same questions, day and night? Answers ready before they ask.",
    dept: "Sales and customer care",
    ask: "Customers keep asking the same things, and I miss calls while I work.",
    skill: "answer-kit · missed-call · product-listing",
    title: "Listings, repeat answers, and missed calls, drafted for you to send",
    summary:
      "Among the jobs owners asked for most: listings with the right search words, answers to repeat questions, and missed calls and messages. Your AI drafts all three from your own records.",
    lines: [
      { k: "Listings", v: "Product descriptions in your words, with the words buyers search for. No claim you did not make." },
      { k: "Repeat answers", v: "A kit of answers to the questions you get every week, ready to paste." },
      { k: "Missed calls", v: "The caller's details taken down and a reply drafted. One fixed automatic reply only if you approve it." },
      { k: "You send", v: "Every message waits for you. Approve one on your dashboard and it goes once, exactly as you read it.", tone: "ok" },
    ],
    footer: "Owners told researchers they want help up to the send, not a bot that sends. That is how it works.",
  },
  {
    id: "money",
    tab: "2 · Money and admin",
    label: "Receipts, quotes, chasers, and filing dates, kept in one place.",
    dept: "Finance and company admin",
    ask: "Log these receipts, quote this job, and remind me what is due.",
    skill: "receipt-log · proposal-draft · chase-payments · grants-check",
    title: "The paperwork side of the business, kept up to date",
    summary:
      "Receipts sorted, quotes in minutes, and which Singapore grants you may qualify for. Payment chasers are drafted when an invoice is late; filing dates sit in your calendar.",
    lines: [
      { k: "Receipts", v: "Photo or PDF in, logged with its date, amount, and GST, ready for your accountant." },
      { k: "Quotes", v: "A proposal from your price list, with every total worked out by a calculation, never by guesswork." },
      { k: "Late payments", v: "A polite chaser drafted for each overdue invoice. You read it and send it.", tone: "flag" },
      { k: "Your bank", v: "Stays closed. Money never moves without you, and your bank feed is never opened.", tone: "ok" },
    ],
    footer: "Read-only views of money and a human yes before anything moves: what owners asked for.",
  },
  {
    id: "website",
    tab: "3 · A website",
    label: "Need a website? It takes you there, one plain step at a time.",
    dept: "Project management and design (every install)",
    ask: "I need a website.",
    skill: "project-run · design-stages · site-and-domain",
    title: "A website run as a project, in six sprints",
    summary:
      "Every install can do this. Your request becomes a project in six sprints, each with the right skills and a checkpoint for your yes, and a written record after each, so nothing is lost between sessions.",
    lines: [
      { k: "Ground and shape", v: "What your customers already say, the brief, what happens behind an order, and the path to buy or book." },
      { k: "Look and words", v: "Two or three looks in your brand to choose from; every heading in your voice, gaps marked for you." },
      { k: "Check, every time", v: "Critique, polish, harden, and adapt run before anything goes live, found and fixed before you see it." },
      { k: "Go live", v: "Your AI tells you each step to buy your address and publish; you do the clicking. Nothing goes live on the AI's word.", tone: "ok" },
    ],
    footer: "Builders and developers also get the full build kit: prototypes, browser checks, and a release checklist.",
  },
  {
    id: "operations",
    tab: "4 · Every day",
    label: "Say it once. It is on the ledger, in your standup, and chased.",
    dept: "Founder's Office",
    ask: "Kopi Lab wants the revised quote by Friday.",
    skill: "daily command",
    title: "One ledger of what you owe and what is owed to you",
    summary:
      "Say or type a promise, an order, or a worry from your phone or laptop. You get a numbered read-back to confirm, it goes on your ledger with no invented dates, and your morning standup brings only the calls that need you.",
    lines: [
      { k: "Capture", v: "From your phone or laptop, in your own words. Dictation counts." },
      { k: "Read-back", v: "What it heard, numbered, for you to confirm or correct in one line." },
      { k: "Standup", v: "Every morning by email and on your dashboard: Red first, then what to decide, then what is done." },
      { k: "Gates", v: "If it needs to go past a limit, it asks. You approve on your dashboard; the gate closes by itself.", tone: "ok" },
    ],
    footer: "Your business files stay on your computer. A year of updates is included.",
  },
];
