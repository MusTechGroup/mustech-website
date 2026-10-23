// Three invented founders from the Jumpstart test audience (founder-course/jumpstart/uat/profiles.json).
// Departments, levels, and installed counts come from the calibration run on each profile.
// The notes, jobs, and customers are made up.

export type ExampleId = "contractor" | "agency" | "coach";

export interface Example {
  id: ExampleId;
  tab: string;
  person: string;
  role: string;
  blurb: string;
  installed: number;
  departments: { name: string; level: string }[];
  note: string;
  readback: { who: string; what: string; quote: string; rest: string }[];
  input: { ask: string; options: [string, string]; filed: string };
  decide: { ask: string; yes: string; hold: string };
  notify: string;
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
    note:
      "ok. tampines kitchen, tiler says thursday not wednesday. mrs tan wants a second sink, maybe eight hundred. bishan leak under the basin still not fixed, plumber says friday. bishan owner owes the progress payment, twelve thousand.",
    readback: [
      { who: "Tampines kitchen", what: "tiler", quote: "thursday, not wednesday", rest: "schedule moved" },
      { who: "Mrs Tan", what: "second sink", quote: "maybe eight hundred", rest: "price unconfirmed" },
      { who: "Bishan", what: "basin leak", quote: "friday", rest: "plumber's date, defect logged today" },
      { who: "Bishan owner", what: "progress payment", quote: "twelve thousand", rest: "not yet received" },
    ],
    input: {
      ask: "Mrs Tan’s sink is “maybe eight hundred”. It will not quote a guess. What now?",
      options: ["Price it first", "Quote $800"],
      filed: "Nothing is sent to Mrs Tan.",
    },
    decide: {
      ask: "Draft a payment reminder to the Bishan owner for the twelve thousand? If you do nothing, it holds.",
      yes: "Logged, with where it came from. The draft is ready. You send it. It never does.",
      hold: "Logged. Nothing drafted. It will ask again next week.",
    },
    notify: "The Tampines schedule is updated. The basin leak is logged with today’s date. Nothing for you to do.",
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
    note:
      "ok. bakery brand video, editor says friday not thursday. new retainer lead from the fitness studio, maybe four k a month. jia hui sent the shoot invoice, eleven hundred, not paid yet. bakery asked for the raw footage, not sure if the contract covers it.",
    readback: [
      { who: "Bakery video", what: "editor", quote: "friday, not thursday", rest: "delivery moved" },
      { who: "Fitness studio", what: "retainer lead", quote: "maybe four k a month", rest: "not a proposal yet" },
      { who: "Jia Hui", what: "shoot invoice", quote: "eleven hundred", rest: "unpaid" },
      { who: "Raw footage", what: "bakery request", quote: "not sure if the contract covers it", rest: "contract unchecked" },
    ],
    input: {
      ask: "The studio lead is “maybe four k a month”. It will not put a guess in a proposal. What now?",
      options: ["Scope it first", "Draft at four k"],
      filed: "No proposal leaves without you.",
    },
    decide: {
      ask: "Draft a reply to the bakery about the raw footage, after the contract clause is pulled up? If you do nothing, it holds.",
      yes: "Logged. The clause is pulled up for you and the draft is ready. You send it. It never does.",
      hold: "Logged. Nothing drafted. The clause stays flagged as unchecked.",
    },
    notify: "Friday delivery is in the schedule. Jia Hui’s invoice is in the ledger as unpaid. Nothing for you to do.",
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
    note:
      "ok. priya's 8 week programme starts monday, she paid half. rina wants to pause coaching for two weeks, travelling. sign up form still broken on android, sam says he can fix thursday. three people asked about a group class, thinking saturday mornings.",
    readback: [
      { who: "Priya", what: "8-week programme", quote: "starts monday, paid half", rest: "balance open" },
      { who: "Rina", what: "pause coaching", quote: "two weeks", rest: "dates unset" },
      { who: "Sign-up form", what: "android bug", quote: "thursday", rest: "Sam's date, logged today" },
      { who: "Group class", what: "three enquiries", quote: "saturday mornings", rest: "not confirmed" },
    ],
    input: {
      ask: "Rina said “two weeks”. Which two? It will not guess.",
      options: ["From Monday", "From next Monday"],
      filed: "Her sessions are marked paused, nothing else.",
    },
    decide: {
      ask: "Draft a reminder to Priya for the other half of the programme? If you do nothing, it holds.",
      yes: "Logged, with where it came from. The draft is ready. You send it. It never does.",
      hold: "Logged. Nothing drafted. It will ask again before the programme ends.",
    },
    notify: "The Android bug is logged with Thursday as Sam’s date. The group class stays an idea until you decide. Nothing for you to do.",
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
      text: "The Bishan owner’s progress payment of twelve thousand is 14 days late. Send the reminder drafted yesterday?",
      actions: ["Draft is ready, I will send", "Hold"],
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
      text: "The bakery wants the raw footage and the contract is silent. Draft a reply offering it as a paid extra?",
      actions: ["Draft the reply", "Hold"],
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
      text: "Priya’s balance for the 8-week programme is 6 days late. Draft a reminder?",
      actions: ["Draft the reminder", "Hold"],
      logged: "Logged. The draft waits for you to send it.",
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
      dept: "Project management",
      text: "Which two weeks is Rina pausing coaching?",
      actions: ["Pick the dates", "Not today"],
      logged: "Noted. Her sessions stay as they are until you pick.",
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
