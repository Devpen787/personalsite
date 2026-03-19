import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const focusAreas = [
  {
    title: 'Tokenization',
    body:
      'I am interested in the part where structure, issuance, workflows, and client confidence all have to hold together.',
  },
  {
    title: 'Onchain products',
    body:
      'Especially products that sit between technical capability and day-to-day usability, where the hard part is clarity rather than novelty.',
  },
  {
    title: 'Adoption',
    body:
      'Not as a growth slogan, but as the moment a product becomes understandable enough to enter someone else’s real workflow.',
  },
]

const thinkingPoints = [
  {
    title: 'Onboarding is usually the bottleneck',
    body:
      'When the first few minutes are unclear, the product rarely gets a fair chance. Most drop-off is explained long before the technology itself is tested.',
  },
  {
    title: 'Incentives are not demand',
    body:
      'A token can create motion without creating pull. I am more interested in whether the product still makes sense when incentives stop doing the explanatory work.',
  },
  {
    title: 'Operational trust matters',
    body:
      'Serious users do not only assess the protocol or asset. They assess whether the surrounding workflow feels understandable, repeatable, and safe to act on.',
  },
]

const stories = [
  {
    title: 'CAS Blockchain at HSLU',
    href: '/docs/hslu-cas-paper.pdf',
    linkLabel: 'Open paper',
    eyebrow: 'Research',
    summary:
      'A DePIN tokenomics paper using Onocoy as an anchor case to look at what happens when retention weakens, growth slows, and the story has to survive real network pressure.',
    insight:
      'The most useful part of the work was not the headline conclusion. It was seeing how quickly product credibility can unravel when incentives are carrying more weight than real usage.',
  },
  {
    title: 'ChopDot',
    href: '/docs/chopdot-brief.pdf',
    linkLabel: 'Read brief',
    eyebrow: 'Product experiment',
    summary:
      'A wallet-based coordination experiment built around a simple question: what breaks first when group expenses move onchain?',
    insight:
      'The real friction was not settlement. It was social clarity, confidence, and knowing what was happening at each step.',
  },
  {
    title: 'Builder programs and live rooms',
    href: '/projects#events',
    linkLabel: 'See events',
    eyebrow: 'Ecosystem exposure',
    summary:
      'Zuitzerland, ZuBerlin, ETHGlobal-related environments, Breaking DePIN, and Swiss ecosystem events brought me closer to how products are argued over, tested, and refined in practice.',
    insight:
      'Those settings mattered because they made the work feel real: fewer abstract narratives, more product trade-offs, coordination problems, and honest signals.',
  },
]

const background = [
  {
    company: 'Xaxis',
    role: 'Global product program work',
    body:
      'I worked around roadmap priorities, planning cadence, and senior product leadership in a large distributed environment where complexity needed structure.',
  },
  {
    company: 'Digitl',
    role: 'Adtech team lead',
    body:
      'I helped align sales, product, and operations around onboarding and expansion in a growth environment tied to a $10M+ pipeline and more than 100 client onboardings.',
  },
  {
    company: 'Trakken',
    role: 'Consulting and implementation',
    body:
      'I worked with complex clients, executive workshops, and technical platforms where the challenge was making products easier to understand, adopt, and use.',
  },
]

export default function Home() {
  return (
    <div className="page-root">
      <Header />

      <main className="flex-1">
        <section id="home" className="hero-shell">
          <div className="container-max hero-layout">
            <div className="hero-copy">
              <p className="kicker">Zurich-based operator in Web3</p>
              <h1 className="display-title">Devinson Peña</h1>
              <p className="hero-statement">
                I work on the point where complex Web3 products need to become clear, usable, and worth adopting.
              </p>
              <div className="body-large space-y-5">
                <p>
                  Over the last decade I have worked across product, partnerships, GTM, onboarding, and delivery in
                  environments where the product itself was rarely the only challenge. The harder question was whether
                  people could actually understand it well enough to trust it, implement it, and move on it.
                </p>
                <p>
                  That is the lens I now bring to tokenization, onchain products, and the operational layer behind
                  adoption. I work across English, Spanish, and German, and I tend to be most useful when the product
                  is still a little messy and the story has not fully settled yet.
                </p>
              </div>

              <div className="hero-actions">
                <a href="#work" className="editorial-button editorial-button--primary">
                  Read my work
                </a>
                <a href="/docs/devinson-pena-cv.pdf" target="_blank" rel="noopener noreferrer" className="editorial-link">
                  View CV
                </a>
                <a href="#contact" className="editorial-link">
                  Connect
                </a>
              </div>

              <div className="hero-meta">
                <div>
                  <span>Current focus</span>
                  <p>Tokenization, onchain products, and workflow clarity.</p>
                </div>
                <div>
                  <span>Next stop</span>
                  <p>ETHCC in Cannes, March 31 to April 5, 2026.</p>
                </div>
              </div>
            </div>

            <aside className="hero-aside">
              <div className="portrait-stage">
                <div className="portrait-wrap">
                  <Image
                    src="/images/Devinson_Photo.jpeg"
                    alt="Devinson Peña"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 34vw"
                  />
                </div>
              </div>
              <div className="aside-note">
                <p className="kicker">A human layer</p>
                <p>
                  I like rooms where products are being presented, challenged, and rebuilt in public. That usually
                  tells me more than polished positioning does.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-max editorial-section">
            <div className="section-intro">
              <p className="section-label">What I&apos;m focused on now</p>
              <div className="section-copy body-copy">
                <p>
                  The work that interests me most sits between technical possibility and real-world use: places where
                  tokenization, onchain products, and adoption depend on better workflow design, sharper framing, and
                  more trust in the experience around the product.
                </p>
              </div>
            </div>
            <div className="focus-grid">
              {focusAreas.map((item) => (
                <article key={item.title} className="focus-column">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-shell--inked">
          <div className="container-max editorial-section editorial-section--tight">
            <div className="section-intro">
              <p className="section-label">How I think</p>
            </div>
            <div className="thinking-grid">
              {thinkingPoints.map((item) => (
                <article key={item.title} className="thinking-column">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-shell">
          <div className="container-max editorial-section">
            <div className="section-intro">
              <p className="section-label">Selected work</p>
              <div className="section-copy body-copy">
                <p>
                  A small set of proof points that show the kind of problems I am drawn to and the way I tend to work
                  through them.
                </p>
              </div>
            </div>

            <div className="story-layout">
              <article className="story-primary">
                <p className="story-eyebrow">{stories[0].eyebrow}</p>
                <div className="story-header">
                  <h2>{stories[0].title}</h2>
                  <a href={stories[0].href} target="_blank" rel="noopener noreferrer">
                    {stories[0].linkLabel}
                  </a>
                </div>
                <p className="story-summary">{stories[0].summary}</p>
                <p className="story-insight">{stories[0].insight}</p>
              </article>

              <div className="story-secondary-stack">
                {stories.slice(1).map((story) => (
                  <article key={story.title} className="story-secondary">
                    <p className="story-eyebrow">{story.eyebrow}</p>
                    <div className="story-header">
                      <h2>{story.title}</h2>
                      <a
                        href={story.href}
                        target={story.href.startsWith('/docs') ? '_blank' : undefined}
                        rel={story.href.startsWith('/docs') ? 'noopener noreferrer' : undefined}
                      >
                        {story.linkLabel}
                      </a>
                    </div>
                    <p className="story-summary">{story.summary}</p>
                    <p className="story-insight">{story.insight}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section-shell--muted">
          <div className="container-max editorial-section">
            <div className="section-intro">
              <p className="section-label">Background</p>
              <div className="section-copy body-copy">
                <p>
                  Most of my career has been spent helping messy products become easier to sell, implement, and use.
                  Different sectors, same recurring pattern.
                </p>
              </div>
            </div>

            <div className="background-grid">
              {background.map((item) => (
                <article key={item.company} className="background-column">
                  <h2>{item.company}</h2>
                  <p className="background-role">{item.role}</p>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="container-max contact-shell contact-shell--editorial">
            <div className="space-y-4">
              <p className="section-label">Connect</p>
              <h2 className="display-subtitle">
                If you&apos;re building in tokenization, onchain products, or adoption and need more product clarity,
                better onboarding, or sharper commercial traction, let&apos;s talk.
              </h2>
              <p className="body-copy">
                I&apos;ll be at ETHCC in Cannes from March 31 to April 5, 2026 and I&apos;m especially interested in
                conversations around tokenization, market infrastructure, wallets, and the operational layer behind
                real adoption.
              </p>
            </div>
            <div className="contact-links">
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
