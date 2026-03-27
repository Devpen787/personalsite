"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/log", label: "Log" },
];

export function Nav() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  const isMargin = pathname === "/margin" || pathname === "/frequency";

  const TurtleMark = ({ active = false }: { active?: boolean }) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ display: "block", color: active ? "var(--accent)" : "currentColor" }}
    >
      <ellipse cx="7" cy="8.2" rx="4.1" ry="3.2" fill="currentColor" opacity="0.92" />
      <circle cx="11.8" cy="8" r="1.1" fill="currentColor" />
      <circle cx="4.4" cy="4.8" r="0.8" fill="currentColor" />
      <circle cx="4.4" cy="11.4" r="0.8" fill="currentColor" />
      <circle cx="8.7" cy="4.8" r="0.8" fill="currentColor" />
      <circle cx="8.7" cy="11.4" r="0.8" fill="currentColor" />
      <path d="M4.9 6.4h4.2M4.9 10h4.2M7 5.4v5.6" stroke="var(--surface)" strokeWidth="0.7" strokeLinecap="round" opacity="0.85" />
      <circle cx="12.2" cy="7.7" r="0.14" fill="var(--surface)" />
    </svg>
  );

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-name">
          devinson.
        </Link>

        {/* Desktop — hidden below sm so it never stacks beside the mobile menu control */}
        <div className="nav-links desktop-nav hidden sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/margin"
            className={`nav-link nav-link-secret ${isMargin ? "active" : ""}`}
            title="Margin"
            aria-label="Margin"
          >
            <span className="nav-secret-mark">
              <TurtleMark active={isMargin} />
            </span>
          </Link>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            type="button"
          >
            {dark ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile: fullscreen menu; only visible below sm breakpoint */}
        <button
          type="button"
          className="theme-toggle mobile-nav flex sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>

        {menuOpen && (
          <div
            id="site-mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            onClick={() => setMenuOpen(false)}
          >
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
            <Link href="/margin" className="nav-link" aria-label="Margin">
              <span className="nav-secret-mark">
                <TurtleMark active={isMargin} />
              </span>
            </Link>
            <button type="button" onClick={toggleTheme} className="btn-outline btn">
              {dark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
