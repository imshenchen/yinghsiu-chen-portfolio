import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { asset } from "@/lib/basePath";

const IMAGES = [
  "/projects/prefill-edit-mode.png",
  "/projects/prefill-preview-mode.png",
];

export default function PrefillDesign({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const { intro, modes } = t.gallery.design.prefill;

  return (
    <figure className="m-0">
      <p className="mb-10 text-lg leading-relaxed font-medium md:text-xl">
        {intro}
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {modes.map((m, i) => (
          <div key={m.title}>
            <div className="border-2 border-[var(--color-foreground)] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(IMAGES[i])}
                alt={m.title}
                loading="lazy"
                className="block w-full"
              />
            </div>
            <h3 className="mt-5 text-center text-xl font-semibold">{m.title}</h3>
            <p className="mt-2 text-center text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              {m.body}
            </p>
          </div>
        ))}
      </div>
    </figure>
  );
}
