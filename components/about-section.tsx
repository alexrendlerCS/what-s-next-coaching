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
              career in executive HR and people leadership has taken me across technology,
              SaaS, biotechnology, government contracting, and nonprofit organizations &mdash;
              and through more change than I could possibly have predicted when I began.
            </p>
            <p className="border-l-2 border-accent pl-5 font-serif text-lg text-foreground italic">
              Leadership isn&apos;t about having all the answers. It&apos;s about having the
              courage to ask better questions, the clarity to make difficult choices, and the
              compassion to remember the human being in front of you.
            </p>
            <p>
              Today, through What&apos;s Next? Coaching and Consulting, I bring that experience
              to leaders and organizations at pivotal moments &mdash; whether that means
              stepping into a bigger role, navigating change, strengthening a leadership team,
              developing a more humane and accountable culture, or simply figuring out what
              comes next.
            </p>
            <p>
              Because sometimes the most important question isn&apos;t, &ldquo;What have I
              done?&rdquo; It&apos;s &ldquo;What&apos;s next?&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
