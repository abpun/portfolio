import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Markdown } from "@/components/blog/Markdown";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-full">
                {t}
              </Badge>
            ))}
          </div>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">{post.title}</h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{post.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {format(new Date(post.date), "MMMM d, yyyy")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readingTime}
            </span>
            <span>· {post.author}</span>
          </div>
        </header>

        <div className="mt-8 rounded-2xl border bg-card p-6 md:p-8">
          <Markdown content={post.content} />
        </div>

        <footer className="mt-8 flex items-center justify-between border-t pt-6">
          <Link href="/blog" className="text-sm font-medium text-primary hover:underline">
            ← More posts
          </Link>
          <a href="mailto:abhishek.pun.3@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
            Reply via email
          </a>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              author: { "@type": "Person", name: post.author },
              keywords: post.tags.join(", "),
            }),
          }}
        />
      </div>
    </article>
  );
}
