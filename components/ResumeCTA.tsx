import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { asset } from "@/lib/basePath";

type Props = { lang: Locale };

const resumeFile: Record<Locale, string> = {
  zh: "陳盈秀_履歷.pdf",
  en: "Ying-Hsiu-Chen-Resume.pdf",
};

export default function ResumeCTA({ lang }: Props) {
  const t = getMessages(lang);
  return (
    <section
      aria-labelledby="resume-headline"
      className="texture-vertical-white relative overflow-hidden bg-[var(--color-foreground)] text-[var(--color-background)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 text-center md:px-10 md:py-40 lg:px-14 lg:py-48">
        <p className="label-mono mb-10 text-[var(--color-background)]/70">
          — {t.resume.sectionLabel}
        </p>

        <h2
          id="resume-headline"
          className="font-display font-medium tracking-tighter leading-[1] text-[clamp(2.25rem,7vw,5rem)]"
        >
          {t.resume.headline}
        </h2>

        <p className="label-mono mt-10 text-[var(--color-background)]/70">
          {t.resume.sub}
        </p>

        <div className="mt-14 flex justify-center md:mt-20">
          <a
            href={asset(`/resume-${lang}.pdf`)}
            download={resumeFile[lang]}
            className="label-mono group inline-flex items-center gap-4 border-2 border-[var(--color-background)] bg-transparent px-8 py-5 text-[var(--color-background)] transition-colors duration-100 hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] focus-visible:bg-[var(--color-background)] focus-visible:text-[var(--color-foreground)]"
          >
            <span>{t.resume.cta}</span>
            <span
              aria-hidden
              className="transition-transform duration-100 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
