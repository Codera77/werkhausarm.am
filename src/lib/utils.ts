import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Locale } from "@/lib/i18n/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const groupSeparators: Record<Locale, string> = {
  en: ",",
  ru: "\u00A0",
  hy: "\u00A0",
};

/** Deterministic price formatting — avoids SSR/client Intl mismatches. */
export function formatAmd(amount: number, locale: Locale = "en"): string {
  const absolute = Math.round(Math.abs(amount));
  const digits = String(absolute);
  const separator = groupSeparators[locale] ?? ",";
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  const signed = amount < 0 ? `-${grouped}` : grouped;
  return `${signed} AMD`;
}
