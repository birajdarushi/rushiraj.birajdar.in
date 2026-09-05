/** Soft cumulus shapes that continuously drift across the sky */

function Cloud({
  className,
  style,
  flip,
  filterId,
}: {
  className?: string
  style?: React.CSSProperties
  flip?: boolean
  filterId: string
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter
          id={filterId}
          x="-30%"
          y="-40%"
          width="160%"
          height="180%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="b" />
          <feColorMatrix
            in="b"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 1.15 0"
          />
        </filter>
      </defs>
      <g
        fill="var(--ss-cloud-fill, #ffffff)"
        filter={`url(#${filterId})`}
        transform={flip ? "scale(-1,1) translate(-240,0)" : undefined}
      >
        <ellipse cx="72" cy="78" rx="52" ry="32" />
        <ellipse cx="118" cy="68" rx="58" ry="38" />
        <ellipse cx="168" cy="76" rx="48" ry="30" />
        <ellipse cx="95" cy="52" rx="36" ry="28" />
        <ellipse cx="140" cy="48" rx="42" ry="32" />
        <ellipse cx="55" cy="62" rx="28" ry="22" />
        <ellipse cx="185" cy="64" rx="30" ry="22" />
      </g>
    </svg>
  )
}

type CloudSpec = {
  top: string
  w: number
  opacity: number
  dur: string
  delay: string
  layer: "far" | "mid" | "near"
  flip?: boolean
}

const clouds: CloudSpec[] = [
  { top: "6%", w: 200, opacity: 0.55, dur: "90s", delay: "0s", layer: "far" },
  { top: "14%", w: 320, opacity: 0.7, dur: "55s", delay: "-12s", layer: "mid" },
  { top: "22%", w: 180, opacity: 0.5, dur: "100s", delay: "-40s", layer: "far", flip: true },
  { top: "30%", w: 280, opacity: 0.68, dur: "48s", delay: "-8s", layer: "mid" },
  { top: "42%", w: 360, opacity: 0.75, dur: "38s", delay: "-20s", layer: "near" },
  { top: "52%", w: 220, opacity: 0.52, dur: "85s", delay: "-55s", layer: "far", flip: true },
  { top: "62%", w: 300, opacity: 0.65, dur: "50s", delay: "-5s", layer: "mid" },
  { top: "72%", w: 240, opacity: 0.58, dur: "62s", delay: "-28s", layer: "mid", flip: true },
  { top: "82%", w: 340, opacity: 0.72, dur: "42s", delay: "-15s", layer: "near" },
  { top: "10%", w: 160, opacity: 0.45, dur: "110s", delay: "-70s", layer: "far" },
]

export function SkyDecor() {
  return (
    <>
      <div
        className="ss-sky-clouds pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        {clouds.map((c, i) => (
          <div
            key={i}
            className={`ss-cloud-track ss-cloud-track--${c.layer}`}
            style={{
              top: c.top,
              "--cloud-dur": c.dur,
              "--cloud-delay": c.delay,
            } as React.CSSProperties}
          >
            <Cloud
              className="ss-cloud-svg"
              flip={c.flip}
              filterId={`cloudSoft-${i}`}
              style={{
                width: c.w,
                height: "auto",
                opacity: c.opacity,
              }}
            />
          </div>
        ))}
      </div>

      <div className="ss-grain" aria-hidden />

      <div className="ss-haze" aria-hidden />
    </>
  )
}
