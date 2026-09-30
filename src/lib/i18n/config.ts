export const locales = ["en", "ru", "hy"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "hy";

export const localeMeta: Record<
  Locale,
  { label: string; short: string; flag: "am" | "ru" | "gb" }
> = {
  en: { label: "English", short: "EN", flag: "gb" },
  ru: { label: "Русский", short: "Ру", flag: "ru" },
  hy: { label: "Հայերեն", short: "Հայ", flag: "am" },
};

export const STORAGE_KEY = "dizart-locale";
