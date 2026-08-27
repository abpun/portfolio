import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

type Props = { content: string };

export function Markdown({ content }: Props) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-p:text-[15px] prose-a:text-foreground prose-a:underline prose-a:decoration-foreground/20 prose-a:underline-offset-4 hover:prose-a:decoration-foreground prose-strong:font-semibold prose-blockquote:border-l-2 prose-blockquote:border-border prose-blockquote:bg-muted/40 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:italic prose-code:font-mono prose-code:text-[13.5px] prose-code:font-medium prose-code:before:content-none prose-code:after:content-none prose-pre:my-6 prose-pre:rounded-xl prose-pre:border prose-pre:bg-[#fafafa] dark:prose-invert dark:prose-pre:bg-zinc-900">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          a: ({ children, ...props }) => (
            <a {...props} target={props.href?.startsWith("http") ? "_blank" : undefined} rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}>
              {children}
            </a>
          ),
          code: ({ children, className, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-medium text-foreground" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="overflow-x-auto rounded-xl border bg-muted p-4 text-sm leading-relaxed">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-border bg-muted/30 py-3 px-4 italic">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
          hr: () => <hr className="my-8 border-border" />,
          img: ({ alt, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img alt={alt ?? ""} className="rounded-xl border" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
