import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

export default function ResearchInsights({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const m = t.gallery.aiResearch;

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-3 text-[var(--color-muted-foreground)]">
        {m.title}
      </figcaption>
      <p className="mb-8 max-w-prose text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {m.intro}
      </p>

      <div className="mb-6 grid grid-cols-1 gap-px border-2 border-[var(--color-foreground)] bg-[var(--color-foreground)] sm:grid-cols-3">
        {m.stats.map((s) => (
          <div
            key={s.label}
            className="bg-[var(--color-background)] p-5"
          >
            <div className="font-[family-name:var(--font-display)] text-4xl leading-none font-semibold">
              {s.value}
              <span className="ml-1 text-base font-medium text-[var(--color-muted-foreground)]">
                {s.unit}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-px border-2 border-[var(--color-foreground)] bg-[var(--color-foreground)] sm:grid-cols-2 lg:grid-cols-3">
        {m.cards.map((c) => (
          <div key={c.title} className="bg-[var(--color-background)] p-5">
            <span className="label-mono text-[var(--color-muted-foreground)]">
              {c.tag}
            </span>
            <h4 className="mt-2 mb-2 text-base font-semibold">{c.title}</h4>
            <p className="text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </figure>
  );
}
