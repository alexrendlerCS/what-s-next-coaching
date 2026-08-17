import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/keynote-stage.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center md:px-10 md:py-32">
        <p className="text-sm font-medium tracking-[0.2em] text-primary-foreground/80 uppercase">
          Not Sure Where to Begin?
        </p>
        <h2 className="text-balance font-serif text-3xl leading-tight text-primary-foreground italic sm:text-4xl">
          You don&apos;t have to know exactly what you need before we talk.
        </h2>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85">
          Sometimes the first step is simply a conversation about where you are, what feels
          stuck or uncertain, and what you&apos;d like to be different. Let&apos;s discover
          what&apos;s next.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="mt-2 h-11 px-6 text-base"
          render={
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" />
          }
          nativeButton={false}
        >
          Book a conversation
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </div>
    </section>
  )
}
