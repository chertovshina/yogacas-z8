import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { Kicker } from "@/components/site/ui"
import { articles, after } from "@/lib/content"

export const metadata: Metadata = {
  title: "Teachings & Reflections | Vajra Yoga",
  description: after("articles", "Teachings & Reflections"),
}

export default function ArticlesPage() {
  return (
    <>
      <section className="journal-intro section-pad">
        <Kicker>Articles</Kicker>
        <h1 className="display">
          Teachings &
          <br />
          reflections.
        </h1>
        <p>{after("articles", "Teachings & Reflections")}</p>
      </section>

      <section className="journal-grid section-pad" aria-label="All articles">
        {articles.map((a, i) => (
          <article className={`article-card article-card-${i}`} key={a.slug}>
            <Link href={a.path} className="article-card-image" aria-label={`Read ${a.cardTitle}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.image || "/placeholder.svg"} alt={a.imageAlt} loading={i > 1 ? "lazy" : "eager"} width={1000} height={750} />
              <span className="card-arrow">
                <ArrowUpRight size={27} weight="light" />
              </span>
            </Link>
            <div className="article-card-copy">
              <div className="article-meta">
                <span>{a.category}</span>
                <span>{a.readTime}</span>
              </div>
              <h2>
                <Link href={a.path}>{a.cardTitle}</Link>
              </h2>
              <p>{a.excerpt}</p>
              <time>{a.cardDate || a.date}</time>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
