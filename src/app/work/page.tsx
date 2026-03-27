import type { Metadata } from "next";
import Image from "next/image";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Work | Devinson Peña",
  description: "Recent proof, longer-running themes, and the kinds of systems I like to work on.",
};

type WorkLink = { href: string; label: string };
type WorkMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio?: string;
  objectPosition?: string;
  maxWidth?: string;
};
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
      "My transfer paper looked at DePIN tokenomics under stress, using Onocoy as the anchor case to test what happens when incentive systems face slower growth, weaker retention, and real network pressure.",
    body:
      "What stayed with me just as much as the paper was the room around it. HSLU has become one of the more credible Swiss bridges between blockchain technology, tokenization, crypto finance, and legal-commercial practice. The value was having to make the story hold up in front of people close enough to the work to challenge it properly.",
    image: {
      src: "/images/hslu-cas-photo.jpeg",
      alt: "CAS Blockchain at HSLU presentation room",
      width: 1200,
      height: 900,
      maxWidth: "22rem",
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
      "I created ChopDot for the Build Resilient Apps with Polkadot Cloud hackathon because group expenses are one of those ordinary coordination problems that expose very quickly whether a product is actually clear enough to use with other people. The first version won second prize across all themes. It is now a Polkadot-native group expense app where day-to-day coordination stays offchain and group closeout is anchored on Polkadot Hub through an EVM smart contract.",
    body:
      "The Feb–Mar build made that bet more concrete. ChopDot now computes settlement legs offchain, anchors a closeout snapshot on Polkadot Hub, and records settlement proof per leg for DOT and USDC pots. The prize money mattered less than the momentum that followed. It was enough to keep iterating, apply for follow-on support, and test whether the idea could survive beyond the hackathon room. The recurring lesson is that payment is rarely the hard part. Shared clarity is.",
    image: {
      src: "/images/polkadot-hackathon.jpeg",
      alt: "Polkadot Hackathon team photo",
      width: 960,
      height: 1280,
      aspectRatio: "4 / 3",
      objectPosition: "center 34%",
      maxWidth: "22rem",
    },
    mark: {
      src: "/images/chopdot-logo.png",
      alt: "ChopDot logo",
      width: 64,
      height: 64,
    },
    links: [
      { href: "/docs/chopdot-brief.pdf", label: "Brief" },
      { href: "https://devpost.com/software/chopdot", label: "Devpost" },
      { href: "https://dorahacks.io/buidl/41088", label: "Closeout proof" },
      { href: "https://www.chopdot.xyz/", label: "Website" },
      { href: "https://app.chopdot.xyz/pots", label: "App" },
    ],
  },
  {
    label: "AI and automation",
    title: "A practical thread",
    intro:
      "My interest in AI did not start with the current model cycle. My MSc thesis in 2017 was already focused on AI integration inside real organizations, and a meaningful part of my work in adtech and at Digitl involved automation, workflow design, and building systems that let teams move with less manual friction.",
    body:
      "What still feels current from that thesis is not the tooling landscape. It is the argument that adoption, buy-in, process fit, and human judgment matter as much as the technology itself. What is different now is that some of the tooling is finally usable enough to matter inside real work. The public repo is where I am packaging the parts I find most useful: reviewable agent operations, browser workflows with approval gates, and research loops that stay tied to evidence instead of drift.",
    links: [
      { href: "/docs/master-thesis-ai-integration-2017.pdf", label: "2017 thesis" },
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
    body: "A month-long residency around governance, network societies, AI x crypto, and future living. Useful because it widened the conversation beyond products into the institutions and social contracts those products eventually sit inside.",
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
                <div className="grid gap-5 lg:gap-7 lg:grid-cols-[minmax(18rem,22rem)_minmax(0,1fr)] lg:items-start">
                  <div style={{ maxWidth: item.image.maxWidth ?? "28rem" }}>
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      className="portrait"
                      style={{
                        aspectRatio: item.image.aspectRatio ?? "16 / 10",
                        objectPosition: item.image.objectPosition,
                      }}
                    />
                  </div>

                  <div style={{ minWidth: 0, maxWidth: "40rem" }}>
                    <div className="mb-3">
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

                      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-3">
                        {item.links.map((link) => (
                          <TrackedLink
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("/") ? undefined : "_blank"}
                            rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                            className="work-inline-link text-small"
                            eventName={`${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}_${link.label
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "_")}_click`}
                            eventProps={{ location: "work_item" }}
                          >
                            {link.label} &rarr;
                          </TrackedLink>
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
                  <div className="mb-3">
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

                    <div className="flex flex-wrap gap-x-3 gap-y-2 mt-3">
                      {item.links.map((link) => (
                        <TrackedLink
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("/") ? undefined : "_blank"}
                          rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                          className="work-inline-link text-small"
                          eventName={`${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}_${link.label
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "_")}_click`}
                          eventProps={{ location: "work_item" }}
                        >
                          {link.label} &rarr;
                        </TrackedLink>
                      ))}
                    </div>
                  </div>

                  <div className="measure-tight" style={{ maxWidth: "38rem" }}>
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
                    <TrackedLink
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-inline-link text-small"
                      eventName={`ecosystem_${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "_")}_click`}
                      eventProps={{ location: "work_ecosystem" }}
                    >
                      Visit &rarr;
                    </TrackedLink>
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
