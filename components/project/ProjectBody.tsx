import type { Locale } from "@/lib/i18n";
import { pick } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

type Props = { lang: Locale; project: Project };

export default function ProjectBody({ lang, project }: Props) {
  const paragraphs = pick(project.overview, lang)
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="space-y-8 font-body text-lg leading-relaxed md:text-xl md:leading-[1.85]">
      {paragraphs.map((para, i) => (
        <p key={i} className={i === 0 ? "drop-cap" : undefined}>
          {para}
        </p>
      ))}
    </div>
  );
}
