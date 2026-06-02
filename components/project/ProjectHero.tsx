import type { Project } from "@/lib/projects";
import { asset } from "@/lib/basePath";

type Props = { project: Project };

export default function ProjectHero({ project }: Props) {
  if (project.cover) {
    return (
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <div className="relative aspect-[16/9] w-full overflow-hidden border-2 border-[var(--color-foreground)] bg-[#1a1a1a]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(project.cover)}
            alt={project.title.en}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white md:px-16 lg:px-24">
            <span className="label-mono mb-6">— PROJECT {project.number} —</span>
            <span className="font-display text-4xl tracking-tight md:text-5xl">
              {project.title.en}
            </span>
          </div>
          <span className="label-mono absolute right-6 bottom-6 text-white/80">
            {project.year}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
      <div
        className="relative aspect-[16/9] w-full border-2 border-[var(--color-foreground)] bg-[#1a1a1a] text-[#bdbdbd]"
        role="img"
        aria-label={`${project.title.en} hero placeholder`}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent 0 24px, #fff 24px 25px)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center md:px-16 lg:px-24">
          <span className="label-mono mb-6">— {project.number} —</span>
          <span className="font-display text-4xl tracking-tight md:text-5xl">
            {project.title.en}
          </span>
        </div>
        <span className="label-mono absolute right-6 bottom-6">
          {project.year}
        </span>
      </div>
    </div>
  );
}
