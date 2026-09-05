import Link from "next/link"
import { profile } from "@/lib/profile"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Work() {
  const projects = profile.projects.filter((p) => p.published)

  return (
    <section id="projects" className="ss-section pt-0">
      <div className="ss-container">
        <ScrollReveal from="left" delay={0}>
          <SectionHeader
            scribble="selected work"
            title="Featured projects"
            sub="A mix of quality engineering, developer tooling, cloud-backed product work, and fast product experimentation."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ScrollReveal
              key={p.id}
              from={i % 2 === 0 ? "left" : "right"}
              delay={80 + i * 120}
            >
              <article className="ss-card group flex flex-col overflow-hidden no-underline transition hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-sky-1 to-ink">
                  {p.cover_url ? (
                    <img
                      src={p.cover_url}
                      alt={p.title}
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-end p-5">
                      <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-white/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                  <span className="absolute right-3 top-3 rounded bg-[var(--ss-frame)]/95 px-2 py-1 font-[family-name:var(--font-mono)] text-[10px] font-bold text-ink shadow-sm ring-1 ring-[var(--ss-line-2)]">
                    {p.year ?? "-"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="ss-mono text-[10px] text-ink-faint">
                    /{String(i + 1).padStart(2, "0")} · {p.category}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm font-medium text-ink-soft">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tools.slice(0, 4).map((t) => (
                      <span key={t} className="ss-chip !py-0.5 !text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href={`/work/${p.slug}`}
                      className="ss-btn ss-btn-primary !py-1.5 !px-3 !text-sm"
                    >
                      Details
                    </Link>
                    {p.id === "htreeml" && (
                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        className="ss-btn ss-btn-ghost !py-1.5 !px-3 !text-sm"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
