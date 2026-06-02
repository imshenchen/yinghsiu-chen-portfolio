import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

export default function ArchLayers({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const m = t.gallery.aiArch;

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
            <div className="border-2 border-[var(--color-foreground)] p-5">
              <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <b className="text-base font-semibold">{layer.name}</b>
                <span className="label-mono text-[var(--color-muted-foreground)]">
                  {layer.tag}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.nodes.map((node) => (
                  <span
                    key={node}
                    className="border border-[var(--color-border-light)] px-3 py-1.5 text-xs leading-snug"
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>
            {i < m.layers.length - 1 && (
              <div
                aria-hidden
                className="flex h-6 items-center justify-center text-[var(--color-muted-foreground)]"
              >
                <svg width="12" height="20" viewBox="0 0 12 20">
                  <line
                    x1="6"
                    y1="0"
                    x2="6"
                    y2="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M2 12 L6 19 L10 12 Z" fill="currentColor" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 border-2 border-dashed border-[var(--color-foreground)] p-5 sm:flex-row sm:items-baseline">
        <span className="label-mono whitespace-nowrap text-[var(--color-foreground)]">
          {m.loopLabel}
        </span>
        <span className="text-sm leading-relaxed text-[var(--color-muted-foreground)]">
          {m.loopBody}
        </span>
      </div>
    </figure>
  );
}
