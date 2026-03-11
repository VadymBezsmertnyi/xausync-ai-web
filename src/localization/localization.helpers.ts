// constants
import {
  languages_short,
  defaultLanguage,
  languageKey,
  LANGUAGE_BE,
  LANGUAGE_CS,
  LANGUAGE_DA,
  LANGUAGE_DE,
  LANGUAGE_EL,
  LANGUAGE_EN,
  LANGUAGE_ES,
  LANGUAGE_FI,
  LANGUAGE_FR,
  LANGUAGE_HI,
  LANGUAGE_HU,
  LANGUAGE_IT,
  LANGUAGE_JA,
  LANGUAGE_KO,
  LANGUAGE_LT,
  LANGUAGE_LV,
  LANGUAGE_PL,
  LANGUAGE_RO,
  LANGUAGE_SK,
  LANGUAGE_SV,
  LANGUAGE_UK,
  LANGUAGE_ZH,
} from "./localization.const";
import { Language } from "./localization.types";

// locales
import { messages as translationsBe } from "./be/messages";
import { messages as translationsCs } from "./cs/messages";
import { messages as translationsDa } from "./da/messages";
import { messages as translationsDe } from "./de/messages";
import { messages as translationsEl } from "./el/messages";
import { messages as translationsEn } from "./en/messages";
import { messages as translationsEs } from "./es/messages";
import { messages as translationsFi } from "./fi/messages";
import { messages as translationsFr } from "./fr/messages";
import { messages as translationsHi } from "./hi/messages";
import { messages as translationsHu } from "./hu/messages";
import { messages as translationsIt } from "./it/messages";
import { messages as translationsJa } from "./ja/messages";
import { messages as translationsKo } from "./ko/messages";
import { messages as translationsLt } from "./lt/messages";
import { messages as translationsLv } from "./lv/messages";
import { messages as translationsPl } from "./pl/messages";
import { messages as translationsRo } from "./ro/messages";
import { messages as translationsSk } from "./sk/messages";
import { messages as translationsSv } from "./sv/messages";
import { messages as translationsUk } from "./uk/messages";
import { messages as translationsZh } from "./zh/messages";

// types
import type { I18n as i18Type } from "@lingui/core";

export const languagesRegexGroup = `${Object.keys(languages_short).join("|")}`;

export function getPathWithoutLanguage(path: string): string {
  const languagesRegex = new RegExp(`^/(${languagesRegexGroup})/`);
  const match = languagesRegex.exec(path);
  if (!match) return path;
  return path.slice(match.index + match[0].length - 1);
}
export async function dynamicActivateLanguage(
  locale: Language,
  i18n: i18Type
): Promise<void> {
  const messages = getMessagesByLocale(locale);
  i18n.load(locale, messages);
  i18n.activate(locale);
}
const getMessagesByLocale = (locale: Language) => {
  switch (locale) {
    case LANGUAGE_BE:
      return translationsBe;
    case LANGUAGE_CS:
      return translationsCs;
    case LANGUAGE_DA:
      return translationsDa;
    case LANGUAGE_DE:
      return translationsDe;
    case LANGUAGE_EL:
      return translationsEl;
    case LANGUAGE_EN:
      return translationsEn;
    case LANGUAGE_ES:
      return translationsEs;
    case LANGUAGE_FI:
      return translationsFi;
    case LANGUAGE_FR:
      return translationsFr;
    case LANGUAGE_HI:
      return translationsHi;
    case LANGUAGE_HU:
      return translationsHu;
    case LANGUAGE_IT:
      return translationsIt;
    case LANGUAGE_JA:
      return translationsJa;
    case LANGUAGE_KO:
      return translationsKo;
    case LANGUAGE_LT:
      return translationsLt;
    case LANGUAGE_LV:
      return translationsLv;
    case LANGUAGE_PL:
      return translationsPl;
    case LANGUAGE_RO:
      return translationsRo;
    case LANGUAGE_SK:
      return translationsSk;
    case LANGUAGE_SV:
      return translationsSv;
    case LANGUAGE_UK:
      return translationsUk;
    case LANGUAGE_ZH:
      return translationsZh;
    default:
      return translationsEn;
  }
};

const isLanguage = (value: string): value is Language => {
  return value in languages_short;
};

export const getLanguageFromPath = (pathname: string): Language | null => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const firstSegment = segments[0];
  return isLanguage(firstSegment) ? firstSegment : null;
};

export const buildPathWithLanguage = (
  path: string,
  language: Language
): string => {
  if (language === defaultLanguage) return path;
  return `/${language}${path}`;
};

export const getDeviceLanguage = async (): Promise<Language> => {
  let localizationLanguage = defaultLanguage;
  const languageLocalStorage = localStorage.getItem(languageKey);
  if (languageLocalStorage && isLanguage(languageLocalStorage))
    localizationLanguage = languageLocalStorage;

  return localizationLanguage;
};
