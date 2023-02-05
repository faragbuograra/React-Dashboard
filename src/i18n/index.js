import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './len/ar';
import en from './len/en';
export const I18n = {
    ar,
    en
}

i18next.use(initReactI18next).init({
 // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: en,
    },
    ar: {
        translation: ar,
      }
  },
  lng:  localStorage.getItem('lang') || 'en',
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
export default i18next; 