import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { isLocale } from "../translations/types";
import { defaultLocale } from "../translations/config";

export const LocaleContext = createContext({
  locale: defaultLocale,
  setLocale: () => null,
});

/** get the current language from the url */
export const LocaleProvider = ({ lang, children }) => {
  const [locale, setLocale] = useState(lang);
  const { query } = useRouter();

  useEffect(() => {
    if (locale !== localStorage.getItem("locale")) {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  useEffect(() => {
    if (
      typeof query.lang === "string" &&
      isLocale(query.lang) &&
      locale !== query.lang
    ) {
      //console.log(query.lang, 'query')
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};