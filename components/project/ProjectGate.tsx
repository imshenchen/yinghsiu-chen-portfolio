"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

const PASSWORD = "yh2026";
const STORAGE_KEY = "yhc-portfolio-unlocked";

export default function ProjectGate({
  locked,
  lang,
  children,
}: {
  locked?: boolean;
  lang: Locale;
  children: ReactNode;
}) {
  const t = getMessages(lang).project.gate;
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!locked) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true);
    } catch {
      /* sessionStorage unavailable — stay locked */
    }
    setReady(true);
  }, [locked]);

  if (!locked || unlocked) return <>{children}</>;
  // Avoid briefly flashing the form before the unlock state is read.
  if (!ready) return null;

  function submit(e: FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  return (
    <main id="main" className="texture-lines relative">
      <div className="mx-auto flex min-h-[72vh] max-w-md flex-col justify-center px-6 py-32">
        <p className="label-mono mb-6 text-[var(--color-muted-foreground)]">
          — {t.label}
        </p>
        <h1 className="mb-3 font-display text-3xl font-medium tracking-tight">
          {t.heading}
        </h1>
        <p className="mb-8 leading-relaxed text-[var(--color-muted-foreground)]">
          {t.hint}
        </p>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError(false);
            }}
            placeholder={t.placeholder}
            autoFocus
            aria-label={t.placeholder}
            className="border-2 border-[var(--color-foreground)] bg-transparent px-4 py-3 outline-none focus:bg-[var(--color-muted)]"
          />
          {error && (
            <p className="text-sm font-medium text-[var(--color-foreground)]">
              {t.error}
            </p>
          )}
          <button
            type="submit"
            className="label-mono border-2 border-[var(--color-foreground)] bg-[var(--color-foreground)] px-4 py-3 text-[var(--color-background)] transition-opacity hover:opacity-80"
          >
            {t.submit}
          </button>
        </form>
      </div>
    </main>
  );
}
