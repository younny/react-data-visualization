//@flow
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import i18n from 'i18next'
import translationKO from './locales/ko/translation.json'
import detector from 'i18next-browser-languagedetector'
import { reactI18nextModule, translate } from 'react-i18next'

i18n.use(detector)
    .init({
      debug: true,
      resources: {
        ko: {
          translation: translationKO
        }
      },
      lng: 'ko',
      fallbackLng: 'en-US',
      react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
      }
    })

export default i18n
