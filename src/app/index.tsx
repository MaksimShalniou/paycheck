import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next, { init } from 'i18next';
import { ThemeProvider } from '@material-ui/styles';
import { Routes } from '@/pages';
import commonEn from '../shared/translations/en/common.json';
import { getCustomTheme } from './theme';

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
  <ThemeProvider theme={getCustomTheme('#000000', '#FFFFFF')}>
    <I18nextProvider i18n={i18next}>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </I18nextProvider>
  </ThemeProvider>
);
