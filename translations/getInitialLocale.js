import { defaultLocale } from "./config";
import { isLocale } from "./types";

/** define the language to use */
export function getInitialLocale() {
  // preference from the previous session
  const localSetting = process.browser
    ? window.localStorage.getItem("locale")
    : null;
  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  // the language setting of the browser
  const browserSetting = process.browser
    ? window.navigator.language.split("-")
    : null;
  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
}