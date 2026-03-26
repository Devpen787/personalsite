export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-wrap">
          <p className="text-small" style={{ color: "var(--muted)" }}>
            Devinson Peña · Zurich
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Email", href: "mailto:devinsonpena@gmail.com" },
              { label: "LinkedIn", href: "https://linkedin.com/in/devinsonpena" },
              { label: "GitHub", href: "https://github.com/Devpen787" },
              { label: "Book a call", href: "https://cal.eu/devinson/30min" },
              { label: "CV", href: "/docs/devinson-pena-cv.pdf" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("/") || l.href.startsWith("mailto") ? undefined : "_blank"}
                rel={l.href.startsWith("/") || l.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="nav-link text-small"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
