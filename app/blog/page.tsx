import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Daily notes on building web products — React, Next.js, and engineering craft by Abhishek Pun.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Abhishek Pun",
    description: "Daily notes on building web products.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-primary">WRITING — DAILY</p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight">Blog</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Short, practical posts you can read in 3 minutes. Build logs, design notes, and lessons from shipping real products.
            New content almost daily.
          </p>
          {tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge key={t} variant="outline" className="rounded-full">
                  {t}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border bg-card p-10 text-center">
            <p className="text-sm text-muted-foreground">No posts yet. Check back tomorrow.</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Add markdown files to <code className="rounded bg-muted px-1 py-0.5">content/blog/*.md</code>
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        <div className="mt-10 rounded-2xl border bg-muted/40 p-6 text-center">
          <p className="font-serif text-base font-medium">Want to get new posts?</p>
          <p className="mt-1 text-sm text-muted-foreground">Follow on GitHub or bookmark this page. RSS coming soon.</p>
          <Link href="/" className="mt-4 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
