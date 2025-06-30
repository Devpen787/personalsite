'use client';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Contact
              </h1>
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
              <div className="card p-8 text-center">
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
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 