import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getMessages, pick } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

type Props = { lang: Locale; project: Project };

export default function NextProject({ lang, project }: Props) {
  const t = getMessages(lang);
  return (
    <Link
      href={`/${lang}/projects/${project.slug}`}
      className="group block bg-[var(--color-foreground)] text-[var(--color-background)]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-12 md:gap-10 md:px-10 md:py-32 lg:px-14">
        <div className="md:col-span-3">
          <p className="label-mono text-[var(--color-background)]/70">
            — {t.project.next}
          </p>
          <p className="label-mono mt-3 text-[var(--color-background)]/70">
            {project.number} · {project.year}
          </p>
        </div>

        <div className="flex items-end justify-between gap-8 md:col-span-9">
          <h2 className="font-display font-medium tracking-tighter leading-none text-[clamp(2rem,7vw,5rem)]">
            {pick(project.title, lang)}
          </h2>
          <span
            aria-hidden
            className="shrink-0 font-display text-4xl transition-transform duration-100 group-hover:translate-x-2 md:text-5xl"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
