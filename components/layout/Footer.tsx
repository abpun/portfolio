import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-serif text-sm font-bold text-primary-foreground">
                A•P
              </div>
              <span className="font-serif text-lg font-semibold">Abhishek Pun</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-secondary-foreground/70">
              Full-stack developer crafting human-centered products. Based in Butwal, working worldwide.
              Available for freelance and full-time roles.
            </p>
            <div className="mt-6 flex gap-2">
              <Link href={siteConfig.links.github} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10">
                <Github className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.links.linkedin} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </Link>
              <a href={`mailto:${siteConfig.email}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 text-sm font-semibold tracking-widest opacity-60">NAVIGATE</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-secondary-foreground/70 hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-4 text-sm font-semibold tracking-widest opacity-60">GET IN TOUCH</h4>
            <p className="flex items-center gap-2 text-sm text-secondary-foreground/70">
              <Mail className="h-4 w-4 text-accent" /> {siteConfig.email}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-secondary-foreground/70">
              <MapPin className="h-4 w-4 text-accent" /> {siteConfig.location}
            </p>
            <p className="mt-6 text-xs leading-relaxed text-secondary-foreground/50">
              © {new Date().getFullYear()} Abhishek Pun. Set in Newsreader & Inter. Built with Next.js & Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
