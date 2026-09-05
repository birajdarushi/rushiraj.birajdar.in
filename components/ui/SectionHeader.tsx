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
      <h2 className="ss-display text-[clamp(1.85rem,8vw,4.75rem)] text-ink">
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
          className={`mt-3 max-w-[36ch] text-[15px] font-medium leading-relaxed text-ink-soft sm:mt-4 sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  )
}
