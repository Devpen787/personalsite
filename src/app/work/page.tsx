import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work | Devinson Peña",
  description: "Recent proof, longer-running themes, and the kinds of systems I like to work on.",
};

type WorkLink = { href: string; label: string };
type WorkMedia = { src: string; alt: string; width: number; height: number };
type WorkMark = { src: string; alt: string; width: number; height: number };
type WorkItem = {
  label: string;
  title: string;
  intro: string;
  body: string;
  links: WorkLink[];
  image?: WorkMedia;
  mark?: WorkMark;
};

type LegacyItem = {
  company: string;
  role: string;
  body: string;
};

type EcosystemItem = {
  name: string;
  body: string;
  href?: string;
};

const workItems: WorkItem[] = [
  {
    label: "Research",
    title: "CAS Blockchain at HSLU",
    intro:
      "My transfer paper looked at DePIN tokenomics under stress, using Onocoy as an anchor case to study what happens when incentive systems face slower growth, weaker retention, and real network pressure.",
    body:
      "What stayed with me just as much as the paper was the setting around it. HSLU has become one of the more credible Swiss bridges between blockchain technology, tokenization, crypto finance, and legal-commercial practice. The value of that room was not just academic. It was a cohort of people forcing each other to make the story hold up when the audience is informed, skeptical, and close enough to the work to challenge it properly.",
    image: {
      src: "/images/hslu-cas-photo.jpeg",
      alt: "CAS Blockchain at HSLU presentation room",
      width: 1200,
      height: 900,
    },
    links: [
      { href: "/docs/hslu-cas-paper.pdf", label: "Paper" },
      { href: "/docs/CAS-Transferarbeit_DePIN_11032026_Final.pdf", label: "Presentation" },
      {
        href: "https://www.hslu.ch/de-ch/informatik/weiterbildung/digital-business-innovation/cas-blockchain/",
        label: "Program",
      },
    ],
  },
  {
    label: "Product",
    title: "ChopDot",
    intro:
      "I created ChopDot because group expenses are one of those ordinary coordination problems that immediately expose whether a product is actually clear enough to use with other people. It is now a Polkadot-native group expense app where day-to-day coordination stays offchain and final group closeout is anchored onchain through a PVM smart contract.",
    body:
      "It keeps proving the same product lesson. The hard part is rarely settlement alone. It is whether a group understands what is happening, trusts the workflow, and can move without second-guessing each step. That is the kind of problem I am drawn to because it sits at the edge between capability and use.",
    image: {
      src: "/images/polkadot-hackathon.jpeg",
      alt: "Polkadot Hackathon team photo",
      width: 960,
      height: 1280,
    },
    mark: {
      src: "/images/chopdot-logo.png",
      alt: "ChopDot logo",
      width: 64,
      height: 64,
    },
    links: [
      { href: "/docs/chopdot-brief.pdf", label: "Brief" },
      { href: "https://www.chopdot.xyz/", label: "Website" },
      { href: "https://app.chopdot.xyz/pots", label: "App" },
    ],
  },
  {
    label: "AI and automation",
    title: "A practical thread",
    intro:
      "My interest in AI did not start with the current model cycle. My MSc thesis in 2017 was already focused on practical applications of AI, and a meaningful part of my work in adtech and at Digitl involved automation, workflow design, and building systems that let teams move with less manual friction.",
    body:
      "What is different now is that some of the tooling is finally usable enough to matter inside real work. I have started packaging a public proof repo around the parts I find most useful: reviewable agent operations, browser workflows with approval gates, and research loops that stay tied to evidence instead of drift.",
    links: [
      { href: "https://github.com/Devpen787/practical-agent-systems", label: "Public repo" },
      { href: "https://github.com/Devpen787/practical-agent-systems/tree/main/examples/agentops-lite", label: "AgentOps" },
      { href: "https://github.com/Devpen787/practical-agent-systems/tree/main/examples/browser-queue", label: "Browser queue" },
    ],
  },
];

const legacyItems: LegacyItem[] = [
  {
    company: "Xaxis / GroupM",
    role: "Product programs and enablement",
    body:
      "Global product pipeline work, roadmap structure, enablement systems, and executive translation inside a large distributed organization.",
  },
  {
    company: "Digitl",
    role: "Adtech team lead",
    body:
      "Sales, product, and operations alignment around onboarding, delivery, and growth in an environment tied to a meaningful commercial pipeline.",
  },
  {
    company: "Trakken",
    role: "Consulting and implementation",
    body:
      "Complex client environments where the real challenge was not just tooling, but making products easier to understand, adopt, and use with confidence.",
  },
];

const ecosystemItems: EcosystemItem[] = [
  {
    name: "HSLU CAS Blockchain",
    body: "One of the more serious Swiss bridges between blockchain technology, tokenization, and legal-commercial practice.",
    href: "https://www.hslu.ch/de-ch/informatik/weiterbildung/digital-business-innovation/cas-blockchain/",
  },
  {
    name: "Polkadot Blockchain Academy (PBA-X)",
    body: "A stronger Polkadot-native room for strategy, ecosystem thinking, and getting closer to how the network actually works.",
    href: "https://polkadot.academy/",
  },
  {
    name: "ZuBerlin",
    body: "Useful because it keeps the conversation close to builders, experiments, and the trade-offs underneath the story.",
    href: "https://zuberlin.city/",
  },
  {
    name: "Zuitzerland",
    body: "A Swiss builder and community surface that made the local ecosystem feel more real and less abstract.",
    href: "https://www.zuitzerland.ch/",
  },
  {
    name: "Breaking DePIN",
    body: "Relevant because it put token design, infrastructure reality, and network sustainability in the same room.",
    href: "https://www.breakingdepin.ch/",
  },
  {
    name: "ETHCC",
    body: "Still one of the clearest places to see where product, market structure, and ecosystem narratives are actually moving.",
    href: "https://ethcc.io/",
  },
];

export default function Work() {
  return (
    <section className="section" style={{ paddingTop: "var(--section-pad-y-top)" }}>
      <div className="page-shell">
        <div className="measure-wide" style={{ marginBottom: "var(--block-gap)" }}>
          <p className="label mb-2.5">Work</p>
          <h1 className="font-serif page-heading mb-5">Selected recent work, and the line behind it.</h1>
          <p className="text-body" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            This is not a full archive. It is a view into the work I am doing now, with enough context to show the kinds of systems I keep ending up around.
          </p>
        </div>

        <div className="flex flex-col" style={{ gap: "calc(var(--block-gap) - 0.25rem)", marginBottom: "var(--block-gap)" }}>
          {workItems.map((item) => (
            <article key={item.title} style={{ borderTop: "1px solid var(--faint)", paddingTop: 18 }}>
              {item.image ? (
                <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start">
                  <div style={{ maxWidth: "28rem" }}>
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      className="portrait"
                      style={{ aspectRatio: "16 / 10" }}
                    />
                  </div>

                  <div className="measure-tight" style={{ minWidth: 0 }}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="label mb-2">{item.label}</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          {item.mark ? (
                            <Image
                              src={item.mark.src}
                              alt={item.mark.alt}
                              width={item.mark.width}
                              height={item.mark.height}
                              style={{ width: 28, height: 28, borderRadius: 8 }}
                            />
                          ) : null}
                          <h2 className="work-subheading font-serif font-semibold">{item.title}</h2>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-x-3 gap-y-2">
                        {item.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("/") ? undefined : "_blank"}
                            rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                            className="work-inline-link text-small"
                          >
                            {link.label} &rarr;
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="text-body" style={{ color: "var(--muted)" }}>
                        {item.intro}
                      </p>
                      <p className="text-body" style={{ color: "var(--muted)" }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="measure-wide" style={{ minWidth: 0 }}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="label mb-2">{item.label}</p>
                      <div className="flex items-center gap-3 flex-wrap">
                        {item.mark ? (
                          <Image
                            src={item.mark.src}
                            alt={item.mark.alt}
                            width={item.mark.width}
                            height={item.mark.height}
                            style={{ width: 28, height: 28, borderRadius: 8 }}
                          />
                        ) : null}
                        <h2 className="work-subheading font-serif font-semibold">{item.title}</h2>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                      {item.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("/") ? undefined : "_blank"}
                          rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                          className="work-inline-link text-small"
                        >
                          {link.label} &rarr;
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="measure" style={{ maxWidth: "42rem" }}>
                    <p className="text-body mb-4" style={{ color: "var(--muted)" }}>
                      {item.intro}
                    </p>
                    <p className="text-body" style={{ color: "var(--muted)" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="measure-wide" style={{ borderTop: "1px solid var(--faint)", paddingTop: 18, marginBottom: "var(--block-gap)" }}>
          <p className="label mb-2.5">The line behind it</p>
          <p className="text-body mb-4" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            Before the current Web3 and AI work, I spent more than fifteen years around product programs, commercial environments, onboarding, client delivery, and implementation work where strong systems still needed better structure, translation, and confidence around the way they were used.
          </p>
          <div className="flex flex-col">
            {legacyItems.map((item) => (
              <div
                key={item.company}
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid var(--faint)",
                }}
              >
                <p className="text-body" style={{ fontWeight: 500, marginBottom: 2 }}>
                  {item.company}
                </p>
                <p className="text-small" style={{ color: "var(--muted)", marginBottom: 6 }}>
                  {item.role}
                </p>
                <p className="text-small" style={{ color: "var(--muted)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="measure-wide" style={{ borderTop: "1px solid var(--faint)", paddingTop: 18 }}>
          <p className="label mb-2.5">Programs and ecosystems</p>
          <p className="text-body mb-4" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            These matter less as attendance and more as context. They are the rooms where product arguments and real trade-offs stop staying abstract.
          </p>
          <div className="flex flex-col">
            {ecosystemItems.map((item) => (
              <div
                key={item.name}
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid var(--faint)",
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <p className="text-body" style={{ fontWeight: 500 }}>
                    {item.name}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-inline-link text-small"
                    >
                      Visit &rarr;
                    </a>
                  ) : null}
                </div>
                <p className="text-small" style={{ color: "var(--muted)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
