const pillars = [
  {
    title: 'Curiosity',
    description: 'Asking better questions before reaching for answers.',
  },
  {
    title: 'Candor',
    description: 'Honest conversations, even when they are difficult ones.',
  },
  {
    title: 'Compassion',
    description: 'Remembering the human being in front of you.',
  },
  {
    title: 'Accountability',
    description: 'Expecting great things without losing sight of humanity.',
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="border-y border-primary/20 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col gap-2 border-l-2 border-primary pl-4">
              <h3 className="font-serif text-xl text-foreground">{pillar.title}</h3>
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
