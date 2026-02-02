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
                src="/images/article-shatkarmas-neti.png"
                alt="Copper neti pot for Jala Neti yogic cleansing practice"
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
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-foreground">
              <div className="text-right">
                <p className="text-lg leading-relaxed text-muted-foreground italic">
                  &quot;He who is of weak constitution and phlegmatic, subject to kapha disorders, should first practice shatkarma. Those not suffering constitutionally from the disorders due to vata, pitta, and kapha do not need it. Shatkarma is dhauti, basti, neti, trataka, nauli, and kapalabhati.&quot;
                </p>
                <p className="text-muted-foreground font-bold mt-2">
                  - Svatmarama, &quot;Hatha Yoga Pradipika&quot;
                </p>
              </div>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                The Six Cleansing Practices
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                The most significant section of Hatha Yoga is Shatkarmas. Every yoga practice should begin with these exercises if the body is experiencing an imbalance of energies. Shatkarma translates as &quot;six actions&quot;—a set of regular practices that help the practitioner maintain physical health, develop awareness of internal organ function, and balance the doshas.
              </p>
                <p className="leading-relaxed text-muted-foreground">
                Beyond their cleansing effect, these exercises also generate energy, stabilize the mind, and sharpen mental clarity. Once you begin mastering Shatkarmas, you will notice a shift in how you think and how you relate to yourself. You&apos;ll see it for yourself.
              </p>
                <p className="leading-relaxed text-muted-foreground">
                Ancient texts clearly indicate that these techniques should be kept secret: &quot;These six practices, which cleanse the body, should be carefully kept secret, because they induce numerous wonderful results and are therefore held in high esteem among the great yogis…&quot; and &quot;A yogi who is desirous of developing siddhis should keep hatha yoga strictly secret, for only then will he have success. All his efforts will be in vain if he reveals everything without discrimination.&quot; (Hatha Yoga Pradipika)
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                1. Kapalabhati
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                A cleansing technique for the respiratory tract that also has a pronounced energizing effect—essentially &quot;waking up&quot; the body. It is best performed in the morning or at the beginning of any training session.
              </p>
               <p className="leading-relaxed text-muted-foreground">
                <b>Technique:</b> Perform strong exhalations through the nose with short, rapid contractions of the abdominal muscles. Inhale smoothly, then exhale forcefully and quickly. Complete 12–54 cycles. As an added benefit, this exercise strengthens the abdominal muscles. Note that throughout the respiratory movements of the abdomen, the pelvic floor muscles should remain engaged and toned.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                1. Kapalabhati
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
