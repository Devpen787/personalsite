import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:devinsonpena@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/devinsonpena",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Devpen787",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Cal.com",
    href: "https://cal.com/devinsonpena",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <section className="section" style={{ paddingTop: "5rem" }}>
      <div className="page-shell">

        {/* Karpathy-style top: photo + name + tagline + icons */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          style={{ marginBottom: 48 }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/Devinson_Photo.jpeg"
              alt="Devinson Peña"
              width={96}
              height={96}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              priority
            />
          </div>
          <div>
            <h1
              className="font-serif"
              style={{ fontSize: "1.75rem", lineHeight: 1.2, marginBottom: 4 }}
            >
              Devinson Peña
            </h1>
            <p
              className="text-body"
              style={{
                color: "var(--muted)",
                fontStyle: "italic",
                marginBottom: 12,
              }}
            >
              I like to build things that make complex systems feel simple.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    color: "var(--muted)",
                    transition: "color 0.15s",
                    display: "flex",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "var(--ink)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "var(--muted)")
                  }
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Perspective */}
        <div style={{ marginBottom: 48 }}>
          <p className="text-body" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            The products that will matter most in the next decade sit at the edge of adoption: tokenization infrastructure that institutions need to trust before they move, onchain tools that real users need to understand before they commit, AI workflows that need to feel practical before anyone automates anything seriously. I&rsquo;ve spent the last decade in the gap between what a product can do and what people actually believe it can do for them. That gap is where I work best.
          </p>
        </div>

        {/* Now */}
        <div style={{ marginBottom: 48 }}>
          <p className="label mb-3">Now</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Building ChopDot — group expenses on Polkadot",
              "Writing about DePIN tokenomics and incentive design",
              "ETHCC Cannes, March 31 to April 5, 2026",
              "Open to freelance, consulting, and collabs",
            ].map((item) => (
              <li
                key={item}
                className="text-body"
                style={{
                  color: "var(--muted)",
                  padding: "7px 0",
                  borderBottom: "1px solid var(--faint)",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div style={{ marginBottom: 48 }}>
          <p className="label mb-3">Explore</p>
          <div className="flex flex-col">
            {[
              { href: "/about", label: "About", desc: "The thread through all of it" },
              { href: "/work", label: "Work", desc: "Projects and proof" },
              { href: "/log", label: "Log", desc: "Writing, reading, events" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between py-3"
                style={{
                  borderBottom: "1px solid var(--faint)",
                  textDecoration: "none",
                }}
              >
                <span className="font-medium">{link.label}</span>
                <span className="text-small" style={{ color: "var(--muted)" }}>
                  {link.desc} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div>
          <p className="label mb-3">Get in touch</p>
          <p className="text-small mb-4" style={{ color: "var(--muted)" }}>
            Want to talk about tokenization, onchain products, or a collaboration? Book a call directly.
          </p>
          <a
            href="https://cal.com/devinsonpena"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
