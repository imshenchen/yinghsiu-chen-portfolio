import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

type Props = { lang: Locale };

export default function About({ lang }: Props) {
  const t = getMessages(lang);

  const groups: { label: string; items: string[] }[] = [
    { label: t.about.domainsLabel, items: t.about.domains },
    { label: t.about.collaborationLabel, items: t.about.collaboration },
    { label: t.about.specialtyLabel, items: t.about.specialty },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="texture-lines relative"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:gap-10 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="md:col-span-4">
          <p className="label-mono mb-6">— {t.about.sectionLabel}</p>
          <h2
            id="about-title"
            className="font-display font-medium tracking-tighter leading-none text-[clamp(1.875rem,4.5vw,3.5rem)]"
          >
            {t.about.sectionTitle}
          </h2>
        </div>

        <div className="md:col-span-8">
          <dl className="grid grid-cols-1 gap-10 border-y border-[var(--color-foreground)] py-10 sm:grid-cols-3 md:gap-8">
            {groups.map((g) => (
              <div key={g.label}>
                <dt className="label-mono mb-5 text-[var(--color-muted-foreground)]">
                  — {g.label}
                </dt>
                <dd>
                  <ul className="space-y-2 font-body text-base leading-snug md:text-lg">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>

          <blockquote className="relative mt-12 pl-6 font-display text-xl italic leading-relaxed md:mt-16 md:text-2xl md:leading-[1.55]">
            <span
              aria-hidden
              className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-foreground)]"
            />
            {t.about.philosophy}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
