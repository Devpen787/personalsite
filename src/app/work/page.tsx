import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work | Devinson Peña",
  description: "Projects, research, and proof of work.",
};

export default function Work() {
  return (
    <section className="section" style={{ paddingTop: "5rem" }}>
      <div className="page-shell">
        <p className="label mb-4">Work</p>
        <h1
          className="font-serif mb-8"
          style={{ fontSize: "2rem", lineHeight: 1.25 }}
        >
          Things I&rsquo;ve built, written, and shipped
        </h1>

        {/* Projects */}
        <div className="space-y-8 mb-12">

          <article>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 relative shrink-0 rounded overflow-hidden border border-[var(--faint)]">
                <Image src="/images/chopdot-logo.png" alt="ChopDot" fill className="object-contain" />
              </div>
              <h2 className="font-serif text-lg font-semibold">ChopDot</h2>
              <span className="tag">Active</span>
            </div>
            <p className="text-body mb-2" style={{ color: "var(--muted)" }}>
              Group expenses on Polkadot. Coordination offchain, settlement onchain. DOT and USDC closeout via PVM smart contract on Polkadot Hub.
            </p>
            <div className="flex gap-4">
              <a href="/docs/chopdot-brief.pdf" target="_blank" rel="noopener noreferrer" className="nav-link text-small">Read brief &rarr;</a>
              <a href="https://github.com/Devpen787" target="_blank" rel="noopener noreferrer" className="nav-link text-small">GitHub &rarr;</a>
            </div>
          </article>

          <article>
            <h2 className="font-serif text-lg font-semibold mb-2">
              DePIN tokenomics paper
            </h2>
            <p className="text-body mb-2" style={{ color: "var(--muted)" }}>
              CAS Blockchain at HSLU. Used Onocoy as an anchor case to stress-test what happens when incentives stop carrying the story and real retention has to take over.
            </p>
            <a href="/docs/hslu-cas-paper.pdf" target="_blank" rel="noopener noreferrer" className="nav-link text-small">Read paper &rarr;</a>
          </article>

          <article>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-serif text-lg font-semibold">DePIN Stress Test</h2>
              <span className="tag">Dashboard</span>
            </div>
            <p className="text-body mb-2" style={{ color: "var(--muted)" }}>
              Visual simulation of DePIN token stress scenarios. Built to complement the tokenomics paper with live modeling of incentive collapse, retention decay, and protocol sustainability metrics.
            </p>
            <a href="https://depin-stress-test.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-link text-small">View dashboard &rarr;</a>
          </article>

        </div>

        {/* Events */}
        <div className="mb-12" id="events">
          <p className="label mb-3">Events &amp; hackathons</p>
          {[
            { name: "ETHCC Cannes", date: "Mar/Apr 2026", note: "Upcoming" },
            { name: "PBA-X (Polkadot Blockchain Academy)", date: "Early 2025", note: "Graduate" },
            { name: "Polkadot Hackathon, Berlin", date: "2025", note: "Builder" },
            { name: "Zuitzerland, Zurich", date: "2025" },
            { name: "ZuBerlin", date: "2025", note: "Builder" },
            { name: "Breaking DePIN, Zurich", date: "2025" },
            { name: "Web3x", date: "2024", note: "Graduate" },
          ].map((ev) => (
            <div
              key={ev.name}
              className="flex items-center justify-between py-2 text-small"
              style={{ borderBottom: "1px solid var(--faint)" }}
            >
              <span>{ev.name}</span>
              <span style={{ color: "var(--muted)" }}>
                {ev.note ? `${ev.note} · ` : ""}{ev.date}
              </span>
            </div>
          ))}
        </div>

        {/* Before Web3 */}
        <div>
          <p className="label mb-3">Before Web3</p>
          {[
            { company: "Digitl", role: "Adtech team lead" },
            { company: "Trakken", role: "Consulting & implementation" },
            { company: "Xaxis / Light Reaction", role: "Product programs, GroupM (world's largest media co.)" },
            { company: "Unimania", role: "Founder: design, marketing, content" },
            { company: "Momentive", role: "Management trainee, Germany" },
            { company: "Merrill Lynch", role: "Co-op, Finance, Boston" },
          ].map((job) => (
            <div
              key={job.company}
              className="flex items-baseline justify-between py-2 text-small gap-3"
              style={{ borderBottom: "1px solid var(--faint)" }}
            >
              <span className="font-medium shrink-0">{job.company}</span>
              <span style={{ color: "var(--muted)", textAlign: "right" }}>{job.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
