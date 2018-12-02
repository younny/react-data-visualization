//@flow
import i18n from 'i18next'
import translationKO from './locales/ko.json'
import detector from 'i18next-browser-languagedetector'

i18n.use(detector)
    .init({
      debug: true,
      resources: {
        ko: {
          translation: translationKO
        }
      },
      lng: 'ko',
      fallbackLng: 'ko',
      react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
      }
    })

export default i18n
