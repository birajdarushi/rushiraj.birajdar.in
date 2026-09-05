import Link from "next/link"
import { profile } from "@/lib/profile"
import { LiquidDotType } from "@/components/ui/LiquidDotType"

export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center px-4 pb-12 pt-[5.5rem] text-center sm:pb-16 sm:pt-28 md:min-h-[100svh] md:justify-center">
      <div className="ss-glass mb-5 inline-flex max-w-full items-center gap-2 rounded-pill px-3 py-2 sm:mb-7 sm:px-4">
        <span className="h-2 w-2 shrink-0 rounded-full bg-live shadow-live" />
        <span className="ss-mono text-[10px] leading-tight text-ink sm:text-[11px]">
          <span className="sm:hidden">India · {profile.availability}</span>
          <span className="hidden sm:inline">
            {profile.location} · {profile.availability}
          </span>
        </span>
      </div>

      <p className="ss-scribble">QA · Automation · Tooling</p>

      <div className="relative mx-auto mt-1 flex w-full max-w-[920px] justify-center sm:mt-2">
        <LiquidDotType lines={profile.heroClaimLines} className="w-full" />
      </div>

      <p className="ss-mono mt-4 max-w-[22rem] text-[10px] leading-relaxed tracking-[0.12em] text-ink-faint sm:mt-5 sm:max-w-none sm:text-[11px] sm:tracking-[0.14em]">
        <span className="block sm:inline">{profile.name}</span>
        <span className="hidden sm:inline"> · </span>
        <span className="block sm:hidden">QA Automation Engineer</span>
        <span className="hidden sm:inline">{profile.title}</span>
      </p>

      <p className="mx-auto mt-5 max-w-[34ch] text-base font-medium leading-relaxed text-ink-soft sm:mt-7 sm:text-lg md:text-xl">
        {profile.heroTagline}
      </p>

      <div className="ss-cta-row mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9">
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

      <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-ink-soft sm:mt-10">
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
