import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

// Experience data
const web3Experience = [
  {
    id: 1,
    title: 'EthereumZuri.ch',
    period: 'Jan 2025',
    description: 'Attended Switzerland\'s leading Ethereum conference, engaging with multichain interoperability projects and ecosystem conversations connecting Polkadot and Ethereum. Participated in technical sessions focused on identity, messaging standards, and coordination tooling across L1s and L2s.',
    hasNFT: true,
    nftImage: '/images/ethzuri-nft.jpg',
    nftAlt: 'EthereumZuri NFT Badge'
  },
  {
    id: 2,
    title: 'Polkadot Blockchain Academy (PBA-X)',
    period: 'Jan–Feb 2025',
    description: 'Selected for a competitive in person cohort focused on the Polkadot tech stack. Completed immersive training in Substrate development, on chain governance, crypto economic design, and cross chain interoperability. Collaborated with core ecosystem contributors on applied challenges and use cases.',
    hasNFT: true,
    nftImage: '/images/pbax-nft.jpg',
    nftAlt: 'PBA-X NFT Badge'
  },
  {
    id: 3,
    title: 'Zuitzerland',
    period: 'May 2025',
    description: 'Chosen for a two week, curated Web3 residency in the Swiss Alps focused on decentralized trust and coordination. Co developed Zsplit, a wallet authenticated group budgeting tool designed for crypto native communities. Engaged in daily collaboration with builders, researchers, and product thinkers.',
    hasNFT: false
  },
  {
    id: 4,
    title: 'ZüBerlin / ZK Hackathon',
    period: 'Jun 2025',
    description: 'Participated in ZüBerlin 2025, a week long gathering of zero knowledge researchers and developers. Co built zkWerewolf, a privacy preserving multiplayer game that uses ZK principles to simulate hidden roles and game logic without revealing player identity. Explored new UX models for on chain social games under cryptographic constraints.',
    hasNFT: false
  }
]

const web2Experience = [
  {
    id: 1,
    title: 'Digitl Switzerland AG',
    period: '2022–2024',
    description: 'Led the Advertising Technology team during a period of rapid growth, scaling Digitl into the region\'s fastest certified Google partner. Managed a $10M+ revenue pipeline and onboarded over 100 clients through a repeatable framework that aligned sales, product, and operations. Integrated generative AI and automation tools to streamline onboarding and support new client use cases. Built and led a cross functional team of adtech specialists to support strategic growth initiatives.',
    role: 'Team Lead, Advertising Technology'
  },
  {
    id: 2,
    title: 'Trakken',
    period: '2019–2022',
    description: 'Delivered advanced GMP consulting for 100+ clients across industries such as finance, retail, and travel — including enterprise accounts spending over $1M per month. Led a team of consultants, managing hiring, training, and project delivery. Acted as the main liaison to Google Partner Teams, supporting product feedback loops and piloting new GMP features to shape global rollouts.',
    role: 'Team Lead, Advertising Technology Consultant'
  },
  {
    id: 3,
    title: 'Xaxis / GroupM',
    period: '2016–2018',
    description: 'Managed the global media technology pipeline across regional product teams. Worked with the Global Product VP to align strategy with business needs, streamline planning, and develop investment cases for platform expansion. Led executive calls, maintained product roadmaps, and supported high stakes client pitches.',
    role: 'Global Senior Product Program Manager'
  },
  {
    id: 4,
    title: 'Xaxis / GroupM',
    period: '2013–2016',
    description: 'Designed and launched the Xaxis e-Academy, a global enablement platform used by 3,500+ employees across EMEA and North America. Localized onboarding programs for GMP and programmatic tools, and delivered workshops across 10+ markets to improve campaign performance and platform fluency.',
    role: 'Senior Product Enablement & Development Manager'
  }
]



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="section-padding">
          <div className="container-max">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="animate-fade-in">
                  {/* Merged Intro as Hero */}
                  <div className="mb-8 text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed space-y-4">
                    <p>Hi, I&apos;m Devinson Peña. I am a strategist turned builder focused on trust, systems, and meaningful innovation.</p>
                    <p>For over a decade, I led product and strategy teams across Europe and the United States, scaling operations, launching platforms, and driving growth in digital and advertising technology. I have worked with global organizations, trained thousands, and built the frameworks that help teams move faster with more clarity.</p>
                    <p>I made a deliberate decision to step off the conventional path and focus on what matters more: building tools that strengthen coordination, expand access, and reshape how value flows.</p>
                    <p>Today, I work at the intersection of decentralization, creativity, and execution. I build with purpose, lead with structure, and align with people who are not chasing trends but designing what comes next.</p>
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="/Devinson_Pena_Resume.pdf" target="_blank" className="btn-primary">
                      View Resume
                    </a>
                    <a href="#contact" className="btn-secondary">
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Profile Image */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src="/images/Devinson_Photo.jpeg"
                    alt="Devinson Peña"
                    width={320}
                    height={320}
                    priority
                    className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 border-4 border-white dark:border-gray-800 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="card p-8 mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">About Me</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>I'm a New Yorker turned Zurich local, with stops in Boston, Madrid, Cologne, and Düsseldorf along the way. I speak English, Spanish, and German. I think best while running, biking, or dancing to Latin music.</p>
                <p>I've done triathlons and Ironman 70.3s, but mostly I move to stay grounded. I've always been into tech. I grew up breaking and fixing computers. Now I tinker with a laser cutter just to see what I can make out of wood, acrylic, or whatever's around.</p>
                <p>I like building things with good people. If you're working on something interesting, or just figuring it out, say hi.</p>
                <div className="mt-6">
                  <a href="https://x.com/me_darealjev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.477h3.924l-8.56 9.823 10.09 13.223h-7.944l-6.22-8.18-7.13 8.18H.765l9.13-10.44L0 2.477h8.09l5.44 7.16zm-1.12 18.07h2.17L6.64 4.29H4.33z"/></svg>
                    @me_darealjev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Separator */}
        <div className="border-t border-gray-200 dark:border-gray-700"></div>

        {/* Experience Section */}
        <section id="experience" className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Experience
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Bridging traditional business strategy with cutting edge Web3 innovation
              </p>
            </div>

            {/* Web2 / Strategy Experience */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-display font-bold mb-4 flex items-center justify-center">
                  <span className="mr-3">🧠</span>
                  Web2 / Strategy Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Proven track record in digital strategy and business growth
                </p>
              </div>

              <div className="space-y-8">
                {web2Experience.map((exp, index) => (
                  <div key={exp.id} className="card p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{exp.title}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.role}</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download Section */}
            <div className="mb-16">
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Full Resume</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Download my complete resume for detailed experience and qualifications
                </p>
                <a 
                  href="/Devinson_Pena_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </div>

            {/* Web3 / Blockchain Experience */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-display font-bold mb-4 flex items-center justify-center">
                  <span className="mr-3">📡</span>
                  Web3 / Blockchain Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Recent immersion in blockchain technology and decentralized systems
                </p>
              </div>

              <div className="space-y-8">
                {web3Experience.map((exp, index) => (
                  <div key={exp.id} className="card p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-bold">{exp.title}</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How I Can Help & Contact Section */}
        <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                How I Can Help
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Let&apos;s connect and explore opportunities in Web3, strategy, or collaboration
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* How I Can Help Content */}
              <div className="card p-8 mb-16">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                    I'm especially interested in partnering with teams building in decentralized coordination, identity, and trust systems across Web3. I bring 10+ years of experience across go to market strategy (GTM), product enablement, onboarding systems, and partnerships, with a track record of launching and scaling tools in both Web2 and Web3 environments.
                  </p>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                    I can support early stage teams with:
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-lg">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-200">Product market fit exploration and positioning</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-200">GTM planning, onboarding flows, and community growth</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-200">Partnership and ecosystem development</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-200">Translating complex technical concepts into user friendly narratives</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-200">Designing processes for adoption, training, and scale</span>
                    </li>
                  </ul>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                    If you're building in this space and want a partner who can connect the dots between product, users, and growth, I'd love to hear from you.
                  </p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email */}
                <div className="card p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Best for professional inquiries and collaboration opportunities
                  </p>
                  <a 
                    href="mailto:devinsonpena@gmail.com"
                    className="btn-primary w-full"
                  >
                    devinsonpena@gmail.com
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="card p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Connect professionally and stay updated on my latest work
                  </p>
                  <a 
                    href="https://linkedin.com/in/devinsonpena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full"
                  >
                    Connect on LinkedIn
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