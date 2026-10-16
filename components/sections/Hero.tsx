"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="mb-2 -rotate-2 font-hand text-2xl text-primary">namaste, I&apos;m Abhishek 👋</p>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <span className="font-medium tracking-wide">Available for new projects — Q4 2026</span>
              <span className="hidden h-1 w-1 rounded-full bg-primary sm:block" />
              <span className="hidden text-muted-foreground sm:inline">Let&apos;s talk →</span>
            </div>

            <h1 className="font-serif text-[2.2rem] font-[650] leading-[0.95] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Full-stack
              <br />
              <span className="font-light italic text-primary">developer</span> crafting
              <br />
              digital products that
              <br />
              <span className="relative inline-block">
                feel human.
                <svg
                  aria-hidden
                  viewBox="0 0 220 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                >
                  <path
                    d="M3 11 C 40 4, 80 14, 118 8 S 190 5, 217 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              I&apos;m <span className="font-medium text-foreground">Abhishek</span> — I help teams in Nepal and beyond ship fast, accessible web apps with
              React, Next.js, and thoughtful design. No bloat, just what works.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#projects">View selected work</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Butwal, Nepal — Remote worldwide
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-leaf" /> Responds in ~2h
              </span>
            </div>
          </motion.div>

          {/* Right — editorial card */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[2rem] border bg-card p-6 shadow-warm">
              <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply" />
              {/* subtle paper grid */}
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`, backgroundSize: "20px 20px" }} />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium tracking-widest"> PROFILE — 2026</span>
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="h-2.5 w-2.5 rounded-full bg-leaf" />
                  </span>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-[96px] w-[96px] shrink-0 -rotate-3 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary to-accent font-serif text-2xl font-bold text-primary-foreground shadow-warm">
                    AP
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold leading-tight">Abhishek Pun</h3>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      5+ years • 10+ products shipped • Obsessed with performance &amp; DX.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: "Projects", v: "14+" },
                    { k: "Experience", v: "5 yrs" },
                    { k: "Clients", v: "20+" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl border border-dashed border-primary/25 bg-muted/70 p-3">
                      <div className="font-serif text-lg font-bold">{s.v}</div>
                      <div className="text-[11px] tracking-widest text-muted-foreground">{s.k.toUpperCase()}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">React</span>
                  <span className="rounded-full border bg-background px-3 py-1 text-xs">Next.js</span>
                  <span className="rounded-full border bg-background px-3 py-1 text-xs">TypeScript</span>
                  <span className="rounded-full border bg-background px-3 py-1 text-xs">Postgres</span>
                </div>
              </div>
            </div>

            {/* floating accent */}
            <div className="absolute -bottom-7 -right-3 hidden rotate-3 rounded-sm bg-accent px-5 pb-3 pt-4 font-hand text-2xl leading-none text-accent-foreground shadow-lg lg:block">
              <span aria-hidden className="absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 -rotate-2 bg-card/70" />
              let&apos;s build something useful ✦
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
