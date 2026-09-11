const pillars = [
  {
    number: '01',
    title: 'Curiosity',
    description: 'Asking better questions before reaching for answers.',
  },
  {
    number: '02',
    title: 'Candor',
    description: 'Honest conversations, even when they are difficult ones.',
  },
  {
    number: '03',
    title: 'Compassion',
    description: 'Remembering the human being in front of you.',
  },
  {
    number: '04',
    title: 'Accountability',
    description: 'Expecting great things without losing sight of humanity.',
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="border-y border-primary/20 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative flex flex-col gap-2 overflow-hidden rounded-md border-t-2 border-t-primary bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span
                className="pointer-events-none absolute -top-3 right-3 font-serif text-6xl font-bold text-primary/10"
                aria-hidden="true"
              >
                {pillar.number}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-primary italic">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
