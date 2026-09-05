import Link from "next/link"
import { profile } from "@/lib/profile"
import { LiquidDotType } from "@/components/ui/LiquidDotType"

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-28 text-center">
      <div className="ss-glass mb-7 inline-flex items-center gap-2 rounded-pill px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-live shadow-live" />
        <span className="ss-mono text-[11px] text-ink">
          {profile.location} · {profile.availability}
        </span>
      </div>

      <p className="ss-scribble">QA · Automation · Tooling</p>

      <div className="relative mx-auto mt-2 flex w-full max-w-[920px] justify-center">
        <LiquidDotType lines={profile.heroClaimLines} className="w-full" />
      </div>

      <p className="ss-mono mt-5 text-[11px] tracking-[0.14em] text-ink-faint">
        {profile.name} · {profile.title}
      </p>

      <p className="mx-auto mt-7 max-w-[34ch] text-lg font-medium leading-relaxed text-ink-soft sm:text-xl">
        {profile.heroTagline}
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a href={profile.emailHref} className="ss-btn ss-btn-primary">
          Let&apos;s talk
          <span aria-hidden>→</span>
        </a>
        <Link href="/work" className="ss-btn ss-btn-ghost">
          View my work
        </Link>
        <a href="/resume" className="ss-btn ss-btn-dark">
          Download resume
        </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-ink-soft">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-brand transition"
        >
          GitHub
        </a>
        <span className="text-ink-faint">·</span>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-brand transition"
        >
          LinkedIn
        </a>
        <span className="text-ink-faint">·</span>
        <a href={profile.emailHref} className="hover:text-brand transition">
          Email
        </a>
      </div>
    </section>
  )
}
