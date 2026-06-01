import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getMessages, pick } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

type Props = { lang: Locale; project: Project };

export default function ProjectTitleBlock({ lang, project }: Props) {
  const t = getMessages(lang);
  return (
    <header className="texture-lines relative">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28 lg:px-14 lg:pt-32 lg:pb-36">
        <nav aria-label="Breadcrumb" className="label-mono mb-12 flex gap-3 md:mb-16">
          <Link
            href={`/${lang}#work`}
            className="border-b border-transparent pb-px transition-colors hover:border-[var(--color-foreground)]"
          >
            {t.project.breadcrumbWork}
          </Link>
          <span aria-hidden>/</span>
          <span>{project.number}</span>
        </nav>

        <p className="label-mono mb-8">
          {project.year} · {pick(project.category, lang)}
        </p>

        <h1 className="font-display font-medium tracking-tighter leading-[0.95] text-[clamp(2.5rem,9vw,5.5rem)]">
          {pick(project.title, lang)}
        </h1>

        <p className="mt-10 max-w-3xl font-display text-xl italic leading-snug md:mt-14 md:text-2xl">
          {pick(project.lead, lang)}
        </p>
      </div>
    </header>
  );
}
