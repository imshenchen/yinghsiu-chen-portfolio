import type { Locale } from "@/lib/i18n";
import { getMessages, pick, pickList } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

type Props = { lang: Locale; project: Project };

export default function ProjectBrief({ lang, project }: Props) {
  const t = getMessages(lang);
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: t.project.brief.source, value: pick(project.source, lang) },
    { label: t.project.brief.goal, value: pick(project.goal, lang) },
    { label: t.project.brief.role, value: pick(project.role, lang) },
    { label: t.project.brief.duration, value: pick(project.duration, lang) },
  ];

  if (project.outcomeBullets) {
    rows.push({
      label: t.project.brief.outcome,
      value: (
        <ul className="space-y-3">
          {pickList(project.outcomeBullets, lang).map((b) => (
            <li key={b} className="flex gap-3">
              <span
                aria-hidden
                className="mt-[0.6em] block h-[2px] w-4 shrink-0 bg-[var(--color-foreground)]"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ),
    });
  }

  return (
    <section
      aria-labelledby="brief-title"
      className="texture-lines relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p
          id="brief-title"
          className="label-mono mb-10 text-[var(--color-muted-foreground)] md:mb-14"
        >
          — {t.project.brief.sectionLabel}
        </p>

        <dl className="border-t-2 border-[var(--color-foreground)]">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-3 border-b border-[var(--color-border-light)] py-7 md:grid-cols-12 md:gap-8 md:py-9"
            >
              <dt className="label-mono md:col-span-3">{row.label}</dt>
              <dd className="font-body text-lg leading-relaxed md:col-span-9 md:text-xl md:leading-[1.75]">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
