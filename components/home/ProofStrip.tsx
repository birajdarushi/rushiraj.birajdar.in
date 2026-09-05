import { profile } from "@/lib/profile"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function ProofStrip() {
  return (
    <section className="ss-section pt-0">
      <div className="ss-container">
        <ScrollReveal from="left" delay={0}>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {profile.stats.map((s, i) => (
              <div
                key={s.label}
                className="ss-card p-6 md:p-8"
              >
                <p className="ss-mono text-[11px] text-ink-faint">
                  {i + 1}
                </p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight text-ink">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-medium text-ink-soft">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
