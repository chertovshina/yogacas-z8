import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import { BookingProvider } from "@/components/site/booking"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vajra Yoga | Find Your Inner Light",
  description:
    "Vajra Yoga with Anandi — a spine-friendly practice (Correct Approach to the Spine) that nurtures the body, calms the mind, and awakens the spirit.",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#0f0e13",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <BookingProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </BookingProvider>
        <Analytics />
      </body>
    </html>
  )
}
