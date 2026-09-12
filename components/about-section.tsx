import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

const roles = [
  'Executive Advisor',
  'Coach',
  'Keynote Speaker',
  'Podcast Host',
  'Best-Selling Author',
]

const stats = [
  { value: '20+', label: 'Years of experience' },
  { value: '5', label: 'Industries served' },
  { value: '4', label: 'Guiding principles' },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="flow-root">
        <div className="relative mx-auto mb-8 aspect-[3/4] w-full max-w-sm overflow-hidden rounded-md bg-gradient-to-br from-primary/15 via-secondary/50 to-accent/10 ring-2 ring-primary/25 ring-offset-4 ring-offset-background md:float-left md:mr-10 md:mb-6 md:w-2/5 md:max-w-none">
          <Image
            src="/images/laurie-portrait.png"
            alt="Portrait of Laurie, founder of What's Next? Coaching and Consulting"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover object-top"
          />
        </div>

        <p className="text-sm font-medium tracking-[0.2em] text-primary uppercase">About</p>
        <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground italic sm:text-4xl">
          Hi, I&apos;m Laurie.
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {roles.map((role) => (
            <Badge
              key={role}
              variant="outline"
              className="h-auto border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary"
            >
              {role}
            </Badge>
          ))}
        </div>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
          <p className="text-lg leading-relaxed text-foreground">
            At the heart of my work is a simple belief: what&apos;s next can be one of the most
            powerful questions we ask ourselves.
          </p>
          <p>
            For over two decades, I&apos;ve worked alongside leaders, teams, and
            organizations navigating growth, change, uncertainty, and transformation. My
            career has spanned executive leadership, organizational strategy, culture, talent,
            and business transformation across technology, SaaS, biotechnology, government
            contracting, and nonprofit organizations.
          </p>
          <p>What I&apos;ve learned is that life isn&apos;t about having all the answers.</p>
          <p className="rounded-md border-l-4 border-primary bg-primary/5 px-6 py-5 font-serif text-lg text-foreground italic">
            It&apos;s about having the courage to ask better questions, the clarity to make
            difficult choices, and the compassion to remember the human being in front of you.
          </p>
          <p>
            Today, through What&apos;s Next? Coaching and Consulting, I bring that experience
            to leaders and organizations at pivotal moments &mdash; whether they are stepping
            into a bigger role, navigating significant change, strengthening a leadership
            team, building a more humane and accountable culture, or deciding what comes next.
          </p>

          <div className="grid grid-cols-1 divide-y divide-primary/20 rounded-md border border-primary/25 bg-primary/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 px-6 py-6 text-center"
              >
                <p className="font-serif text-3xl text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <p>
            My approach combines strategic business insight with curiosity, candor,
            compassion, and accountability. I believe we can expect great things from people
            without losing sight of their humanity &mdash; and that some of the strongest
            leadership happens when people feel both challenged and genuinely seen.
          </p>
          <p>
            Through executive and individual coaching, team coaching, leadership development,
            keynote speaking, and the What&apos;s Next? podcast, I create conversations that
            help people find greater clarity, confidence, courage, and possibility.
          </p>

          <p className="rounded-md border-l-4 border-primary bg-primary/5 px-6 py-5 font-serif text-lg leading-relaxed text-foreground italic">
            Because what&apos;s next isn&apos;t simply about where you go from here. It&apos;s
            about recognizing what&apos;s possible, choosing what matters, and having the
            courage to move toward it.
          </p>
        </div>
      </div>
    </section>
  )
}
