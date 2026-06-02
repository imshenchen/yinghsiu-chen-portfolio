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

export default function WorkflowParallel({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const m = t.gallery.workflowParallel;

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-3 text-[var(--color-muted-foreground)]">
        {m.title}
      </figcaption>
      <p className="mb-8 max-w-prose text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {m.intro}
      </p>

      <div className="flex flex-col">
        {m.layers.map((layer, i) => (
          <div key={layer.name} className="flex flex-col">
            <div
              className={`border-2 border-[var(--color-foreground)] p-5 ${
                layer.invert
                  ? "bg-[var(--color-foreground)] text-[var(--color-background)]"
                  : ""
              }`}
            >
              <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="label-mono">{layer.step}</span>
                <b className="text-base font-semibold">{layer.name}</b>
              </div>
              <div
                className={`grid gap-2 ${
                  layer.nodes.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
                }`}
              >
                {layer.nodes.map((node) => (
                  <span
                    key={node}
                    className={`px-3 py-2 text-xs leading-snug ${
                      layer.invert
                        ? "border border-[var(--color-background)]/40"
                        : "border border-[var(--color-border-light)]"
                    }`}
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>
            {i < m.layers.length - 1 && <DownArrow />}
          </div>
        ))}
        <DownArrow />
        <div className="flex justify-center">
          <span className="label-mono border-2 border-[var(--color-foreground)] bg-[var(--color-foreground)] px-6 py-2 text-[var(--color-background)]">
            {m.releaseLabel}
          </span>
        </div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {m.note}
      </p>
    </figure>
  );
}
