export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="container-max px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-[var(--muted)]">
              © 2026 Devinson Peña. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="mailto:devinsonpena@gmail.com"
              className="text-sm text-[var(--muted)] transition-opacity duration-200 hover:opacity-70"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/devinsonpena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] transition-opacity duration-200 hover:opacity-70"
            >
              LinkedIn
            </a>
            <a
              href="/docs/devinson-pena-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] transition-opacity duration-200 hover:opacity-70"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 
