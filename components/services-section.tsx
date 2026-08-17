import Image from 'next/image'
import { Compass, HeartHandshake, Mic2, Signpost, Users } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const services = [
  {
    icon: Compass,
    title: 'Executive & Individual Coaching',
    tagline: 'Find clarity. Make confident choices. Move forward.',
    description:
      'One-on-one coaching creates space to step away from the noise, think differently, and focus on what matters most. We explore where you are, where you want to go, and the roadmap to get there.',
    gain: 'Greater clarity, confidence in your decisions, a fresh perspective, and actionable next steps.',
  },
  {
    icon: Signpost,
    title: 'Life & Transition Coaching',
    tagline: 'Get clear about what you want next.',
    description:
      'Life doesn\u2019t always follow the path we expected. Life coaching creates space to step back, explore what matters now, challenge the assumptions keeping you stuck, and make intentional choices about what comes next.',
    gain: 'Renewed confidence, a stronger sense of possibility, and practical steps toward the life you want.',
  },
  {
    icon: Users,
    title: 'Team & Group Coaching',
    tagline: 'Build stronger leaders \u2014 and stronger connections.',
    description:
      'I work with leadership teams and groups to strengthen communication, build trust, navigate change, and create an environment where individuals can challenge one another and still feel heard and respected.',
    gain: 'Better conversations, clearer expectations, and a team better equipped to move forward together.',
  },
  {
    icon: HeartHandshake,
    title: 'Leadership Development & Compassionate Leadership',
    tagline: 'Lead with humanity without lowering the bar.',
    description:
      'Compassion and accountability are not opposites. These programs and workshops help leaders have honest conversations, give meaningful feedback, and create cultures where humanity and high expectations coexist.',
    gain: 'More self-aware leaders, greater accountability, and healthier communication.',
  },
  {
    icon: Mic2,
    title: 'Keynotes & Conversations',
    tagline: 'Create a conversation people continue after the room clears.',
    description:
      'I speak on leadership, change, choice, mindset, and what it means to lead with humanity \u2014 inviting people to think differently about how they lead and what may be possible next.',
    gain: 'An engaging, thought-provoking experience that encourages reflection and action.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-[0.2em] text-primary uppercase">Services</p>
        <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground italic sm:text-4xl">
          Work that meets you where you are
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          You may know something needs to change, even if you&apos;re not quite sure what comes
          next. Here&apos;s how we might work together.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const isLast = index === services.length - 1
          const cardBody = (
            <>
              <CardHeader>
                <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="pt-3 font-serif text-2xl leading-snug text-card-foreground">
                  {service.title}
                </h3>
                <p className="pt-1 text-sm font-medium text-primary">{service.tagline}</p>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <p className="text-sm leading-relaxed text-card-foreground">
                  <span className="font-medium text-foreground">What you gain: </span>
                  {service.gain}
                </p>
              </CardContent>
            </>
          )

          return (
            <Card
              key={service.title}
              className={`group border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg ${
                isLast ? 'md:col-span-2' : ''
              }`}
            >
              {isLast ? (
                <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
                  <div className="flex flex-col gap-4">{cardBody}</div>
                  <div className="mx-4 flex items-center justify-center rounded-md bg-gradient-to-br from-primary/15 to-primary/5 p-6 md:mx-0 md:mr-4 md:h-full md:min-h-56 md:self-stretch">
                    <div className="relative aspect-square w-full max-w-56 overflow-hidden rounded-md shadow-md ring-1 ring-foreground/10">
                      <Image
                        src="/images/keynote-stage.png"
                        alt="Laurie speaking on stage at a keynote event"
                        fill
                        sizes="240px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                cardBody
              )}
            </Card>
          )
        })}
      </div>
    </section>
  )
}
