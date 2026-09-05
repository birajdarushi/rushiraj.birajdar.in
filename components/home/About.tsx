import { profile } from "@/lib/profile"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function About() {
  return (
    <section id="about" className="ss-section">
      <div className="ss-container">
        <SectionHeader
          scribble="what&apos;s up"
          title="I build reliable test systems, not just test scripts."
          brandWord="test systems"
          sub="That reaction is the whole job."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <article className="ss-card ss-sel relative p-5 sm:p-7 lg:col-span-7">
            <span className="ss-mono absolute right-4 top-4 text-[9px] text-ink-faint">
              statement.txt
            </span>
            <p className="max-w-[36ch] font-[family-name:var(--font-display)] text-[clamp(1.35rem,2.4vw,2rem)] font-semibold leading-snug tracking-[-0.01em] text-ink">
              I&apos;m{" "}
              <span className="text-brand">{profile.name}</span>, a QA Automation
              Engineer and final-year IT student from {profile.location.split(",")[0]} who
              treats every workflow like it has to{" "}
              <em className="font-[family-name:var(--font-wordmark)] not-italic">
                earn
              </em>{" "}
              the scroll.
            </p>
            <p className="mt-5 max-w-[48ch] text-[15px] font-medium leading-relaxed text-ink-soft">
              {profile.objective}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-pill bg-ink px-3 py-1.5 font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider text-white">
                since training → live production
              </span>
              <span className="rounded-pill border border-[var(--ss-line-2)] bg-soft px-3 py-1.5 text-[10px] font-bold tracking-wide text-ink-soft">
                {profile.availability}
              </span>
            </div>
          </article>

          <article className="ss-card relative overflow-hidden !bg-ink p-6 text-white lg:col-span-5">
            <span className="ss-mono absolute right-4 top-4 text-[9px] text-white/35">
              metrics
            </span>
            <ul className="mt-4 space-y-5">
              {profile.stats.map((s) => (
                <li
                  key={s.label}
                  className="flex items-end justify-between gap-4 border-b border-white/10 pb-4 last:border-0"
                >
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white">
                    {s.value}
                  </span>
                  <span className="max-w-[8rem] text-right font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider text-white/50">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="ss-card p-6 lg:col-span-5">
            <span className="ss-mono text-[9px] text-ink-faint">capabilities</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.skills.craft.map((c) => (
                <span key={c} className="ss-chip">
                  {c}
                </span>
              ))}
            </div>
          </article>

          <article className="ss-card p-6 lg:col-span-7">
            <span className="ss-mono text-[9px] text-ink-faint">
              currently building with
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
              Python · Playwright · Pytest
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.skills.tools.slice(0, 8).map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-[var(--ss-line-2)] bg-[var(--ss-frame)] px-2.5 py-1 text-xs font-semibold text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-medium text-ink-soft">
              and more: Node.js, Next.js, Azure, AWS, OpenTelemetry, Chrome Extension APIs.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
