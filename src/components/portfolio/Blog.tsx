import Image from "next/image";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";

const posts = [
  { img: w1, title: "Why every data scientist should learn linear algebra" },
  { img: w2, title: "A beginner's guide to statistical hypothesis testing" },
  { img: w3, title: "How I built an epidemic model from scratch in Python" },
];

export function Blog() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Latest
            <br /> <span className="text-primary">Writing</span>
          </h2>
          <a
            href="#project"
            className="shrink-0 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Read All
          </a>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-3xl bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <Image src={p.img} alt={p.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="pr-12 text-sm font-semibold leading-snug">{p.title}</h3>
              </div>
              <span className="absolute right-5 bottom-5 grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
