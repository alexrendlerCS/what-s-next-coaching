import Image from 'next/image'
import { Mic, BookOpen, Presentation } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const credentials = [
  {
    icon: BookOpen,
    label: 'Author',
    description: `${siteConfig.bookTitle}, an international best-selling book on leadership and life's pivotal moments.`,
  },
  {
    icon: Mic,
    label: 'Podcast Host',
    description: `${siteConfig.podcastName} explores leadership, change, and the questions worth asking next.`,
  },
  {
    icon: Presentation,
    label: 'Speaker',
    description:
      'Keynotes, panels, and facilitated conversations on leadership, mindset, and compassionate accountability.',
  },
]

export function CredentialsSection() {
  return (
    <section id="speaking" className="border-y border-primary/20 bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_0.7fr] md:items-center md:px-10 md:py-24">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
              Beyond the Coaching Room
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground italic sm:text-4xl">
              Ideas worth carrying into the room
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {credentials.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[535/842] w-full max-w-[280px] overflow-hidden rounded-md ring-4 ring-primary shadow-sm">
          <Image
            src="/images/whats-next-card.jpeg"
            alt={`${siteConfig.bookTitle} — Creating a Path Forward, Laurie Riker, Founder`}
            fill
            sizes="280px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
