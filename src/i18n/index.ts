import { Locale, locales, defaultLocale, isRTL } from "./locales";

const messages: Record<Locale, Record<string, any>> = {
  en: require("./messages/en.json"),
  ar: require("./messages/ar.json"),
};

export function getMessages(locale: Locale): Record<string, any> {
  return messages[locale] || messages[defaultLocale];
}

export function getNestedValue(obj: Record<string, any>, path: string): string {
  return path.split(".").reduce((current, key) => current?.[key], obj) || path;
}

export function t(
  locale: Locale,
  key: string,
  params?: Record<string, string | number>
): string | string[] {
  const messages = getMessages(locale);
  let value = getNestedValue(messages, key);

  if (Array.isArray(value)) {
    return value;
  }

  if (params) {
    Object.entries(params).forEach(([param, val]) => {
      value = value.replace(new RegExp(`\\{${param}\\}`, "g"), String(val));
    });
  }

  return value;
}

export { Locale } from "./locales";
export { locales, defaultLocale, isRTL };