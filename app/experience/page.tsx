import Header from '@/components/Header'
import Footer from '@/components/Footer'

const timeline = [
  {
    company: 'Digitl Switzerland AG',
    role: 'Team Lead, Advertising Technology',
    period: '2022–2024',
    body:
      'Led the ad technology function during a period of rapid growth, helping align sales, product, and operations around a repeatable onboarding model tied to a $10M+ pipeline and more than 100 client onboardings.',
  },
  {
    company: 'Trakken',
    role: 'Team Lead, Advertising Technology Consultant',
    period: '2019–2022',
    body:
      'Worked with large and mid-sized clients across complex GMP environments, translating platform capability into stronger adoption, clearer implementation, and executive-level decisions.',
  },
  {
    company: 'Xaxis / GroupM',
    role: 'Global Senior Product Program Manager',
    period: '2016–2018',
    body:
      'Supported a global media technology pipeline, roadmap planning, and senior product leadership across a large distributed organization.',
  },
  {
    company: 'Xaxis / GroupM',
    role: 'Senior Product Enablement & Development Manager',
    period: '2013–2016',
    body:
      'Built enablement systems, onboarding programs, and workshops that helped teams across multiple markets understand and use complex adtech products more effectively.',
  },
]

export default function Experience() {
  return (
    <div className="page-root">
      <Header />

      <main className="flex-1">
        <section className="section-shell pt-12 md:pt-16">
          <div className="section-grid">
            <div className="section-label">Background</div>
            <div className="space-y-5">
              <h1 className="display-subtitle">The through-line in my work has been clarity under complexity.</h1>
              <div className="body-copy">
                <p>
                  My background is not a straight crypto career story. It is a product, GTM, enablement, and
                  stakeholder-alignment story that increasingly moved toward the kinds of systems where trust,
                  incentives, and workflow design matter most.
                </p>
                <p>
                  What connects the roles below is the same recurring problem: strong technical capability is not enough
                  if the people around it cannot understand it, implement it, or act on it with confidence.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-shell mt-12">
            {timeline.map((item) => (
              <article key={`${item.company}-${item.period}`} className="timeline-row">
                <div className="timeline-meta">
                  <h2>{item.company}</h2>
                  <p>{item.role}</p>
                  <span>{item.period}</span>
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
