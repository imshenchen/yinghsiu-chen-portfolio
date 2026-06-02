import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

function DownArrow() {
  return (
    <div
      aria-hidden
      className="flex h-6 items-center justify-center text-[var(--color-muted-foreground)]"
    >
      <svg width="12" height="20" viewBox="0 0 12 20">
        <line x1="6" y1="0" x2="6" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12 L6 19 L10 12 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function WorkflowSerial({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const m = t.gallery.workflowSerial;

  const bottleneck = m.steps.filter((s) => s.isBottleneck);
  const rest = m.steps.filter((s) => !s.isBottleneck);

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-3 text-[var(--color-muted-foreground)]">
        {m.title}
      </figcaption>
      <p className="mb-8 max-w-prose text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {m.intro}
      </p>

      <div className="flex flex-col">
        <div className="border-2 border-[var(--color-foreground)] p-5">
          <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="label-mono">{m.designerOwner}</span>
            <span className="label-mono border border-[var(--color-foreground)] px-2 py-0.5">
              {m.bottleneckLabel}
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {bottleneck.map((s) => (
              <div
                key={s.name}
                className="border border-[var(--color-border-light)] p-4"
              >
                <b className="block text-sm font-semibold">{s.name}</b>
                <p className="mt-1 text-xs leading-snug text-[var(--color-muted-foreground)]">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {rest.map((s) => (
          <div key={s.name} className="flex flex-col">
            <DownArrow />
            <div className="border border-[var(--color-border-light)] p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <b className="text-sm font-semibold">{s.name}</b>
                <span className="label-mono text-[var(--color-muted-foreground)]">
                  {s.owner}
                </span>
              </div>
              <p className="mt-1 text-xs leading-snug text-[var(--color-muted-foreground)]">
                {s.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-2 border-dashed border-[var(--color-foreground)] p-5">
        <p className="label-mono text-[var(--color-muted-foreground)]">
          {m.queueLabel}
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {m.queue.map((q, i) => (
            <div
              key={q}
              className={`px-3 py-2 text-xs leading-snug ${
                i === 0
                  ? "border-2 border-[var(--color-foreground)] font-medium"
                  : "border border-[var(--color-border-light)] text-[var(--color-muted-foreground)]"
              }`}
            >
              {q}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {m.note}
      </p>
    </figure>
  );
}
