import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Heart, Users } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const milestones = [
  {
    year: "2012",
    title: "Certified Teacher",
    description: "Completed Vajra Yoga (CAS) Teacher Training course.",
  },
  {
    year: "2013",
    title: "CPR/AED Certification",
    description: "Obtained CPR/AED certification for safety in practice.",
  },
  {
    year: "2013",
    title: "Visceral Therapy Course",
    description: "Completed specialized training in visceral therapy techniques.",
  },
  {
    year: "2017",
    title: "International Reattestation",
    description: "International Vajra Yoga (CAS) Reattestation.",
  },
  {
    year: "2018",
    title: "HarvardX Anatomy Course",
    description: "Completed HarvardX Musculoskeletal Anatomy Course.",
  },
]

const credentials = [
  {
    icon: Award,
    title: "Certified Vajra Yoga Teacher",
    description: "Correct Approach to the Spine (CAS)",
  },
  {
    icon: BookOpen,
    title: "Musculoskeletal Anatomy",
    description: "HarvardX anatomical education",
  },
  {
    icon: Heart,
    title: "Trauma-Informed",
    description: "Specialized training in sensitive approaches",
  },
  {
    icon: Users,
    title: "20+ Years Practice",
    description: "Two decades of personal yoga journey",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_09531-dLjYA5gaAQbAbnNmdsSW36hTYXOTRK.jpg"
                alt="Yoga teacher portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-primary font-medium tracking-widest uppercase text-sm">
                About Me
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground leading-tight text-balance">
                Hi, I am Anandi  
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A devoted practitioner and teacher of Vajra Yoga, dedicated to helping others discover no-harm way to treat their bodies.       
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey with yoga began over 15 years ago during a period of personal transformation. What started as a physical practice quickly became a doorway to profound inner change. Today, I am honored to share this path with students from all walks of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              My Philosophy
            </p>
<h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-relaxed mb-8 text-balance">
              My practice is based on these ideas: - Do no harm; - Every person's body and therefore practice is different; - By controlling the body, we control the mind
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I think I was blessed to be a student of famous Russian and Ukranian yoga teachers such as A. Pakhomov, E. Trostnitskaya, I. Mezhakova and more. Attended visceral therapy and traumatic protection in yoga various seminars.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {"My yoga journey began at an Ashtanga yoga school. I was drawn to its strength and challenging nature. Over time, however, my appetite for difficulty and my ego\'s \"no pain, no gain\" mentality evolved into a search for wisdom and a deeper understanding of the philosophy behind the practice - and the true purpose of the human body. I learned to distinguish what truly matters in yoga from what doesn\'t, and that shift in perspective transformed my life."}
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              My Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight text-balance">
              A Path Unfolding
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-sm text-primary-foreground font-medium">
                      {milestone.year}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pt-3 pb-8">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Credentials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight text-balance">
              Training & Experience
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <credential.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-medium text-card-foreground mb-1">
                  {credential.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zcg9pgVrvDM-tnNhiUpoD89CU1Hs0A81n4EdzxDRLl.jpg"
                alt="Peaceful moment of reflection"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-tight text-balance">
                A Personal Note
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When I am not teaching, you will find me in nature, hiking trails or sitting by water. I am an avid reader of poetry and philosophy, and I believe that wisdom can be found in the most unexpected places.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I would love to meet you on the mat and be part of your journey. Whether you are taking your first yoga class or deepening an established practice, there is a place for you here.
              </p>
              <Button asChild>
                <Link href="/blog">
                  Read My Writings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
