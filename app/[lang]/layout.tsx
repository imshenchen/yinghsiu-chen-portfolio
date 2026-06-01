import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale, getMessages, type Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getMessages(lang as Locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <>{children}</>;
}
