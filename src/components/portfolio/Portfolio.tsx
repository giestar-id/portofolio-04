"use client";

import { useState } from "react";
import Image from "next/image";
import food from "@/assets/project-food.jpg";
import w1 from "@/assets/work-1.jpg";
import w3 from "@/assets/work-3.jpg";

const slides = [
  {
    img: food,
    title: "COVID-19 Spread Modeling — SIR Simulation",
    tags: ["Mathematical Modeling", "Python", "Data Analysis"],
  },
  {
    img: w1,
    title: "Student Performance Predictor — Regression Analysis",
    tags: ["Machine Learning", "R", "Statistics"],
  },
  {
    img: w3,
    title: "Jakarta Housing Dashboard — Interactive Visualization",
    tags: ["Data Visualization", "Tableau", "Python"],
  },
];

export function Portfolio() {
  const [i, setI] = useState(0);
  const s = slides[i];
  const go = (d: number) => setI((p) => (p + d + slides.length) % slides.length);

  return (
    <section id="project" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured
            <br /> <span className="text-primary">Projects</span>
          </h2>
          <a
            href="#project"
            className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            See All
          </a>
        </div>

        <div className="relative mt-10">
          <div className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)]">
            <Image
              src={s.img}
              alt={s.title}
              className="h-[280px] w-full object-cover sm:h-[420px]"
            />
          </div>
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => go(-1)}
            className="absolute top-1/2 -left-3 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink text-ink-foreground transition-transform hover:scale-105"
          >
            &larr;
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => go(1)}
            className="absolute top-1/2 -right-3 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
          >
            &rarr;
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {s.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-semibold">
          {s.title} <span className="text-primary">●</span>
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          A deep dive into data — from cleaning and exploration to modeling and visualization.
          Each project demonstrates applied mathematical thinking and technical proficiency.
        </p>
      </div>
    </section>
  );
}
