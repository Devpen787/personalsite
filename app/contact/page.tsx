import Header from '@/components/Header'
import Footer from '@/components/Footer'

const contactCards = [
  {
    label: 'Email',
    body: 'The cleanest way to reach me directly.',
    value: 'devinsonpena@gmail.com',
    href: 'mailto:devinsonpena@gmail.com',
  },
  {
    label: 'LinkedIn',
    body: 'Professional profile, updates, and direct messages.',
    value: 'linkedin.com/in/devinsonpena',
    href: 'https://www.linkedin.com/in/devinsonpena/',
  },
  {
    label: 'ETHCC',
    body: 'Cannes, March 31 to April 5, 2026.',
    value: 'Happy to connect in person.',
    href: 'https://ethcc.io/',
  },
]

export default function Contact() {
  return (
    <div className="page-root">
      <Header />

      <main className="flex-1">
        <section className="section-shell">
          <div className="container-max stack-lg">
            <div className="page-hero">
              <p className="section-label">Contact</p>
              <h1 className="display-subtitle">Open to thoughtful conversations around Web3 product clarity, adoption, and tokenization.</h1>
              <p className="page-hero__copy">
                If you&apos;re building in tokenization, onchain products, market infrastructure, or a related area where
                adoption is still the hard part, feel free to reach out.
              </p>
            </div>

            <div className="card-grid card-grid--3">
              {contactCards.map((card) => (
                <article key={card.label} className="content-card">
                  <p className="section-label">{card.label}</p>
                  <h2 className="card-title">{card.value}</h2>
                  <p className="card-copy">{card.body}</p>
                  <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="button-link">
                    Open
                  </a>
                </article>
              ))}
            </div>

            <div className="cta-panel cta-panel--compact">
              <div className="cta-panel__copy">
                <p className="section-label">Proof links</p>
                <h2 className="display-subtitle">If you want context quickly, start with the CV, paper, and ChopDot brief.</h2>
              </div>
              <div className="link-panel">
                <a href="/docs/devinson-pena-cv.pdf" target="_blank" rel="noopener noreferrer">
                  CV
                </a>
                <a href="/docs/hslu-cas-paper.pdf" target="_blank" rel="noopener noreferrer">
                  Paper
                </a>
                <a href="/docs/chopdot-brief.pdf" target="_blank" rel="noopener noreferrer">
                  ChopDot brief
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
