import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

export default function AlarmEval({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const m = t.gallery.alarmEval;

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-3 text-[var(--color-muted-foreground)]">
        {m.title}
      </figcaption>
      <p className="mb-8 max-w-prose text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {m.intro}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-y-2 border-[var(--color-foreground)]">
              <th className="label-mono w-32 py-3 pr-4 align-bottom font-normal text-[var(--color-muted-foreground)]">
                {m.dimensionHeader}
              </th>
              {m.solutions.map((s, i) => (
                <th
                  key={s}
                  className={`px-3 py-3 align-bottom text-sm font-semibold ${
                    i === m.winnerIndex
                      ? "bg-[var(--color-foreground)] text-[var(--color-background)]"
                      : ""
                  }`}
                >
                  {s}
                  {i === m.winnerIndex && (
                    <span className="label-mono mt-1 block font-normal opacity-80">
                      ★ {m.winnerLabel}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {m.rows.map((r) => (
              <tr
                key={r.dimension}
                className="border-b border-[var(--color-border-light)] align-top"
              >
                <th className="label-mono py-4 pr-4 text-left align-top font-normal whitespace-nowrap text-[var(--color-muted-foreground)]">
                  {r.dimension}
                </th>
                {r.cells.map((c, i) => (
                  <td
                    key={`${r.dimension}-${i}`}
                    className={`px-3 py-4 leading-relaxed ${
                      i === m.winnerIndex
                        ? "bg-[var(--color-foreground)]/[0.04] font-medium"
                        : "text-[var(--color-muted-foreground)]"
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {m.note && (
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
          {m.note}
        </p>
      )}
    </figure>
  );
}
