"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const FREQUENCY_KEY = "personalsite-frequency-unlocked";

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
  const [frequencyUnlocked, setFrequencyUnlocked] = useState(false);
  const dotClickCount = useRef(0);
  const dotClickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const persistFrequencyUnlock = useCallback(() => {
    try {
      localStorage.setItem(FREQUENCY_KEY, "1");
    } catch {
      /* ignore */
    }
    setFrequencyUnlocked(true);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    try {
      if (localStorage.getItem(FREQUENCY_KEY) === "1" || pathname === "/frequency") {
        setFrequencyUnlocked(true);
        if (pathname === "/frequency") {
          localStorage.setItem(FREQUENCY_KEY, "1");
        }
      }
    } catch {
      if (pathname === "/frequency") {
        setFrequencyUnlocked(true);
      }
    }
  }, [pathname]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  function registerDotClick() {
    dotClickCount.current += 1;
    if (dotClickTimer.current) {
      clearTimeout(dotClickTimer.current);
    }
    if (dotClickCount.current >= 3) {
      dotClickCount.current = 0;
      persistFrequencyUnlock();
      router.push("/frequency");
    } else {
      dotClickTimer.current = setTimeout(() => {
        dotClickCount.current = 0;
      }, 1500);
    }
  }

  function handleDotClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    registerDotClick();
  }

  const isFrequency = pathname === "/frequency";

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-name">
          devinson
          <span
            onClick={handleDotClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
                registerDotClick();
              }
            }}
            role="button"
            tabIndex={0}
            style={{
              color: frequencyUnlocked || isFrequency ? "var(--accent)" : "inherit",
              cursor: "pointer",
              userSelect: "none",
            }}
            aria-label="Secret link hint"
          >
            .
          </span>
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
          {frequencyUnlocked && (
            <Link
              href="/frequency"
              className={`nav-link nav-link-secret font-mono ${pathname === "/frequency" ? "active" : ""}`}
              style={{ letterSpacing: "0.05em" }}
              title="Frequency"
            >
              ~
            </Link>
          )}
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
            {frequencyUnlocked && (
              <Link href="/frequency" className="nav-link font-mono">
                ~
              </Link>
            )}
            <button type="button" onClick={toggleTheme} className="btn-outline btn">
              {dark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
