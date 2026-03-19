'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true'
    setIsDark(darkModeEnabled)
    if (darkModeEnabled) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const nextValue = !isDark
    setIsDark(nextValue)
    localStorage.setItem('darkMode', String(nextValue))
    document.documentElement.classList.toggle('dark')
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <Link href="/" className="site-title">
          Devinson Peña
        </Link>

        <nav className="site-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'is-active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-controls">
          <Link href="/contact" className="button-primary hidden md:inline-flex">
            Let&apos;s talk
          </Link>

          <button onClick={toggleDarkMode} className="site-icon-button" aria-label="Toggle dark mode">
            {isDark ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="site-icon-button md:hidden"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="site-mobile-nav">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={pathname === item.href ? 'is-active' : ''}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="button-primary mt-1 w-fit">
              Let&apos;s talk
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
