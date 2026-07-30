const reviews = [
  {
    name: "Dr. Sarah Chen",
    role: "Professor of Statistics",
    text: "Emma has a rare ability to grasp abstract mathematical concepts and translate them into practical analytical work. Her thesis on epidemiological modeling was outstanding.",
  },
  {
    name: "Andi Pratama",
    role: "Student (Tutoring Client)",
    text: "I went from failing calculus to getting an A. Emma explained everything so clearly with real examples. Best tutor I&apos;ve ever had.",
  },
  {
    name: "Rina Wijaya",
    role: "Team Lead, DataCrunch Analytics",
    text: "Emma&apos;s internship work on our dashboard project exceeded expectations. Her attention to data quality and statistical rigor impressed the whole team.",
  },
];

export function Testimonials() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl rounded-4xl bg-ink px-6 py-14 text-ink-foreground sm:px-10">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          What People <span className="text-primary">Say</span>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-3xl bg-ink-soft p-6">
              <div className="flex items-center gap-2 text-sm text-star">
                ★★★★★ <span className="text-ink-foreground/60">5.0</span>
              </div>
              <blockquote className="mt-4 text-sm text-ink-foreground/70">{r.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {r.name[0]}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{r.name}</span>
                  <span className="block truncate text-xs text-ink-foreground/50">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
