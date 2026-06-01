import type { Locale } from "@/lib/i18n";
import { getMessages, pick } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

type Props = { lang: Locale; project: Project };

export default function ProjectMeta({ lang, project }: Props) {
  const t = getMessages(lang);
  const items: { label: string; value: string; href?: string }[] = [
    { label: t.project.meta.year, value: project.year },
    { label: t.project.meta.role, value: pick(project.role, lang) },
    {
      label:
        project.clientLabel === "product"
          ? t.project.meta.product
          : t.project.meta.client,
      value: pick(project.client, lang),
    },
    { label: t.project.meta.stack, value: project.stack },
  ];
  if (project.link) {
    items.push({
      label: t.project.meta.link,
      value: project.link.label,
      href: project.link.href,
    });
  }

  return (
    <dl className="divide-y divide-[var(--color-border-light)] border-y border-[var(--color-border-light)]">
      {items.map((it) => (
        <div
          key={it.label}
          className="grid grid-cols-3 items-baseline gap-4 py-4"
        >
          <dt className="label-mono col-span-1 text-[var(--color-muted-foreground)]">
            {it.label}
          </dt>
          <dd className="col-span-2 font-body text-lg">
            {it.href ? (
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[var(--color-foreground)]"
              >
                {it.value} ↗
              </a>
            ) : (
              it.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
