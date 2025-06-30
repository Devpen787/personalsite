import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

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