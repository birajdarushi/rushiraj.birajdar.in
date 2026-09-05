import { notFound } from "next/navigation"
import { profile } from "@/lib/profile"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = profile.projects.find((p) => p.slug === slug && p.published)

  if (!project) notFound()

  return (
    <div className="ss-container relative z-10 pt-28 pb-16 sm:pt-32">
      <ScrollReveal from="left" delay={0}>
        <div className="max-w-[760px]">
          <p className="ss-mono text-[11px] text-ink-faint">
            {project.category.toUpperCase()} · {project.year}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2.4rem,6.2vw,4.75rem)] font-bold tracking-tight text-ink">
            {project.title}
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-ink-soft">
            {project.description}
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ScrollReveal from="left" delay={100}>
            <div className="ss-card p-6">
              <p className="ss-mono text-[11px] text-ink-faint">description</p>
              <p className="mt-3 text-base font-medium leading-relaxed text-ink">
                {project.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal from="left" delay={200}>
            <div className="mt-6 ss-card p-6">
              <p className="ss-mono text-[11px] text-ink-faint">tech stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span key={t} className="ss-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal from="left" delay={300}>
            <div className="mt-6 ss-card p-6">
              <p className="ss-mono text-[11px] text-ink-faint">links</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={`https://github.com/birajdarushi/${project.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="ss-btn ss-btn-primary"
                >
                  View on GitHub
                </a>
                {project.cover_url && (
                  <a
                    href={project.cover_url}
                    target="_blank"
                    rel="noreferrer"
                    className="ss-btn ss-btn-ghost"
                  >
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <aside className="lg:col-span-1">
          <ScrollReveal from="right" delay={150}>
            <div className="ss-card p-6">
              <p className="ss-mono text-[11px] text-ink-faint">at a glance</p>
              <dl className="mt-4 space-y-3">
                <dt>
                  <span className="ss-mono text-[10px] text-ink-faint">year</span>
                </dt>
                <dd>{project.year ?? "—"}</dd>
                <dt>
                  <span className="ss-mono text-[10px] text-ink-faint">category</span>
                </dt>
                <dd>{project.category}</dd>
                <dt>
                  <span className="ss-mono text-[10px] text-ink-faint">client</span>
                </dt>
                <dd>{project.client ?? "Personal project"}</dd>
              </dl>
            </div>
          </ScrollReveal>
        </aside>
      </div>
    </div>
  )
}
