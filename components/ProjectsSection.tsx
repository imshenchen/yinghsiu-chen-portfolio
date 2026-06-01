import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

type Props = { lang: Locale };

export default function ProjectsSection({ lang }: Props) {
  const t = getMessages(lang);
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="texture-lines relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="mb-16 flex items-end justify-between gap-6 md:mb-20">
          <div>
            <p className="label-mono mb-6">— {t.work.sectionLabel}</p>
            <h2
              id="work-title"
              className="font-display font-medium tracking-tighter leading-none text-[clamp(2rem,6vw,4.5rem)]"
            >
              {t.work.sectionTitle}
            </h2>
          </div>
          <p className="label-mono hidden md:block">{t.work.years}</p>
        </div>

        <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard lang={lang} project={project} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
