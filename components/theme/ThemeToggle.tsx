"use client"

import { useTheme } from "@/components/theme/ThemeProvider"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggle}
      className={`ss-glass inline-flex h-10 items-center gap-2 rounded-pill px-3 text-sm font-semibold text-ink no-underline transition hover:opacity-90 ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span aria-hidden className="text-base leading-none">
        {isDark ? "☀" : "☾"}
      </span>
      <span className="hidden font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider sm:inline">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  )
}
