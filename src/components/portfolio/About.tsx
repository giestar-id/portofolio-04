import Image from "next/image";
import jenny from "@/assets/jenny.png";

export function About() {
  return (
    <section id="about" className="bg-orange-500/40 px-4 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <svg width="0" height="0" className="absolute">
            <clipPath id="circleClip" clipPathUnits="objectBoundingBox">
              <path d="M0,-0.3 L1,-0.3 L1,0.5 A0.5,0.5 0 0,1 0,0.5 Z" />
            </clipPath>
          </svg>
          <div className="aspect-square rounded-full bg-primary" />
          <div className="absolute inset-0" style={{ clipPath: "url(#circleClip)" }}>
            <div className="absolute bottom-0 left-1/2 h-[130%] w-full -translate-x-1/2">
              <Image
                src={jenny}
                alt="Portrait of Emma"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Passionate About
            <br /> <span className="text-primary">Mathematics</span> &amp; Data
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            I&apos;m a fresh mathematics graduate with a deep passion for turning raw data into
            meaningful insights. My academic background in statistical modeling, linear algebra,
            and probability theory gives me a strong foundation for data-driven problem solving.
          </p>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            I thrive at the intersection of rigorous mathematical thinking and practical
            application — whether it&apos;s building predictive models, visualizing complex
            trends, or helping others understand the beauty of mathematics.
          </p>
          <div className="mt-8 flex gap-12">
            <div>
              <p className="font-display text-3xl font-bold">3.92</p>
              <p className="text-sm text-muted-foreground">GPA</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold">4</p>
              <p className="text-sm text-muted-foreground">Research Projects</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold">6</p>
              <p className="text-sm text-muted-foreground">Tools Mastered</p>
            </div>
          </div>
          <a
            href="#contact-us"
            className="mt-8 inline-flex rounded-full border border-primary px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
