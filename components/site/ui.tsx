import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`kicker ${className}`}>{children}</p>
}

export function TextLink({ to, children, className = "" }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link href={to} className={`text-link ${className}`}>
      {children}
      <ArrowUpRight aria-hidden="true" size={22} weight="light" />
    </Link>
  )
}
