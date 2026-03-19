export default function Footer() {
  return (
    <footer className="bg-[var(--surface)]">
      <div className="container-max px-5 pb-10 pt-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-[var(--muted)]">© 2026 Devinson Peña. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="mailto:devinsonpena@gmail.com"
              className="text-sm text-[var(--muted)] underline decoration-[color:var(--line-strong)] underline-offset-[6px] transition-opacity duration-200 hover:opacity-70"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/devinsonpena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] underline decoration-[color:var(--line-strong)] underline-offset-[6px] transition-opacity duration-200 hover:opacity-70"
            >
              LinkedIn
            </a>
            <a
              href="/docs/devinson-pena-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] underline decoration-[color:var(--line-strong)] underline-offset-[6px] transition-opacity duration-200 hover:opacity-70"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 
