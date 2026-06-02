import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

function ExternalIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M14 3h7v7M21 3l-9 9M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

export default function WorkflowArtifacts({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const m = t.gallery.workflowArtifacts;

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-3 text-[var(--color-muted-foreground)]">
        {m.title}
      </figcaption>
      <p className="mb-8 max-w-prose text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {m.intro}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {m.cards.map((card) => (
          <div
            key={card.name}
            className="flex flex-col border-2 border-[var(--color-foreground)] p-6"
          >
            <span className="label-mono mb-2 text-[var(--color-muted-foreground)]">
              {card.eyebrow}
            </span>
            <h3 className="mb-3 text-lg font-semibold">{card.name}</h3>
            <p className="flex-1 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              {card.body}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {card.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono inline-flex items-center gap-2 border-2 border-[var(--color-foreground)] px-3 py-2 transition-colors hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
                >
                  {link.label}
                  <ExternalIcon />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}
