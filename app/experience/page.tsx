import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const web3Experience = [
  {
    id: 1,
    title: 'EthereumZuri.ch',
    period: 'Jan 2025',
    description: 'Attended Switzerland\'s leading Ethereum conference, engaging with multi-chain interoperability projects and ecosystem conversations connecting Polkadot and Ethereum. Participated in technical sessions focused on identity, messaging standards, and coordination tooling across L1s and L2s.',
    hasNFT: true,
    nftImage: '/images/ethzuri-nft.jpg',
    nftAlt: 'EthereumZuri NFT Badge'
  },
  {
    id: 2,
    title: 'Polkadot Blockchain Academy (PBA-X)',
    period: 'Jan–Feb 2025',
    description: 'Selected for a competitive in-person cohort focused on the Polkadot tech stack. Completed immersive training in Substrate development, on-chain governance, crypto-economic design, and cross-chain interoperability. Collaborated with core ecosystem contributors on applied challenges and use cases.',
    hasNFT: true,
    nftImage: '/images/pbax-nft.jpg',
    nftAlt: 'PBA-X NFT Badge'
  },
  {
    id: 3,
    title: 'Zuitzerland',
    period: 'May 2025',
    description: 'Chosen for a two-week, curated Web3 residency in the Swiss Alps focused on decentralized trust and coordination. Co-developed Zsplit, a wallet-authenticated group budgeting tool designed for crypto-native communities. Engaged in daily collaboration with builders, researchers, and product thinkers.',
    hasNFT: false
  },
  {
    id: 4,
    title: 'ZüBerlin / ZK Hackathon',
    period: 'Jun 2025',
    description: 'Participated in ZüBerlin 2025, a week-long gathering of zero-knowledge researchers and developers. Co-built zkWerewolf, a privacy-preserving multiplayer game that uses ZK principles to simulate hidden roles and game logic without revealing player identity. Explored new UX models for on-chain social games under cryptographic constraints.',
    hasNFT: false
  }
]

const web2Experience = [
  {
    id: 1,
    title: 'Digitl Switzerland AG',
    period: '2022–2024',
    description: 'Led the Advertising Technology team during a period of rapid growth, scaling Digitl into the region\'s fastest-certified Google partner. Managed a $10M+ revenue pipeline and onboarded over 100 clients through a repeatable framework that aligned sales, product, and operations. Integrated generative AI and automation tools to streamline onboarding and support new client use cases. Built and led a cross-functional team of adtech specialists to support strategic growth initiatives.',
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
    description: 'Managed the global media technology pipeline across regional product teams. Worked with the Global Product VP to align strategy with business needs, streamline planning, and develop investment cases for platform expansion. Led executive calls, maintained product roadmaps, and supported high-stakes client pitches.',
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

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Experience
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Bridging traditional business strategy with cutting-edge Web3 innovation
              </p>
            </div>

            {/* Web3 / Blockchain Experience */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4 flex items-center justify-center">
                  <span className="mr-3">📡</span>
                  Web3 / Blockchain Experience
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Recent immersion in blockchain technology and decentralized systems
                </p>
              </div>

              <div className="space-y-8">
                {web3Experience.map((exp) => (
                  <div key={exp.id} className="card p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
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
                <h2 className="text-3xl font-display font-bold mb-4 flex items-center justify-center">
                  <span className="mr-3">🧠</span>
                  Web2 / Strategy Experience
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Proven track record in digital strategy and business growth
                </p>
              </div>

              <div className="space-y-8">
                {web2Experience.map((exp) => (
                  <div key={exp.id} className="card p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
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
      </main>
      
      <Footer />
    </div>
  )
} 