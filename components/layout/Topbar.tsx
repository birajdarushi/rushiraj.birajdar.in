"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { profile } from "@/lib/profile"

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
]

export function Topbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "pt-3" : "pt-4"
      }`}
    >
      <div className="ss-container flex items-center justify-between gap-3">
        <Link
          href="/"
          className="ss-glass flex items-center rounded-full p-1.5 no-underline"
          aria-label={profile.name}
        >
          <img
            src="/rb-mark.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </Link>

        <nav
          className="ss-glass hidden items-center gap-1 rounded-pill px-2 py-1.5 md:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-pill px-3 py-1.5 text-sm font-semibold text-ink no-underline transition hover:bg-[var(--ss-soft)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.emailHref}
            className="ss-glass hidden rounded-pill px-3 py-2 font-[family-name:var(--font-mono)] text-[11px] font-bold text-ink no-underline md:inline"
          >
            {profile.email}
          </a>
          <button
            type="button"
            className="ss-glass grid h-10 w-10 place-items-center rounded-full md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="ss-mono text-[10px] text-ink">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="ss-container mt-2 md:hidden">
          <nav className="ss-card flex flex-col gap-1 p-3" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-ink no-underline hover:bg-soft"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={profile.emailHref}
              className="rounded-xl px-3 py-3 font-[family-name:var(--font-mono)] text-xs font-bold text-ink-soft no-underline"
            >
              {profile.email}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
