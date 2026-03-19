import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Devinson Peña | Web3 Product, Partnerships & Adoption',
  description:
    'Editorial portfolio for Devinson Peña, a Zurich-based Web3 leader focused on product, partnerships, tokenization, and real-world adoption.',
  keywords: ['Web3', 'Tokenization', 'Onchain Products', 'Product Management', 'Strategic Partnerships', 'Adoption'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
} 
