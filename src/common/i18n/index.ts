import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es.json';
import en from './en.json';

function initI18n() {
  i18next
    .use(initReactI18next)
    .init({
      resources: { es: { translation: es }, en: { translation: en } },
      lng: 'es',
      fallbackLng: 'es',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default initI18n;
