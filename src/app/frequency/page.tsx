import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "~",
  description: "You found something.",
  robots: { index: false, follow: false },
};

export default function Frequency() {
  return (
    <section className="section" style={{ paddingTop: "5rem" }}>
      <div className="page-shell">

        <p
          className="label mb-4"
          style={{ color: "var(--accent)", letterSpacing: "0.1em" }}
        >
          You found it
        </p>

        <h1
          className="font-serif mb-8"
          style={{ fontSize: "1.75rem", lineHeight: 1.3 }}
        >
          This page isn&rsquo;t on the nav.
        </h1>

        <div className="space-y-6" style={{ color: "var(--muted)" }}>
          <p className="text-body">
            You probably clicked the period. Good instinct.
          </p>
        </div>

        <hr className="divider" />

        <p className="label mb-4">Things I think about that don&rsquo;t fit in the portfolio</p>
        <div style={{ marginBottom: 48 }}>
          {[
            "Most products fail at the handshake, not the technology. The moment someone has to decide whether to trust a workflow is the moment most teams haven't designed for.",
            "Crypto's biggest unsolved problem isn't regulation or UX. It's that builders keep building for other builders. The audience that actually matters has already left the room.",
            "AI agents are going to be incredibly useful and incredibly annoying at the same time. The ones that win will be the ones that know when to stay quiet.",
            "I think the best work happens when you're slightly uncomfortable. Too comfortable means you stopped learning. Too uncomfortable means you're performing instead of building.",
            "Bitcoin and Ethereum aren't products. They're bets on a different structure for how value and trust move. I think that bet is right. Most of the products built on top of it aren't serious yet.",
          ].map((thought, i) => (
            <p
              key={i}
              className="text-body"
              style={{
                color: "var(--muted)",
                padding: "14px 0",
                borderBottom: "1px solid var(--faint)",
                lineHeight: 1.75,
              }}
            >
              {thought}
            </p>
          ))}
        </div>

        <p className="label mb-4">A few other things</p>
        <div style={{ marginBottom: 48 }}>
          {[
            "Dominican. Born in Harlem. Three languages. More countries than I planned.",
            "I dance. Bachata, salsa, hip hop. More than most people in this industry expect.",
            "I did an Ironman 70.3. Not because I'm a runner. Because I wanted to know what happens to your brain when your body wants to quit and you keep going anyway.",
            "I laser engrave things. No real reason. I just like making objects.",
            "The Expanse changed how I think about governance and coordination at scale.",
          ].map((item, i) => (
            <p
              key={i}
              className="text-small"
              style={{
                color: "var(--muted)",
                padding: "10px 0",
                borderBottom: "1px solid var(--faint)",
                lineHeight: 1.65,
              }}
            >
              {item}
            </p>
          ))}
        </div>

        <p className="text-small" style={{ color: "var(--muted)", fontStyle: "italic" }}>
          If you made it here, we should probably talk.{" "}
          <a
            href="https://cal.com/devinsonpena"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)" }}
          >
            Book a call
          </a>{" "}
          or{" "}
          <a
            href="mailto:devinsonpena@gmail.com"
            style={{ color: "var(--accent)" }}
          >
            just email me
          </a>.
        </p>

      </div>
    </section>
  );
}
