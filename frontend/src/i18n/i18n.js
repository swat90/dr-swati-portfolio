import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import fi from './locales/fi.json'
import sv from './locales/sv.json'
import en from './locales/en.json'

i18n
  .use(LanguageDetector)      // detects browser language automatically
  .use(initReactI18next)
  .init({
    resources: {
      fi: { translation: fi },
      sv: { translation: sv },
      en: { translation: en },
    },
    // Finnish first — this is the default fallback order
    fallbackLng: ['fi', 'sv', 'en'],
    // If browser is Finnish → Finnish, Swedish → Swedish, else English
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],  // remembers user's choice
    },
    interpolation: {
      escapeValue: false,  // React already escapes
    },
  })

export default i18n
