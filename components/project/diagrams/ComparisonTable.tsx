import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

type Props = { lang: Locale; variant: "docusign" | "pandadoc" };

export default function ComparisonTable({ lang, variant }: Props) {
  const t = getMessages(lang);
  const { descHeader, mappedHeader } = t.gallery.comparison;
  const { title, statusHeader, rows } = t.gallery.comparison[variant];

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-8 text-[var(--color-muted-foreground)]">
        {title}
      </figcaption>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-y-2 border-[var(--color-foreground)]">
              <th className="label-mono py-3 pr-4 align-bottom font-normal text-[var(--color-muted-foreground)]">
                {statusHeader}
              </th>
              <th className="label-mono py-3 pr-4 align-bottom font-normal text-[var(--color-muted-foreground)]">
                {descHeader}
              </th>
              <th className="label-mono py-3 align-bottom font-normal text-[var(--color-muted-foreground)]">
                {mappedHeader}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.status}
                className="border-b border-[var(--color-border-light)] align-top"
              >
                <td className="py-3 pr-4 font-semibold whitespace-nowrap">
                  {r.status}
                </td>
                <td className="py-3 pr-4 leading-relaxed text-[var(--color-muted-foreground)]">
                  {r.desc}
                </td>
                <td
                  className={`py-3 whitespace-nowrap ${
                    r.mapped === "X"
                      ? "text-[var(--color-border-light)]"
                      : "font-medium"
                  }`}
                >
                  {r.mapped}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
