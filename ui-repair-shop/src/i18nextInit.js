import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import bundles, { availableLocales } from './localeBundles';
import en from './locales/en.json';

const DEFAULT_LOCALE = 'en';


// load the right bundle depending on the requested locale
// option to include a default locale so it's always bundled and can be used as fallback
function loadLocaleBundle(locale) {
    if (locale !== DEFAULT_LOCALE) {
      return bundles[locale]()
        .then(data => data.default) // ES6 default import
        .catch((err) => {
          console.error(err);
        });
    }
    return Promise.resolve(en);
  }

const backendOptions = {
loadPath: '{{lng}}|{{ns}}', // used to pass language and namespace to custom XHR function
request: (options, url, payload, callback) => {
    // instead of loading from a URL like i18next-http-backend is intended for, we repurpose this plugin to
    // load webpack chunks instead by overriding the default request behavior
    // it's easier to use webpack in our current CRA to dynamically import a JSON with the translations
    // than to update and serve a static folder with JSON files on the CDN with cache invalidation
    try {
    const [lng] = url.split('|');

    // this mocks the HTTP fetch plugin behavior so it works with the backend AJAX pattern in this XHR library
    // https://github.com/i18next/i18next-http-backend/blob/master/lib/request.js#L56
    loadLocaleBundle(lng).then((data) => {
        callback(null, {
        data: JSON.stringify(data),
        status: 200, // status code is required by XHR plugin to determine success or failure
        });
    });
    } catch (e) {
    console.error(e);
    callback(null, {
        status: 500,
    });
    }
},
};

i18n.use(initReactI18next).use(HttpApi)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    supportedLngs: availableLocales,
    react: {
        useSuspense: false,
    },
    debug: true,
    saveMissing: true,
    saveMissingTo:'all',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    backend: backendOptions,
  });

export default i18n;