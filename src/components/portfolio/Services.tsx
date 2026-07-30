"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { title: "UI/UX Design", img: w1, active: false },
  { title: "Web Design", img: w2, active: true },
  { title: "Landing Page", img: w3, active: false },
];

export function Services() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="service" ref={root} className="bg-orange-500/40 px-4 py-16">
      <div className="mx-auto max-w-6xl rounded-4xl bg-ink p-6 text-ink-foreground sm:p-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="max-w-sm text-sm text-ink-foreground/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pr-6 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pr-0">
          {items.map((s) => (
            <article
              key={s.title}
              className={`svc-card group relative w-[75vw] shrink-0 snap-start overflow-hidden rounded-3xl p-5 transition-colors md:w-auto md:shrink ${
                s.active ? "bg-primary text-primary-foreground" : "bg-ink-soft"
              }`}
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <Image
                src={s.img}
                alt={s.title}
                className="mt-5 h-44 w-full rounded-2xl object-cover"
              />
              <span
                className={`absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full text-sm font-semibold shadow-sm transition-all group-hover:scale-110 group-hover:shadow-md ${
                  s.active ? "bg-ink text-ink-foreground" : "bg-primary text-primary-foreground"
                }`}
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
