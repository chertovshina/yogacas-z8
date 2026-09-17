"use client"

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowRight, ArrowUpRight, InstagramLogo, FacebookLogo, X } from "@phosphor-icons/react"
import { socials } from "@/lib/content"
import { Kicker } from "./ui"

type BookingContextValue = { book: (type?: string) => void }
const BookingContext = createContext<BookingContextValue>({ book: () => {} })

export function useBooking() {
  return useContext(BookingContext)
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<string | null>(null)
  const book = (type = "") => setSelection(type)
  const close = () => setSelection(null)
  return (
    <BookingContext.Provider value={{ book }}>
      {children}
      <Booking selection={selection} close={close} />
    </BookingContext.Provider>
  )
}

export function BookButton({ label = "Book a Session", className = "", type }: { label?: string; className?: string; type?: string }) {
  const { book } = useBooking()
  return (
    <button className={`button ${className}`} onClick={() => book(type)}>
      {label}
      <ArrowRight aria-hidden="true" size={23} weight="light" />
    </button>
  )
}

export function OfferBookButton({ offer }: { offer: string }) {
  const { book } = useBooking()
  return (
    <button className="round-link" onClick={() => book(offer)} aria-label={`Ask about ${offer}`}>
      <ArrowUpRight size={28} weight="light" />
    </button>
  )
}

function Booking({ selection, close }: { selection: string | null; close: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (selection !== null && !ref.current?.open) ref.current?.showModal()
    else if (selection === null && ref.current?.open) ref.current?.close()
  }, [selection])
  useEffect(() => {
    document.body.classList.toggle("dialog-open", selection !== null)
    return () => document.body.classList.remove("dialog-open")
  }, [selection])
  return (
    <dialog
      ref={ref}
      className="booking-dialog"
      onClose={close}
      onCancel={close}
      aria-labelledby="booking-title"
      onClick={(e) => {
        if (e.target === ref.current) {
          const r = ref.current.getBoundingClientRect()
          if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) close()
        }
      }}
    >
      <button className="dialog-close" onClick={close} aria-label="Close booking options">
        <X size={27} weight="light" />
      </button>
      <Kicker>{selection || "Book a Session"}</Kicker>
      <h2 id="booking-title" className="display">
        Begin your
        <br />
        practice.
      </h2>
      <p>Connect with Anandi to ask about sessions, availability, and the right practice for you.</p>
      <div className="booking-links">
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
          <InstagramLogo size={25} weight="light" />
          <span>
            Message on Instagram
            <small>@spine_yoga</small>
          </span>
          <ArrowUpRight size={24} weight="light" />
        </a>
        <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
          <FacebookLogo size={25} weight="light" />
          <span>
            Connect on Facebook
            <small>Vajra Yoga community</small>
          </span>
          <ArrowUpRight size={24} weight="light" />
        </a>
      </div>
    </dialog>
  )
}
