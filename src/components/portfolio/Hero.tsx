"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import jenny from "@/assets/jenny.webp";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-line", { y: 40, opacity: 0, duration: 0.7, stagger: 0.12 })
        .from(".hero-arc", { scale: 0.6, opacity: 0, duration: 0.9 }, "-=0.6")
        .from(".hero-photo", { y: 60, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(".hero-side", { y: 24, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.5");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <header id="home" ref={root} className="px-4 pt-6">
      <div className="relative mx-auto mt-10 max-w-6xl">
        <div className="hero-line mx-auto w-fit rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          Mathematics Graduate &mdash; Class of 2025
        </div>

        <h1 className="hero-line mt-4 text-center text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
          I&apos;m <span className="text-primary">Emma,</span>
          <br />
          Mathematics <span className="text-primary">Graduate</span>
        </h1>

        <div className="mt-6 grid items-center gap-4 lg:gap-10" style={{ gridTemplateColumns: "1fr auto 1fr" }}>
          <div className="hero-side flex flex-col gap-4 lg:gap-6">
            <div>
              <span className="hidden font-display text-4xl leading-none text-primary lg:block">&ldquo;</span>
              <p className="text-xs text-muted-foreground lg:text-sm lg:max-w-xs">
                Turning complex problems into elegant mathematical solutions with clarity and precision.
              </p>
            </div>
            <div className="lg:hidden">
              <p className="font-display text-lg font-bold">3.92</p>
              <p className="text-[10px] text-muted-foreground">Cumulative GPA</p>
            </div>
            <div className="hidden lg:block">
              <p className="font-display text-3xl font-bold">3.92</p>
              <p className="text-sm text-muted-foreground">Cumulative GPA</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center lg:block">
            <div className="relative mx-auto w-full max-w-[11rem] shrink-0 lg:max-w-md">
              <svg
                className="hero-arc absolute -inset-x-8 bottom-0 -z-10 w-[calc(100%+4rem)]"
                viewBox="0 0 400 200"
                aria-hidden="true"
              >
                <path d="M0 200 A200 200 0 0 1 400 200 Z" fill="var(--primary)" />
              </svg>
              <Image
                src={jenny}
                alt="Emma"
                className="hero-photo relative mx-auto w-full max-w-[19rem] object-contain"
              />
              <div className="absolute inset-x-0 bottom-12 flex items-center justify-center gap-2 sm:bottom-20">
                <a
                  href="#project"
                  className="inline-flex items-center gap-1 rounded-full bg-ink px-2 py-1 text-[10px] font-medium text-ink-foreground transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  View Projects <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="#contact-us"
                  className="inline-flex items-center rounded-full border border-ink bg-background px-2 py-1 text-[10px] font-medium transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          <div className="hero-side flex flex-col items-end gap-3 lg:gap-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-medium text-primary lg:px-4 lg:py-1.5 lg:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary lg:h-2 lg:w-2" />
              Open to Work
            </div>
            <div className="rounded-2xl border border-border bg-card p-3 text-right lg:p-5">
              <p className="text-xl font-bold text-primary lg:text-4xl">120+</p>
              <p className="text-[10px] font-medium lg:text-sm lg:mt-1">Happy Students</p>
              <p className="hidden text-[10px] text-muted-foreground lg:block lg:mt-0.5 lg:text-xs">Tutored &amp; mentored</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
