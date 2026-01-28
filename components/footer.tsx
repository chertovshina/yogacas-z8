import Link from "next/link"
import { Instagram, Youtube, Facebook, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://youtube.com", label: "YouTube", icon: Youtube },
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "mailto:hello@vajrayoga.com", label: "Email", icon: Mail },
]

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/vajra-yoga", label: "Vajra Yoga" },
  { href: "/about", label: "About Me" },
  { href: "/blog", label: "Blog" },
]

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-medium text-foreground">Vajra Yoga with Anandi  </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Guiding you on a journey of ano-harm practice through the wisdom of Vajra Yoga.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-accent/50 text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              hello@vajrayoga.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} Vajra Yoga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
