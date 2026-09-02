import Image from 'next/image'
import { Compass, HeartHandshake, Mic2, Signpost, Users } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const services = [
  {
    icon: Compass,
    title: 'Executive & Individual Coaching',
    tagline: 'Find clarity. Make confident choices. Move forward.',
    description:
      'One-on-one coaching creates space to step away from the noise, think differently, and focus on what matters most. Together, we\u2019ll explore where you are, where you want to go, and what may be getting in the way. Whether you\u2019re navigating a leadership challenge, stepping into a new role, making a career decision, or looking for greater clarity and confidence, our conversations are grounded in curiosity, candor, compassion, and accountability.',
    gain: 'Greater clarity, stronger decision-making, fresh perspective, renewed confidence, and practical next steps.',
  },
  {
    icon: Signpost,
    title: 'Life & What\u2019s Next Coaching',
    tagline: 'Get clear about what matters now \u2014 and choose what comes next.',
    description:
      'Life doesn\u2019t always follow the path we expected. A career changes. A relationship shifts. A chapter ends. Or sometimes we simply realize that what once worked no longer feels right. This work creates space to step back, listen more closely to what you need, challenge the assumptions that may be keeping you stuck, and explore what feels meaningful now. My role isn\u2019t to tell you what your next chapter should look like \u2014 together, we\u2019ll uncover what matters most to you and create a path forward that feels intentional and authentically yours.',
    gain: 'Greater clarity, renewed confidence, a stronger sense of possibility, and practical steps toward the life you want to create.',
  },
  {
    icon: Users,
    title: 'Team Coaching & Development',
    tagline: 'Build stronger leaders \u2014 and stronger connections.',
    description:
      'Great teams don\u2019t happen by accident. I work with leadership teams to strengthen communication, build trust, navigate change, clarify expectations, and create an environment where people can challenge one another, be accountable, and still feel heard and respected. The work is tailored to the needs of the team and may include facilitated conversations, coaching, leadership development, and practical tools that strengthen how the team works together.',
    gain: 'Better conversations, clearer expectations, stronger relationships, greater trust, and a team better equipped to move forward together.',
  },
  {
    icon: HeartHandshake,
    title: 'Leadership Development & Compassionate Leadership',
    tagline: 'Lead with humanity without lowering the bar.',
    description:
      'Compassion and accountability are not opposites. My leadership programs and workshops help leaders develop the mindset and skills to have honest conversations, give meaningful feedback, lead through uncertainty, build trust, and create cultures where humanity and high expectations can coexist. Programs can be tailored to the needs of your leaders, teams, and organization.',
    gain: 'More self-aware leaders, greater accountability, healthier communication, stronger relationships, and leadership practices that support both people and performance.',
  },
  {
    icon: Mic2,
    title: 'Keynotes & Conversations',
    tagline: 'Create a conversation people continue after the room clears.',
    description:
      'I speak on leadership, change, choice, mindset, compassionate leadership, and what it means to lead and live with greater intention. My goal isn\u2019t simply to inspire an audience for an hour \u2014 it\u2019s to invite people to think differently about how they lead, the choices they make, and what may be possible next. I\u2019m also available for podcast appearances, panel discussions, fireside chats, and facilitated leadership conversations.',
    gain: 'An engaging, thought-provoking experience that encourages reflection, meaningful conversation, and action.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-[0.2em] text-primary uppercase">Services</p>
        <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground italic sm:text-4xl">
          What&apos;s in it for you?
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          Sometimes you know something needs to change, but you&apos;re not quite sure what
          comes next. You may be stepping into a new role, navigating a career or life
          transition, facing a difficult leadership challenge, strengthening a team, or simply
          realizing that what worked before no longer fits. That&apos;s where our work begins.
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
