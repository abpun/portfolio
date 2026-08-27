"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary">ABOUT — WHO I AM</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
              Builder by heart,
              <br />
              <span className="font-light italic text-muted-foreground">pragmatist by trade.</span>
            </h2>
            <div className="mt-6 rounded-2xl border bg-card p-5">
              <Quote className="h-6 w-6 text-accent" />
              <p className="mt-3 font-serif text-base leading-relaxed">
                &ldquo;Good software feels obvious after it ships — and inevitable before.&rdquo;
              </p>
              <p className="mt-2 text-xs tracking-widest text-muted-foreground">— PRODUCT THINKING</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 lg:col-span-7"
          >
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              I&apos;m a full-stack developer based in Butwal, Nepal. I started by shipping small tools for local businesses —
              inventory trackers, booking flows — and learned that performance and clarity beat cleverness every time.
            </p>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Today I work across the stack: design systems in React, APIs in Node, and data in Postgres/Mongo. I care about
              loading states, empty states, and the tiny moments that make a product feel crafted.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { v: "14+", l: "Products shipped" },
                { v: "5+", l: "Years building" },
                { v: "98%", l: "Client retention" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border bg-muted/50 p-4 text-center">
                  <div className="font-serif text-2xl font-bold">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <Button asChild>
                <a href="/resume.pdf" target="_blank">
                  Download CV <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Read my story</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
