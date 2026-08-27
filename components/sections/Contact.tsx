"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_INFOS } from "@/lib/userInfo";
import { Mail, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-primary">CONTACT</p>
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">
            Let&apos;s talk for <span className="italic font-light text-primary">your project</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Have an idea? I&apos;d love to hear about it. Expect a reply within a day.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="font-serif text-base font-semibold">Reach me directly</h3>
              <div className="mt-4 space-y-3">
                {CONTACT_INFOS.map((info) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <info.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs tracking-widest text-muted-foreground">{info.label.toUpperCase()}</div>
                      <div className="text-sm font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:abhishek.pun.3@gmail.com">
                    <Mail className="h-4 w-4" /> Email me
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/contact">Book a call</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-secondary p-6 text-secondary-foreground">
              <p className="font-serif text-lg leading-snug">Prefer a quick call? I&apos;m usually free 10am–6pm NPT.</p>
              <p className="mt-2 text-sm opacity-70">No sales pitch. Just clarity on scope, timeline, and cost.</p>
            </div>
          </div>

          <Card className="p-6 lg:col-span-7">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
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
                <Textarea id="message" placeholder="Tell me a bit about your project, timeline, and budget..." rows={5} className="mt-2" />
              </div>
              <Button type="submit" className="w-full">
                <Send className="h-4 w-4" /> Send message
              </Button>
              <p className="text-center text-xs text-muted-foreground">I&apos;ll get back within 24 hours. No spam, ever.</p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
