import { Fragment } from "react";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

function Arrow() {
  return (
    <div aria-hidden className="flex shrink-0 items-center px-1 md:px-2">
      <svg width="34" height="10" className="text-[var(--color-foreground)]">
        <line x1="0" y1="5" x2="26" y2="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M26 1 L33 5 L26 9 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

// index → emphasis tier: 0 selected, 1 in-scope, 2 out-of-scope
const BOX_STYLE = [
  "border-2 border-[var(--color-foreground)] bg-[var(--color-muted)]",
  "border-2 border-[var(--color-foreground)] bg-[var(--color-background)]",
  "border-2 border-dashed border-[var(--color-muted-foreground)] bg-[var(--color-background)]",
];
const LIST_STYLE = [
  "text-[var(--color-foreground)]",
  "font-medium text-[var(--color-foreground)]",
  "text-[var(--color-muted-foreground)]",
];

export default function PrefillDefine({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const { title, featureLogic, flow } = t.gallery.define.prefill;

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-8 text-[var(--color-muted-foreground)]">
        {title}
      </figcaption>

      <div className="border-t-2 border-[var(--color-foreground)] pt-5">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold">{featureLogic.title}</h3>
          <span className="text-sm text-[var(--color-muted-foreground)]">
            {featureLogic.collabLabel}
            <span className="font-semibold text-[var(--color-foreground)]">
              {featureLogic.collab}
            </span>
          </span>
        </div>
        <p className="mt-3 max-w-prose leading-relaxed text-[var(--color-muted-foreground)]">
          {featureLogic.body}
        </p>
      </div>

      {/* Flow diagram */}
      <div className="mt-10">
        <p className="label-mono mb-4 text-[var(--color-muted-foreground)]">
          {flow.label}
        </p>

        {/* Three-stage top row */}
        <div className="flex items-stretch">
          {flow.stages.map((s, i) => (
            <Fragment key={s}>
              <div className="flex flex-1 items-center justify-center border-2 border-[var(--color-foreground)] bg-[var(--color-muted)] px-3 py-4 text-center text-sm font-semibold md:text-base">
                {s}
              </div>
              {i < flow.stages.length - 1 && <Arrow />}
            </Fragment>
          ))}
        </div>

        {/* Connector from middle stage down to the three modes (md+) */}
        <div aria-hidden className="relative hidden h-8 md:block">
          <div className="absolute top-0 left-1/2 h-4 w-0 -translate-x-1/2 border-l-2 border-[var(--color-foreground)]" />
          <div className="absolute top-4 right-[15.6%] left-[15.6%] border-t-2 border-dashed border-[var(--color-foreground)]" />
          <div className="absolute top-4 left-[15.6%] h-4 w-0 border-l-2 border-[var(--color-foreground)]" />
          <div className="absolute top-4 left-1/2 h-4 w-0 -translate-x-1/2 border-l-2 border-dashed border-[var(--color-foreground)]" />
          <div className="absolute top-4 right-[15.6%] h-4 w-0 border-l-2 border-dashed border-[var(--color-muted-foreground)]" />
        </div>

        {/* Three modes */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-0 md:grid-cols-3 md:gap-8">
          {flow.modes.map((m, i) => (
            <div key={m.title}>
              <div
                className={`px-4 py-3 text-center text-sm font-semibold md:text-base ${BOX_STYLE[i]} ${
                  i === 2 ? "text-[var(--color-muted-foreground)]" : ""
                }`}
              >
                {m.title}
              </div>
              <ul className={`mt-4 space-y-1.5 text-sm leading-relaxed ${LIST_STYLE[i]}`}>
                {m.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
