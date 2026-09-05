import Link from "next/link"
import { profile } from "@/lib/profile"

export function Footer() {
  return (
    <footer className="relative z-10 mt-8 overflow-hidden bg-[var(--ss-footer-bg)] text-[var(--ss-footer-ink)]">
      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7cc4ff73] to-transparent"
        aria-hidden
      />
      <div className="ss-container py-12 sm:py-16">
        <p className="ss-mono text-[11px] text-brand">
          automating quality, one system at a time
        </p>
        <a
          href={profile.emailHref}
          className="mt-3 block break-all font-[family-name:var(--font-display)] text-[clamp(1.35rem,6.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white no-underline transition hover:text-brand"
        >
          {profile.email}
        </a>
        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={profile.emailHref} className="ss-btn ss-btn-primary">
            Let&apos;s talk
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="ss-btn ss-btn-ghost !border-white/30 !bg-transparent !text-white hover:!bg-white/10"
          >
            GitHub
          </a>
          <span className="inline-flex items-center justify-center gap-2 self-start rounded-pill border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-white/80">
            <span className="h-2 w-2 rounded-full bg-live" />
            {profile.availability}
          </span>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="ss-mono mb-3 text-[11px] text-white/40">Portfolio</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/#work" className="no-underline hover:text-white">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#about" className="no-underline hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="no-underline hover:text-white">
                  Skills
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="ss-mono mb-3 text-[11px] text-white/40">Connect</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={profile.github} className="no-underline hover:text-white" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={profile.linkedin} className="no-underline hover:text-white" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.emailHref} className="no-underline hover:text-white">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="ss-mono mb-3 text-[11px] text-white/40">Based in</h4>
            <p className="text-sm text-white/80">{profile.location}</p>
            <p className="mt-2 text-sm text-white/55">
              Final-year B.Tech IT
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full select-none px-3 sm:px-4">
        <p className="ss-foot-word text-[var(--ss-footer-ink)]">
          Rushiraj<span className="text-brand">Birajdar</span>
        </p>
      </div>

      <div className="ss-container mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-4 font-[family-name:var(--font-mono)] text-[11px] font-bold tracking-wide text-white/50">
        <span>rushiraj-dev.fig</span>
        <span>© {new Date().getFullYear()} · Maharashtra, IN</span>
        <Link href="/contact" className="text-white/35 no-underline hover:text-white/70">
          contact
        </Link>
      </div>
    </footer>
  )
}
