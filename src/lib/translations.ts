import "server-only";
import type { Locale } from "@/i18n.config";

const translations = {
  en: {
    landing: () =>
      import("@/translations/landing/en.json").then((module) => module.default),
  },
  fr: {
    landing: () =>
      import("@/translations/landing/fr.json").then((module) => module.default),
  },
  xx: {
    landing: () =>
      import("@/translations/landing/xx.json").then((module) => module.default),
  },
};

export type Pages = keyof (typeof translations)["fr"];

export const getTranslation = async <K extends Pages>(
  locale: Locale,
  page: K
) => {
  return translations[locale][page]() as Promise<
    (typeof translations.fr)[K] extends () => Promise<infer R> ? R : never
  >;
};

export type Translations = {
  [K in Pages]: ReturnType<(typeof translations.fr)[K]> extends Promise<infer R>
    ? R
    : never;
};
