import type { ReactNode } from "react";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ index, label, title, intro, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <div className={`mb-14 ${centered ? "mx-auto max-w-2xl text-center" : "grid gap-6 md:grid-cols-12 md:items-end"}`}>
      <div className={centered ? "" : "md:col-span-7"}>
        <p data-reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          <span>{index}</span>
          <span className="h-px w-8 bg-primary/40" />
          <span>{label}</span>
        </p>
        <h2 data-split className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {intro && (
        <p data-reveal className={`text-[15px] leading-relaxed text-muted-foreground ${centered ? "mt-5" : "md:col-span-5"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
