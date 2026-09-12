import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Locale } from "@/lib/i18n/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const numberLocales: Record<Locale, string> = {
  en: "en-US",
  ru: "ru-RU",
  hy: "hy-AM",
};

export function formatAmd(amount: number, locale: Locale = "en"): string {
  return `${amount.toLocaleString(numberLocales[locale])} AMD`;
}
