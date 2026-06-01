import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

type Props = { lang: Locale };

export default function Footer({ lang }: Props) {
  const t = getMessages(lang);
  return (
    <footer className="border-t border-[var(--color-foreground)] bg-[var(--color-background)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-14">
        <div>
          <div className="label-mono mb-4">{t.footer.email}</div>
          <a
            href="mailto:imshenchen@gmail.com"
            className="border-b border-transparent pb-px font-body text-lg transition-colors hover:border-[var(--color-foreground)] focus-visible:border-[var(--color-foreground)]"
          >
            imshenchen@gmail.com
          </a>
        </div>

        <div>
          <div className="label-mono mb-4">{t.footer.social}</div>
          <ul className="space-y-2">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ying-hsiu-chen-177005107/",
              },
              { label: "Medium", href: "https://medium.com/@yhuxchen" },
            ].map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent pb-px font-body text-lg transition-colors hover:border-[var(--color-foreground)] focus-visible:border-[var(--color-foreground)]"
                >
                  {s.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border-light)]">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-6 md:px-10 lg:px-14">
          <p className="label-mono">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
