import type { Metadata } from "next"
import { ArrowDown } from "@phosphor-icons/react/dist/ssr"
import { Kicker } from "@/components/site/ui"
import { asset, after, paragraphAfter } from "@/lib/content"

export const metadata: Metadata = {
  title: "The Practice | Vajra Yoga with Anandi",
  description: paragraphAfter("vajra-yoga", "Vajra Yoga is a holistic"),
}

const core = ["Golden Rule", "Stretch, Strengthen, Relax", "Breath & Movement", "Mahamudra"]
const safe = ["No Twists", "No Deep Side Bends", "No Deep Backbends", "No Headstands"]

export default function PracticePage() {
  return (
    <>
      <section className="practice-hero">
        <div>
          <Kicker>The Practice</Kicker>
          <h1 className="display">
            Vajra
            <br />
            Yoga.
          </h1>
          <p className="lead">{paragraphAfter("vajra-yoga", "Vajra Yoga is a holistic")}</p>
          <a className="text-link" href="#principles">
            Core Principles
            <ArrowDown size={22} weight="light" />
          </a>
        </div>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("vajra-hero") || "/placeholder.svg"}
            alt="Yoga silhouette at sunrise"
            width={1000}
            height={1000}
          />
          <figcaption>THE BODY. THE BREATH. THE PRESENT MOMENT.</figcaption>
        </figure>
      </section>

      <section className="practice-intro section-pad">
        <Kicker>Vajra Yoga</Kicker>
        <div>
          <p className="serif-lead">{paragraphAfter("vajra-yoga", "Vajra Yoga International Federation")}</p>
          <p>{paragraphAfter("vajra-yoga", "The term")}</p>
        </div>
      </section>

      <section className="principles section-pad" id="principles">
        <div className="section-heading-row">
          <Kicker>Foundation</Kicker>
          <h2 className="display">
            Core
            <br />
            principles.
          </h2>
        </div>
        <div className="principle-grid">
          {core.map((name, i) => (
            <article key={name}>
              <span className="index-label">0{i + 1}</span>
              <h3>{name}</h3>
              <p>{after("vajra-yoga", name)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="safe-practice section-pad">
        <div className="safe-intro">
          <Kicker>Safe Practice</Kicker>
          <h2 className="display">
            Spine-friendly
            <br />
            practice.
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("vajra-practice") || "/placeholder.svg"}
            alt="Meditation hands in mudra"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div className="safe-list">
          {safe.map((name, i) => (
            <article key={name}>
              <span className="index-label">0{i + 1}</span>
              <div>
                <h3>{name}</h3>
                <p>{after("vajra-yoga", name)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
