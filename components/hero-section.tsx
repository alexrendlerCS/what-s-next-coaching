import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.1fr_1fr] md:items-center md:px-10 md:pt-20 md:pb-28">
        <div className="flex flex-col gap-8">
          <p className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Executive &amp; Life Coaching
          </p>
          <h1 className="text-balance font-serif text-4xl leading-[1.1] text-foreground italic sm:text-5xl md:text-6xl">
            Sometimes the most powerful question is,{' '}
            <span className="text-primary">what&apos;s next?</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            You may be stepping into a new role, navigating a transition, facing a difficult
            leadership challenge, or looking for a different way to lead. That&apos;s where our
            work begins &mdash; grounded in curiosity, candor, compassion, and accountability.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-11 px-6 text-base"
              render={
                <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" />
              }
              nativeButton={false}
            >
              Book a conversation
              <ArrowUpRight data-icon="inline-end" />
            </Button>
            <a
              href="#about"
              className="text-sm font-medium text-foreground/80 underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-foreground"
            >
              Meet Laurie
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md ring-2 ring-primary/25 ring-offset-4 ring-offset-background">
            <Image
              src="/images/heroimage.png"
              alt="Laurie, founder of What's Next? Coaching and Consulting"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-md border border-border border-l-4 border-l-primary bg-card p-4 shadow-sm sm:block">
            <p className="font-serif text-sm italic leading-snug text-card-foreground">
              &ldquo;Life isn&apos;t about having all the answers.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
