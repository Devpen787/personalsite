import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const focusAreas = [
  {
    title: 'Tokenization',
    body:
      'I am focused on how digital asset products become usable in regulated, institution-facing settings, especially when issuance, lifecycle management, and adoption need to hold together.',
  },
  {
    title: 'Onchain products',
    body:
      'I am interested in products that bridge wallets, settlement, and real user behavior rather than treating onchain capability as an end in itself.',
  },
  {
    title: 'Adoption',
    body:
      'My edge is translating product complexity into something teams can ship, customers can understand, and commercial functions can actually support.',
  },
]

const proofBlocks = [
  {
    title: 'CAS Blockchain at HSLU',
    href: '/docs/hslu-cas-paper.pdf',
    cta: 'Open paper',
    summary:
      'Completed the CAS Blockchain at Hochschule Luzern with a research paper on DePIN token design under stress, using Onocoy as an anchor case.',
    bullets: [
      'Studied how token incentive design behaves when growth, retention, and participation weaken.',
      'Focused on the business consequences of emissions design, provider quality, and network resilience.',
      'Worked on the paper with Florian Baumann and Cristian Carvalho.',
      'Useful lens for tokenization, infrastructure products, and adoption in emerging onchain markets.',
    ],
  },
  {
    title: 'ChopDot',
    href: '/docs/chopdot-brief.pdf',
    cta: 'Open brief',
    summary:
      'Co-created a Polkadot-native group expense app that won the global Build Resilient Apps with Polkadot Cloud hackathon.',
    bullets: [
      'Built around the real onboarding gap between wallet-native users and people who have never used one.',
      'Made the settlement loop clearer and lighter instead of shipping feature sprawl.',
      'Hands-on exposure to wallet flows, product trade-offs, and user-facing Web3 payments.',
    ],
  },
  {
    title: 'Builder programs',
    href: 'https://www.linkedin.com/in/devinsonpena/',
    cta: 'LinkedIn',
    summary:
      'Joined builder programs and competitions across Switzerland and Berlin, including ZuBerlin, Zuitzerland, and zkProof Noir-related ecosystem work during Berlin Blockchain Week.',
    bullets: [
      'Strengthened network density across European onchain product and infrastructure circles.',
      'Spent time around the kinds of teams building wallets, coordination tools, and crypto-native UX.',
    ],
  },
]

const experienceHighlights = [
  {
    company: 'Xaxis',
    body:
      'Worked around a global product and technology pipeline, roadmap priorities, and the planning layer around senior product leadership.',
  },
  {
    company: 'Digitl',
    body:
      'Helped align sales, product, and operations around onboarding and expansion in a high-growth adtech environment tied to a $10M+ pipeline and 100+ client onboardings.',
  },
  {
    company: 'Trakken',
    body:
      'Worked directly with complex clients, technical platforms, and executive-facing workshops where the hard part was not just capability, but adoption and clarity.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-100">
      <Header />

      <main className="flex-1">
        <section
          id="home"
          className="section-padding bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.22),_transparent_30%),linear-gradient(180deg,_#120d0b_0%,_#1f1713_45%,_#2c211b_100%)]"
        >
          <div className="container-max">
            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] items-stretch">
              <div className="rounded-[32px] border border-white/10 bg-white/6 p-8 md:p-10 shadow-2xl backdrop-blur">
                <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-orange-300">
                  Zurich-based operator in Web3
                </p>
                <h1 className="max-w-4xl font-display text-5xl font-bold tracking-tight md:text-7xl">
                  Devinson Peña
                </h1>
                <p className="mt-5 max-w-3xl text-lg font-semibold text-orange-100 md:text-2xl">
                  Web3 | Product, Partnerships &amp; GTM | Tokenization, Onchain Products &amp; Adoption
                </p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">
                  I work where technically complex products still need to become clear, usable, and commercially real.
                  My current focus is tokenization, onchain products, and the product-commercial layer that helps
                  adoption happen in practice.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/docs/devinson-pena-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 font-semibold text-stone-950 transition hover:bg-orange-400"
                  >
                    Open CV
                  </a>
                  <a
                    href="/docs/hslu-cas-paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-5 py-3 font-semibold text-stone-100 transition hover:bg-white/10"
                  >
                    Read CAS paper
                  </a>
                  <a
                    href="mailto:devinsonpena@gmail.com"
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-5 py-3 font-semibold text-stone-100 transition hover:bg-white/10"
                  >
                    Email me
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#f6efe4] text-stone-900 shadow-2xl">
                <div className="relative h-[380px] sm:h-[440px]">
                  <Image
                    src="/images/Devinson_Photo.jpeg"
                    alt="Devinson Peña"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 34vw"
                  />
                </div>
                <div className="space-y-3 bg-[#fff8ee] p-6">
                  <p className="font-display text-xs uppercase tracking-[0.22em] text-orange-700">ETHCC</p>
                  <h2 className="font-display text-2xl font-bold">Cannes, March 31 to April 5, 2026</h2>
                  <p className="text-base leading-7 text-stone-700">
                    Happy to connect with teams building tokenization, market infrastructure, wallets, and adoption
                    rails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#f4ede4] text-stone-900">
          <div className="container-max">
            <div className="grid gap-6 lg:grid-cols-[190px_1fr]">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.22em] text-orange-700">Current focus</p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {focusAreas.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-black/8 bg-white/70 p-6 shadow-[0_16px_40px_rgba(29,22,18,0.08)]"
                  >
                    <h2 className="font-display text-2xl font-bold">{item.title}</h2>
                    <p className="mt-3 text-base leading-7 text-stone-700">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="section-padding bg-[#eadfce] text-stone-900">
          <div className="container-max">
            <div className="grid gap-6 lg:grid-cols-[190px_1fr]">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.22em] text-orange-700">Selected proof</p>
              </div>
              <div className="space-y-5">
                {proofBlocks.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-black/8 bg-white/70 p-7 shadow-[0_16px_40px_rgba(29,22,18,0.08)]"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                      <h2 className="font-display text-2xl font-bold">{item.title}</h2>
                      <a
                        href={item.href}
                        target={item.href.startsWith('/docs') ? '_blank' : undefined}
                        rel={item.href.startsWith('/docs') ? 'noopener noreferrer' : undefined}
                        className="font-semibold text-orange-700 hover:text-orange-800"
                      >
                        {item.cta}
                      </a>
                    </div>
                    <p className="mt-3 text-lg leading-8 text-stone-700">{item.summary}</p>
                    <ul className="mt-4 space-y-3 pl-5 text-base leading-7 text-stone-700 marker:text-orange-700">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#f7f1e8] text-stone-900">
          <div className="container-max">
            <div className="grid gap-6 lg:grid-cols-[190px_1fr]">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.22em] text-orange-700">Why me</p>
              </div>
              <div className="rounded-[32px] border border-black/8 bg-white/72 p-8 shadow-[0_16px_40px_rgba(29,22,18,0.08)]">
                <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-4xl">
                  Most of my career has been spent helping messy products become easier to sell, implement, and use.
                </h2>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {experienceHighlights.map((item) => (
                    <div key={item.company}>
                      <h3 className="font-display text-xl font-bold">{item.company}</h3>
                      <p className="mt-2 text-base leading-7 text-stone-700">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding bg-stone-950 text-stone-100">
          <div className="container-max">
            <div className="rounded-[32px] border border-white/10 bg-white/6 p-8 shadow-2xl backdrop-blur md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.22em] text-orange-300">Connect</p>
                  <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
                    I&apos;ll be at ETHCC in Cannes from March 31 to April 5, 2026.
                  </h2>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-200">
                    If you are building in tokenization, market infrastructure, wallets, or product-commercial adoption,
                    I&apos;d be glad to connect for a quick coffee or conversation.
                  </p>
                </div>
                <div className="grid gap-3 text-lg">
                  <a className="font-semibold text-orange-200 hover:text-orange-100" href="mailto:devinsonpena@gmail.com">
                    devinsonpena@gmail.com
                  </a>
                  <a
                    className="font-semibold text-orange-200 hover:text-orange-100"
                    href="https://www.linkedin.com/in/devinsonpena/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="font-semibold text-orange-200 hover:text-orange-100"
                    href="/docs/devinson-pena-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CV
                  </a>
                  <a
                    className="font-semibold text-orange-200 hover:text-orange-100"
                    href="/docs/hslu-cas-paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paper
                  </a>
                  <a
                    className="font-semibold text-orange-200 hover:text-orange-100"
                    href="/docs/chopdot-brief.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ChopDot brief
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
