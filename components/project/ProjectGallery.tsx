import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import type { Project } from "@/lib/projects";
import { diagramRegistry } from "./diagrams";

type Props = { lang: Locale; project: Project };

export default function ProjectGallery({ lang, project }: Props) {
  const t = getMessages(lang);

  if (project.gallery && project.gallery.length > 0) {
    return (
      <section
        aria-labelledby="sec-gallery"
        className="border-t border-[var(--color-border-light)] py-16 md:py-20"
      >
        <h2
          id="sec-gallery"
          className="label-mono mb-12 text-[var(--color-muted-foreground)]"
        >
          — {t.project.gallery}
        </h2>
        <div className="flex flex-col gap-16 md:gap-20">
          {project.gallery.map((block, i) => {
            if (block.kind === "diagram") {
              return <div key={`d-${i}`}>{diagramRegistry[block.id](lang)}</div>;
            }
            if (block.kind === "compare") {
              const cap = block.captionKey
                ? t.gallery.captions[block.captionKey]
                : undefined;
              return (
                <figure key={`c-${i}`} className="m-0">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    {[
                      { tag: "A", img: block.a },
                      { tag: "B", img: block.b },
                    ].map(({ tag, img }) => (
                      <div key={tag}>
                        <span className="label-mono mb-3 inline-block border-2 border-[var(--color-foreground)] px-2.5 py-1">
                          {tag}
                        </span>
                        <div className="border-2 border-[var(--color-foreground)] bg-white">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img.src}
                            alt={img.alt[lang]}
                            loading="lazy"
                            className="block w-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {cap && (
                    <figcaption className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                      {cap}
                    </figcaption>
                  )}
                </figure>
              );
            }
            const caption = block.captionKey
              ? t.gallery.captions[block.captionKey]
              : undefined;
            return (
              <figure key={`i-${i}`} className="m-0">
                <div className="border-2 border-[var(--color-foreground)] bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={block.src}
                    alt={block.alt[lang]}
                    loading="lazy"
                    className="block w-full"
                  />
                </div>
                {caption && (
                  <figcaption className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                    {caption}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </section>
    );
  }

  const slots = [
    { ratio: "aspect-[4/5]", label: "01" },
    { ratio: "aspect-[4/5]", label: "02" },
    { ratio: "aspect-[4/3] md:col-span-2", label: "03" },
    { ratio: "aspect-[4/5]", label: "04" },
  ];
  return (
    <section
      aria-labelledby="sec-gallery"
      className="border-t border-[var(--color-border-light)] py-16 md:py-20"
    >
      <h2
        id="sec-gallery"
        className="label-mono mb-10 text-[var(--color-muted-foreground)]"
      >
        — {t.project.gallery}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {slots.map((s) => (
          <div
            key={s.label}
            className={`${s.ratio} relative w-full border-2 border-[var(--color-foreground)] bg-[#1a1a1a] text-[#bdbdbd]`}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent 0 18px, #fff 18px 19px)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="label-mono">
                {project.number} · {s.label}
              </span>
            </div>
            <span className="label-mono absolute right-4 bottom-4 text-[#bdbdbd]">
              {t.work.placeholder}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
