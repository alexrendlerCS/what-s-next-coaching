import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="relative order-first md:order-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
            <Image
              src="/images/about-silhouette.png"
              alt="Silhouette of Laurie standing near a sunlit window in quiet reflection"
              fill
              sizes="(min-width: 768px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium tracking-[0.2em] text-primary uppercase">About</p>
          <h2 className="text-balance font-serif text-3xl leading-tight text-foreground italic sm:text-4xl">
            Hi, I&apos;m Laurie.
          </h2>
          <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/85">
            <p>
              I&apos;m an executive leadership advisor, coach, keynote speaker, podcast host, and
              international best-selling author &mdash; but at the heart of my work is a simple
              belief: what&apos;s next can be one of the most powerful questions we ask
              ourselves.
            </p>
            <p>
              For more than 30 years, I&apos;ve worked alongside leaders, teams, and
              organizations navigating growth, change, uncertainty, and transformation. My
              career has spanned executive leadership, organizational strategy, culture, talent,
              and business transformation across technology, SaaS, biotechnology, government
              contracting, and nonprofit organizations.
            </p>
            <p>What I&apos;ve learned is that leadership isn&apos;t about having all the answers.</p>
            <p className="border-l-2 border-accent pl-5 font-serif text-lg text-foreground italic">
              It&apos;s about having the courage to ask better questions, the clarity to make
              difficult choices, and the compassion to remember the human being in front of you.
            </p>
            <p>
              Today, through What&apos;s Next? Coaching and Consulting, I bring that experience
              to leaders and organizations at pivotal moments &mdash; whether they are stepping
              into a bigger role, navigating significant change, strengthening a leadership
              team, building a more humane and accountable culture, or deciding what comes next.
            </p>
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
            <p>
              Because what&apos;s next isn&apos;t simply about where you go from here. It&apos;s
              about recognizing what&apos;s possible, choosing what matters, and having the
              courage to move toward it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
