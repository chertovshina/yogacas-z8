import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Vajra Yoga | Find Your Inner Light',
  description: 'Discover the transformative power of Vajra Yoga with personalized guidance. Join classes, workshops, and retreats designed to nurture your body, mind, and spirit.',
  keywords: ['yoga', 'vajra yoga', 'meditation', 'mindfulness', 'wellness', 'yoga teacher'],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#6b4c8c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
