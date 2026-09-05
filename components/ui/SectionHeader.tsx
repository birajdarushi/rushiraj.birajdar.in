type Props = {
  scribble?: string
  title: string
  sub?: string
  align?: "center" | "left"
  brandWord?: string
}

export function SectionHeader({
  scribble,
  title,
  sub,
  align = "center",
  brandWord,
}: Props) {
  const parts = brandWord
    ? title.split(new RegExp(`(${brandWord})`, "i"))
    : [title]

  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {scribble ? <p className="ss-scribble">{scribble}</p> : null}
      <h2 className="ss-display text-[clamp(2.4rem,6.2vw,4.75rem)] text-ink">
        {parts.map((part, i) =>
          brandWord && part.toLowerCase() === brandWord.toLowerCase() ? (
            <span key={i} className="text-brand">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </h2>
      {sub ? (
        <p
          className={`mt-4 max-w-[36ch] text-base font-medium text-ink-soft sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  )
}
