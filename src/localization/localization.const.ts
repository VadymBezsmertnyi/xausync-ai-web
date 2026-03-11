import type { Language, Languages } from "./localization.types";

export const defaultLanguage: Language = "en";
export const languagesKeys = [
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
] as const;
export const languageKey = "language";

export const languages: Languages = [
  {
    title: "Беларуская",
    key: "be",
    native: "Belarusian",
    flag: "by",
  },
  {
    title: "Čeština",
    key: "cs",
    native: "Czech",
    flag: "cz",
  },
  {
    title: "Dansk",
    key: "da",
    native: "Danish",
    flag: "dk",
  },
  {
    title: "Deutsch",
    key: "de",
    native: "German",
    flag: "de",
  },
  {
    title: "Ελληνικά",
    key: "el",
    native: "Greek",
    flag: "gr",
  },
  {
    title: "English",
    key: "en",
    native: "English",
    flag: "gb",
  },
  {
    title: "Español",
    key: "es",
    native: "Spanish",
    flag: "es",
  },
  {
    title: "Suomi",
    key: "fi",
    native: "Finnish",
    flag: "fi",
  },
  {
    title: "Français",
    key: "fr",
    native: "French",
    flag: "fr",
  },
  {
    title: "हिन्दी",
    key: "hi",
    native: "Hindi",
    flag: "in",
  },
  {
    title: "Magyar",
    key: "hu",
    native: "Hungarian",
    flag: "hu",
  },
  {
    title: "Italiano",
    key: "it",
    native: "Italian",
    flag: "it",
  },
  {
    title: "日本語",
    key: "ja",
    native: "Japanese",
    flag: "jp",
  },
  {
    title: "한국어",
    key: "ko",
    native: "Korean",
    flag: "kr",
  },
  {
    title: "Lietuvių",
    key: "lt",
    native: "Lithuanian",
    flag: "lt",
  },
  {
    title: "Latviešu",
    key: "lv",
    native: "Latvian",
    flag: "lv",
  },
  {
    title: "Polski",
    key: "pl",
    native: "Polish",
    flag: "pl",
  },
  {
    title: "Română",
    key: "ro",
    native: "Romanian",
    flag: "ro",
  },
  {
    title: "Slovenský",
    key: "sk",
    native: "Slovak",
    flag: "sk",
  },
  {
    title: "Svenska",
    key: "sv",
    native: "Swedish",
    flag: "sv",
  },
  {
    title: "Українська",
    key: "uk",
    native: "Ukrainian",
    flag: "ua",
  },
  {
    title: "中文",
    key: "zh",
    native: "Chinese",
    flag: "cn",
  },
];

export const languages_short = {
  be: "be-BY",
  cs: "cs-CS",
  da: "da-DK",
  de: "de-DE",
  el: "el-GR",
  en: "en-US",
  es: "es-ES",
  fi: "fi-FI",
  fr: "fr-FR",
  hi: "hi-IN",
  hu: "hu-HU",
  it: "it-IT",
  ja: "ja-JP",
  ko: "ko-KR",
  lt: "lt-LT",
  lv: "lv-LV",
  pl: "pl-PL",
  ro: "ro-RO",
  sk: "sk-SK",
  sv: "sv-SE",
  uk: "uk-UA",
  zh: "zh-CN",
} as const;

export const languagesLinguiAlias = {
  be: "be",
  cs: "cs",
  da: "da",
  de: "de",
  el: "el",
  en: "en",
  es: "es",
  fi: "fi",
  fr: "fr",
  hi: "hi",
  hu: "hu",
  it: "it",
  ja: "ja",
  ko: "ko",
  lt: "lt",
  lv: "lv",
  pl: "pl",
  ro: "ro",
  sk: "sk",
  sv: "sv",
  uk: "uk",
  zh: "zh",
} as const;

export const LANGUAGE_BE = "be";
export const LANGUAGE_CS = "cs";
export const LANGUAGE_DA = "da";
export const LANGUAGE_DE = "de";
export const LANGUAGE_EL = "el";
export const LANGUAGE_EN = "en";
export const LANGUAGE_ES = "es";
export const LANGUAGE_FI = "fi";
export const LANGUAGE_FR = "fr";
export const LANGUAGE_HI = "hi";
export const LANGUAGE_HU = "hu";
export const LANGUAGE_IT = "it";
export const LANGUAGE_JA = "ja";
export const LANGUAGE_KO = "ko";
export const LANGUAGE_LT = "lt";
export const LANGUAGE_LV = "lv";
export const LANGUAGE_PL = "pl";
export const LANGUAGE_RO = "ro";
export const LANGUAGE_SK = "sk";
export const LANGUAGE_SV = "sv";
export const LANGUAGE_UK = "uk";
export const LANGUAGE_ZH = "zh";

export const languagePattern =
  /\b(be|cs|da|de|el|en|es|fi|fr|hi|hu|it|ja|ko|lt|lv|pl|ro|sk|sv|uk|zh)\b/;
