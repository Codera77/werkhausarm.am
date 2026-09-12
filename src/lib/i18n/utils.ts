import type { Locale } from "./config";

/** Nested message tree — string leaves only. */
export type Messages = {
  [key: string]: string | Messages;
};

export function getMessage(
  messages: Messages,
  path: string,
  params?: Record<string, string | number>
): string {
  const parts = path.split(".");
  let current: string | Messages = messages;

  for (const part of parts) {
    if (typeof current !== "object" || current === null || !(part in current)) {
      return path;
    }
    current = current[part];
  }

  if (typeof current !== "string") return path;

  if (!params) return current;

  return Object.entries(params).reduce(
    (text, [key, value]) =>
      text.replace(new RegExp(`\\{${key}\\}`, "g"), String(value)),
    current
  );
}

export type Dictionaries = Record<Locale, Messages>;
