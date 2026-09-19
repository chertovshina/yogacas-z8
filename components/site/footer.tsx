import Link from "next/link"
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr"
import { asset, socials } from "@/lib/content"
import { Kicker } from "./ui"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Kicker>Vajra Yoga with Anandi</Kicker>
        <p>Guiding you on a journey of a no-harm practice through the wisdom of Vajra Yoga.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("Vajra%20Logo") || "/placeholder.svg"} alt="Vajra Yoga logo" width={62} height={72} loading="lazy" />
      </div>
      <Link href="/" className="footer-wordmark" aria-label="Vajra Yoga — home">
        Vajra Yoga.
      </Link>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vajra Yoga. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/vajra-yoga">Vajra Yoga</Link>
          <Link href="/about">About Me</Link>
          <Link href="/articles">Articles</Link>
        </nav>
        <div className="social-links">
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramLogo size={24} weight="light" />
          </a>
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookLogo size={24} weight="light" />
          </a>
        </div>
      </div>
    </footer>
  )
}
