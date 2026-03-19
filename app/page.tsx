import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const thinkingPoints = [
  {
    title: 'Onboarding is usually the real bottleneck',
    body:
      'If the path is unclear in the first few minutes, adoption stalls long before the underlying product gets a fair chance.',
  },
  {
    title: 'Incentives are not the same thing as demand',
    body:
      'If usage only works while token prices are supportive, the product has not yet earned real pull.',
  },
  {
    title: 'Operational trust matters as much as technology',
    body:
      'Institutions and serious users do not just assess the asset or protocol. They assess the workflow around it.',
  },
]

const proofStories = [
  {
    title: 'CAS Blockchain at HSLU',
    href: '/docs/hslu-cas-paper.pdf',
    linkLabel: 'Read paper',
    body: [
      'I completed the CAS Blockchain at Hochschule Luzern with a research paper on DePIN tokenomics under stress, using the Onocoy network as an anchor case.',
      'What mattered most to me was not the narrative around growth, but what happens when retention weakens, participation slows, and the system has to keep working anyway.',
      'That work sharpened how I think about tokenization, incentives, and product credibility when markets become less forgiving.',
    ],
  },
  {
    title: 'ChopDot',
    href: '/docs/chopdot-brief.pdf',
    linkLabel: 'Read brief',
    body: [
      'ChopDot started as a practical question: what breaks first when people try to coordinate group expenses through wallets instead of familiar Web2 tools?',
      'The interesting part was never just settlement. It was the trust layer around it: who understands what is happening, who is comfortable acting, and where confidence drops off.',
      'That made it useful as a live product experiment in coordination, clarity, and wallet friction, not just a hackathon artifact.',
    ],
  },
  {
    title: 'Builder programs across Switzerland and Berlin',
    href: '/projects#events',
    linkLabel: 'See events',
    body: [
      'I joined builder programs and ecosystem gatherings including Zuitzerland, ZuBerlin, and related events around ETHGlobal, ETHCC, Breaking DePIN, and CV Summit to get closer to how onchain products are actually being built and tested.',
      'Those settings mattered less as badges and more as working environments: they exposed how product decisions, community expectations, and technical constraints collide in practice.',
    ],
  },
]

const background = [
  {
    company: 'Xaxis',
    role: 'Global Senior Product Program Manager',
    period: '2016–2018',
    body:
      'Worked around a global product and technology pipeline, roadmap priorities, and the planning layer around senior product leadership.',
  },
  {
    company: 'Digitl',
    role: 'Team Lead, Advertising Technology',
    period: '2022–2024',
    body:
      'Helped align sales, product, and operations around onboarding and expansion in a high-growth environment tied to a $10M+ pipeline and 100+ client onboardings.',
  },
  {
    company: 'Trakken',
    role: 'Team Lead, Advertising Technology Consultant',
    period: '2019–2022',
    body:
      'Worked directly with complex clients, technical platforms, and executive-facing workshops where the hard part was not just capability, but adoption and clarity.',
  },
]

export default function Home() {
  return (
    <div className="page-root">
      <Header />

      <main className="flex-1">
        <section id="home" className="section-shell pt-12 md:pt-16">
          <div className="content-grid">
            <div className="space-y-7">
              <p className="kicker">Zurich-based operator in Web3</p>
              <div className="space-y-5">
                <h1 className="display-title">Devinson Peña</h1>
                <p className="hero-statement">
                  I work on the product-commercial layer where Web3 products need to become clear, usable, and worth
                  adopting.
                </p>
              </div>

              <div className="space-y-5 body-large text-balance">
                <p>
                  Over the last decade, I have worked across product, partnerships, GTM, onboarding, and delivery in
                  environments where the hard part was rarely the capability itself. The hard part was making complex
                  products legible enough for teams to sell, implement, and trust.
                </p>
                <p>
                  I am now applying that same lens to tokenization, onchain products, and the operational layer behind
                  real adoption. I am based in Zurich, I work across English, Spanish, and German, and I tend to think
                  best when the problem is still a little messy.
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
            </div>

            <aside className="hero-portrait-shell">
              <div className="portrait-frame">
                <Image
                  src="/images/Devinson_Photo.jpeg"
                  alt="Devinson Peña"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 36vw"
                />
              </div>
              <div className="portrait-note">
                <p className="kicker">Now</p>
                <p>
                  Focused on tokenization, onchain products, and the part of product work where trust, workflow, and
                  adoption either hold together or fall apart.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-shell">
          <div className="section-grid">
            <div className="section-label">What I&apos;m focused on now</div>
            <div className="section-copy body-copy">
              <p>
                The most interesting work for me sits between technical possibility and real-world use. I am especially
                interested in tokenization, onchain products, and workflow design in places where operational trust
                matters as much as the underlying technology.
              </p>
              <p>
                That includes the onboarding path, the clarity of the user journey, and the commercial reality around
                whether a product can actually become part of someone&apos;s workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell section-shell--muted">
          <div className="section-grid">
            <div className="section-label">How I think</div>
            <div className="thesis-grid">
              {thinkingPoints.map((item) => (
                <article key={item.title} className="thesis-block">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-shell">
          <div className="section-grid">
            <div className="section-label">Selected work</div>
            <div className="story-stack">
              {proofStories.map((story) => (
                <article key={story.title} className="story-block">
                  <div className="story-header">
                    <h2>{story.title}</h2>
                    <a
                      href={story.href}
                      target={story.href.startsWith('http') || story.href.startsWith('/docs') ? '_blank' : undefined}
                      rel={story.href.startsWith('http') || story.href.startsWith('/docs') ? 'noopener noreferrer' : undefined}
                    >
                      {story.linkLabel}
                    </a>
                  </div>
                  <div className="body-copy">
                    {story.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-shell--muted">
          <div className="section-grid">
            <div className="section-label">Background</div>
            <div className="section-copy body-copy">
              <p>
                Most of my career has been spent helping messy products become easier to sell, implement, and use. The
                surface area changes, but the pattern does not: when teams are misaligned, when workflows are unclear,
                or when adoption is still too fragile, that is usually where I can help most.
              </p>
            </div>
          </div>
          <div className="timeline-shell">
            {background.map((item) => (
              <article key={`${item.company}-${item.period}`} className="timeline-row">
                <div className="timeline-meta">
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                  <span>{item.period}</span>
                </div>
                <p className="body-copy">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="contact-shell">
            <div className="space-y-4">
              <p className="kicker">Connect</p>
              <h2 className="display-subtitle">
                If you&apos;re building in tokenization, onchain products, or adoption and want sharper product clarity,
                onboarding, or commercial traction, let&apos;s talk.
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
