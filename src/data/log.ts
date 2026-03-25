// ─────────────────────────────────────────────────────────────
// Log entries — add new ones to the TOP of this array.
//
// To add an entry:
//   { date: "Apr 2026", type: "event", title: "ETHCC Cannes" },
//
// Types: "wrote" | "read" | "event" | "shipped" | "note"
// ─────────────────────────────────────────────────────────────

export type LogType = "wrote" | "read" | "event" | "shipped" | "note";

export interface LogEntry {
  date: string;
  type: LogType;
  title: string;
  body?: string;
  link?: string;
  linkLabel?: string;
}

export const entries: LogEntry[] = [
  {
    date: "Mar 2026",
    type: "event",
    title: "ETHCC Cannes, March 31 to April 5",
  },
  {
    date: "Mar 2026",
    type: "shipped",
    title: "ChopDot v2: USDC closeout + hybrid wallet model on Polkadot Hub",
    link: "/docs/chopdot-brief.pdf",
    linkLabel: "Brief",
  },
  {
    date: "Mar 2026",
    type: "shipped",
    title: "DePIN Stress Test dashboard",
    body: "Visual stress metrics for DePIN token models. Built to complement the tokenomics paper.",
    link: "https://depin-stress-test.vercel.app/",
    linkLabel: "Dashboard",
  },
  {
    date: "Mar 2026",
    type: "note",
    title: "Rebuilt this site from scratch",
    body: "The old version read like a strategy deck. This one is supposed to sound like me.",
  },
  {
    date: "Feb 2026",
    type: "wrote",
    title: "DePIN tokenomics: incentives vs. real retention",
    body: "CAS Blockchain paper at HSLU. Used Onocoy as the case study.",
    link: "/docs/hslu-cas-paper.pdf",
    linkLabel: "Paper",
  },
  {
    date: "Feb 2026",
    type: "read",
    title: "Vitalik on L2 scaling and UX fragmentation",
    body: "Most people still can't bridge without anxiety.",
  },
  {
    date: "Jan 2026",
    type: "read",
    title: "Tokenized fund distribution: what Swiss regs actually allow",
  },
  {
    date: "Jan 2026",
    type: "note",
    title: "Trust layers for temporary communities",
    body: "Hackathons, conferences, pop-up coliving. What if the trust artifacts persisted?",
  },
  {
    date: "Dec 2025",
    type: "event",
    title: "Polkadot Hackathon, Berlin",
    body: "Built the first version of ChopDot.",
  },
  {
    date: "Nov 2025",
    type: "event",
    title: "Zuitzerland, Zurich",
  },
  {
    date: "Oct 2025",
    type: "read",
    title: "Why most onchain products fail at onboarding",
    body: "The product isn't the protocol. It's the first 5 minutes.",
  },
  {
    date: "Sep 2025",
    type: "event",
    title: "Breaking DePIN, Zurich",
  },
  {
    date: "Early 2025",
    type: "event",
    title: "PBA-X: Polkadot Blockchain Academy",
  },
  {
    date: "2024",
    type: "event",
    title: "Web3x program",
    body: "Before: circling. After: building.",
  },
];
