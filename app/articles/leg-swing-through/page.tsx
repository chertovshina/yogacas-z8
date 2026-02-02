import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function LegSwingArticle() {
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
              Asana
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mt-6 mb-6 text-balance">
              Leg Swing-Through
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              A detailed guide to mastering the leg swing-through transition while protecting your spine and joints.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 10, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                6 min read
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_55482-HMeKVn88CBldGeOQf829p4lzudzIVH.jpg"
                alt="Leg swing-through yoga transition"
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
                [Your content here] The leg swing-through is a fundamental transition in many yoga sequences. When performed correctly, it builds strength and coordination while maintaining spinal integrity.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Understanding the Movement
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] The leg swing-through involves transitioning from a downward-facing position through to a seated position by swinging the legs between the hands. This requires coordination of breath, core engagement, and arm strength.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Proper Technique
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Step-by-step instructions for performing the leg swing-through safely, with attention to hand placement, core activation, and maintaining the golden rule of keeping shoulders parallel to hips.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Common Mistakes to Avoid
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Many practitioners make errors that can strain the wrists, shoulders, or lower back. Learn what to watch for and how to correct these patterns.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Modifications and Progressions
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Whether you are building up to the full movement or looking to refine your technique, these modifications and progressions can help you develop safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
