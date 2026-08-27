# Abhishek Pun — Portfolio (Next.js 15)

A warm, editorial portfolio built with Next.js App Router — not the generic indigo-gradient. Crafted for readability, performance, and effortless daily blogging.

**Live:** `https://abhishekpun.com.np` (update in `lib/constants.ts`)

---

## ✨ Highlights

- **Human-made palette** — Paper `#FDFCF8`, Ink `#1A1A18`, Brick `#C45A3C`, Forest `#2B3D3A`, Ochre `#D9A44A`. No AI gradients.
- **Next.js 15 App Router** — File-system routing, `metadata` per page, `sitemap.ts` + `robots.ts`, JSON-LD.
- **Separated components** — `components/layout`, `components/sections`, `components/ui`, `components/blog` — each in its own file.
- **Daily blog** — Markdown files in `content/blog/*.md` with frontmatter. Add a file, push, done.
- **Icons:** `lucide-react` — consistent, dedicated library.
- **Motion:** `framer-motion` — subtle entrance, hover, and scroll animations.
- **SEO:** Per-page `metadata`, Open Graph, Twitter cards, canonical URLs, structured data.

---

## 📁 Folder Structure

```
app/                      # Next.js App Router
  layout.tsx              # Root layout (fonts, GTM, Header/Footer, SEO defaults)
  page.tsx                # Home (composes sections)
  globals.css             # Human palette + paper texture
  about/page.tsx
  projects/page.tsx
  contact/page.tsx
  blog/
    page.tsx              # Blog listing (reads content/blog)
    [slug]/page.tsx       # Blog post (generateStaticParams)

components/
  layout/Header.tsx       # Sticky, blur, mobile drawer (framer-motion)
  layout/Footer.tsx       # Forest background, links
  sections/
    Hero.tsx              # Editorial hero + profile card
    About.tsx
    Services.tsx
    TechStack.tsx
    Projects.tsx
    Contact.tsx
  ui/                     # shadcn-based primitives
    button.tsx card.tsx badge.tsx input.tsx textarea.tsx label.tsx
  blog/
    BlogCard.tsx
    Prose.tsx             # Typography wrapper

lib/
  constants.ts            # siteConfig, navLinks
  userInfo.ts             # SERVICES, PROJECTS, CONTACT_INFOS (edit here)
  blog.ts                 # getAllPosts(), getPostBySlug() — fs + gray-matter
  utils.ts                # cn()

content/blog/
  hello-world.md
  nextjs-migration-notes.md
  designing-human-palettes.md  # ← duplicate to create new posts

public/
  vite.svg                # replace with your og.jpg, favicon

tailwind.config.ts        # HSL vars, font variables
next.config.mjs
```

---

## ✍️ Blog — Post Daily Content

Add a markdown file to `content/blog/my-new-post.md`:

```md
---
title: "My Daily Note"
description: "One-sentence summary for SEO & cards."
date: "2026-08-27"
author: "Abhishek Pun"
tags: ["Next.js", "Notes"]
cover: ""                 # optional: /images/cover.jpg
published: true           # false = draft
---

Your content here. Plain markdown — paragraphs, `code`, lists.
```

- **File name = slug** (`my-new-post.md` → `/blog/my-new-post`)
- **No rebuild needed** beyond deploy; `generateStaticParams` picks it up.
- Drafts: set `published: false` or remove file.

Helper idea:

```bash
# create today's draft
node -e "require('fs').writeFileSync('content/blog/'+new Date().toISOString().slice(0,10)+'-note.md', '---\ntitle: \"Untitled\"\ndescription: \"\"\ndate: \"'+new Date().toISOString().slice(0,10)+'\"\ntags: []\npublished: true\n---\n\n')"
```

---

## 🎨 Color Scheme (not AI)

Defined as HSL in `app/globals.css` — warm paper, not cold SaaS:

| Token | HSL | Hex | Use |
|-------|-----|-----|-----|
| background | 40 33% 98% | #FDFCF8 | Page paper |
| foreground | 30 8% 10% | #1A1A18 | Ink text |
| primary | 14 52% 50% | #C45A3C | Brick CTA |
| secondary | 165 18% 20% | #2B3D3A | Forest sections/footer |
| muted | 38 30% 93% | #F2EDE3 | Cards, stone |
| accent | 38 65% 57% | #D9A44A | Ochre highlight |
| border | 38 22% 88% | #E8E0D0 | Hairline |

Tailwind maps these via `hsl(var(--...))` — change one variable, whole site updates.

Fonts: `Newsreader` (serif headings) + `Inter` (sans body) + `JetBrains Mono` (code) via `next/font`.

---

## 🔍 SEO per Page

Each `app/**/page.tsx` exports `metadata`:

```ts
export const metadata: Metadata = {
  title: "Blog",
  description: "...",
  alternates: { canonical: "/blog" },
  openGraph: { ... }
}
```

Root `app/layout.tsx` sets defaults, `siteConfig` drives `metadataBase`, OG image, keywords, robots. JSON-LD injected on Home and Blog posts.

Sitemap/robots: `app/sitemap.ts` + `app/robots.ts` auto-generate `/sitemap.xml` and `/robots.txt`.

---

## 🧩 Icons & Motion

- **Icons:** `lucide-react` exclusively — see imports like `import { ArrowUpRight } from "lucide-react"`. Replace as needed; single source.
- **Motion:** `framer-motion` for `initial/animate/whileInView`, `AnimatePresence` for mobile nav. No heavy scroll libraries — keeps Lighthouse green.

---

## 🚀 Run Locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production check (13 routes)
npm run start   # preview build
npm run lint
```

---

## 🛠 Effortless Editing

- **Personal info:** `lib/constants.ts` (name, email, links, keywords)
- **Services/Projects/Stack:** `lib/userInfo.ts`
- **Header links:** `lib/constants.ts` → `navLinks`
- **Styles:** `app/globals.css` CSS vars
- **Add page:** `app/my-page/page.tsx` with `metadata`

---

## 📦 Deployment

Works on Vercel, Netlify, or any Node host:

```bash
npm run build
# output in .next
```

Set `siteConfig.url` to your domain before deploy for correct canonical/OG URLs.

---

## 📄 License

MIT — do what you want, just keep it human.
