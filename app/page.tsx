import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

type ProofCard = {
  title: string
  type: string
  href: string
  cta: string
  summary: string
  bullets: string[]
  featured?: boolean
  image?: string
  imageAlt?: string
}

const focusAreas = [
  {
    title: 'Tokenization',
    body: 'Where issuance, workflow, client confidence, and operational clarity all have to hold together.',
  },
  {
    title: 'Onchain products',
    body: 'Products that sit between technical capability and day-to-day usability, where clarity matters more than novelty.',
  },
  {
    title: 'Adoption',
    body: 'Not as a slogan, but as the moment a product becomes understandable enough to enter a real workflow.',
  },
]

const principles = [
  {
    number: '01',
    title: 'Onboarding is usually the bottleneck',
    body: 'If the first few minutes are unclear, the product rarely gets a fair chance.',
  },
  {
    number: '02',
    title: 'Incentives are not demand',
    body: 'A token can create motion without creating real pull. I care more about what remains when incentives stop doing the work.',
  },
  {
    number: '03',
    title: 'Operational trust matters',
    body: 'Serious users assess the workflow around the product, not just the protocol or asset itself.',
  },
]

const proofCards: ProofCard[] = [
  {
    title: 'CAS Blockchain at HSLU',
    type: 'Research',
    image: '/images/hslu-cas-photo.jpeg',
    imageAlt: 'Devinson Peña at the HSLU Blockchain CAS presentation',
    href: '/docs/hslu-cas-paper.pdf',
    cta: 'Open paper',
    summary:
      'A DePIN tokenomics paper using Onocoy as an anchor case to test what happens when retention weakens and growth slows.',
    bullets: [
      'Focused on how quickly product credibility can unravel when incentives carry more weight than real usage.',
      'Useful because it forced the product story to survive under pressure rather than in ideal conditions.',
    ],
    featured: true,
  },
  {
    title: 'ChopDot',
    type: 'Product experiment',
    href: '/docs/chopdot-brief.pdf',
    cta: 'Read brief',
    summary: 'A wallet-based coordination experiment built around one practical question: what breaks first when group expenses move onchain?',
    bullets: [
      'The real friction was not settlement. It was social clarity, confidence, and knowing what was happening at each step.',
    ],
  },
  {
    title: 'Builder programs and live rooms',
    type: 'Ecosystem exposure',
    image: '/images/polkadot-hackathon.jpeg',
    imageAlt: 'Devinson Peña with the Polkadot hackathon group',
    href: '/projects#events',
    cta: 'See events',
    summary: 'Zuitzerland, ZuBerlin, ETHGlobal-related environments, Breaking DePIN, and Swiss ecosystem events made the work feel real.',
    bullets: [
      'Those rooms exposed product trade-offs, coordination problems, and honest network signals faster than polished positioning ever does.',
    ],
  },
]

const background = [
  {
    company: 'Xaxis',
    role: 'Global product program work',
    body: 'Roadmap planning, operating cadence, and senior product structure inside a large distributed environment.',
  },
  {
    company: 'Digitl',
    role: 'Adtech team lead',
    body: 'Sales, product, and operations alignment around onboarding and expansion tied to a $10M+ pipeline and 100+ client onboardings.',
  },
  {
    company: 'Trakken',
    role: 'Consulting and implementation',
    body: 'Complex client environments where the challenge was making products easier to understand, adopt, and use.',
  },
]

export default function Home() {
  const featuredProof = proofCards[0]
  const secondaryProof = proofCards.slice(1)

  return (
    <div className="page-root">
      <Header />

      <main className="flex-1">
        <section id="home" className="section-shell section-shell--hero">
          <div className="container-max">
            <div className="hero-panel">
              <div className="hero-grid">
                <div className="hero-copy">
                  <p className="section-label">Zurich-based operator in Web3</p>
                  <h1 className="display-title">Devinson Peña</h1>
                  <p className="hero-statement">Making complex Web3 products clearer, more usable, and easier to adopt.</p>

                  <div className="body-large stack-md">
                    <p>
                      Over the last decade I have worked across product, partnerships, GTM, onboarding, and delivery in
                      environments where the hard part was rarely the capability itself.
                    </p>
                    <p>
                      The harder question was whether people could understand the product well enough to trust it,
                      implement it, and move on it. That is the lens I now bring to tokenization, onchain products, and
                      the operational layer behind adoption.
                    </p>
                  </div>

                  <div className="action-row">
                    <a href="#work" className="button-primary">
                      Read my work
                    </a>
                    <a href="/docs/devinson-pena-cv.pdf" target="_blank" rel="noopener noreferrer" className="button-link">
                      View CV
                    </a>
                    <a href="#contact" className="button-link">
                      Connect
                    </a>
                  </div>

                  <div className="chip-row">
                    <span className="meta-chip">Zurich</span>
                    <span className="meta-chip">English / Spanish / German</span>
                    <span className="meta-chip">ETHCC Cannes 2026</span>
                  </div>
                </div>

                <aside className="hero-side">
                  <div className="portrait-card">
                    <div className="portrait-card__image">
                      <Image
                        src="/images/Devinson_Photo.jpeg"
                        alt="Devinson Peña"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 34vw"
                      />
                    </div>
                    <div className="portrait-card__body">
                      <p className="section-label">Current focus</p>
                      <p className="body-small">Tokenization, onchain products, and the workflows that make adoption feel real rather than theoretical.</p>
                    </div>
                  </div>

                  <div className="aside-card">
                    <p className="section-label">A human layer</p>
                    <p className="body-small">
                      I like rooms where products are being presented, challenged, and rebuilt in public. That usually
                      tells me more than polished positioning does.
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section-shell--muted">
          <div className="container-max stack-lg">
            <div className="section-head">
              <div className="section-head__meta">
                <p className="section-label">Current focus</p>
                <p className="section-title">What I am focused on now</p>
              </div>
              <p className="section-description">
                The work that interests me most sits between technical possibility and real-world use: places where the
                product only becomes valuable once the workflow around it is clear enough to trust.
              </p>
            </div>

            <div className="card-grid card-grid--3">
              {focusAreas.map((item) => (
                <article key={item.title} className="content-card">
                  <p className="section-label">{item.title}</p>
                  <h2 className="card-title">{item.title}</h2>
                  <p className="card-copy">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-shell--dark">
          <div className="container-max stack-lg">
            <div className="section-head section-head--dark">
              <div className="section-head__meta">
                <p className="section-label">How I think</p>
                <p className="section-title">Three rules I keep coming back to.</p>
              </div>
              <p className="section-description">
                These are the product problems I trust most when I am trying to understand whether something is truly usable or just well framed.
              </p>
            </div>

            <div className="card-grid card-grid--3">
              {principles.map((item) => (
                <article key={item.title} className="rule-card">
                  <p className="rule-number">Rule {item.number}</p>
                  <h2 className="rule-title">{item.title}</h2>
                  <p className="rule-copy">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-shell">
          <div className="container-max stack-lg">
            <div className="section-head">
              <div className="section-head__meta">
                <p className="section-label">Selected work</p>
                <p className="section-title">A small set of real proof, not placeholders.</p>
              </div>
              <p className="section-description">
                These are the clearest examples of how I work through product questions around trust, incentives,
                workflow, and adoption.
              </p>
            </div>

            <div className="proof-grid">
              <article className="proof-card proof-card--featured">
                {featuredProof.image ? (
                  <div className="proof-card__media proof-card__media--featured">
                    <Image
                      src={featuredProof.image}
                      alt={featuredProof.imageAlt ?? featuredProof.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 36vw"
                    />
                  </div>
                ) : null}
                <div className="proof-card__top">
                  <div>
                    <p className="section-label">{featuredProof.type}</p>
                    <h2 className="proof-title">{featuredProof.title}</h2>
                  </div>
                  <a href={featuredProof.href} target="_blank" rel="noopener noreferrer" className="button-link">
                    {featuredProof.cta}
                  </a>
                </div>
                <p className="proof-summary">{featuredProof.summary}</p>
                <ul className="proof-list">
                  {featuredProof.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              {secondaryProof.map((card) => (
                <article key={card.title} className="proof-card">
                  {card.image ? (
                    <div className="proof-card__media">
                      <Image
                        src={card.image}
                        alt={card.imageAlt ?? card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                      />
                    </div>
                  ) : null}
                  <div className="proof-card__top">
                    <div>
                      <p className="section-label">{card.type}</p>
                      <h2 className="proof-title">{card.title}</h2>
                    </div>
                    <a
                      href={card.href}
                      target={card.href.startsWith('/docs') ? '_blank' : undefined}
                      rel={card.href.startsWith('/docs') ? 'noopener noreferrer' : undefined}
                      className="button-link"
                    >
                      {card.cta}
                    </a>
                  </div>
                  <p className="proof-summary">{card.summary}</p>
                  <ul className="proof-list">
                    {card.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-shell--muted">
          <div className="container-max stack-lg">
            <div className="section-head">
              <div className="section-head__meta">
                <p className="section-label">Background</p>
                <p className="section-title">Most of my career has been spent helping messy products become easier to sell, implement, and use.</p>
              </div>
              <p className="section-description">
                Different sectors, same recurring pattern: where the team needs more structure, clearer translation, and more trust in the product workflow.
              </p>
            </div>

            <div className="card-grid card-grid--3">
              {background.map((item) => (
                <article key={item.company} className="content-card">
                  <p className="section-label">{item.role}</p>
                  <h2 className="card-title">{item.company}</h2>
                  <p className="card-copy">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="container-max">
            <div className="cta-panel">
              <div className="cta-panel__copy">
                <p className="section-label">Connect</p>
                <h2 className="display-subtitle">If you&apos;re building in tokenization, onchain products, or adoption, let&apos;s talk.</h2>
                <p className="body-copy">
                  I&apos;ll be at ETHCC in Cannes from March 31 to April 5, 2026 and I&apos;m especially interested in
                  conversations around tokenization, market infrastructure, wallets, and the operational layer behind
                  real adoption.
                </p>
                <div className="action-row">
                  <a href="mailto:devinsonpena@gmail.com" className="button-primary">
                    Email me
                  </a>
                  <a href="https://www.linkedin.com/in/devinsonpena/" target="_blank" rel="noopener noreferrer" className="button-link">
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="link-panel">
                <a href="mailto:devinsonpena@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/devinsonpena/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
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
