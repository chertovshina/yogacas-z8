import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram, Facebook } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const offerings = [
  {
    title: "Private Sessions",
    description: "One-on-one guidance tailored to your unique journey and goals.",
  },
  {
    title: "Group Classes",
    description: "Connect with a supportive community in our weekly group sessions.",
  },
  {
    title: "Workshops & Retreats",
    description: "Immersive experiences to deepen your practice and understanding.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0866-Hh1B7iiOX4YL4Yz9v0mPFE8MKWq48D.jpg"
            alt="Peaceful yoga practice in a serene studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vajra%20Logo%20Gradient-AEg1SH08qZlAF1Kp54HSTJ0wSUw6MX.jpg"
                alt="Vajra Yoga logo"
                width={80}
                height={100}
                className="rounded-md"
              />
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground leading-tight mb-6 text-balance">
              Spine-friendly Yoga       
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Vajra Yoga (or Yoga of Correct Approach to the Spine - CAS) is a spine-friendly practice that nurtures your body, calms your mind and awakens your spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/vajra-yoga">
                  Explore Vajra Yoga
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0857-3je0QQLRGQc5kEJ2DZfjKMfJkM2LD9.jpg"
                alt="Yoga teacher portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-widest uppercase text-sm">
                About me 
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight text-balance">
                Guiding You on Your Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of dedicated practice and teaching, I have had the honor of guiding hundreds of students on their path to wellness. My approach combines the ancient yoga wisdom with modern understanding of anatomy and biomechanics.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link href="/about">
                  Read my full story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              What I Offer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight text-balance">
              Begin Your Practice
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
                  <span className="font-serif text-xl text-accent-foreground">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-card-foreground mb-3">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Feature Image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/vajra-practice.jpg"
          alt="Meditation hands in mudra position"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="font-serif text-3xl md:text-5xl font-light text-background leading-tight mb-6 text-balance max-w-3xl">
              {"\"The body benefits from movement, and the mind benefits from stillness.\""}
            </h2>
            <p className="text-background/80 font-medium">- Sakyong Mipham</p>
          </div>
        </div>
      </section>

      {/* Social Connect Section */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mb-8 text-balance">
            Join Our Community
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            Follow along for daily inspiration, practice tips, and glimpses into the serene world of Vajra Yoga.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/spine_yoga"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Follow on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/groups/602767447026998"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Follow on Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
