"use client";

import { motion } from "framer-motion";
import { TECH_STACKS } from "@/lib/userInfo";

export default function TechStack() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-primary">STACK</p>
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">Daily drivers</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Tools I reach for every day — chosen for speed, DX, and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {TECH_STACKS.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border bg-card p-5 text-center"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-muted font-serif text-sm font-bold">
                {tech.name.slice(0, 2)}
              </div>
              <div className="font-serif text-lg font-bold">{tech.percentage}%</div>
              <div className="text-xs tracking-widest text-muted-foreground">{tech.name.toUpperCase()}</div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                  className={`h-1.5 rounded-full ${tech.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
