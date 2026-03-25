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
  note:    { label: "Note",    className: ""                  },
};

export default function Log() {
  return (
    <section className="section" style={{ paddingTop: "5rem" }}>
      <div className="page-shell">
        <p className="label mb-4">Log</p>
        <h1
          className="font-serif mb-6"
          style={{ fontSize: "2rem", lineHeight: 1.25 }}
        >
          Writing, reading, and doing
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
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
                <p className="font-medium text-sm mt-1">{entry.title}</p>
                {entry.body && (
                  <p
                    className="text-small mt-1"
                    style={{ color: "var(--muted)" }}
                  >
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
