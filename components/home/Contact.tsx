import { profile } from "@/lib/profile"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Contact() {
  return (
    <section className="ss-section pt-0" id="contact">
      <div className="ss-container text-center">
        <ScrollReveal from="left" delay={0}>
          <p className="ss-scribble">got an idea?</p>
          <h2 className="ss-display text-[clamp(2.6rem,7.4vw,5.5rem)] text-ink">
            Let&apos;s build something reliable.
          </h2>
          <span className="ss-glass mt-4 inline-flex rounded-pill px-4 py-2 font-[family-name:var(--font-mono)] text-[11px] font-bold uppercase tracking-wider text-ink-soft">
            QA Automation · Developer Tooling · AI-ready Workflows
          </span>
        </ScrollReveal>

        <div className="mx-auto mt-10 max-w-xl">
          <p className="text-base font-medium text-ink-soft leading-relaxed">
            Interested in QA automation, developer tooling, or building reliable AI-enabled
            workflows? I&apos;m currently open to opportunities where I can own systems — not just
            test cases.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={profile.emailHref} className="ss-btn ss-btn-primary">
              Talk with me
              <span aria-hidden>→</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="ss-btn ss-btn-ghost"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="ss-btn ss-btn-dark"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-10 border-t border-[var(--ss-line-2)] pt-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-ink-soft">
              <a
                href={profile.emailHref}
                className="hover:text-brand transition"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand transition"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
