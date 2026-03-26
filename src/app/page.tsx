import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:devinsonpena@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/devinsonpena",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Devpen787",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Book a call",
    href: "https://cal.eu/devinson/30min",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
      </svg>
    ),
  },
];

const talkTopics = [
  {
    title: "Product clarity",
    body: "When the capability is real but the product still asks too much of the reader, buyer, or user.",
  },
  {
    title: "Partnerships and GTM",
    body: "When the story across internal teams, clients, and partners needs tightening before the product can move.",
  },
  {
    title: "Adoption and onboarding",
    body: "Especially in tokenization, onchain products, wallets, and workflow-heavy systems where trust is part of the product.",
  },
  {
    title: "Practical AI",
    body: "Where automation and agent tooling need to become useful inside real work rather than stay as demos.",
  },
];

const proofRows = [
  {
    title: "CAS Blockchain at HSLU",
    body: "A DePIN tokenomics paper, presentation, and one of the stronger Swiss rooms for serious blockchain, tokenization, and legal-commercial discussion.",
    links: [
      { href: "/docs/hslu-cas-paper.pdf", label: "Paper" },
      { href: "/docs/CAS-Transferarbeit_DePIN_11032026_Final.pdf", label: "Presentation" },
      { href: "https://www.hslu.ch/de-ch/informatik/weiterbildung/digital-business-innovation/cas-blockchain/", label: "Program" },
    ],
  },
  {
    title: "ChopDot",
    body: "A Polkadot-native group expense app that keeps proving that social clarity matters as much as settlement capability.",
    links: [
      { href: "/docs/chopdot-brief.pdf", label: "Brief" },
      { href: "https://www.chopdot.xyz/", label: "Website" },
      { href: "https://app.chopdot.xyz/pots", label: "App" },
    ],
  },
  {
    title: "AI and automation",
    body: "A thread that runs from my 2017 MSc thesis through adtech workflow automation to today’s agent tooling and practical model use.",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
    ],
  },
];

export default function Home() {
  return (
    <section className="section" style={{ paddingTop: "var(--section-pad-y-top)" }}>
      <div className="page-shell">
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
          style={{ marginBottom: "var(--block-gap)" }}
        >
          <div className="hero-portrait relative shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/Devinson_Photo.jpeg"
              alt="Devinson Peña"
              width={240}
              height={240}
              className="h-full w-full object-cover"
              sizes="(max-width: 639px) 88px, (max-width: 767px) 96px, (max-width: 1023px) 108px, 120px"
              priority
            />
          </div>
          <div>
            <h1 className="font-serif hero-title mb-1">Devinson Peña</h1>
            <p
              className="hero-tagline text-body mb-3"
              style={{
                color: "var(--muted)",
                fontStyle: "italic",
              }}
            >
              I like to build things that make complex systems feel simple.
            </p>
            <div className="hero-social flex gap-3.5 md:gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-icon-link"
                  style={{
                    color: "var(--muted)",
                    display: "flex",
                    transition: "color 0.15s",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="measure" style={{ marginBottom: "1.5rem" }}>
          <p className="text-body" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            I work on products that have to earn trust before they earn adoption. That has taken me through product,
            partnerships, GTM, onboarding, delivery, automation, and now more deliberate work in Web3 and practical AI.
            The current work is only the latest layer. It sits on top of more than fifteen years around product structure,
            commercial translation, client complexity, and the organizational work that decides whether a capable system becomes something people actually use.
            I tend to be most useful when the system is technically sound but the path to understanding, trust, and use is still messy.
          </p>
        </div>

        <div className="measure" style={{ marginBottom: "var(--block-gap)" }}>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://cal.eu/devinson/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book a call
            </a>
            <a href="mailto:devinsonpena@gmail.com" className="btn btn-outline">
              Email me
            </a>
          </div>
        </div>

        <div className="measure" style={{ marginBottom: "var(--block-gap)" }}>
          <p className="label mb-2.5">If we talk</p>
          <div className="flex flex-col">
            {talkTopics.map((topic) => (
              <div
                key={topic.title}
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid var(--faint)",
                }}
              >
                <p className="text-body" style={{ fontWeight: 500, marginBottom: 4 }}>
                  {topic.title}
                </p>
                <p className="text-small" style={{ color: "var(--muted)" }}>
                  {topic.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="measure-wide" style={{ marginBottom: "var(--block-gap)" }}>
          <div className="flex flex-col">
            {proofRows.map((row) => (
              <div
                key={row.title}
                style={{
                  padding: "12px 0 14px",
                  borderBottom: "1px solid var(--faint)",
                }}
              >
                <p className="text-body" style={{ fontWeight: 500, marginBottom: 4 }}>
                  {row.title}
                </p>
                <p className="text-small" style={{ color: "var(--muted)", marginBottom: 8 }}>
                  {row.body}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {row.links.map((link) => (
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
            ))}
          </div>
        </div>

        <div className="measure" style={{ marginBottom: "var(--block-gap)" }}>
          <div className="flex flex-col">
            {[
              { href: "/about", label: "About", desc: "The thread through all of it" },
              { href: "/work", label: "Work", desc: "Projects and proof" },
              { href: "/log", label: "Log", desc: "Writing, reading, events" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between"
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid var(--faint)",
                  textDecoration: "none",
                  color: "var(--ink)",
                }}
              >
                <span style={{ fontWeight: 500 }}>{link.label}</span>
                <span className="text-small" style={{ color: "var(--muted)" }}>
                  {link.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="measure">
          <p className="text-small" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            If any of that sounds useful, the cleanest next step is a short call or a direct note.
          </p>
        </div>
      </div>
    </section>
  );
}
