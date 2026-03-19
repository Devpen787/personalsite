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
    href: '#events',
    linkLabel: 'See events',
    body:
      'Builder programs across Switzerland and Berlin that gave me more direct exposure to product trade-offs, ecosystem conversations, and the reality of how onchain products are tested in practice.',
  },
]

const events = [
  {
    name: 'Zuitzerland',
    href: 'https://www.zuitzerland.ch/',
    note: 'Swiss builder residency and community program.',
  },
  {
    name: 'ZuBerlin',
    href: 'https://zuberlin.city/',
    note: 'Berlin-based builder gathering around zero-knowledge and onchain experimentation.',
  },
  {
    name: 'ETHGlobal',
    href: 'https://ethglobal.com/',
    note: 'Broader Ethereum hackathon and builder event network.',
  },
  {
    name: 'ETHCC',
    href: 'https://ethcc.io/',
    note: 'European Ethereum conference and a core touchpoint for Cannes.',
  },
  {
    name: 'Breaking DePIN',
    href: 'https://www.breakingdepin.ch/',
    note: 'DePIN-focused Swiss event relevant to infrastructure and incentive design.',
  },
  {
    name: 'CV Summit',
    href: 'https://www.cvsummit.ch/',
    note: 'Crypto Valley ecosystem conference with strong Swiss company density.',
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
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') || item.href.startsWith('/docs') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') || item.href.startsWith('/docs') ? 'noopener noreferrer' : undefined}
                  >
                    {item.linkLabel}
                  </a>
                </div>
                <p className="body-copy">{item.body}</p>
              </article>
            ))}
          </div>

          <div id="events" className="story-stack mt-12">
            <article className="story-block">
              <div className="story-header">
                <h2>Community and ecosystem events</h2>
              </div>
              <div className="body-copy">
                <p>
                  These are the actual communities and event surfaces behind the ecosystem work referenced on the site.
                  They matter because they are where product ideas, coordination problems, and live network conversations
                  become visible in practice.
                </p>
              </div>
              <div className="timeline-shell mt-8">
                {events.map((event) => (
                  <article key={event.name} className="timeline-row">
                    <div className="timeline-meta">
                      <h2>{event.name}</h2>
                      <p>Community / event link</p>
                    </div>
                    <p className="body-copy">
                      {event.note}{' '}
                      <a href={event.href} target="_blank" rel="noopener noreferrer">
                        Visit site
                      </a>
                    </p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
