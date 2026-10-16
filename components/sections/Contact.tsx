"use client";

import { useRef } from "react";
import { Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_INFOS } from "@/lib/userInfo";
import { siteConfig } from "@/lib/constants";
import { useReveal } from "@/components/motion/useReveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { SectionHeading } from "./SectionHeading";

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="contact" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          label="Contact"
          title={
            <>
              Let&apos;s build something <em className="font-normal text-primary">useful.</em>
            </>
          }
          intro="Have an idea or a product that needs a hand? Tell me about it. I reply within a day, usually sooner."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <ul data-reveal className="divide-y rounded-3xl border bg-card">
              {CONTACT_INFOS.map((info) => (
                <li key={info.label} className="flex items-center gap-4 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <info.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div data-reveal className="flex flex-1 flex-col justify-between gap-6 rounded-3xl bg-secondary p-8 text-secondary-foreground">
              <div>
                <p className="font-serif text-2xl leading-snug">Prefer a quick call?</p>
                <p className="mt-2 text-sm opacity-70">
                  I&apos;m usually free 10am–6pm NPT. No sales pitch, just clarity on scope, timeline and cost.
                </p>
              </div>
              <Magnetic>
                <Button asChild variant="accent">
                  <a href={`mailto:${siteConfig.email}`}>
                    Email me directly <ArrowUpRight />
                  </a>
                </Button>
              </Magnetic>
            </div>
          </div>

          <form
            data-reveal
            className="space-y-5 rounded-3xl border bg-card p-6 md:p-8 lg:col-span-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Ada Lovelace" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="ada@company.com" className="mt-2" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Project inquiry — landing page" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me a bit about your project, timeline and budget…"
                rows={6}
                className="mt-2"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <Send /> Send message
            </Button>
            <p className="text-center text-xs text-muted-foreground">I read every message myself. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
