import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Ensure path is correct
    },
    ns: ['home', 'layout', 'projects'], // Specify namespaces
    defaultNS: 'home', // Set a default namespace
    interpolation: { escapeValue: false },
  });

export default i18n;
