"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/log", label: "Log" },
];

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dotClickCount = useRef(0);
  const dotClickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  function handleDotClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    dotClickCount.current += 1;

    // Reset the timer on each click
    if (dotClickTimer.current) clearTimeout(dotClickTimer.current);

    if (dotClickCount.current >= 3) {
      dotClickCount.current = 0;
      router.push("/frequency");
    } else {
      // Reset count if they stop clicking within 1.5 seconds
      dotClickTimer.current = setTimeout(() => {
        dotClickCount.current = 0;
      }, 1500);
    }
  }

  const isFrequency = pathname === "/frequency";

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-name">
          devinson
          <span
            onClick={handleDotClick}
            style={{
              color: isFrequency ? "var(--accent)" : "inherit",
              cursor: "pointer",
              userSelect: "none",
            }}
            title=""
          >
            .
          </span>
        </Link>

        {/* Desktop */}
        <div className="nav-links desktop-nav">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/docs/devinson-pena-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            CV
          </a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile */}
        <button
          className="theme-toggle mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
          <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
            <button onClick={toggleTheme} className="btn-outline btn">
              {dark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
