import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

// Experience data
const web3Experience = [
  {
    id: 1,
    title: 'Polkadot Blockchain Academy (PBA-X)',
    period: 'Jan–Feb 2025',
    description: 'Intensive training in Substrate, governance, crypto-economics, and interoperability.',
    hasNFT: true,
    nftImage: '/images/pbax-nft.jpg',
    nftAlt: 'PBA-X NFT Badge'
  },
  {
    id: 2,
    title: 'Zuitzerland 2025',
    period: '2025',
    description: 'Built "Zsplit," a budgeting tool for trust-based, wallet-auth communities using JAM stack.',
    hasNFT: false
  },
  {
    id: 3,
    title: 'EthereumZuri.ch 2025',
    period: '2025',
    description: 'Participated in the EthereumZuri conference, engaged with Polkadot\'s cross-chain tech.',
    hasNFT: true,
    nftImage: '/images/ethzuri-nft.jpg',
    nftAlt: 'EthereumZuri NFT Badge'
  },
  {
    id: 4,
    title: 'NFT + Maker Projects',
    period: '2024–Present',
    description: 'Currently launching a product that bridges physical laser engraving with blockchain authenticity.',
    hasNFT: false
  }
]

const web2Experience = [
  {
    id: 1,
    title: 'Digitl Switzerland',
    period: '2022–2024',
    description: 'Led adtech onboarding, integrated GenAI, scaled to $10M+ revenue, 100+ clients.',
    role: 'Strategy & Growth Lead'
  },
  {
    id: 2,
    title: 'Trakken',
    period: '2019–2022',
    description: 'Global GMP consultant, audience strategy, dynamic remarketing, 100+ clients.',
    role: 'Global GMP Consultant'
  },
  {
    id: 3,
    title: 'Xaxis / GroupM',
    period: '2013–2018',
    description: 'Built Xaxis e-Academy, trained 3,500+ internal users, launched enablement platforms across EMEA & US.',
    role: 'Training & Enablement Lead'
  }
]

// Projects data
const projects = [
  {
    id: 1,
    title: 'Zsplit',
    description: 'Group expense tracker for decentralized communities, built at Zuitzerland 2025',
    tech: ['Supabase', 'Next.js', 'Privy', 'JAM (Polkadot)'],
    status: 'Completed',
    image: '/images/zsplit-preview.jpg'
  },
  {
    id: 2,
    title: 'zkWerewolf',
    description: 'Zero-knowledge identity game built at ZK Hack Berlin',
    tech: ['ZK simulation', 'Hidden-role logic', 'Multiplayer UX'],
    status: 'Completed',
    image: '/images/zkwerewolf-preview.jpg'
  },
  {
    id: 3,
    title: 'SwissWoodMaps',
    description: 'Laser-cut map art linked to NFTs and blockchain metadata of Swiss regions',
    tech: ['xTool F1', 'Wallet payments', 'NFT integration'],
    status: 'In Progress',
    image: '/images/swisswoodmaps-preview.jpg'
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
                    <p>Hi, I&apos;m Devinson Peña. I build systems that connect people, technology, and trust.</p>
                    <p>For over a decade, I led global teams in digital strategy and advertising technology. Today, I&apos;m exploring what comes next, working at the edges of decentralization, community tooling, and creative technology.</p>
                    <p>I believe curiosity is a superpower. I use it to imagine better systems, design meaningful tools, and help shape a future that feels more human and more fair.</p>
                    <p>This site is where my ideas live, my projects grow, and my path forward stays open.</p>
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#projects" className="btn-primary">
                      See Projects
                    </a>
                    <a href="/Devinson_Pena_Resume.pdf" target="_blank" className="btn-secondary">
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

        {/* Quick Stats Section */}
        <section className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-300">Web3 Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
                <div className="text-gray-600 dark:text-gray-300">Clients Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Experience
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Bridging traditional business strategy with cutting-edge Web3 innovation
              </p>
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
                      
                      {exp.hasNFT && (
                        <div className="lg:w-32 flex-shrink-0">
                          <div className="w-full aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <p className="text-white text-xs text-center">NFT Badge</p>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                            On-chain proof
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Exploring the intersection of Web3 technology and practical applications. 
                From decentralized finance to zero-knowledge proofs.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {projects.map((project, index) => (
                <div key={project.id} className="card p-6 hover:scale-105 transition-transform duration-300">
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                    <p className="text-white font-medium">{project.title} Preview</p>
                  </div>
                  
                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Interested in collaborating on a Web3 project?
              </p>
              <a href="#contact" className="btn-primary">
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Contact
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Let&apos;s connect and explore opportunities in Web3, strategy, or collaboration
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

              {/* Web3 Contact */}
              <div className="card p-8 text-center mb-16">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Web3 & Blockchain</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  For Web3 collaborations, NFT projects, or blockchain discussions
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">ENS Address (Coming Soon)</p>
                    <p className="font-mono text-gray-700 dark:text-gray-300">devinson.eth</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Wallet Address</p>
                    <p className="font-mono text-gray-700 dark:text-gray-300 text-sm">
                      0x1234...5678
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-center mb-8">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      placeholder="What&apos;s this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
                      placeholder="Tell me about your project or collaboration idea..."
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 