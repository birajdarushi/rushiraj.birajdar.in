import { profile } from "@/lib/profile"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function WhatIDo() {
  return (
    <section id="work" className="ss-section pt-0">
      <div className="ss-container">
        <ScrollReveal from="left" delay={0}>
          <SectionHeader
            scribble="what I bring"
            title="Quality engineering beyond test execution."
            sub="I enjoy the engineering side of quality: designing test architecture, understanding product behavior, improving feedback loops, and removing the repetitive work that slows teams down."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {profile.services.map((s, i) => (
            <ScrollReveal
              key={s.code}
              from={i % 2 === 0 ? "left" : "right"}
              delay={80 + i * 120}
            >
              <article className="ss-card ss-sel flex flex-col p-6">
                <span className="ss-mono text-[11px] text-brand">{s.code}</span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink">
                  {s.title}
                  <span className="block text-lg font-semibold text-brand">
                    {s.accent}
                  </span>
                </h3>
                <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-ink-soft">
                  {s.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="ss-chip !text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
