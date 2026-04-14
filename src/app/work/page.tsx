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
  proof?: string;
  body: string;
  marginalia?: string;
  links: WorkLink[];
  image?: WorkMedia;
  supportImage?: WorkMedia;
  mark?: WorkMark;
};

type ProofItem = {
  title: string;
  body: string;
  href: string;
  label: string;
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
    label: "Product",
    title: "ChopDot",
    intro:
      "ChopDot is a Polkadot-native group expense app that started at the Build Resilient Apps with Polkadot Cloud hackathon and kept going after the room was gone.",
    proof:
      "Started at a global Polkadot hackathon, won second prize, and now anchors closeout and settlement proof on Polkadot Hub through an EVM smart contract.",
    body:
      "I built it around a simple but revealing problem: shared money only works when the group understands what is happening. The current version keeps day-to-day coordination offchain, then anchors closeout and settlement proof on Polkadot Hub through an EVM smart contract. It matters to me because it keeps proving the same thing: payment is rarely the hard part. Shared clarity is.",
    marginalia:
      "Group expenses keep teaching me the same lesson. Money moves last. Shared understanding has to move first.",
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
    label: "Hackathon build",
    title: "YourTurn",
    intro:
      'Built at ETHGlobal Cannes 2026, where it won the Hedera "No Solidity Allowed" track, YourTurn is a booking and resale product for studios, therapists, and coaching-led services.',
    proof:
      'We treated a booking more like a transferable pass and won the Hedera track by building with the SDKs rather than taking the usual Solidity route.',
    body:
      "The idea was to treat a booking more like a transferable pass: something a customer can keep, resell when allowed, and verify clearly, while the provider keeps control over policy, check-in, and resale rules. We used Hedera as the trust layer for booking rights and lifecycle events, but the real product problem was making something onchain feel simple enough for ordinary users and operationally useful enough for small businesses. That is the kind of work I want more of.",
    image: {
      src: "/images/yourturn-product.png",
      alt: "YourTurn product screenshot",
      width: 1176,
      height: 718,
      aspectRatio: "16 / 10",
      objectPosition: "center top",
      maxWidth: "24rem",
    },
    supportImage: {
      src: "/images/yourturn-hedera-win.png",
      alt: "ETHGlobal Cannes 2026 Hedera winner badge for YourTurn",
      width: 828,
      height: 656,
      aspectRatio: "5 / 4",
      objectPosition: "center center",
      maxWidth: "11rem",
    },
    links: [
      { href: "https://github.com/Devpen787/yourturn", label: "GitHub" },
      { href: "https://yourturn-sage.vercel.app/", label: "Live app" },
      { href: "https://ethglobal.com/showcase/yourturn-zb56r", label: "Showcase" },
    ],
  },
  {
    label: "Research",
    title: "CAS Blockchain at HSLU",
    intro:
      "The CAS Blockchain at HSLU gave me a more serious Swiss room for tokenization, market structure, and legal-commercial questions than most public blockchain conversations ever do.",
    proof:
      "Included a DePIN tokenomics paper, presentation, and a stronger public signal of serious blockchain credibility in Switzerland.",
    body:
      "The DePIN paper mattered, but so did the discipline of having the argument tested by people close enough to the work to push back properly. It made my interest in digital assets more concrete and more defensible. What stayed with me most was not the rhetoric around the future, but the pressure to explain why a system should survive contact with real incentives, real institutions, and real use.",
    marginalia:
      "The useful part was seeing exactly where the argument stopped surviving informed questions.",
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
    label: "Research",
    title: "DePIN / tokenization research",
    intro:
      "I wrote the DePIN paper to test what happens when token incentive systems face real pressure instead of living inside optimistic assumptions.",
    proof:
      "Using Onocoy as the anchor case, I looked at slower growth, weaker retention, and what that reveals about resilience, scalability, and incentive design in practice, then pushed the model into a live stress-test dashboard.",
    body:
      "That work sits close to tokenization for me because it sharpened the same instinct: a structure is only interesting if it still works once the easy story disappears.",
    image: {
      src: "/images/depin-history-friction.png",
      alt: "DePIN presentation slide showing token price friction versus physical capacity",
      width: 320,
      height: 180,
      aspectRatio: "16 / 9",
      objectPosition: "center center",
      maxWidth: "22rem",
    },
    links: [
      { href: "/docs/hslu-cas-paper.pdf", label: "Paper" },
      { href: "/docs/CAS-Transferarbeit_DePIN_11032026_Final.pdf", label: "Presentation" },
      { href: "https://depin-stress-test.vercel.app/", label: "Dashboard" },
    ],
  },
  {
    label: "AI / systems",
    title: "AI / agent systems",
    intro:
      "My AI thread did not start with the current model cycle. It runs from my 2017 MSc thesis on AI integration and adoption through workflow automation in adtech and into the agent systems I am building now.",
    proof:
      "The practical-agent-systems repo is where I make that work inspectable in public: reviewable agent operations, browser workflows with approval gates, and research flows tied back to evidence.",
    body:
      "What interests me is not AI as identity, but AI as utility: systems that reduce friction, make decisions clearer, and fit into real operating work without adding noise.",
    marginalia:
      "Most AI talk still starts with the model. I keep caring more about whether the workflow is livable once the novelty wears off.",
    image: {
      src: "/images/agent-systems-workflow.svg",
      alt: "Practical agent systems repo artifact board",
      width: 960,
      height: 540,
      aspectRatio: "16 / 9",
      objectPosition: "center center",
      maxWidth: "24rem",
    },
    links: [
      { href: "/docs/master-thesis-ai-integration-2017.pdf", label: "2017 thesis" },
      { href: "https://github.com/Devpen787/practical-agent-systems", label: "Public repo" },
      { href: "https://github.com/Devpen787/practical-agent-systems/tree/main/examples/agentops-lite", label: "AgentOps" },
      { href: "https://github.com/Devpen787/practical-agent-systems/tree/main/examples/browser-queue", label: "Browser queue" },
    ],
  },
];

const proofItems: ProofItem[] = [
  {
    title: "ETHGlobal Cannes 2026",
    body: "Public showcase page for YourTurn and the Hedera track win.",
    href: "https://ethglobal.com/showcase/yourturn-zb56r",
    label: "Showcase",
  },
  {
    title: "practical-agent-systems",
    body: "Public repo for agent operations, browser workflows, and evidence-linked research loops.",
    href: "https://github.com/Devpen787/practical-agent-systems",
    label: "Repo",
  },
  {
    title: "2017 AI integration thesis",
    body: "Earlier work on AI adoption, workflow fit, and organizational integration before the current model cycle.",
    href: "/docs/master-thesis-ai-integration-2017.pdf",
    label: "Thesis",
  },
  {
    title: "ChopDot brief",
    body: "A tighter product view of the current group-expense build and why the workflow matters.",
    href: "/docs/chopdot-brief.pdf",
    label: "Brief",
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
  {
    company: "Light Reaction",
    role: "Project and account work",
    body:
      "Client-facing digital work where delivery, expectations, and commercial realities all had to line up cleanly enough to keep projects moving.",
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
          <p className="label mb-2.5">Selected work</p>
          <h1 className="font-serif page-heading mb-5">Current work and proof.</h1>
          <p className="text-body" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            This is the current layer of the work: products, research, and systems that show where I am actually
            building now. The older operating thread is still here, but it sits underneath the more recent proof.
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
                      priority={item.title === "ChopDot"}
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
                      {item.supportImage ? (
                        <div style={{ marginTop: 14, maxWidth: item.supportImage.maxWidth ?? "12rem" }}>
                          <Image
                            src={item.supportImage.src}
                            alt={item.supportImage.alt}
                            width={item.supportImage.width}
                            height={item.supportImage.height}
                            className="portrait"
                            style={{
                              aspectRatio: item.supportImage.aspectRatio ?? "4 / 3",
                              objectPosition: item.supportImage.objectPosition,
                            }}
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="text-body" style={{ color: "var(--muted)" }}>
                        {item.intro}
                      </p>
                      {item.proof ? (
                        <p className="text-body" style={{ color: "var(--ink)" }}>
                          {item.proof}
                        </p>
                      ) : null}
                      <p className="text-body" style={{ color: "var(--muted)" }}>
                        {item.body}
                      </p>
                      {item.marginalia ? (
                        <p className="marginal-note">{item.marginalia}</p>
                      ) : null}
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
                    {item.supportImage ? (
                      <div style={{ marginTop: 14, maxWidth: item.supportImage.maxWidth ?? "12rem" }}>
                        <Image
                          src={item.supportImage.src}
                          alt={item.supportImage.alt}
                          width={item.supportImage.width}
                          height={item.supportImage.height}
                          className="portrait"
                          style={{
                            aspectRatio: item.supportImage.aspectRatio ?? "4 / 3",
                            objectPosition: item.supportImage.objectPosition,
                          }}
                        />
                      </div>
                    ) : null}
                  </div>

                  <div className="measure-tight" style={{ maxWidth: "38rem" }}>
                    <p className="text-body mb-4" style={{ color: "var(--muted)" }}>
                      {item.intro}
                    </p>
                    {item.proof ? (
                      <p className="text-body mb-4" style={{ color: "var(--ink)" }}>
                        {item.proof}
                      </p>
                    ) : null}
                    <p className="text-body" style={{ color: "var(--muted)" }}>
                      {item.body}
                    </p>
                    {item.marginalia ? (
                      <p className="marginal-note">{item.marginalia}</p>
                    ) : null}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="measure-wide" style={{ borderTop: "1px solid var(--faint)", paddingTop: 18, marginBottom: "var(--block-gap)" }}>
          <p className="label mb-2.5">More proof</p>
          <p className="text-body mb-4" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            Smaller public artifacts and traces that support the current work without needing a full case block of their
            own.
          </p>
          <div className="flex flex-col">
            {proofItems.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid var(--faint)",
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <p className="text-body" style={{ fontWeight: 500 }}>
                    {item.title}
                  </p>
                  <TrackedLink
                    href={item.href}
                    target={item.href.startsWith("/") ? undefined : "_blank"}
                    rel={item.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="work-inline-link text-small"
                    eventName={`proof_${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}_click`}
                    eventProps={{ location: "work_more_proof" }}
                  >
                    {item.label} &rarr;
                  </TrackedLink>
                </div>
                <p className="text-small" style={{ color: "var(--muted)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="measure-wide" style={{ borderTop: "1px solid var(--faint)", paddingTop: 18, marginBottom: "var(--block-gap)" }}>
          <p className="label mb-2.5">Earlier operating work</p>
          <p className="text-body mb-4" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            Before the current blockchain and AI work, I spent more than fifteen years around product programs,
            onboarding, client delivery, GTM, and execution in environments where technically strong systems still
            needed better structure, translation, and confidence around how they were used.
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
