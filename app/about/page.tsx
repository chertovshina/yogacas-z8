import type { Metadata } from "next"
import { Kicker, TextLink } from "@/components/site/ui"
import { asset, after, paragraphAfter, aboutIntro, philosophy } from "@/lib/content"

export const metadata: Metadata = {
  title: "About Anandi | Vajra Yoga",
  description: aboutIntro,
}

const timeline: [string, string][] = [
  ["2012", "Certified Teacher"],
  ["2013", "CPR/AED Certification"],
  ["2013", "Visceral Therapy Course"],
  ["2017", "International Reattestation"],
  ["2018", "HarvardX Anatomy Course"],
]
const credentials = [
  "Certified Vajra Yoga Teacher",
  "Musculoskeletal Anatomy",
  "Trauma-Informed",
  "20+ Years Practice",
]

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div>
          <Kicker>About Me</Kicker>
          <h1 className="display">
            Hi, I am
            <br />
            Anandi.
          </h1>
          <p className="lead">{aboutIntro}</p>
          <p>{paragraphAfter("about", "My journey with yoga")}</p>
        </div>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("DSC_0857") || "/placeholder.svg"}
            alt="Anandi, Vajra Yoga teacher"
            width={1800}
            height={1200}
          />
          <figcaption>VAJRA YOGA / CORRECT APPROACH TO THE SPINE</figcaption>
        </figure>
      </section>

      <section className="philosophy section-pad">
        <div>
          <Kicker>My Philosophy</Kicker>
          <h2 className="display">Do no harm.</h2>
          <p className="philosophy-list">{philosophy}</p>
        </div>
        <div>
          <p>{paragraphAfter("about", "I think I was blessed")}</p>
          <p>{paragraphAfter("about", "My yoga journey began")}</p>
        </div>
      </section>

      <section className="journey section-pad">
        <div>
          <Kicker>My Journey</Kicker>
          <h2 className="display">
            A path
            <br />
            unfolding.
          </h2>
        </div>
        <div className="timeline">
          {timeline.map(([year, title], i) => (
            <article key={i}>
              <span>{year}</span>
              <div>
                <h3>{title}</h3>
                <p>{after("about", title)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="credentials section-pad">
        <div className="section-heading-row">
          <Kicker>Credentials</Kicker>
          <h2 className="display">
            Training &
            <br />
            experience.
          </h2>
        </div>
        <div className="credential-grid">
          {credentials.map((c, i) => (
            <article key={c}>
              <span className="index-label">0{i + 1}</span>
              <h3>{c}</h3>
              <p>{after("about", c)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="personal-note section-pad">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("1593543121217") || "/placeholder.svg"}
            alt="Anandi in a seated yoga practice"
            width={1200}
            height={1200}
            loading="lazy"
          />
        </figure>
        <div>
          <Kicker>A Personal Note</Kicker>
          <p className="serif-lead">{after("about", "A Personal Note")}</p>
          <p>{paragraphAfter("about", "I would love")}</p>
          <TextLink to="/articles">Read My Writings</TextLink>
        </div>
      </section>
    </>
  )
}
