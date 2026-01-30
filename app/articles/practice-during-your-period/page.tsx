import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PeriodPracticeArticle() {
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
              Wellness
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mt-6 mb-6 text-balance">
              Practice During Your Period
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Guidelines for adapting your yoga practice during menstruation to support your body's natural rhythms.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 5, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                7 min read
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
                src="/images/article-period-practice.jpg"
                alt="Gentle yoga practice during menstruation"
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
                [Your content here] Menstruation is a natural process, and yoga practice can be adapted to support your body during this time. Understanding how to modify your practice can help you stay connected to your yoga journey while honoring your body's needs.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Understanding Your Cycle
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] The menstrual cycle affects energy levels, mood, and physical comfort. Learning to recognize these patterns can help you adapt your practice accordingly.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Poses to Embrace
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Gentle, restorative poses that can provide comfort and support during menstruation. Focus on poses that encourage relaxation and ease tension without strain.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Poses to Avoid or Modify
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Certain poses may not be suitable during menstruation. Learn which poses to skip or modify and understand the reasoning behind these guidelines.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Listening to Your Body
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Above all, your practice during menstruation should be guided by how you feel. Some days you may feel energized, while others call for complete rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
