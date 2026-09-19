"use client"

import { useEffect, useRef } from "react"

const TEXT = "Stretch. Strengthen. Relax."
const FONT = "200px Anton"

export function StatementBand() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    let cancelled = false

    const crop = () => {
      if (cancelled || !svg) return
      const ctx = document.createElement("canvas").getContext("2d")
      if (!ctx) return
      ctx.font = FONT
      const m = ctx.measureText(TEXT)
      const x = -m.actualBoundingBoxLeft
      const y = -m.actualBoundingBoxAscent
      const width = m.actualBoundingBoxLeft + m.actualBoundingBoxRight
      const height = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent
      // Crop to the actual letter outlines, including the descending g, not the font line box.
      svg.setAttribute("viewBox", `${x} ${y} ${width} ${height}`)
      svg.setAttribute("width", String(width))
      svg.setAttribute("height", String(height))
    }

    document.fonts.load(FONT, TEXT).then(crop).catch(crop)

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="yoga-stripe" aria-label={TEXT}>
      <svg ref={svgRef} viewBox="0 -180 2200 225" role="img" aria-label={TEXT}>
        <text x="0" y="0" fill="currentColor">
          {TEXT}
        </text>
      </svg>
    </section>
  )
}
