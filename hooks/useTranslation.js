import { useRouter } from 'next/router';
import strings from "../translations/strings";
import { defaultLocale } from "../translations/config";

export default function useTranslation() {
  /** get the current language */
  const router = useRouter();
  const { locale } = router;
  

  /** return recursively the object given by a path */
  const safeObjectGet = (obj, path) => {
    if (!obj) return null;
    if (!path) return obj;

    const splitPath = path.split(".");
    const nextObj = obj[splitPath[0]];

    if (nextObj) {
      if (splitPath.length === 1) return nextObj;

      const remainingPath = splitPath.slice(1).join(".");
      return safeObjectGet(nextObj, remainingPath);
    }

    return null;
  };

  /** get text according to the key in the right translation */
  function t(key) {
    const path = locale.concat(".", key);
    const defaultPath = defaultLocale.concat(".", key);

    if (!safeObjectGet(strings, path)) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return (
      safeObjectGet(strings, path) || safeObjectGet(strings, defaultPath) || ""
    );
  }

  /** display text taking into account \n */
  function tWithBr(key) {
    return t(key)
      .split("\n")
      .map((e, i) => {
        return (
          <span key={i}>
            {e}
            <br />
          </span>
        );
      });
  }

  return {
    t,
    tWithBr,
    locale 
  };
}