'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

const navLinks = [
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Speaking', href: '#speaking' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled ? 'bg-background/90 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="#top" className="font-serif text-lg italic tracking-tight text-foreground">
          What&apos;s Next?
          <span className="ml-2 hidden font-sans text-xs font-medium not-italic tracking-[0.2em] text-muted-foreground uppercase sm:inline">
            Coaching &amp; Consulting
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="default"
            size="sm"
            render={
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" />
            }
            nativeButton={false}
          >
            Book a conversation
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-6 py-6 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button
                size="sm"
                className="w-full"
                render={
                  <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" />
                }
                nativeButton={false}
              >
                Book a conversation
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
