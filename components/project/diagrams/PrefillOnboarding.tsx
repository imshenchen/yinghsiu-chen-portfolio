import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { asset } from "@/lib/basePath";

export default function PrefillOnboarding({ lang }: { lang: Locale }) {
  const t = getMessages(lang);
  const { title, body } = t.gallery.onboarding.prefill;

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-4 text-[var(--color-muted-foreground)]">
        {title}
      </figcaption>
      <p className="mb-8 max-w-prose text-lg leading-relaxed font-medium md:text-xl">
        {body}
      </p>
      <div className="border-2 border-[var(--color-foreground)] bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/projects/prefill-onboarding-hint.png")}
          alt={title}
          loading="lazy"
          className="block w-full"
        />
      </div>
    </figure>
  );
}
