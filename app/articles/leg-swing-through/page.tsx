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
              Correct Leg Transitions: From Sitting to Standing and Back
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beautiful_yogi_girl_in_purple_and_lavender_lululemon_clothes_doing_yoga_on_a_mat_in_a_yoga_studou_p_zv2mzyjzeu244m6ecj2l_3-pEwSIpX6kEnsO34bxVGfc2gmMUwgUm.png"
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
                In my teaching practice, I regularly observe practitioners who pay insufficient attention to their body during transitions from sitting to standing and vice versa. This typically occurs among beginners and those attending Vajra Yoga classes for the first time, who are not yet accustomed to the constant mindfulness and awareness required throughout the practice. Years of observing this pattern prompted me to write a dedicated article on correct leg transitions and to create a series of photographs to help illustrate what I describe below.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Understanding the Movement
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                It may seem like a small, unremarkable movement—transitioning from one position to another—yet it eloquently reveals the level of mindfulness, presence, and body awareness a practitioner has developed. So if you practice, do so with full immersion.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Importance
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                As we know, the most important principle for us is to <b>maintain the plane of the shoulders parallel to the plane of the hips.</b> For this reason, the common practice of rolling to one side—as shown in the photograph on the right—is dangerous, particularly if one drops heavily onto the hip, as often happens when practitioners are fatigued. Look at the red lines I&apos;ve drawn on this photograph: they clearly demonstrate how significantly this student&apos;s pelvis has become skewed. So what is the solution? The answer is, in fact, quite simple. Below, I will present three easy methods for transitioning from a seated position to standing and back. Choose the one that feels most natural based on your body&apos;s feedback.
              </p>

              {/* Importance Image */}
              <div className="my-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wrong-side-sitting-GuTeOCGrOcyPtJhMkW1uzJ6HV1azgF.jpg"
                    alt="Incorrect leg transition showing skewed pelvis alignment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                1. Rolling Through Crossed Ankles.
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                This is the most natural and straightforward method of sitting down or standing up, and the one we use most frequently in class. Cross the ankles and roll forward over them—or, correspondingly, roll backward if you are sitting down from a hands-and-knees position. Pay attention to positioning your knees as wide as your body allows. Ideally, each ankle should be directly above the other. This ensures a smooth and painless transition. Conversely, if the knees are placed too narrow, the shins will press against each other, causing discomfort and forcing the hips to skew during the roll—maintaining symmetry in such a position demands considerable effort. After rolling onto the knees, release the feet, tuck them onto the balls of the feet, and rise to standing. The photographs below illustrate each step.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                2. Rolling Through the Feet
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {"Some practitioners find it very difficult to roll symmetrically through crossed shins. This is usually due to limited hip joint mobility, which prevents the knees from being placed wide enough. For these individuals, an alternative method exists: rolling forward through the joined soles of the feet. This approach is slightly more challenging but offers an effective solution to the symmetry problem.\nTo perform it from a seated position, bend the knees and place the feet together. Straighten the spine, then using the fingers or fists against the floor, roll forward with momentum onto the feet, arriving in a squat position. From there, it is easy to stand. When reversing the sequence, remember that lowering from a squat to a seated position must be done with full awareness, supporting yourself with your hands pressed into the floor.\n"}
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                3. Virasana
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {"This final method is for special cases. It demands a high degree of mindfulness and healthy knee joints. If this does not apply to you, disregard it. However, since we are covering the topic of leg transitions, I cannot omit the Virasana method.\nTo perform it from a seated position, lean back with a straight spine, engaging the abdominal muscles well. Lift the legs, bending them at the knees, and hold the feet with your hands, placing the soles on either side of the hips. Then roll forward onto the knees. Done—you may now stand.\nThe same applies in reverse from a standing position: come down onto your hands and knees, bringing the knees together. Place the feet wider apart and sit between them. Then, leaning back with an upright torso, lift the knees and straighten the legs. Done—you are seated.\n"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
