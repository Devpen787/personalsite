import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <div className="page-root">
      <Header />

      <main className="flex-1">
        <section className="section-shell pt-12 md:pt-16">
          <div className="section-grid">
            <div className="section-label">Contact</div>
            <div className="space-y-5">
              <h1 className="display-subtitle">Open to thoughtful conversations, especially around Web3 product clarity and adoption.</h1>
              <div className="body-copy">
                <p>
                  The cleanest way to reach me is by email or LinkedIn. If you&apos;re building in tokenization,
                  onchain products, market infrastructure, or a related area where adoption is still the hard part,
                  feel free to reach out.
                </p>
                <p>
                  I&apos;ll also be at{' '}
                  <a href="https://ethcc.io/" target="_blank" rel="noopener noreferrer">
                    ETHCC
                  </a>{' '}
                  in Cannes from March 31 to April 5, 2026 and would be glad to connect in person if there is a useful
                  overlap.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-shell mt-12">
            <article className="timeline-row">
              <div className="timeline-meta">
                <h2>Email</h2>
                <p>Best for direct outreach</p>
              </div>
              <p className="body-copy">
                <a href="mailto:devinsonpena@gmail.com">devinsonpena@gmail.com</a>
              </p>
            </article>
            <article className="timeline-row">
              <div className="timeline-meta">
                <h2>LinkedIn</h2>
                <p>Professional profile and updates</p>
              </div>
              <p className="body-copy">
                <a href="https://www.linkedin.com/in/devinsonpena/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/devinsonpena
                </a>
              </p>
            </article>
            <article className="timeline-row">
              <div className="timeline-meta">
                <h2>Proof links</h2>
                <p>CV and selected work</p>
              </div>
              <p className="body-copy">
                <a href="/docs/devinson-pena-cv.pdf" target="_blank" rel="noopener noreferrer">
                  CV
                </a>
                {' · '}
                <a href="/docs/hslu-cas-paper.pdf" target="_blank" rel="noopener noreferrer">
                  Paper
                </a>
                {' · '}
                <a href="/docs/chopdot-brief.pdf" target="_blank" rel="noopener noreferrer">
                  ChopDot brief
                </a>
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
