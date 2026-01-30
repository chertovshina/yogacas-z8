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
              Muscle Tissue Injuries: Causes and Consequences 
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              We&apos;re all familiar with phrases like &quot;pulled a shoulder (back, arm, leg)&quot; or &quot;everything hurts after a workout.&quot; Let&apos;s explore why this happens, how natural it is for the human body, and how to reasonably avoid it.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 30, 2026
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
              

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Understanding Skeletal Muscle
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {"Skeletal muscles are one of three types of muscle tissue in the body, alongside smooth and cardiac muscle. Their key features include:\n\nCells have an elongated shape spanning the entire length of the muscle bundle (for example, in the quadriceps—the front thigh muscle—each cell runs the length of the entire thigh. Remarkable, isn\'t it?)\nAttach to bones via connective tissue (not always tendons, incidentally)\nContain multiple nuclei\nDisplay cross-striations that, under a microscope, make these cells resemble earthworms\n\nThese striations are particularly interesting because they enable muscle fiber contraction to one-third of its resting length in fractions of a second. The images below show cell structure as seen through light microscopy and electron micrograph. Slides 2-4 illustrate schematically how these dark and light bands consist of interlacing thin actin filaments (thread-like protein structures) and thick myosin filaments (actin and myosin are protein types), forming I-bands and A-bands respectively.\nHow does this system work? Simply yet brilliantly: like rowers, myosin filaments \"grab\" actin threads from both sides and pull them, thereby shortening the muscle cell. They \"re-grip\" new sections of actin several times, shifting them again—all happening in a fraction of a second."}
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Muscle Fiber Injuries
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {"The primary cause of muscle strain is excessive load beyond its physiological capacity, or sudden force. Most commonly, injury occurs when the muscle lengthens during contraction under load—though it may seem strange at first that muscle fiber contraction involves lengthening. This type of contraction is called eccentric or asymmetric.\nFor example, in sprinting or tennis, when the leg is extended and the toes provide push-off for forward movement, the sudden burst creates not only muscle fiber lengthening but also substantial load, as muscles must support the entire body weight and the force required for movement. Tears in such injuries can be complete or partial, occurring at the muscle-tendon junction, within the tendon itself, or at the tendon-bone attachment site.\nIn everyday sports and daily life, injuries most commonly result from either impact or excessive load. The following classification exists:\n\nContracture – a spasm, excessive increase in muscle tone. Due to sudden muscle shortening, a person experiences pain (with or without palpation) that lacks clear localization.\nDelayed Onset Muscle Soreness (DOMS) – reversible changes in muscle caused by overload.\nStrain – damage to some muscle fibers that doesn't affect the connective tissue elements of the muscle. Pain appears at peak physical exertion, and the muscle injury is clearly identifiable through palpation.\nPartial fiber tear – occurs suddenly as sharp, spasming pain. Damage affects a limited number of muscle fibers; connective tissue is affected but minimally.\nPartial muscle tear – differs from the previous in the quantity and scale of damaged elements. Both connective and muscle tissue suffer. Manifests as pronounced pain syndrome and loss of muscle motor function.\nComplete rupture or muscle avulsion – the most serious injury in this classification. The muscle tears transversely into two separate parts, which sometimes, due to contraction, may be located far apart. Symptoms are dramatic: sharp severe pain, sometimes with audible sound at the moment of rupture, plus hematoma, increased muscle volume, and inability to bear weight on the limb."}
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Consequences
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {"An injury is an injury, and recovery always requires rest and avoiding any load on the damaged area. Depending on severity, this period can last weeks, inevitably leading to atrophy—shrinkage of former muscle tissue volume. Pain during movement signals the injured area. Upon feeling pain, you must first refrain from the activity that caused it and allow the damaged area to heal.\nIf you feel everything has passed and resume previous training, but pain returns, the injury is incompletely healed and you've underestimated its severity. Healing occurs gradually over time, and pain sensations exist not randomly but to draw attention to the problem. If you rush things, trying to resume training as quickly as possible once pain disappears, you risk re-injury—this time more serious, eventually becoming chronic."}
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Prevention
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {"Use your head. Truly. While no one is immune to accidental household injuries and falls, if you're about to lift something heavy, ask yourself:\n\nWhy am I doing this? (i.e., is it necessary?)\nDo I have sufficient muscle strength for this weight? (answer honestly, without bravado)\nCan I lift this using mechanical aids rather than my own strength? (justifying our title as Homo sapiens)"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
