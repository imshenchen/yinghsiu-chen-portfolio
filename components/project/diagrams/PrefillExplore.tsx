import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

export default function PrefillExplore({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const { title, painPoint, abTesting } = t.gallery.explore.prefill;

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-8 text-[var(--color-muted-foreground)]">
        {title}
      </figcaption>

      <div className="border-t-2 border-[var(--color-foreground)] pt-5">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold">{painPoint.title}</h3>
          <span className="text-sm text-[var(--color-muted-foreground)]">
            {painPoint.collabLabel}
            <span className="font-semibold text-[var(--color-foreground)]">
              {painPoint.collab}
            </span>
          </span>
        </div>
        <p className="mt-3 max-w-prose leading-relaxed text-[var(--color-muted-foreground)]">
          {painPoint.body}
        </p>
      </div>

      <div className="mt-12 border-t-2 border-[var(--color-foreground)] pt-5">
        <h3 className="text-xl font-semibold">{abTesting.title}</h3>
        <p className="mt-3 max-w-prose leading-relaxed text-[var(--color-muted-foreground)]">
          {abTesting.body}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {abTesting.steps.map((s) => (
            <div
              key={s.label}
              className="border-t border-[var(--color-border-light)] pt-3"
            >
              <span className="label-mono text-[var(--color-muted-foreground)]">
                {s.label}
              </span>
              <p className="mt-2 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
