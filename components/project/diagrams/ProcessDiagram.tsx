import { Fragment } from "react";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

type Props = { lang: Locale; variant: "prefill" | "taskStatus" };

export default function ProcessDiagram({ lang, variant }: Props) {
  const t = getMessages(lang);
  const { title } = t.gallery.process;
  const { phases, details } = t.gallery.process[variant];

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-8 text-[var(--color-muted-foreground)]">
        {title}
      </figcaption>

      <div className="flex items-stretch">
        {phases.map((phase, i) => (
          <Fragment key={phase}>
            <div className="flex flex-1 flex-col border-2 border-[var(--color-foreground)] px-3 py-4">
              <span className="label-mono text-[var(--color-muted-foreground)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 text-base font-semibold md:text-lg">
                {phase}
              </span>
            </div>
            {i < phases.length - 1 && (
              <div
                aria-hidden
                className="w-4 shrink-0 self-center border-t-2 border-[var(--color-foreground)] md:w-8"
              />
            )}
          </Fragment>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {details.map((d) => (
          <div
            key={d.title}
            className="border-t-2 border-[var(--color-foreground)] pt-4"
          >
            <h4 className="text-base font-semibold">{d.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              {d.body}
            </p>
          </div>
        ))}
      </div>
    </figure>
  );
}
