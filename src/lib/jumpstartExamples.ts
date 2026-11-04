// Three invented founders from the Jumpstart test audience (founder-course/jumpstart/uat/profiles.json).
// Departments, levels, and installed counts come from the calibration run on each profile.
// The requests, jobs, contracts, and customers are made up. The skills named are the ones each workspace installs.

export type ExampleId = "contractor" | "agency" | "coach";

export interface Finding {
  label: string;
  quote: string;
  note: string;
}

/** One request made at the desk, in the founder's AI tool, and what the department's skill brings back. */
export interface DeskScene {
  ask: string;
  skill: string;
  reads: string[];
  findings: Finding[];
  /** A closing line the skill always adds, when it has one. */
  footer?: string;
  input: { ask: string; options: [string, string]; filed: string };
  decide: { ask: string; yesLabel: string; yes: string; hold: string };
}

export interface Example {
  id: ExampleId;
  tab: string;
  person: string;
  role: string;
  blurb: string;
  installed: number;
  departments: { name: string; level: string }[];
  /** Dashboard pages this workspace shows, in the dashboard's own order. */
  pages: string[];
  desk: DeskScene;
  /** A short note typed into the dashboard's capture box. */
  capture: string;
}

export const EXAMPLES: Example[] = [
  {
    id: "contractor",
    tab: "Contractor",
    person: "Roslan",
    role: "Roslan, renovation contractor",
    blurb: "Roslan renovates HDB flats and works with subcontractors.",
    installed: 12,
    departments: [
      { name: "Project management", level: "Level 2" },
      { name: "Contracts and legal", level: "Level 2" },
      { name: "Finance", level: "Level 1" },
      { name: "Suppliers", level: "On" },
      { name: "Sales pipeline", level: "On" },
      { name: "Compliance", level: "On" },
    ],
    pages: ["Today", "Ledger", "Organisation", "Activity", "Pipeline", "Projects", "Guide"],
    desk: {
      ask: "Mrs Tan wants a second sink in the Tampines kitchen. Is that in her scope?",
      skill: "scope-change",
      reads: ["Tampines kitchen scope", "Commitments ledger", "Price list"],
      findings: [
        { label: "Her request", quote: "can add one more sink near the window?", note: "quoted from her message" },
        { label: "Scope", quote: "one undermount sink, cabinets, wall tiling", note: "a second sink is a change" },
        { label: "Handover", quote: "Friday", note: "moves only if you say so" },
        { label: "Price", quote: "unset", note: "you said maybe eight hundred, so it will not quote a guess" },
      ],
      input: {
        ask: "The price for the second sink is unset. What now?",
        options: ["Price it first", "Quote $800"],
        filed: "Nothing is sent to Mrs Tan.",
      },
      decide: {
        ask: "Two replies are drafted: accept the change on your terms, or keep the original scope. Mark one ready for you to send? If you do nothing, it holds.",
        yesLabel: "Accept on my terms",
        yes: "Logged. The reply waits in your drafts, with the price left for you. You send it. It never does.",
        hold: "Logged. The scope, the dates, and the ledger stay as they are.",
      },
    },
    capture: "Bishan basin leak: plumber says friday",
  },
  {
    id: "agency",
    tab: "Agency",
    person: "Hakim",
    role: "Hakim, creative agency",
    blurb: "Hakim runs a small brand and video agency with three freelancers.",
    installed: 15,
    departments: [
      { name: "Finance", level: "Level 2" },
      { name: "Project management", level: "Level 2" },
      { name: "Infrastructure and security", level: "Level 2" },
      { name: "Contracts and legal", level: "Level 1" },
      { name: "Data and privacy", level: "Level 1" },
      { name: "Sales pipeline", level: "On" },
    ],
    pages: ["Today", "Ledger", "Organisation", "Activity", "Pipeline", "Projects", "Guide"],
    desk: {
      ask: "The bakery wants the raw footage from the shoot. Does our contract cover it?",
      skill: "read-contract",
      reads: ["Bakery agreement (the PDF you added)", "Project scope", "Commitments ledger"],
      findings: [
        { label: "Clause 3, Deliverables", quote: "one 60-second brand film and three 15-second cutdowns", note: "raw footage is not listed" },
        { label: "Clause 7, Ownership", quote: "final deliverables belong to the Client on full payment", note: "silent on unused footage" },
        { label: "Missing", quote: "no clause on raw files", note: "worth settling before you reply" },
      ],
      footer: "This is a reading of the document, not legal advice.",
      input: {
        ask: "Clause 7 turns on full payment, and the ledger shows the final invoice still open. Is that right?",
        options: ["Still open", "Paid, I will update it"],
        filed: "The ledger changes only on your word.",
      },
      decide: {
        ask: "Draft a reply offering the raw footage as a paid extra, with both clauses quoted? If you do nothing, it holds.",
        yesLabel: "Yes, draft it",
        yes: "Logged. The draft is ready. You send it. It never does.",
        hold: "Logged. Nothing drafted. The question stays flagged.",
      },
    },
    capture: "Bakery video: editor says friday, not thursday",
  },
  {
    id: "coach",
    tab: "Coach",
    person: "Daniel",
    role: "Daniel, online fitness coach",
    blurb: "Daniel sells 8-week programmes and monthly coaching, and is building an app.",
    installed: 16,
    departments: [
      { name: "Data and privacy", level: "Level 2" },
      { name: "Go-to-market", level: "Level 2" },
      { name: "Project management", level: "Level 2" },
      { name: "Infrastructure and security", level: "Level 2" },
      { name: "Finance", level: "Level 1" },
      { name: "Content and social", level: "Level 1" },
    ],
    pages: ["Today", "Ledger", "Organisation", "Activity", "Projects", "Numbers", "Guide"],
    desk: {
      ask: "Who owes me money?",
      skill: "chase-payments",
      reads: ["Commitments ledger, owed to me", "Payment history", "Voice guide"],
      findings: [
        { label: "Priya, 8-week programme", quote: "paid half", note: "the balance is 5 days late" },
        { label: "Priya's record", quote: "on time, 3 of 3", note: "so a light nudge, not a firm one" },
        { label: "Monthly coaching", quote: "all received", note: "nobody else to chase" },
      ],
      input: {
        ask: "Rina asked to pause coaching for “two weeks”. Which two? It will not guess.",
        options: ["From Monday", "From next Monday"],
        filed: "Her sessions are marked paused, nothing else.",
      },
      decide: {
        ask: "One reminder to Priya is drafted in your voice. Mark it ready for you to send? If you do nothing, it holds.",
        yesLabel: "Ready, I will send",
        yes: "Logged, with where it came from. You send it. It never does.",
        hold: "Logged. It will ask again before the programme ends.",
      },
    },
    capture: "Android sign-up bug: sam says he can fix thursday",
  },
];

type StandupKind = "decide" | "input" | "notify";

export interface StandupItem {
  kind: StandupKind;
  dept: string;
  text: string;
  /** Shown but never blocking: the work carries on either way. */
  red?: string;
  actions?: [string, string];
  logged?: string;
}

/** What the morning list looks like for each example. Invented, in the same business as the notes above. */
export const STANDUPS: Record<ExampleId, StandupItem[]> = {
  contractor: [
    {
      kind: "decide",
      dept: "Finance",
      red: "14 days late",
      text: "The Bishan owner’s progress payment of twelve thousand is 14 days late. Draft a reminder?",
      actions: ["Draft the reminder", "Hold"],
      logged: "Logged. The draft waits for you to send it.",
    },
    {
      kind: "decide",
      dept: "Project management",
      text: "The tiler moved to Thursday. Keep Mrs Tan’s handover on Friday?",
      actions: ["Keep Friday", "Move it"],
      logged: "Logged. The schedule is updated.",
    },
    {
      kind: "input",
      dept: "Finance",
      text: "The Bishan plumber’s invoice is not in the ledger. Upload it when you have it.",
      actions: ["I will upload it", "Not today"],
      logged: "Noted. It will ask again tomorrow.",
    },
    {
      kind: "input",
      dept: "Compliance",
      text: "What date was the Tampines permit approved? The date is blank.",
      actions: ["Add the date", "Not today"],
      logged: "Noted. The field stays blank until you add it.",
    },
    { kind: "notify", dept: "Suppliers", text: "Tile order confirmed for Monday. Nothing to do." },
    { kind: "notify", dept: "Project management", text: "The basin leak is logged with today’s date." },
    { kind: "notify", dept: "Sales pipeline", text: "Two new enquiries are logged. Drafts wait for you." },
  ],
  agency: [
    {
      kind: "decide",
      dept: "Finance",
      red: "Due tomorrow",
      text: "Jia Hui’s $1,100 shoot invoice is due tomorrow. Mark it ready for you to pay?",
      actions: ["Mark ready", "Hold"],
      logged: "Logged. It is marked ready. You pay it. It never does.",
    },
    {
      kind: "decide",
      dept: "Contracts and legal",
      text: "Yesterday’s reply to the bakery about the raw footage is ready, with clauses 3 and 7 quoted. Send it?",
      actions: ["I will send it", "Hold"],
      logged: "Logged. The draft waits for you to send it.",
    },
    {
      kind: "input",
      dept: "Sales pipeline",
      text: "The fitness studio lead says “maybe four k a month”. What is in scope?",
      actions: ["Add the scope", "Not today"],
      logged: "Noted. No proposal leaves without you.",
    },
    {
      kind: "input",
      dept: "Data and privacy",
      text: "Which freelancers still have access to client folders?",
      actions: ["List them", "Not today"],
      logged: "Noted. Access stays as it is.",
    },
    { kind: "notify", dept: "Project management", text: "Bakery delivery moved to Friday. Schedule updated." },
    { kind: "notify", dept: "Infrastructure and security", text: "Last night’s client file backup finished." },
    { kind: "notify", dept: "Finance", text: "Two retainer invoices went out on schedule." },
  ],
  coach: [
    {
      kind: "decide",
      dept: "Finance",
      red: "6 days late",
      text: "Priya’s balance for the 8-week programme is 6 days late. The reminder from yesterday is ready. Send it now?",
      actions: ["I will send it", "Hold"],
      logged: "Logged. You send it. It never does.",
    },
    {
      kind: "decide",
      dept: "Go-to-market",
      text: "Three people asked about Saturday group classes. Draft a waitlist page?",
      actions: ["Draft the page", "Not yet"],
      logged: "Logged. Nothing goes live without you.",
    },
    {
      kind: "input",
      dept: "Go-to-market",
      text: "Last month’s sign-up export ends on the 24th. Add the rest when you have it.",
      actions: ["I will add it", "Not today"],
      logged: "Noted. The count says what it could not include.",
    },
    {
      kind: "input",
      dept: "Data and privacy",
      text: "Does Sam still need access to the sign-up form data?",
      actions: ["Yes, keep it", "Remove it"],
      logged: "Logged, with your answer.",
    },
    { kind: "notify", dept: "Infrastructure and security", text: "The Android sign-up bug is logged. Sam’s date is Thursday." },
    { kind: "notify", dept: "Content and social", text: "Three post drafts are ready. Nothing posts without you." },
    { kind: "notify", dept: "Finance", text: "Monthly coaching payments: all received." },
  ],
};
