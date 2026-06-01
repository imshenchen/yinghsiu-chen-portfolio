import Link from "next/link";
import { defaultLocale, getMessages } from "@/lib/i18n";

export default function NotFound() {
  const t = getMessages(defaultLocale);
  return (
    <main className="texture-lines relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="label-mono mb-8">404</p>
      <h1 className="font-display font-medium tracking-tighter leading-none text-[clamp(2.25rem,7vw,5rem)]">
        {t.project.notFoundTitle}
      </h1>
      <p className="mt-8 max-w-md font-body text-lg text-[var(--color-muted-foreground)]">
        {t.project.notFoundBody}
      </p>
      <Link
        href={`/${defaultLocale}`}
        className="label-mono mt-12 inline-flex items-center gap-3 border-2 border-[var(--color-foreground)] px-8 py-5 transition-colors hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
      >
        <span>{t.project.backHome}</span>
        <span aria-hidden>→</span>
      </Link>
    </main>
  );
}
