import { profile } from "@/lib/profile"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Skills() {
  const categories = [
    {
      label: "Automation Engineering",
      items: [
        "Python",
        "Pytest",
        "Playwright",
        "Page Object Model",
        "Selenium fundamentals",
        "Appium",
        "BrowserStack",
      ],
    },
    {
      label: "API & Quality",
      items: [
        "Postman",
        "REST API Testing",
        "Swagger / OpenAPI",
        "Contract Validation",
        "Test Planning",
        "Defect Triage",
        "Regression Strategy",
      ],
    },
    {
      label: "Delivery & Engineering",
      items: [
        "Git",
        "GitHub Actions",
        "Jenkins",
        "SonarQube",
        "CI/CD",
        "SQL",
        "AWS Basics",
        "Azure Basics",
        "OpenTelemetry",
      ],
    },
    {
      label: "Product & Web",
      items: [
        "JavaScript",
        "Node.js",
        "React fundamentals",
        "Chrome Extension APIs",
        "Next.js",
        "Supabase",
      ],
    },
    {
      label: "Learning Now",
      items: [
        "Go",
        "Advanced Playwright patterns",
        "AI workflow validation",
      ],
      muted: true,
    },
  ]

  return (
    <section id="skills" className="ss-section pt-0">
      <div className="ss-container">
        <SectionHeader
          scribble="tools & craft"
          title="Tools I use to build confidence in software."
          sub="No proficiency bars. Just honest, grouped tags I can discuss in an interview."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <ScrollReveal
              key={cat.label}
              from={i % 2 === 0 ? "left" : "right"}
              delay={80 + i * 100}
            >
              <div className={`ss-card p-6 ${cat.muted ? "opacity-70" : ""}`}>
                <p className="ss-mono text-[11px] text-brand">
                  {cat.label.toUpperCase()}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="ss-chip">
                      {item}
                    </span>
                  ))}
                </div>
                {cat.muted && (
                  <p className="mt-3 text-xs font-medium text-ink-faint">
                    Actively building these — not yet production-ready.
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal from="right" delay={150}>
          <div className="mt-10 text-center">
            <p className="ss-mono text-[11px] text-ink-faint">
              currently learning
            </p>
            <p className="mt-3 text-base font-medium text-ink-soft">
              Building more reliable Playwright automation — without over-relying on AI.
              Improving Go fundamentals. Exploring AI workflow validation and practical QA tooling.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
