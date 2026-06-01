import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Props = {
  current: Locale;
  pathname: string;
};

function swap(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}`;
  parts[0] = target;
  return "/" + parts.join("/");
}

export default function LangToggle({ current, pathname }: Props) {
  const items: { code: Locale; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "zh", label: "中" },
  ];
  return (
    <div className="label-mono flex items-center gap-3">
      {items.map((it, idx) => (
        <span key={it.code} className="flex items-center gap-3">
          {it.code === current ? (
            <span
              aria-current="true"
              className="border-b border-[var(--color-foreground)] pb-px"
            >
              {it.label}
            </span>
          ) : (
            <Link
              href={swap(pathname, it.code)}
              className="opacity-60 transition-opacity hover:opacity-100 focus-visible:opacity-100"
            >
              {it.label}
            </Link>
          )}
          {idx < items.length - 1 ? <span aria-hidden>/</span> : null}
        </span>
      ))}
    </div>
  );
}
