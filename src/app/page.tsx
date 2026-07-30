"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { About } from "@/components/portfolio/About";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Blog } from "@/components/portfolio/Blog";
import { Footer } from "@/components/portfolio/Footer";
import { useState } from "react";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Blog />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
