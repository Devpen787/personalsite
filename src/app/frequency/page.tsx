import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "~",
  description: "You found something.",
  robots: { index: false, follow: false },
};

export default function Frequency() {
  return (
    <section className="section" style={{ paddingTop: "var(--section-pad-y-top)" }}>
      <div className="page-shell">
        <div style={{ marginBottom: "var(--block-gap)" }}>
          <p
            className="label mb-3"
            style={{
              color: "var(--accent)",
              letterSpacing: "0.1em",
            }}
          >
            You found it
          </p>
          <h1 className="font-serif page-heading mb-5" style={{ lineHeight: 1.3 }}>
            This is the page that doesn&rsquo;t exist on the nav.
          </h1>
          <p className="text-body" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            You probably clicked the period. Good. That&rsquo;s the kind of curiosity I like.
          </p>
        </div>

        <div style={{ marginBottom: 40 }}>
          <p className="label mb-3">Things I think about but don&rsquo;t put in the portfolio</p>
          <div className="flex flex-col gap-4 mt-3">
            {[
              "Most products fail at the handshake, not the technology. The moment someone has to decide whether to trust a workflow is the moment most teams haven't designed for.",
              "Crypto's biggest problem isn't regulation or UX. It's that builders keep building for other builders. The audience that matters most has already left the room.",
              "AI agents are going to be incredibly useful and incredibly annoying at the same time. The ones that win will be the ones that know when to shut up.",
              "I think the best work happens when you're slightly uncomfortable. Too comfortable means you stopped learning. Too uncomfortable means you're performing instead of building.",
              "I did an Ironman 70.3. Not because I'm a runner. Because I wanted to know what happens to your brain when your body wants to quit and you keep going anyway.",
            ].map((thought, i) => (
              <p
                key={i}
                className="text-small"
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  padding: "12px 0",
                  borderBottom: "1px solid var(--faint)",
                }}
              >
                {thought}
              </p>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 40 }}>
          <p className="label mb-2">Random</p>
          <div className="flex flex-col gap-1 mt-2">
            {[
              "Dominican. Born in Harlem. Grew up in Jersey. Lived in Madrid, Germany, now Zurich.",
              "Three languages: English, Spanish, German.",
              "Bachata, salsa, hip hop. I dance more than most people in tech expect.",
              "Sci-fi reader. The Expanse changed how I think about governance.",
              "I laser engrave things. No real reason. I just like making objects.",
            ].map((item, i) => (
              <p
                key={i}
                className="text-small"
                style={{
                  color: "var(--muted)",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--faint)",
                  lineHeight: 1.6,
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <p className="text-small" style={{ color: "var(--muted)", fontStyle: "italic" }}>
          If you&rsquo;re here, we should probably talk.{" "}
          <a
            href="https://cal.eu/devinson/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            Book a call
          </a>{" "}
          or just{" "}
          <a
            href="mailto:devinsonpena@gmail.com"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            email me
          </a>
          .
        </p>
      </div>
    </section>
  );
}
