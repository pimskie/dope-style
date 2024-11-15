import type { Locale } from "@/types/Locale";

const locales: Record<Locale, string> = {
  en: "🇺🇸 English",
  nl: "🇳🇱 Nederlands",
  it: "🇮🇹 Italiano",
};

const defaultLocale: Locale = "en";

export { locales, defaultLocale };
