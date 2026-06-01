import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { formatDate, getLatestArticles, MEDIUM_URL } from "@/lib/articles";

type Props = { lang: Locale };

export default async function WritingSection({ lang }: Props) {
  const t = getMessages(lang);
  const articles = await getLatestArticles(3);

  return (
    <section
      id="writing"
      aria-labelledby="writing-title"
      className="texture-lines relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="mb-16 grid grid-cols-1 gap-10 md:mb-20 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="label-mono mb-6">— {t.writing.sectionLabel}</p>
            <h2
              id="writing-title"
              className="font-display font-medium tracking-tighter leading-none text-[clamp(2rem,6vw,4.5rem)]"
            >
              {t.writing.sectionTitle}
            </h2>
          </div>
          <p className="font-body text-lg leading-relaxed text-[var(--color-muted-foreground)] md:col-span-5 md:self-end md:text-xl">
            {t.writing.intro}
          </p>
        </div>

        {articles.length === 0 ? (
          <p className="label-mono py-12 text-[var(--color-muted-foreground)]">
            {t.writing.empty}
          </p>
        ) : (
          <ul className="border-t border-[var(--color-foreground)]">
            {articles.map((a, i) => (
              <li
                key={a.link}
                className="border-b border-[var(--color-foreground)]"
              >
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-12 items-center gap-4 py-8 transition-colors duration-100 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] md:py-10"
                >
                  <span className="label-mono col-span-12 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-background)]/70 md:col-span-2">
                    {String(i + 1).padStart(2, "0")} · {formatDate(a.date, lang)}
                  </span>

                  <span className="col-span-12 font-display text-xl font-medium leading-tight tracking-tight md:col-span-7 md:text-2xl lg:text-3xl">
                    {a.title}
                  </span>

                  <span className="label-mono col-span-10 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-background)]/70 md:col-span-2">
                    {a.categories.slice(0, 2).join(" · ") || "—"}
                  </span>

                  <span
                    aria-hidden
                    className="col-span-2 justify-self-end font-display text-2xl transition-transform duration-100 group-hover:translate-x-1 md:col-span-1 md:text-3xl"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-12 flex md:mt-16">
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono group inline-flex items-center gap-4 border-2 border-[var(--color-foreground)] px-8 py-5 transition-colors duration-100 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] focus-visible:bg-[var(--color-foreground)] focus-visible:text-[var(--color-background)]"
          >
            <span>{t.writing.viewAll}</span>
            <span
              aria-hidden
              className="transition-transform duration-100 group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
