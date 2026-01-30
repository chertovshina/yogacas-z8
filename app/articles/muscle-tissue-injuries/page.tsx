import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MuscleInjuriesArticle() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Article Header */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <Link 
            href="/articles" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>
          
          <div className="max-w-3xl">
            <span className="px-3 py-1 bg-accent rounded-full text-accent-foreground text-sm font-medium">
              Anatomy
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mt-6 mb-6 text-balance">
              Muscle Tissue Injuries
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Understanding common muscle injuries in yoga practice, prevention strategies, and safe recovery approaches for practitioners.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 20, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/images/article-muscle-injuries.jpg"
                alt="Muscle tissue injuries in yoga"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed text-muted-foreground">
                [Your content here] This article explores the various types of muscle tissue injuries that can occur during yoga practice. Understanding these injuries is crucial for both prevention and proper recovery.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Types of Muscle Injuries
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Muscle injuries can range from minor strains to more severe tears. Common types include muscle strains, micro-tears, and overuse injuries. Each requires different approaches to treatment and recovery.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Prevention Strategies
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Prevention is always better than cure. Proper warm-up, listening to your body, and respecting your limits are essential practices for avoiding muscle injuries during yoga.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Recovery Approaches
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] When injuries do occur, proper recovery is essential. This section covers rest, gentle movement, and when to seek professional help for muscle injuries.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Returning to Practice
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Guidelines for safely returning to yoga practice after a muscle injury, including modified poses and gradual progression.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
