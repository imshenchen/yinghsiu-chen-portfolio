import type { Project } from "@/lib/projects";

type Props = { project: Project };

export default function ProjectHero({ project }: Props) {
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
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="label-mono mb-6">— {project.number} —</span>
          <span className="font-display text-4xl tracking-tight md:text-5xl">
            {project.title.en}
          </span>
        </div>
        <span className="label-mono absolute left-6 top-6">Hero / 16 : 9</span>
        <span className="label-mono absolute right-6 bottom-6">
          {project.year}
        </span>
      </div>
    </div>
  );
}
