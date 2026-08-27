import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 flex flex-wrap gap-1.5">
        {post.tags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="outline" className="rounded-full text-[11px]">{tag}</Badge>
        ))}
        <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" /> {post.readingTime}
        </span>
      </div>
      <h3 className="font-serif text-lg font-semibold leading-tight group-hover:text-primary">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="h-3 w-3" />
        {format(new Date(post.date), "MMM d, yyyy")} · {post.author}
      </div>
    </Link>
  );
}
