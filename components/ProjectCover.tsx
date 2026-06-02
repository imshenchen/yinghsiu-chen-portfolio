import type { Project } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";
import { asset } from "@/lib/basePath";

// Per-project brand mark shown on the cover.
// `img` logos render on a clean white card; `workflow-transformation`
// uses a custom-designed app icon (no brand asset exists for it).
const LOGOS: Record<string, { src: string; className: string } | undefined> = {
  "ai-iiot-platform": { src: "/projects/logo-vivi.png", className: "h-24 w-24" },
  "alarm-management": { src: "/projects/logo-diaeap.png", className: "h-24 w-24" },
  "dottedsign-task-status": {
    src: "/projects/logo-dottedsign.svg",
    className: "w-44",
  },
  "dottedsign-prefill": {
    src: "/projects/logo-dottedsign.svg",
    className: "w-44",
  },
};

function WorkflowIcon() {
  return (
    <svg viewBox="0 0 96 96" className="h-24 w-24" aria-hidden>
      <rect x="2" y="2" width="92" height="92" rx="22" fill="#141414" />
      <g
        stroke="#ffffff"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M34 48 C 50 48, 50 30, 64 30" />
        <path d="M34 48 H 62" />
        <path d="M34 48 C 50 48, 50 66, 64 66" />
        <circle cx="30" cy="48" r="5.5" fill="#ffffff" stroke="none" />
        <rect x="63" y="24" width="13" height="13" rx="3.5" fill="#141414" />
        <rect x="63" y="42" width="13" height="13" rx="3.5" fill="#141414" />
        <rect x="63" y="60" width="13" height="13" rx="3.5" fill="#141414" />
      </g>
    </svg>
  );
}

export default function ProjectCover({
  project,
  lang,
}: {
  project: Project;
  lang: Locale;
}) {
  const logo = LOGOS[project.slug];

  return (
    <div className="relative h-full w-full bg-[#f1f1ef] text-[#141414]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 18px, #141414 18px 19px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col p-7 md:p-8">
        <div className="label-mono flex items-start justify-between text-[#9a9a9a]">
          <span>{project.number}</span>
          <span>{project.year}</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-5">
          <div className="transition-transform duration-500 ease-out group-hover:scale-105">
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={asset(logo.src)}
                alt={project.client?.en ?? project.title.en}
                loading="lazy"
                className={`${logo.className} object-contain`}
              />
            ) : (
              <WorkflowIcon />
            )}
          </div>
          {project.moduleName && (
            <p className="text-center font-display text-base font-medium tracking-tight text-[#141414]">
              {project.moduleName[lang]}
            </p>
          )}
        </div>

        <div className="label-mono truncate text-[#9a9a9a]">
          {project.category.en}
        </div>
      </div>
    </div>
  );
}
