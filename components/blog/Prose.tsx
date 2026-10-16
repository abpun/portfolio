import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-a:text-foreground prose-a:decoration-primary/40 prose-a:underline-offset-4 hover:prose-a:decoration-primary dark:prose-invert">
      {children}
    </div>
  );
}
