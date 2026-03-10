// types
import type { I18n as i18Type } from "@lingui/core";
import { languages_short } from "./localization.const";

export type Language =
  | "be"
  | "cs"
  | "da"
  | "de"
  | "el"
  | "en"
  | "es"
  | "fi"
  | "fr"
  | "hi"
  | "hu"
  | "it"
  | "ja"
  | "ko"
  | "lt"
  | "lv"
  | "pl"
  | "ro"
  | "sk"
  | "sv"
  | "uk"
  | "zh";

const VALUES_LANGUAGES_SHORT = Object.values(languages_short);

type LanguageShortType = (typeof VALUES_LANGUAGES_SHORT)[number];

export type LocalesContext = {
  i18n: i18Type;
  language: Language;
  getLanguageStorage: () => Promise<void>;
  setLanguage: (language: Language) => Promise<void>;
  children?: React.ReactNode;
};
export type Props = {
  children?: React.ReactNode;
};
export type LanguageType = {
  title: string;
  key: Language;
  native: string;
  flag: string;
};
export type Languages = LanguageType[];
