import Header from '@/components/Header'
import Footer from '@/components/Footer'

const timeline = [
  {
    company: 'Digitl Switzerland AG',
    role: 'Team Lead, Advertising Technology',
    period: '2022-2024',
    body:
      'Led the ad technology function during a period of rapid growth, aligning sales, product, and operations around a repeatable onboarding model tied to a $10M+ pipeline and more than 100 client onboardings.',
  },
  {
    company: 'Trakken',
    role: 'Team Lead, Advertising Technology Consultant',
    period: '2019-2022',
    body:
      'Worked with large and mid-sized clients across complex GMP environments, translating platform capability into stronger adoption, clearer implementation, and executive-level decisions.',
  },
  {
    company: 'Xaxis / GroupM',
    role: 'Global Senior Product Program Manager',
    period: '2016-2018',
    body:
      'Supported a global media technology pipeline, roadmap planning, and senior product leadership across a large distributed organization.',
  },
  {
    company: 'Xaxis / GroupM',
    role: 'Senior Product Enablement & Development Manager',
    period: '2013-2016',
    body:
      'Built enablement systems, onboarding programs, and workshops that helped teams across multiple markets understand and use complex adtech products more effectively.',
  },
]

export default function Experience() {
  return (
    <div className="page-root">
      <Header />

      <main className="flex-1">
        <section className="section-shell">
          <div className="container-max stack-lg">
            <div className="page-hero">
              <p className="section-label">Background</p>
              <h1 className="display-subtitle">The through-line in my work has been clarity under complexity.</h1>
              <p className="page-hero__copy">
                My background is not a straight crypto career story. It is a product, GTM, enablement, and
                stakeholder-alignment story that increasingly moved toward the kinds of systems where trust, incentives,
                and workflow design matter most.
              </p>
              <div className="chip-row">
                <span className="meta-chip">Product</span>
                <span className="meta-chip">GTM</span>
                <span className="meta-chip">Enablement</span>
                <span className="meta-chip">Onboarding</span>
              </div>
            </div>

            <div className="timeline-stack">
              {timeline.map((item) => (
                <article key={`${item.company}-${item.period}`} className="timeline-card">
                  <div className="timeline-card__meta">
                    <p className="section-label">{item.period}</p>
                    <h2>{item.company}</h2>
                    <p className="timeline-card__role">{item.role}</p>
                  </div>
                  <p className="timeline-card__body">{item.body}</p>
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
