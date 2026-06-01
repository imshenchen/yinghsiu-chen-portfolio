import Link from "next/link";
import type { Project } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";
import { pick } from "@/lib/i18n";

type Props = {
  lang: Locale;
  project: Project;
  index: number;
};

export default function ProjectCard({ lang, project, index }: Props) {
  return (
    <Link
      href={`/${lang}/projects/${project.slug}`}
      className="group block"
      aria-label={`${pick(project.title, lang)} — ${pick(project.category, lang)}`}
    >
      <div className="relative aspect-square w-full overflow-hidden border-2 border-[var(--color-foreground)] bg-[#1a1a1a] transition-[border-width] duration-100 group-hover:border-4 group-focus-visible:border-4">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent 0 18px, #fff 18px 19px)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#bdbdbd] transition-transform duration-300 group-hover:scale-105">
          <span className="label-mono mb-4">— {project.number} —</span>
          <span className="font-display text-xl tracking-tight md:text-2xl">
            {pick(project.title, lang)}
          </span>
        </div>

        <span className="label-mono absolute left-4 top-4 text-[#bdbdbd]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="label-mono absolute right-4 top-4 text-[#bdbdbd]">
          {project.year}
        </span>
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
