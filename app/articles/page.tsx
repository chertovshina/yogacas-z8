import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const featuredArticle = {
  slug: "understanding-vajra-yoga",
  title: "Understanding Vajra Yoga: A Complete Guide for Beginners",
  excerpt: "Discover the rich history, philosophy, and transformative practices of Vajra Yoga. This comprehensive guide will help you understand what makes this ancient tradition unique and how it can benefit your modern life.",
  image: "/images/vajra-practice.jpg",
  date: "January 15, 2026",
  readTime: "12 min read",
  category: "Foundations",
}

const articles = [
  {
    slug: "morning-breathing-techniques",
    title: "5 Morning Breathing Techniques to Start Your Day",
    excerpt: "Simple pranayama practices that can transform your mornings and set a positive tone for the entire day.",
    image: "/images/blog-breathing.jpg",
    date: "January 10, 2026",
    readTime: "6 min read",
    category: "Pranayama",
  },
  {
    slug: "cultivating-mindfulness",
    title: "Cultivating Mindfulness in Daily Life",
    excerpt: "Learn how to bring the awareness you develop on the mat into every moment of your everyday life.",
    image: "/images/blog-mindfulness.jpg",
    date: "January 5, 2026",
    readTime: "8 min read",
    category: "Mindfulness",
  },
  {
    slug: "morning-yoga-routine",
    title: "A Gentle Morning Yoga Routine",
    excerpt: "Wake up your body and mind with this nurturing 20-minute sequence designed for all levels.",
    image: "/images/blog-morning.jpg",
    date: "December 28, 2025",
    readTime: "5 min read",
    category: "Asana",
  },
  {
    slug: "yoga-in-nature",
    title: "The Benefits of Practicing Yoga in Nature",
    excerpt: "Explore how taking your practice outdoors can deepen your connection to both yourself and the world around you.",
    image: "/images/blog-nature.jpg",
    date: "December 20, 2025",
    readTime: "7 min read",
    category: "Lifestyle",
  },
  {
    slug: "meditation-beginners",
    title: "Meditation for Absolute Beginners",
    excerpt: "A compassionate guide to starting a meditation practice, even if you think you cannot sit still.",
    image: "/images/about-yoga.jpg",
    date: "December 15, 2025",
    readTime: "9 min read",
    category: "Meditation",
  },
  {
    slug: "healing-power-breath",
    title: "The Healing Power of Conscious Breath",
    excerpt: "Understanding how breathwork can release stored tension and emotions from the body.",
    image: "/images/hero-yoga.jpg",
    date: "December 10, 2025",
    readTime: "10 min read",
    category: "Pranayama",
  },
]

const categories = ["All", "Foundations", "Asana", "Pranayama", "Meditation", "Mindfulness", "Lifestyle"]

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

      {/* Categories */}
      

      {/* Featured Article */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <Link href={`/articles/${featuredArticle.slug}`} className="group block">
            
          </Link>
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

      {/* Newsletter Section */}
      

      <Footer />
    </div>
  )
}
