import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Heart, Wind, Sun } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const principles = [
  {
    icon: Sparkles,
    title: "Diamond Mind",
    description: "Vajra, meaning 'diamond' or 'thunderbolt' in Sanskrit, represents the indestructible nature of awareness. Through practice, we cultivate a mind as clear and unbreakable as diamond.",
  },
  {
    icon: Heart,
    title: "Compassionate Action",
    description: "Every movement in Vajra Yoga is infused with loving-kindness. We practice not just for ourselves, but for the benefit of all beings.",
  },
  {
    icon: Wind,
    title: "Breath as Bridge",
    description: "The breath connects body and mind, the seen and unseen. Through conscious breathing, we access deeper states of awareness and healing.",
  },
  {
    icon: Sun,
    title: "Inner Radiance",
    description: "We believe that within each person lies an innate luminosity. Vajra Yoga helps unveil this natural brightness through dedicated practice.",
  },
]

const practices = [
  {
    title: "Asana Practice",
    description: "Physical postures designed to strengthen, purify, and prepare the body for deeper meditation. Our sequences flow with grace and intention.",
  },
  {
    title: "Pranayama",
    description: "Sacred breathing techniques that regulate vital energy, calm the nervous system, and expand consciousness.",
  },
  {
    title: "Meditation",
    description: "Seated practices ranging from gentle awareness cultivation to advanced visualization and mantra techniques.",
  },
  {
    title: "Philosophy Study",
    description: "Exploration of ancient texts and teachings that illuminate the path and deepen understanding of yogic wisdom.",
  },
]

export default function VajraYogaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vajra-hero.jpg"
            alt="Yoga silhouette at sunrise"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              The Practice
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground leading-tight mb-6 text-balance">
              Vajra Yoga 
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Vajra Yoga International Federation, founded by Anatoliy Pakhomov, is the only certified organization teaching therapeutic spinal care rooted in ancient Yoga principles. 
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-relaxed mb-8 text-balance">
              Vajra Yoga is a holistic way of performing asanas (postures) aimed to preserve and improve spinal health.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The term &quot;Vajra&quot; (Tibetan: &quot;Dorje&quot;) has several interpretations, including: diamond, lightning bolt, enlightenment, instant enlightenment, primordial state, the immovable state attained through Mahamudra practice. In Vajra Yoga, we understand Vajra to mean the primordial state, also called non-duality.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Foundation
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight text-balance">
              Core Principles
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-card-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Practice */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                The Path
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mb-8 text-balance">
                What We Practice
              </h2>
              <div className="space-y-8">
                {practices.map((practice, index) => (
                  <div key={index} className="border-l-2 border-primary pl-6">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {practice.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/vajra-practice.jpg"
                alt="Meditation hands in mudra"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      

      {/* Who Is It For */}
      <section className="py-24">
        
      </section>

      <Footer />
    </div>
  )
}
