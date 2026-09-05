/**
 * Rushiraj Birajdar - profile content
 */

export const profile = {
  name: "Rushiraj Birajdar",
  shortName: "Rushiraj",
  title: "QA Automation Engineer · Python, Playwright, Pytest",
  location: "Maharashtra, India",
  email: "rushiraj.birajdar@gmail.com",
  emailHref: "mailto:rushiraj.birajdar@gmail.com",
  github: "https://github.com/birajdarushi",
  linkedin: "https://linkedin.com/in/rushirajbirajdar",
  availability: "Automation Engineer at Bynry",
  companyUrl: "https://bynry.com",
  heroClaim: "RELIABLE TEST SYSTEMS, BUILT TO SCALE.",
  heroClaimLines: ["RELIABLE TEST", "SYSTEMS, BUILT", "TO SCALE."] as const,
  heroTagline:
    "I build automation frameworks, developer tooling, and quality systems that help engineering teams ship with confidence.",
  objective:
    "I enjoy taking complex, repetitive, or fragile workflows and turning them into systems that are easier to trust. That is what pulled me toward quality engineering: it combines debugging, product thinking, software design, and the satisfaction of making delivery smoother for everyone involved.",
  experience: [
    {
      role: "QA Automation Engineer",
      org: "Bynry Inc. / SMART360",
      period: "September 2025 - Present",
      detail:
        "Contributing to quality engineering for an enterprise SaaS platform by building automation, validating complex business workflows, and improving confidence across UI, API, and delivery pipelines.",
    },
  ],
  education: [
    {
      degree: "B.Tech in Information Technology (Final Year)",
      school: "Maharashtra, India",
      meta: "CGPA 8.7",
    },
  ],
  skills: {
    craft: [
      "End-to-End Automation",
      "API & Product Quality",
      "QA Tooling & CI",
    ],
    tools: [
      "Python",
      "Pytest",
      "Playwright",
      "Page Object Model",
      "Postman",
      "REST API Testing",
      "GitHub Actions",
      "Jenkins",
      "BrowserStack",
      "Git",
      "SQL",
      "Azure Basics",
      "AWS Basics",
      "OpenTelemetry",
      "JavaScript",
      "Node.js",
      "Next.js",
      "Supabase",
      "Chrome Extension APIs",
    ],
  },
  stats: [
    { value: "3,000+", label: "automated test cases" },
    { value: "15+", label: "product modules covered" },
    { value: "SIH 2024", label: "National Finalist" },
  ],
  services: [
    {
      code: "01",
      title: "End-to-End Automation",
      accent: "Python + Playwright.",
      body: "I build maintainable automation suites around real user workflows: reusable Page Object Models, stable locators, fixtures, and meaningful reporting.",
      tags: ["Playwright", "Pytest", "POM", "CI/CD"],
    },
    {
      code: "02",
      title: "API & Product Quality",
      accent: "Beyond the UI.",
      body: "I validate API behavior, authentication, multi-tenant flows, contract checks, edge cases, and regression risk, not just what the screen shows.",
      tags: ["API Testing", "Postman", "Swagger", "Contracts"],
    },
    {
      code: "03",
      title: "Tools & Delivery",
      accent: "Automation that fits delivery.",
      body: "I care about CI execution, fast feedback, failure diagnosis, cross-browser confidence, and tooling that helps teams ship reliably.",
      tags: ["GitHub Actions", "Jenkins", "BrowserStack", "Reporting"],
    },
  ],
  projects: [
    {
      id: "htreeml",
      slug: "htreeml",
      title: "htreeml",
      description:
        "Open-source Chrome Extension and Node.js pipeline that captures live DOM snapshots, including dynamic UI changes, and turns them into AI-ready context for generating Playwright Page Object Model skeletons.",
      category: "tooling",
      tools: ["JavaScript", "Chrome Extension APIs", "Node.js", "Playwright", "GenAI"],
      cover_url: null,
      images: [],
      featured: true,
      year: 2025,
      client: null,
      published: true,
      sort_order: 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "umeed",
      slug: "umeed",
      title: "U.M.E.E.D.",
      description:
        "Real-time disaster intelligence and information aggregation platform built for Smart India Hackathon 2024, designed to bring fragmented, time-sensitive information into a more useful operational view.",
      category: "product",
      tools: ["Azure", "Backend Services", "APIs", "OpenTelemetry", "Full-stack"],
      cover_url: null,
      images: [],
      featured: true,
      year: 2024,
      client: null,
      published: true,
      sort_order: 2,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "forseti",
      slug: "forseti",
      title: "Forseti Automation Framework",
      description:
        "A scalable Python + Playwright quality automation framework for validating complex SaaS workflows across UI, APIs, and delivery environments, with CI/CD, cross-browser coverage, and quality gates.",
      category: "automation",
      tools: ["Python", "Pytest", "Playwright", "Jenkins", "GitHub Actions", "BrowserStack", "SonarQube", "API Testing"],
      cover_url: null,
      images: [],
      featured: true,
      year: 2025,
      client: null,
      published: true,
      sort_order: 3,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
}

export type Profile = typeof profile
