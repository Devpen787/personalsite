import type { Metadata } from "next";
import { entries, type LogType } from "@/data/log";

export const metadata: Metadata = {
  title: "Log | Devinson Peña",
  description: "What I'm writing, reading, building, and attending.",
};

const typeConfig: Record<LogType, { label: string; className: string }> = {
  wrote:   { label: "Wrote",   className: "log-type--wrote"   },
  read:    { label: "Read",    className: "log-type--read"    },
  event:   { label: "Event",   className: "log-type--event"   },
  shipped: { label: "Shipped", className: "log-type--shipped" },
  note:    { label: "Note",    className: "log-type--note"   },
};

const signals = [
  {
    title: "Vitalik on wallets and UX fragmentation",
    body: "I keep returning to the gap between protocol elegance and what a real user actually experiences in the first five minutes.",
    sources: [
      { label: "What I would love to see in a wallet", href: "https://vitalik.eth.limo/general/2024/12/03/wallets.html" },
      { label: "The Three Transitions", href: "https://vitalik.eth.limo/general/2023/06/09/three_transitions.html" },
    ],
  },
  {
    title: "Tokenized distribution under Swiss rules",
    body: "A recurring thread for me is where structure, regulation, and product design start shaping each other instead of staying in separate conversations.",
    sources: [
      { label: "Swiss DLT / tokenisation", href: "https://www.sif.admin.ch/en/dlt-blockchain-en" },
      { label: "CMTA FAQs", href: "https://cmta.ch/faqs" },
    ],
  },
  {
    title: "What survives after the room is gone",
    body: "Hackathons, conferences, and builder rooms keep feeding the same question back to me. What survives after the room is gone?",
    sources: [
      { label: "Zuitzerland", href: "https://www.zuitzerland.ch/" },
      { label: "ZuBerlin", href: "https://zuberlin.city/" },
      { label: "Breaking DePIN", href: "https://www.breakingdepin.ch/" },
    ],
  },
  {
    title: "Agent tooling inside real workflows",
    body: "I am interested in AI once it leaves the demo stage and starts making actual work lighter, clearer, or faster without adding more noise.",
    sources: [
      { label: "OpenAI practical guide to building agents", href: "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/" },
      { label: "Agent Skills", href: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills" },
    ],
  },
];

export default function Log() {
  return (
    <section className="section" style={{ paddingTop: "var(--section-pad-y-top)" }}>
      <div className="page-shell">
        <p className="label mb-2.5">Log</p>
        <h1 className="font-serif page-heading mb-4">
          Writing, reading, and doing
        </h1>
        <p className="measure text-body mb-8" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
          This is where I keep a running trace of what I am building, reading, and staying close to. A few signals tend to show up more than once.
        </p>

        <div className="measure-wide" style={{ marginBottom: "var(--block-gap)" }}>
          <p className="label mb-2.5">Signals</p>
          <div className="flex flex-col">
            {signals.map((signal) => (
              <div
                key={signal.title}
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid var(--faint)",
                }}
              >
                <p className="text-body" style={{ fontWeight: 500, marginBottom: 4 }}>
                  {signal.title}
                </p>
                <p className="text-small" style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                  {signal.body}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2" style={{ marginTop: 8 }}>
                  {signal.sources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-inline-link text-small"
                    >
                      {source.label} &rarr;
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-7">
          {Object.entries(typeConfig).map(([key, { label, className }]) => (
            <span key={key} className={`log-type ${className}`}>
              {label}
            </span>
          ))}
        </div>

        <div>
          {entries.map((entry, i) => {
            const cfg = typeConfig[entry.type];
            return (
              <article key={i} className="log-entry">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`log-type ${cfg.className}`}>
                    {cfg.label}
                  </span>
                  <span className="log-date">{entry.date}</span>
                  {entry.link && (
                    <a
                      href={entry.link}
                      target={entry.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="nav-link text-tiny"
                      style={{ marginLeft: "auto" }}
                    >
                      {entry.linkLabel ?? "Link"} &rarr;
                    </a>
                  )}
                </div>
                <p className="log-entry-title font-medium mt-1">{entry.title}</p>
                {entry.body && (
                  <p className="log-entry-body mt-1" style={{ color: "var(--muted)" }}>
                    {entry.body}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
