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

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              The Blog
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
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <Link href={`/blog/${featuredArticle.slug}`} className="group block">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card border border-border rounded-lg overflow-hidden">
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="px-3 py-1 bg-accent rounded-full text-accent-foreground text-xs font-medium">
                    {featuredArticle.category}
                  </span>
                  <span>{featuredArticle.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-card-foreground mb-4 group-hover:text-primary transition-colors text-balance">
                  {featuredArticle.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <span className="inline-flex items-center text-primary font-medium">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
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
                href={`/blog/${article.slug}`}
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
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-4 text-balance">
            Subscribe to My Newsletter
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Receive weekly teachings, practice tips, and mindful inspiration directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-grow focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
