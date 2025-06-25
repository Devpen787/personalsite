import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Exploring the intersection of Web3 technology and practical applications. 
                From decentralized finance to zero-knowledge proofs.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
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
            <div className="text-center mt-16">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Interested in collaborating on a Web3 project?
              </p>
              <a 
                href="/contact" 
                className="btn-primary"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 