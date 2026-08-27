"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/lib/userInfo";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-primary">SELECTED WORK</p>
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">Things I&apos;ve built</h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/projects">
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-muted to-muted/60">
                  <span className="rounded-full bg-card px-4 py-2 text-xs font-medium tracking-widest shadow-sm">PREVIEW</span>
                </div>
                <CardHeader>
                  <div className="mb-1 flex items-start justify-between gap-3">
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-full text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.href}>
                        <ExternalLink className="h-4 w-4" /> Live
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github}>
                        <Github className="h-4 w-4" /> Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
