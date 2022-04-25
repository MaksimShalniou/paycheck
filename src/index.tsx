import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next, { init } from 'i18next';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import commonEn from './shared/translations/en/common.json';

init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: commonEn
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
