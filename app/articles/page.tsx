import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const articles = [
  {
    slug: "muscle-tissue-injuries",
    title: "Muscle Tissue Injuries",
    excerpt: "Understanding common muscle injuries in yoga practice, prevention strategies, and safe recovery approaches for practitioners.",
    image: "/images/article-muscle-injuries.jpg",
    date: "January 20, 2026",
    readTime: "8 min read",
    category: "Anatomy",
  },
  {
    slug: "shatkarmas",
    title: "Shatkarmas",
    excerpt: "Exploring the six traditional yogic cleansing practices and their benefits for purifying body and mind.",
    image: "/images/article-shatkarmas.jpg",
    date: "January 15, 2026",
    readTime: "10 min read",
    category: "Foundations",
  },
  {
    slug: "leg-swing-through",
    title: "Leg Swing-Through",
    excerpt: "A detailed guide to mastering the leg swing-through transition while protecting your spine and joints.",
    image: "/images/article-leg-swing.jpg",
    date: "January 10, 2026",
    readTime: "6 min read",
    category: "Asana",
  },
  {
    slug: "practice-during-your-period",
    title: "Practice During Your Period",
    excerpt: "Guidelines for adapting your yoga practice during menstruation to support your body's natural rhythms.",
    image: "/images/article-period-practice.jpg",
    date: "January 5, 2026",
    readTime: "7 min read",
    category: "Wellness",
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Articles
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground leading-tight mb-6 text-balance">
              Teachings & Reflections
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Educational articles, practice guides, and contemplations on yoga, meditation, and mindful living.
            </p>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group"
              >
                <article className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span className="px-2 py-0.5 bg-accent rounded-full text-accent-foreground text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-card-foreground mb-2 group-hover:text-primary transition-colors text-balance">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
