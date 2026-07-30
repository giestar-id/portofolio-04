"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    label: "Programming & Tools",
    items: ["Python", "R", "SQL", "MATLAB", "LaTeX", "Git"],
  },
  {
    label: "Data & Visualization",
    items: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Excel", "SPSS"],
  },
  {
    label: "Mathematics & Statistics",
    items: ["Regression", "Hypothesis Testing", "Bayesian", "Linear Algebra", "Calculus", "Probability"],
  },
];

export function Skills() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-cat", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Skills &amp; <span className="text-primary">Tools</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Technologies and methods I work with
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.label} className="skill-cat rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                {cat.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
