import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Devinson Peña",
  description: "Projects, research, and proof of work.",
};

export default function Work() {
  return (
    <section className="section" style={{ paddingTop: "5rem" }}>
      <div className="page-shell">
        <p className="label mb-2.5">Work</p>
        <h1
          className="font-serif mb-8"
          style={{ fontSize: "1.75rem", lineHeight: 1.25 }}
        >
          Things I&rsquo;ve built, written, and shipped
        </h1>

        <div className="space-y-9 mb-12">
          <article>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="font-serif font-semibold" style={{ fontSize: "1.15rem" }}>
                ChopDot
              </h2>
              <span className="tag">Active</span>
            </div>
            <p className="mb-1.5" style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
              Group expenses on Polkadot. Coordination offchain, settlement onchain. DOT and USDC closeout
              via PVM smart contract.               Won the user-centric category at Polkadot Hackathon, Berlin; I keep
              extending it in public when I&rsquo;m not on client work.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <a
                href="https://www.chopdot.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="work-inline-link text-small"
              >
                Website &rarr;
              </a>
              <a
                href="https://app.chopdot.xyz/pots"
                target="_blank"
                rel="noopener noreferrer"
                className="work-inline-link text-small"
              >
                App &rarr;
              </a>
              <a
                href="/docs/chopdot-brief.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="work-inline-link text-small"
              >
                Read brief &rarr;
              </a>
              <a
                href="https://github.com/Devpen787"
                target="_blank"
                rel="noopener noreferrer"
                className="work-inline-link text-small"
              >
                GitHub &rarr;
              </a>
            </div>
          </article>

          <article>
            <h2 className="font-serif font-semibold mb-1.5" style={{ fontSize: "1.15rem" }}>
              DePIN tokenomics paper
            </h2>
            <p className="mb-1.5" style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
              CAS Blockchain at HSLU. Used Onocoy as an anchor case to stress-test what happens when
              incentives stop carrying the story.
            </p>
            <a
              href="/docs/hslu-cas-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="work-inline-link text-small"
            >
              Read paper &rarr;
            </a>
          </article>

          <article>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="font-serif font-semibold" style={{ fontSize: "1.15rem" }}>
                DePIN Stress Test
              </h2>
              <span className="tag">Dashboard</span>
            </div>
            <p className="mb-1.5" style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
              Visual stress metrics for DePIN token models. Built to complement the tokenomics paper with
              live simulation data.
            </p>
            <a
              href="https://depin-stress-test.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-inline-link text-small"
            >
              View dashboard &rarr;
            </a>
          </article>

          <article>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="font-serif font-semibold" style={{ fontSize: "1.15rem" }}>
                zkWerewolf
              </h2>
              <span className="tag">Hackathon</span>
            </div>
            <p className="mb-1.5" style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
              Submission for ZK Hack Berlin (June 2025): a Werewolf-style lobby game used to walk players
              through commitments and proof-shaped reasoning without drowning them in jargon.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <a
                href="https://zk-werewolf.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="work-inline-link text-small"
              >
                Live app &rarr;
              </a>
              <a
                href="https://zkhack.dev/zkhack-berlin-hackathon/"
                target="_blank"
                rel="noopener noreferrer"
                className="work-inline-link text-small"
              >
                Hackathon &rarr;
              </a>
              <a
                href="https://github.com/Devpen787/zkWerewolf"
                target="_blank"
                rel="noopener noreferrer"
                className="work-inline-link text-small"
              >
                Repository &rarr;
              </a>
            </div>
          </article>
        </div>

        <div className="mb-9" style={{ borderTop: "1px solid var(--faint)", paddingTop: 28 }}>
          <p className="label mb-2.5">Events &amp; hackathons</p>
          {[
            { name: "ETHCC Cannes", date: "Mar/Apr 2026", note: "Upcoming" },
            { name: "PBA-X (Polkadot Blockchain Academy)", date: "Early 2025", note: "Graduate" },
            { name: "Polkadot Hackathon, Berlin", date: "2025", note: "Builder" },
            { name: "ZK Hack Berlin", date: "Jun 2025", note: "Builder" },
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
              <span style={{ color: "var(--muted)", fontSize: 13 }}>
                {ev.note ? `${ev.note} · ` : ""}
                {ev.date}
              </span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--faint)", paddingTop: 28 }}>
          <p className="label mb-2.5">Before Web3</p>
          {[
            { company: "Digitl", role: "Adtech team lead" },
            { company: "Trakken", role: "Consulting & implementation" },
            { company: "Xaxis / Light Reaction", role: "Product programs, GroupM" },
            { company: "Unimania", role: "Founder: design, marketing, content" },
            { company: "Momentive", role: "Management trainee, Germany" },
            { company: "Merrill Lynch", role: "Co-op, Finance, Boston" },
          ].map((job) => (
            <div
              key={job.company}
              className="flex items-baseline justify-between gap-3 py-2"
              style={{ borderBottom: "1px solid var(--faint)", fontSize: 14 }}
            >
              <span style={{ fontWeight: 500, flexShrink: 0 }}>{job.company}</span>
              <span style={{ color: "var(--muted)", textAlign: "right", fontSize: 13 }}>{job.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
