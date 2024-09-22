import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'es',
    fallbackLng: 'es',
    backend: {
      loadPath: '/lang/{{lng}}/{{ns}}.json'
    }
  });