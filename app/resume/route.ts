import { profile } from "@/lib/profile"

export async function GET() {
  const lines = [
    profile.name.toUpperCase(),
    `${profile.location} | ${profile.email} | ${profile.github}`,
    `Title: ${profile.title}`,
    `Availability: ${profile.availability}`,
    "",
    "OBJECTIVE",
    profile.objective,
    "",
    "SKILLS",
    `Automation: ${profile.skills.craft.join(", ")}`,
    `Tools: ${profile.skills.tools.join(", ")}`,
    "",
    "EXPERIENCE",
    ...profile.experience.flatMap((e) => [
      `• ${e.role} — ${e.org} (${e.period})`,
      `  ${e.detail}`,
    ]),
    "",
    "EDUCATION",
    ...profile.education.map(
      (e) => `• ${e.degree} — ${e.school}${e.meta ? ` (${e.meta})` : ""}`
    ),
    "",
    "PROJECTS",
    ...profile.projects.map((p) => `• ${p.title} — ${p.description.substring(0, 80)}...`),
    "",
    "CONTACT",
    `Email: ${profile.email}`,
    `GitHub: ${profile.github}`,
    `LinkedIn: ${profile.linkedin}`,
  ]

  const body = lines.join("\n")
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="Rushiraj-Birajdar-Resume.txt"',
      "Cache-Control": "public, max-age=3600",
    },
  })
}
