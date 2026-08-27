---
title: "Migrating from Vite to Next.js — What Actually Matters"
description: "Real-world notes from moving a portfolio to the App Router: SEO, performance, and folder sanity."
date: "2026-08-22"
author: "Abhishek Pun"
tags: ["Next.js", "React", "Performance", "SEO"]
cover: ""
published: true
---

When I migrated this portfolio from Vite to Next.js, I expected a simple config swap. It was more than that — it's a mindset shift.

## 1. File-system as architecture

Vite lets you improvise. Next.js forces you to decide. `app/blog/[slug]/page.tsx` is not just a file — it's a contract. That constraint is a feature.

## 2. SEO stops being an afterthought

With the App Router, `metadata` lives next to your component. No more helmet hacks.

```ts
export const metadata: Metadata = {
  title: "Blog — Abhishek Pun",
  description: "Daily notes on building web products.",
  openGraph: {
    type: "website",
    title: "Blog",
  }
}
```

## 3. Keep content close to code

I moved posts to `content/blog/*.md`. Easy to edit, easy to version. No CMS needed until you actually need one.

## 4. Color and motion matter

A warm paper palette (`#FDFCF8` + `#C45A3C`) beats the cold indigo gradient every time. Pair it with `framer-motion` — subtle, not shouty.

---

**Takeaway:** Migrate for the workflow, not just the framework. The best stack is the one you can edit effortlessly six months from now.
