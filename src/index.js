import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import i18n from "i18next";
import Cookies from "js-cookie";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const fallbackLng = 'en';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng,
    defaultNS: 'translation',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'b', 'span', 'p', 'ul', 'li'],
    },
  });

// Задаем язык по умолчанию в куки
const storedLang = Cookies.get("i18next") || fallbackLng;
i18n.changeLanguage(storedLang);
Cookies.set("i18next", storedLang);

export default i18n;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals