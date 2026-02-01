import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ShatkarmasArticle() {
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
              Foundations
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mt-6 mb-6 text-balance">
              Shatkarmas
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Exploring the six traditional yogic cleansing practices and their benefits for purifying body and mind.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 15, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                10 min read
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
                src="/images/article-shatkarmas.jpg"
                alt="Shatkarmas yogic cleansing practices"
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
                [Your content here] Shatkarmas, also known as Shatkriyas, are six purification techniques described in traditional Hatha Yoga texts. These practices are designed to cleanse the body and prepare it for deeper yogic practices.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                The Six Cleansing Practices
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] The six shatkarmas are: Neti (nasal cleansing), Dhauti (digestive tract cleansing), Nauli (abdominal massage), Basti (colon cleansing), Kapalbhati (skull shining breath), and Trataka (concentrated gazing).
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Neti - Nasal Cleansing
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Neti involves cleansing the nasal passages with warm saline water. This practice helps clear the sinuses, improve breathing, and can aid in preventing respiratory issues.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Benefits of Shatkarmas
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Regular practice of shatkarmas can lead to improved digestion, clearer respiratory passages, enhanced mental clarity, and preparation of the body for pranayama and meditation.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Precautions and Guidance
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Shatkarmas should ideally be learned under the guidance of an experienced teacher. Certain practices may not be suitable for everyone, and proper technique is essential for safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
