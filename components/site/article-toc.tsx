"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowDown, ArrowLeft } from "@phosphor-icons/react"

export function ArticleToc({ headings }: { headings: { label: string; id: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <aside className="article-toc">
      <button className="toc-toggle" aria-expanded={open} aria-controls="article-contents" onClick={() => setOpen(!open)}>
        In this article
        <ArrowDown size={18} weight="light" />
      </button>
      <nav id="article-contents" aria-label="Article contents" className={open ? "toc-open" : ""}>
        {headings.map((h) => (
          <a href={`#${h.id}`} onClick={() => setOpen(false)} key={h.id}>
            {h.label}
          </a>
        ))}
      </nav>
      <Link href="/articles" className="back-link">
        <ArrowLeft size={17} />
        All articles
      </Link>
    </aside>
  )
}
