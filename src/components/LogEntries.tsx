"use client";

import { useMemo, useState } from "react";
import { TrackedLink } from "@/components/TrackedLink";
import type { LogEntry, LogType } from "@/data/log";

type TypeConfig = Record<LogType, { label: string; className: string }>;

type LogEntriesProps = {
  entries: LogEntry[];
  typeConfig: TypeConfig;
};

export function LogEntries({ entries, typeConfig }: LogEntriesProps) {
  const [activeFilter, setActiveFilter] = useState<LogType | "all">("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const visibleEntries = useMemo(() => {
    const filtered =
      activeFilter === "all"
        ? entries
        : entries.filter((entry) => entry.type === activeFilter);

    const sorted = [...filtered].sort((a, b) => {
      const left = new Date(a.sortDate).getTime();
      const right = new Date(b.sortDate).getTime();
      return sortOrder === "newest" ? right - left : left - right;
    });

    return sorted;
  }, [activeFilter, sortOrder, entries]);

  return (
    <>
      <div className="flex flex-col gap-3 mb-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`log-filter ${activeFilter === "all" ? "log-filter--active" : ""}`}
          >
            All
          </button>
          {Object.entries(typeConfig).map(([key, { label, className }]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveFilter(key as LogType)}
              className={`log-filter ${className} ${activeFilter === key ? "log-filter--active" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setSortOrder("newest")}
            className={`log-filter ${sortOrder === "newest" ? "log-filter--active" : ""}`}
          >
            Newest first
          </button>
          <button
            type="button"
            onClick={() => setSortOrder("oldest")}
            className={`log-filter ${sortOrder === "oldest" ? "log-filter--active" : ""}`}
          >
            Oldest first
          </button>
        </div>
      </div>

      <div>
        {visibleEntries.map((entry) => {
          const cfg = typeConfig[entry.type];
          const eventName = `log_${entry.type}_${entry.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}_click`;

          return (
            <article key={`${entry.date}-${entry.title}`} className="log-entry">
              <div className="flex items-center gap-3 mb-1">
                <span className={`log-type ${cfg.className}`}>{cfg.label}</span>
                <span className="log-date">{entry.date}</span>
                {entry.link ? (
                  <TrackedLink
                    href={entry.link}
                    target={entry.link.startsWith("http") ? "_blank" : undefined}
                    rel={entry.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="nav-link text-tiny"
                    style={{ marginLeft: "auto" }}
                    eventName={eventName}
                    eventProps={{ location: "log_entry", logType: entry.type }}
                  >
                    {entry.linkLabel ?? "Link"} &rarr;
                  </TrackedLink>
                ) : null}
              </div>
              <p className="log-entry-title font-medium mt-1">{entry.title}</p>
              {entry.body ? (
                <p className="log-entry-body mt-1" style={{ color: "var(--muted)" }}>
                  {entry.body}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </>
  );
}
