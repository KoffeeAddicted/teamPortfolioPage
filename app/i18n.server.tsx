import { createCookie } from '@remix-run/cloudflare';
import { RemixI18Next } from 'remix-i18next';

import en from '../public/locales/en';
import vn from '../public/locales/vn';

export let localeCookie = createCookie('locale', {
  path: '/',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
});

export let i18n = new RemixI18Next({
  detection: {
    fallbackLanguage: 'en',
    supportedLanguages: ['cimode', 'vn', 'en'],
    cookie: localeCookie,
  },
  i18next: {
    supportedLngs: ['vn', 'en'],
    resources: { en: { translation: en }, vn: { translation: vn } },
  },
});
