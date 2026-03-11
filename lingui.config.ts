import type { LinguiConfig } from "@lingui/conf";

export const SUPPORTED_LOCALES = [
  "be",
  "cs",
  "da",
  "de",
  "el",
  "en",
  "es",
  "fi",
  "fr",
  "hi",
  "hu",
  "it",
  "ja",
  "ko",
  "lt",
  "lv",
  "pl",
  "ro",
  "sk",
  "sv",
  "uk",
  "zh",
];

const config: LinguiConfig = {
  catalogs: [
    {
      path: "<rootDir>/src/localization/{locale}/messages",
      include: ["<rootDir>/src", "<rootDir>/App.tsx", "<rootDir>/src/**/*.tsx"],
      exclude: ["**/node_modules/**"],
    },
  ],
  locales: SUPPORTED_LOCALES,
  compileNamespace: "ts",
  format: "po",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  formatOptions: {
    origins: false,
  },
};

export default config;
