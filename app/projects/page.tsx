import Header from '@/components/Header'
import Footer from '@/components/Footer'

const work = [
  {
    title: 'CAS Blockchain at HSLU',
    href: '/docs/hslu-cas-paper.pdf',
    linkLabel: 'Read paper',
    body:
      'A research project on DePIN tokenomics under stress, using Onocoy as an anchor case to study what happens when incentive systems face slower growth, weaker retention, and real network pressure.',
  },
  {
    title: 'ChopDot',
    href: '/docs/chopdot-brief.pdf',
    linkLabel: 'Read brief',
    body:
      'A wallet-based coordination experiment built around a simple but revealing product question: where do trust, clarity, and user confidence break down when group expenses move onchain?',
  },
  {
    title: 'Builder programs and ecosystem work',
    href: 'https://www.linkedin.com/in/devinsonpena/',
    linkLabel: 'LinkedIn',
    body:
      'Builder programs across Switzerland and Berlin that gave me more direct exposure to product trade-offs, ecosystem conversations, and the reality of how onchain products are tested in practice.',
  },
]

export default function Projects() {
  return (
    <div className="page-root">
      <Header />

      <main className="flex-1">
        <section className="section-shell pt-12 md:pt-16">
          <div className="section-grid">
            <div className="section-label">Selected work</div>
            <div className="space-y-5">
              <h1 className="display-subtitle">A small set of projects and proof points that show how I work.</h1>
              <p className="body-copy">
                I would rather show a few real pieces of work than fill this page with placeholders. These are the
                projects and outputs that best represent where my thinking and effort have gone over the last phase of
                my career.
              </p>
            </div>
          </div>

          <div className="story-stack mt-12">
            {work.map((item) => (
              <article key={item.title} className="story-block">
                <div className="story-header">
                  <h2>{item.title}</h2>
                  <a href={item.href} target={item.href.startsWith('/docs') ? '_blank' : undefined} rel={item.href.startsWith('/docs') ? 'noopener noreferrer' : undefined}>
                    {item.linkLabel}
                  </a>
                </div>
                <p className="body-copy">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
