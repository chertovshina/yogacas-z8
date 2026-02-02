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
              

              
              <p className="leading-relaxed text-muted-foreground">
                In the modern world, the overwhelming majority of yoga practitioners are women. Presumably, the psychological appeal of fluid movements and certain popular poses demonstrating flexibility creates the impression that this form of physical activity (and here we are considering the level of the physical body) is better suited to women. Historically, however, yoga was practiced primarily by men, and this is likely why none of the few treatises that have survived to the present day contain information about what practices women should do during their menstrual cycle. Perhaps there was no need for such guidance, since in Indian culture, a woman&apos;s body during this period is considered &quot;impure,&quot; and she is prohibited from entering temples, preparing ritual foods, engaging in heavy physical labor, or touching &quot;pure&quot; ritual objects, lest she contaminate them on a subtle level. Therefore, the question of yoga practice was naturally excluded. This state of affairs is neither bad nor good in Eastern culture. It simply means that for a few days each month, a woman needs rest and quiet while her body undergoes its cleansing process.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Today, it is difficult for us to simply step away from life for several days: we want to continue our training programs and maintain physical activity. Nevertheless, there are certain contraindications for yoga practice (which also apply to other activities in daily life) for at least the first three days of the menstrual cycle.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Contraindications
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                • Inverted positions. Any pose in which the pelvis is higher than the shoulders is considered inverted. In this case, gravity forces menstrual blood containing cells of the inner uterine lining (endometrium) to move in an unnatural direction. When this enters the fallopian tubes, it is deposited into the abdominal cavity. Subsequently, the endometrium is transported to surrounding tissues and the peritoneum, where it begins to proliferate, causing a common gynecological condition called endometriosis. This leads to painful periods and is incurable. It should be noted that medicine has not yet reached definitive conclusions about the causes of endometriosis—there are only theories, and this is one of them. Nevertheless, the logic is simple: if you don&apos;t particularly want to test this theory on yourself, don&apos;t interfere with nature doing its natural work.
              </p>
               <p className="leading-relaxed text-muted-foreground">
                • Uddiyana and Mula Bandhas, Nauli. For the same reasons described above, it is not recommended to perform abdominal manipulations that create a vacuum and upward suction. Actions that similarly disrupt the natural course of events include Agnisara Dhauti Kriya. Along with inverted poses, the aforementioned manipulations, if performed during the first days of menstruation, drastically shorten the cycle duration and can lead to fibroids, cysts, endometriosis, and other unpleasant formations.
              </p>
               <p className="leading-relaxed text-muted-foreground">
                • Strong tension of the abdominal muscles (beyond what is needed for core stabilization in upright and tilted positions)—Kapalabhati and Bhastrika pranayamas, and any abdominal asanas such as Navasana. These increase blood supply to the uterus and stimulate its muscular activity, which is entirely unnecessary during menstruation.
              </p>
               <p className="leading-relaxed text-muted-foreground">
                • Twists. It is perhaps unnecessary to remind you that twists are harmful to the spine on any day, but during menstruation they create additional compression of the abdomen, which can intensify painful sensations. A double reason to abandon them once and for all.
              </p>
               <p className="leading-relaxed text-muted-foreground">
                Overall, these are recommendations. Of course, the principle &quot;if you really want to, you can&quot; always applies, but a state of balance and harmony with nature—with your wise body—is far more important during these days than ambitious prodding from the mind, isn&apos;t it?
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                So What Should You Do?
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Yoga practice can certainly continue during menstruation if desired. Simply emphasize calm, static holds in asanas and measured breathing. Direct your attention inward, concentrating on bodily sensations and your body&apos;s interaction with space. If you are in a group class, do not hesitate to modify asanas you don&apos;t wish to perform. Instead of downward-facing dog—child&apos;s pose; instead of active breathing practices and kriyas—Nadi Shodhana pranayama or complete yogic breathing; instead of Mahabandha—omit Uddiyana or substitute Tadagi Mudra. And so on. Learn to feel your body and try not to be swayed by your ego, the group, or an instructor who may not know that you are menstruating today.
              </p>

              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Causes of Painful Periods
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Unfortunately, many women experience severe (or moderate) pain during menstruation—sometimes only on the first day, sometimes throughout the entire period. This may also be accompanied by a whole array of symptoms: intestinal upset, headaches, chills, mood swings, etc. The physical causes of pain include compression of nerve roots in the lumbar region and, as a consequence, elevated levels of the hormone prostaglandin, which is responsible for strong uterine contractions during endometrial shedding in the first days of menstruation. This can also result from the formation of large blood clots or compression of the uterus due to fibroid nodules.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Below, I will show a couple of relaxing body positions that reduce the pain of lower abdominal cramps and support the natural processes of the female body. Gather pillows, blankets, bolsters, or other soft items to create a &quot;nest&quot; for yourself, and position yourself near a chair or sofa.
              </p>
              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Forward Fold from Vajrasana
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                [Your content here] Above all, your practice during menstruation should be guided by how you feel. Some days you may feel energized, while others call for complete rest.
              </p>
              <h2 className="font-serif text-2xl font-light text-foreground mt-12 mb-4">
                Causes of Painful Periods
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
