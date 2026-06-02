import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import LangToggle from "./LangToggle";

type Props = {
  lang: Locale;
  pathname: string;
};

export default function Header({ lang, pathname }: Props) {
  const t = getMessages(lang);
  const navItems = [
    { href: `/${lang}#work`, label: t.nav.work },
    { href: `/${lang}#about`, label: t.nav.about },
    { href: `/${lang}#writing`, label: t.nav.writing },
    { href: "/resume.pdf", label: t.nav.resume, download: true },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-foreground)] bg-[var(--color-background)]/95 backdrop-blur">
      <a href="#main" className="skip-link">
        {t.nav.skipToContent}
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        <Link
          href={`/${lang}`}
          className="font-display text-xl font-medium tracking-tight"
        >
          Y/C
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {navItems.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              {...(it.download
                ? { download: "Ying-Hsiu-Chen-Resume.pdf" }
                : {})}
              className="label-mono border-b border-transparent pb-px transition-colors hover:border-[var(--color-foreground)] focus-visible:border-[var(--color-foreground)]"
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <LangToggle current={lang} pathname={pathname} />
      </div>
    </header>
  );
}
