import type { Locale } from "@/i18n.config";
import { getTranslation, type Translations } from "@/lib/translations";

export type ParamsProps = {
  params: {
    lang: Locale;
  };
};

export async function translate(lang: Locale, page: keyof Translations) {
  const translations = await getTranslation(lang, "landing");
  return translations;
}

export function interpolation(
  str: string,
  values: Record<string, string>
): string {
  Object.keys(values).forEach((key) => {
    const value = values[key];
    if (value === undefined) return;
    str = replacePlaceholder(str, key, value);
  });
  return str;
}

function replacePlaceholder(str: string, key: string, value: string): string {
  return str.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), value);
}
