import { en } from "@/messages/en";
import { zh } from "@/messages/zh";

export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

export type Messages = typeof zh;

const dict: Record<Locale, Messages> = { zh, en };

export function getMessages(lang: Locale): Messages {
  return dict[lang] ?? dict[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type Bilingual = { zh: string; en: string };
export type BilingualList = { zh: string[]; en: string[] };

export function pick(value: Bilingual, lang: Locale): string {
  return value[lang];
}

export function pickList(value: BilingualList, lang: Locale): string[] {
  return value[lang];
}
