import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Headphones } from "@phosphor-icons/react/dist/ssr"
import { TextLink } from "@/components/site/ui"
import { ArticleToc } from "@/components/site/article-toc"
import { articles } from "@/lib/content"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: "Page not found | Vajra Yoga" }
  return { title: `${article.title} | Vajra Yoga with Anandi`, description: article.excerpt }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  return (
    <>
      <section className="article-intro section-pad">
        <Link className="back-link" href="/articles">
          <ArrowLeft size={20} weight="light" />
          Back to Articles
        </Link>
        <div className="article-meta">
          <span>{article.category}</span>
          <time>{article.date}</time>
          <span>{article.readTime}</span>
        </div>
        <h1 className="display">{article.title}</h1>
        <p>{article.intro}</p>
      </section>

      <figure className={`article-banner banner-${article.slug}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image || "/placeholder.svg"} alt={article.imageAlt} width={1400} height={800} />
      </figure>

      <div className="article-layout section-pad">
        <ArticleToc headings={article.headings} />
        <article className="reading-column">
          {article.audio && (
            <div className="audio-player">
              <p>
                <Headphones size={23} weight="light" />
                Listen to this article
              </p>
              <audio controls preload="metadata" src={article.audio}>
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          <div className="article-prose" dangerouslySetInnerHTML={{ __html: article.body }} />
        </article>
      </div>

      <div className="article-end section-pad">
        <span>TEACHINGS & REFLECTIONS</span>
        <TextLink to="/articles">Back to Articles</TextLink>
      </div>
    </>
  )
}
