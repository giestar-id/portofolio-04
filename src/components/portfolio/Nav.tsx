"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Service", "Resume", "Project", "Contact Us"];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-ink text-ink-foreground">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              E
            </span>
            <span className="font-display text-sm font-semibold">Emma</span>
          </div>
          <div className="flex items-center gap-1">
            <ul className="hidden items-center gap-1 text-sm md:flex">
              {links.map((l, i) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                    className={`rounded-lg px-4 py-2 transition-colors ${i === 0 ? "text-primary" : "hover:text-primary"}`}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-full text-ink-foreground/70 hover:bg-ink-soft md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-64 flex-col bg-ink p-6 text-ink-foreground shadow-2xl transition-transform md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              E
            </span>
            <span className="font-display text-sm font-semibold">Emma</span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-full text-ink-foreground/70 hover:bg-ink-soft"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${i === 0 ? "bg-primary/10 text-primary" : "text-ink-foreground/70 hover:bg-ink-soft hover:text-ink-foreground"}`}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-ink-soft pt-6">
          <p className="text-xs text-ink-foreground/50">
            Mathematics Graduate &mdash; Class of 2025
          </p>
        </div>
      </div>
    </>
  );
}
