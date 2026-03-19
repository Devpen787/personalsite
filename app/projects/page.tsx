import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

type WorkCard = {
  title: string
  label: string
  href: string
  linkLabel: string
  summary: string
  bullets: string[]
  image?: string
  imageAlt?: string
}

const work: WorkCard[] = [
  {
    title: 'CAS Blockchain at HSLU',
    label: 'Research',
    image: '/images/hslu-cas-photo.jpeg',
    imageAlt: 'Devinson Peña at the HSLU Blockchain CAS presentation',
    href: '/docs/hslu-cas-paper.pdf',
    linkLabel: 'Open paper',
    summary:
      'A DePIN tokenomics paper using Onocoy as an anchor case to study what happens when incentive systems face slower growth, weaker retention, and real network pressure.',
    bullets: [
      'Built to test the product story under stress rather than in ideal conditions.',
      'Useful because it sharpened how I think about incentives, resilience, and credibility.',
    ],
  },
  {
    title: 'ChopDot',
    label: 'Product experiment',
    href: '/docs/chopdot-brief.pdf',
    linkLabel: 'Read brief',
    summary:
      'A wallet-based coordination experiment built around a simple but revealing question: where do trust, clarity, and user confidence break down when group expenses move onchain?',
    bullets: [
      'Showed that the hardest product problem was not payment settlement, but social coordination and confidence.',
    ],
  },
  {
    title: 'Builder programs and ecosystem work',
    label: 'Ecosystem exposure',
    image: '/images/polkadot-hackathon.jpeg',
    imageAlt: 'Devinson Peña with the Polkadot hackathon group',
    href: '#events',
    linkLabel: 'See events',
    summary:
      'Builder programs across Switzerland and Berlin that gave me more direct exposure to product trade-offs, ecosystem conversations, and the reality of how onchain products are tested in practice.',
    bullets: [
      'Important because they exposed live product trade-offs much faster than polished positioning ever does.',
    ],
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
    note: 'Ethereum hackathon network and a useful surface for real product testing.',
  },
  {
    name: 'ETHCC',
    href: 'https://ethcc.io/',
    note: 'European Ethereum conference and a key touchpoint for Cannes.',
  },
  {
    name: 'Breaking DePIN',
    href: 'https://www.breakingdepin.ch/',
    note: 'Swiss DePIN event relevant to infrastructure and incentive design.',
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
        <section className="section-shell">
          <div className="container-max stack-lg">
            <div className="page-hero">
              <p className="section-label">Selected work</p>
              <h1 className="display-subtitle">A small set of real proof, not placeholder case studies.</h1>
              <p className="page-hero__copy">
                I would rather show a few real pieces of work than dress the page up with invented projects. These are
                the outputs that best represent where my attention and effort have gone over the last phase of my
                career.
              </p>
            </div>

            <div className="proof-grid">
              {work.map((item, index) => (
                <article key={item.title} className={`proof-card ${index === 0 ? 'proof-card--featured' : ''}`}>
                  {item.image ? (
                    <div className={`proof-card__media ${index === 0 ? 'proof-card__media--featured' : ''}`}>
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 36vw"
                      />
                    </div>
                  ) : null}
                  <div className="proof-card__top">
                    <div>
                      <p className="section-label">{item.label}</p>
                      <h2 className="proof-title">{item.title}</h2>
                    </div>
                    <a
                      href={item.href}
                      target={item.href.startsWith('/docs') ? '_blank' : undefined}
                      rel={item.href.startsWith('/docs') ? 'noopener noreferrer' : undefined}
                      className="button-link"
                    >
                      {item.linkLabel}
                    </a>
                  </div>
                  <p className="proof-summary">{item.summary}</p>
                  <ul className="proof-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="section-shell section-shell--muted">
          <div className="container-max stack-lg">
            <div className="section-head">
              <div className="section-head__meta">
                <p className="section-label">Community and ecosystem events</p>
                <p className="section-title">The actual rooms behind the ecosystem references on the site.</p>
              </div>
              <p className="section-description">
                These matter because they are where product ideas, coordination problems, and live network conversations
                become visible in practice.
              </p>
            </div>

            <div className="card-grid card-grid--3">
              {events.map((event) => (
                <article key={event.name} className="content-card">
                  <p className="section-label">Community / event link</p>
                  <h2 className="card-title">{event.name}</h2>
                  <p className="card-copy">{event.note}</p>
                  <a href={event.href} target="_blank" rel="noopener noreferrer" className="button-link">
                    Visit site
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
