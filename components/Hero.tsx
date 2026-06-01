import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

type Props = { lang: Locale };

export default function Hero({ lang }: Props) {
  const t = getMessages(lang);
  return (
    <section
      className="texture-lines texture-noise relative overflow-hidden"
      aria-labelledby="hero-name"
    >
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 md:px-10 md:pt-28 md:pb-40 lg:px-14 lg:pt-36 lg:pb-48">
        <p className="label-mono mb-12 md:mb-16">{t.hero.eyebrow}</p>

        <h1
          id="hero-name"
          className="font-display font-medium tracking-tight leading-[1.05] text-[clamp(2.5rem,8vw,6rem)]"
        >
          {t.hero.name}
        </h1>

        <div className="mt-16 flex items-center gap-6 md:mt-20">
          <div className="h-1 w-32 bg-[var(--color-foreground)] md:w-48" />
          <div
            aria-hidden
            className="h-3 w-3 border border-[var(--color-foreground)] md:h-4 md:w-4"
          />
        </div>

        <p className="mt-12 max-w-3xl font-body text-lg leading-relaxed md:mt-16 md:text-xl md:leading-[1.8]">
          {t.hero.tagline}
        </p>

        <p className="mt-6 max-w-3xl font-body text-base italic leading-relaxed text-[var(--color-muted-foreground)] md:mt-8 md:text-lg">
          {t.hero.taglineCloser}
        </p>
      </div>
    </section>
  );
}
