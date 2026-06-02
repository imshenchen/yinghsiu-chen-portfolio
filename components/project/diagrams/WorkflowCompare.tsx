import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

export default function WorkflowCompare({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const m = t.gallery.workflowCompare;

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-3 text-[var(--color-muted-foreground)]">
        {m.title}
      </figcaption>
      <p className="mb-8 max-w-prose text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {m.intro}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-y-2 border-[var(--color-foreground)]">
              <th className="label-mono w-1/5 py-3 pr-4 align-bottom font-normal text-[var(--color-muted-foreground)]">
                {m.dimensionHeader}
              </th>
              <th className="px-3 py-3 align-bottom text-sm font-semibold text-[var(--color-muted-foreground)]">
                {m.beforeHeader}
              </th>
              <th className="bg-[var(--color-foreground)] px-3 py-3 align-bottom text-sm font-semibold text-[var(--color-background)]">
                {m.afterHeader}
              </th>
            </tr>
          </thead>
          <tbody>
            {m.rows.map((r) => (
              <tr
                key={r.dimension}
                className="border-b border-[var(--color-border-light)] align-top"
              >
                <th className="label-mono py-4 pr-4 text-left align-top font-normal text-[var(--color-muted-foreground)]">
                  {r.dimension}
                </th>
                <td className="px-3 py-4 leading-relaxed text-[var(--color-muted-foreground)]">
                  {r.before}
                </td>
                <td className="bg-[var(--color-foreground)]/[0.04] px-3 py-4 font-medium leading-relaxed">
                  {r.after}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
