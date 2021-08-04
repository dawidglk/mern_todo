import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pl from "./languages/pl";

const localLang = navigator.language;

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: pl },
  },
  lng: localLang,
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;