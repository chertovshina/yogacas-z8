"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, List, X } from "@phosphor-icons/react"
import { useBooking, BookButton } from "./booking"

const navigation: [string, string][] = [
  ["/", "Home"],
  ["/vajra-yoga", "Vajra Yoga"],
  ["/about", "About Me"],
  ["/articles", "Articles"],
]

export function Header() {
  const path = usePathname()
  const { book } = useBooking()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [path])

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false)
        menuRef.current?.focus()
      }
    }
    document.addEventListener("keydown", close)
    return () => document.removeEventListener("keydown", close)
  }, [open])

  const isActive = (to: string) => path === to || (to === "/articles" && path.startsWith("/articles/"))

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Vajra Yoga with Anandi — home">
          <span>VAJRA YOGA</span>
          <small>WITH ANANDI</small>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([to, label]) => (
            <Link key={to} href={to} aria-label={label} aria-current={isActive(to) ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <BookButton className="header-book" />
        <button
          ref={menuRef}
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} weight="light" /> : <List size={28} weight="light" />}
        </button>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {navigation.map(([to, label]) => (
          <Link key={to} href={to} onClick={() => setOpen(false)}>
            {label}
            <ArrowUpRight size={22} />
          </Link>
        ))}
        <button
          className="button"
          onClick={() => {
            setOpen(false)
            book()
          }}
        >
          Book a Session
        </button>
      </nav>
    </header>
  )
}
