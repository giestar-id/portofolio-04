"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  {
    company: "University Research Lab",
    period: "Sep 2024 – Jun 2025",
    role: "Research Assistant — Applied Mathematics",
    desc: "Developed statistical models for epidemiological data, processed 10k+ records using Python and R. Presented findings at the annual mathematics symposium.",
  },
  {
    company: "Freelance Tutoring",
    period: "Jan 2023 – Present",
    role: "Mathematics Tutor",
    desc: "Taught calculus, linear algebra, and probability to 30+ university students with a 95% pass rate. Designed custom problem sets and mock exams.",
  },
  {
    company: "DataCrunch Analytics",
    period: "Jun 2024 – Aug 2024",
    role: "Data Analyst Intern",
    desc: "Built interactive dashboards in Tableau and performed A/B testing analysis for client reports. Automated weekly data pipeline saving 10 hours per week.",
  },
  {
    company: "Math Society, Universitas Indonesia",
    period: "2023 – 2025",
    role: "Head of Research Division",
    desc: "Organized workshops on mathematical modeling and led a team of 12 in data competition preparation. Secured 2nd place at national data hackathon.",
  },
];

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-item", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="resume" ref={root} className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Experience &amp; <span className="text-primary">Research</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Tap to expand each role
          </p>
        </div>

        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {rows.map((r, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={r.company} className="exp-item">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-ink/5 sm:px-6"
                >
                  <div className="min-w-0">
                    <p className="font-display font-semibold">{r.company}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{r.role}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="hidden text-xs text-primary sm:block">{r.period}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                    <span className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {r.period}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
