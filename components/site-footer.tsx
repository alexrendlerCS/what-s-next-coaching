import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-primary bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-10">
        <div className="flex flex-col gap-3">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={890}
            height={379}
            className="h-8 w-auto self-start"
          />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Executive, life, and team coaching for leaders at pivotal moments.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Footer">
          <Link href="#approach" className="text-sm text-foreground/80 hover:text-foreground">
            Approach
          </Link>
          <Link href="#services" className="text-sm text-foreground/80 hover:text-foreground">
            Services
          </Link>
          <Link href="#about" className="text-sm text-foreground/80 hover:text-foreground">
            About
          </Link>
          <Link href="#speaking" className="text-sm text-foreground/80 hover:text-foreground">
            Speaking
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-foreground/80 hover:text-foreground"
          >
            {siteConfig.email}
          </a>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-8 md:px-10">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} What&apos;s Next? Coaching and Consulting. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}
