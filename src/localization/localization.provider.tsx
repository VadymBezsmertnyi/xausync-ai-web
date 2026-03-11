"use client";
import React, { useState, useEffect, useMemo, useContext } from "react";
import { I18nProvider } from "@lingui/react";
import { Messages, setupI18n } from "@lingui/core";
import { useRouter } from "next/router";

// types
import { Language, LocalesContext, Props } from "./localization.types";

// helps
import {
  dynamicActivateLanguage,
  getDeviceLanguage,
  getLanguageFromPath,
} from "./localization.helpers";

// locales
import { messages as translationsBe } from "../localization/be/messages";
import { messages as translationsCs } from "../localization/cs/messages";
import { messages as translationsDa } from "../localization/da/messages";
import { messages as translationsDe } from "../localization/de/messages";
import { messages as translationsEl } from "../localization/el/messages";
import { messages as translationsEn } from "../localization/en/messages";
import { messages as translationsEs } from "../localization/es/messages";
import { messages as translationsFi } from "../localization/fi/messages";
import { messages as translationsFr } from "../localization/fr/messages";
import { messages as translationsHi } from "../localization/hi/messages";
import { messages as translationsHu } from "../localization/hu/messages";
import { messages as translationsIt } from "../localization/it/messages";
import { messages as translationsJa } from "../localization/ja/messages";
import { messages as translationsKo } from "../localization/ko/messages";
import { messages as translationsLt } from "../localization/lt/messages";
import { messages as translationsLv } from "../localization/lv/messages";
import { messages as translationsPl } from "../localization/pl/messages";
import { messages as translationsRo } from "../localization/ro/messages";
import { messages as translationsSk } from "../localization/sk/messages";
import { messages as translationsSv } from "../localization/sv/messages";
import { messages as translationsUk } from "../localization/uk/messages";
import { messages as translationsZh } from "../localization/zh/messages";

// constants
import {
  defaultLanguage,
  languageKey,
  languages_short,
  languagesLinguiAlias,
} from "./localization.const";

const CATALOGS_LANGUAGES = {
  be: translationsBe as Messages,
  cs: translationsCs as Messages,
  da: translationsDa as Messages,
  de: translationsDe as Messages,
  el: translationsEl as Messages,
  en: translationsEn as Messages,
  es: translationsEs as Messages,
  fi: translationsFi as Messages,
  fr: translationsFr as Messages,
  hi: translationsHi as Messages,
  hu: translationsHu as Messages,
  it: translationsIt as Messages,
  ja: translationsJa as Messages,
  ko: translationsKo as Messages,
  lt: translationsLt as Messages,
  lv: translationsLv as Messages,
  pl: translationsPl as Messages,
  ro: translationsRo as Messages,
  sk: translationsSk as Messages,
  sv: translationsSv as Messages,
  uk: translationsUk as Messages,
  zh: translationsZh as Messages,
};

export const localesContext = React.createContext({} as LocalesContext);

const LocalesProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [languageUser, setLanguage] = useState<Language>(defaultLanguage);
  const language = languageUser || defaultLanguage;
  const i18n = setupI18n({
    messages: CATALOGS_LANGUAGES,
    locale: languagesLinguiAlias[language],
  });

  const setLanguageAsync = async (language: Language): Promise<void> => {
    try {
      await dynamicActivateLanguage(language, i18n);
      localStorage.setItem(languageKey, language);
      setLanguage(language);
    } catch (error: any) {}
  };

  const getLanguageStorage = async () => {
    try {
      const pathLanguage = getLanguageFromPath(router.pathname);
      const deviceLanguage = await getDeviceLanguage();
      const routeLanguage = pathLanguage || deviceLanguage;
      await setLanguageAsync(routeLanguage);
      setLanguage(routeLanguage);
    } catch (error: any) {}
  };

  const contextValue: LocalesContext = useMemo(
    () => ({
      i18n,
      language,
      getLanguageStorage,
      setLanguage: setLanguageAsync,
    }),
    [i18n, language]
  );

  useEffect(() => {
    getLanguageStorage();
  }, [router.pathname]);

  return (
    <I18nProvider i18n={i18n}>
      <localesContext.Provider value={contextValue}>
        {children}
      </localesContext.Provider>
    </I18nProvider>
  );
};

export const useLocalesProvider = (): LocalesContext =>
  useContext(localesContext);

export default LocalesProvider;
