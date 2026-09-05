"use client"

import { useEffect, useRef } from "react"

type Props = {
  lines: readonly string[]
  className?: string
}

type Dot = {
  bx: number
  by: number
  x: number
  y: number
  vx: number
  vy: number
  r: number
  shade: number
  phase: number
}

const DOT_COLORS = ["#9A3412", "#C2410C", "#E23A12", "#F0531C", "#FF6A38"]

const MOUSE_RADIUS = 150
const PUSH_STRENGTH = 2.8
const SPRING_STRENGTH = 0.05
const FRICTION = 0.85

export function LiquidDotType({ lines, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const rafRef = useRef(0)
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 })

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    function textWidth(octx: CanvasRenderingContext2D, text: string) {
      const m = octx.measureText(text)
      const left = m.actualBoundingBoxLeft ?? 0
      const right = m.actualBoundingBoxRight ?? m.width
      return Math.max(m.width, left + right)
    }

    function buildDots() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const cssW = Math.max(280, wrap!.clientWidth || 640)
      const cssH = Math.max(240, Math.round(cssW * 0.46))
      sizeRef.current = { w: cssW, h: cssH, dpr }

      canvas!.width = Math.floor(cssW * dpr)
      canvas!.height = Math.floor(cssH * dpr)
      canvas!.style.width = `${cssW}px`
      canvas!.style.height = `${cssH}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const off = document.createElement("canvas")
      off.width = Math.floor(cssW * dpr)
      off.height = Math.floor(cssH * dpr)
      const octx = off.getContext("2d")
      if (!octx) return
      octx.setTransform(dpr, 0, 0, dpr, 0, 0)
      octx.clearRect(0, 0, cssW, cssH)
      octx.fillStyle = "#000"
      octx.textAlign = "center"
      octx.textBaseline = "middle"

      const upper = lines.map((l) => l.toUpperCase())
      const maxTextW = cssW * 0.86
      let fontSize = Math.min(cssW * 0.135, 100)
      octx.font = `800 ${fontSize}px "Bricolage Grotesque", system-ui, sans-serif`

      const widest = () =>
        Math.max(...upper.map((line) => textWidth(octx!, line)), 0)

      while (fontSize > 24 && widest() > maxTextW) {
        fontSize -= 1
        octx.font = `800 ${fontSize}px "Bricolage Grotesque", system-ui, sans-serif`
      }

      const lineCount = upper.length
      const gap = fontSize * 1.05
      const blockH = (lineCount - 1) * gap + fontSize
      const startY = cssH / 2 - blockH / 2 + fontSize * 0.35
      const cx = cssW / 2

      upper.forEach((line, i) => {
        octx.fillText(line, cx, startY + i * gap)
      })

      const img = octx.getImageData(0, 0, off.width, off.height)
      const data = img.data
      const step = Math.max(2, Math.round(1.75 * dpr))
      const raw: Dot[] = []

      for (let y = 0; y < off.height; y += step) {
        const x0 = (Math.floor(y / step) % 2) * Math.floor(step / 2)
        for (let x = x0; x < off.width; x += step) {
          const i = (y * off.width + x) * 4
          const a = data[i + 3] ?? 0
          if (a > 100) {
            const bx = x / dpr
            const by = y / dpr
            raw.push({
              bx,
              by,
              x: bx,
              y: by,
              vx: 0,
              vy: 0,
              r: (0.7 + (a / 255) * 0.75) * (step / dpr) * 0.42,
              shade: (x + y) % DOT_COLORS.length,
              phase: Math.random() * Math.PI * 2,
            })
          }
        }
      }

      if (raw.length) {
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
        for (const d of raw) {
          if (d.bx < minX) minX = d.bx
          if (d.bx > maxX) maxX = d.bx
          if (d.by < minY) minY = d.by
          if (d.by > maxY) maxY = d.by
        }

        const pad = Math.max(12, cssW * 0.04)
        const boxW = Math.max(1, maxX - minX)
        const boxH = Math.max(1, maxY - minY)
        const availW = cssW - pad * 2
        const availH = cssH - pad * 2
        const scale = Math.min(1, availW / boxW, availH / boxH)

        const midX = (minX + maxX) / 2
        const midY = (minY + maxY) / 2
        const targetX = cssW / 2
        const targetY = cssH / 2

        for (const d of raw) {
          d.bx = targetX + (d.bx - midX) * scale
          d.by = targetY + (d.by - midY) * scale
          d.x = d.bx
          d.y = d.by
          d.vx = 0
          d.vy = 0
          d.r *= scale
        }
      }

      dotsRef.current = raw
    }

    function frame() {
      const { w, h } = sizeRef.current
      const dots = dotsRef.current
      const mouse = mouseRef.current
      ctx!.clearRect(0, 0, w, h)

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const fieldOn = mouse.active && !reduceMotion

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]!

        let fx = (d.bx - d.x) * SPRING_STRENGTH
        let fy = (d.by - d.y) * SPRING_STRENGTH

        if (fieldOn) {
          const dx = d.x - mouse.x
          const dy = d.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001

          if (dist < MOUSE_RADIUS) {
            const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * PUSH_STRENGTH
            fx += (dx / dist) * force
            fy += (dy / dist) * force
          }
        }

        d.vx = (d.vx + fx) * FRICTION
        d.vy = (d.vy + fy) * FRICTION
        d.x += d.vx
        d.y += d.vy

        if (Math.abs(d.vx) < 0.01 && Math.abs(d.vy) < 0.01) {
          d.vx = 0
          d.vy = 0
        }

        if (
          !fieldOn &&
          Math.abs(d.x - d.bx) < 0.2 &&
          Math.abs(d.y - d.by) < 0.2 &&
          d.vx === 0 &&
          d.vy === 0
        ) {
          d.x = d.bx
          d.y = d.by
        }

        ctx!.beginPath()
        ctx!.fillStyle = DOT_COLORS[d.shade] ?? "#F0531C"
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx!.fill()
      }

      rafRef.current = requestAnimationFrame(frame)
    }

    buildDots()
    rafRef.current = requestAnimationFrame(frame)

    const ro = new ResizeObserver(() => buildDots())
    ro.observe(wrap)

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => buildDots()).catch(() => {})
    }

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [lines])

  function setMouse(e: React.PointerEvent, active: boolean) {
    const wrap = wrapRef.current
    if (!wrap) return
    const r = wrap.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - r.left,
      y: e.clientY - r.top,
      active,
    }
  }

  return (
    <div
      ref={wrapRef}
      className={`liquid-dot ${className}`.trim()}
      role="heading"
      aria-level={1}
      aria-label={lines.join(" ")}
      onPointerEnter={(e) => setMouse(e, true)}
      onPointerMove={(e) => setMouse(e, true)}
      onPointerLeave={(e) => setMouse(e, false)}
    >
      <canvas ref={canvasRef} className="liquid-dot__canvas" />
    </div>
  )
}
