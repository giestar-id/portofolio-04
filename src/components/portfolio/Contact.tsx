"use client";

import { useState } from "react";

const skills = [
  "Python", "R", "SQL", "Tableau", "SPSS", "MATLAB", "LaTeX",
  "Statistics", "Calculus", "Linear Algebra", "Probability",
  "Machine Learning", "Data Visualization", "Research Methods",
];

export function Contact() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="contact-us" className="py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Have a Question or
          <br /> Project Idea?{" "}
          <span className="text-primary">Let&apos;s Talk</span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Whether it&apos;s research collaboration, tutoring, or data analysis
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mx-auto mt-8 grid max-w-xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-full border border-border bg-card p-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            className="min-w-0 bg-transparent px-4 py-2 text-sm outline-hidden"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
        {sent && <p className="mt-3 text-sm text-primary">Thanks! I&apos;ll get back to you soon.</p>}
      </div>

      <div className="mt-12 -rotate-2 overflow-hidden bg-primary py-4 text-primary-foreground">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-display text-lg font-semibold sm:text-xl">
          {[...skills, ...skills, ...skills, ...skills].map((s, i) => (
            <span key={`${s}-${i}`} className="flex items-center gap-8">
              {s} <span aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
