import Link from "next/link";
import type { Project } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";
import { pick } from "@/lib/i18n";
import ProjectCover from "./ProjectCover";

type Props = {
  lang: Locale;
  project: Project;
};

export default function ProjectCard({ lang, project }: Props) {
  return (
    <Link
      href={`/${lang}/projects/${project.slug}`}
      className="group block"
      aria-label={`${pick(project.title, lang)} — ${pick(project.category, lang)}`}
    >
      <div className="relative aspect-square w-full overflow-hidden border-2 border-[var(--color-foreground)] transition-[border-width] duration-100 group-hover:border-4 group-focus-visible:border-4">
        <ProjectCover project={project} lang={lang} />
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="label-mono mb-2 text-[var(--color-muted-foreground)]">
            {project.year} · {pick(project.category, lang)}
          </p>
          <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
            {pick(project.title, lang)}
          </h3>
        </div>
        <span
          aria-hidden
          className="mt-2 shrink-0 font-display text-2xl transition-transform duration-100 group-hover:translate-x-1 md:text-3xl"
        >
          →
        </span>
      </div>
    </Link>
  );
}
