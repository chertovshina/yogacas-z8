import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr"
import { Kicker, TextLink } from "@/components/site/ui"
import { OfferBookButton } from "@/components/site/booking"
import { StatementBand } from "@/components/site/statement-band"
import { asset, after, homeIntro, homeBio, socials } from "@/lib/content"

export const metadata: Metadata = {
  title: "Spine-friendly Yoga | Vajra Yoga with Anandi",
  description: homeIntro,
}

const offers = ["Private Sessions", "Group Classes", "Workshops & Retreats"]

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <Kicker>Vajra Yoga with Anandi</Kicker>
          <h1 id="home-title" className="display home-title" aria-label="Spine-friendly Yoga">
            <span>Spine-</span>
            <span>friendly</span> <span>Yoga.</span>
          </h1>
          <p className="hero-intro">{homeIntro}</p>
          <TextLink to="/vajra-yoga">Explore Vajra Yoga</TextLink>
        </div>
        <figure className="hero-picture">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero.jpg"
            alt="Anandi in a squatting balance posture on a maroon mat in a sunlit studio"
            width={1536}
            height={1024}
          />
          <figcaption>
            <span>BODY. MIND. SPIRIT.</span>
            <TextLink to="/about">Learn About Me</TextLink>
          </figcaption>
        </figure>
        <Link href="/vajra-yoga" className="principle-badge" aria-label="Explore the no-harm approach">
          <span>
            DO
            <br />
            NO
            <br />
            HARM.
          </span>
          <ArrowUpRight size={18} weight="light" aria-hidden="true" />
        </Link>
      </section>

      <StatementBand />

      <section className="home-about section-pad" aria-labelledby="home-about-title">
        <div className="about-picture">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/guiding.jpg"
            alt="Anandi seated in a yoga meditation posture"
            width={1200}
            height={800}
            loading="lazy"
            style={{ objectPosition: "47% 40%" }}
          />
          <span className="picture-caption">ANANDI / VAJRA YOGA TEACHER</span>
        </div>
        <div className="home-about-copy">
          <Kicker>About me</Kicker>
          <h2 className="display" id="home-about-title">
            Guiding you on
            <br />
            your journey.
          </h2>
          <p>{homeBio}</p>
          <TextLink to="/about">Read my full story</TextLink>
        </div>
      </section>

      <section className="offers section-pad" aria-labelledby="offers-title">
        <div className="section-heading-row">
          <Kicker>What I Offer</Kicker>
          <h2 id="offers-title" className="display">
            Begin your
            <br />
            practice.
          </h2>
        </div>
        <div className="offer-grid">
          {offers.map((offer, i) => (
            <article key={offer} className="offer">
              <span className="offer-number">0{i + 1}</span>
              <h3>{offer}</h3>
              <p>{after("home", offer)}</p>
              <OfferBookButton offer={offer} />
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/mudra.jpg"
            alt="Hands resting on the knee in gyan mudra during meditation"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div className="quote-copy">
          <blockquote>{"\u201CThe body benefits from movement, and the mind benefits from stillness.\u201D"}</blockquote>
          <cite>SAKYONG MIPHAM</cite>
        </div>
      </section>

      <section className="community section-pad">
        <div>
          <Kicker>Stay Connected</Kicker>
          <h2 className="display">
            Join our
            <br />
            community.
          </h2>
        </div>
        <div className="community-copy">
          <p>{after("home", "Join Our Community")}</p>
          <a className="text-link" href={socials.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramLogo size={23} weight="light" />
            Follow on Instagram
            <ArrowUpRight size={22} weight="light" />
          </a>
          <a className="text-link" href={socials.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookLogo size={23} weight="light" />
            Follow on Facebook
            <ArrowUpRight size={22} weight="light" />
          </a>
        </div>
      </section>
    </>
  )
}
