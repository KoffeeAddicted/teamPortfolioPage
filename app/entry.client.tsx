/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/docs/en/main/file-conventions/entry.client
 */
import type { i18n } from 'i18next';

import { RemixBrowser } from '@remix-run/react';
import { createInstance } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { getInitialNamespaces } from 'remix-i18next';

import { measure } from './src/utils/measure';
import en from '../public/locales/en';
import vn from '../public/locales/vn';

measure('entry.client#hydrate', async () => {
  let instance = createInstance().use(initReactI18next).use(LanguageDetector);
  await instance.init({
    supportedLngs: ['vn', 'en'],
    fallbackLng: 'en',
    react: { useSuspense: false },
    ns: getInitialNamespaces(),
    detection: { order: ['htmlTag'], caches: [] },
    resources: { en: { translation: en }, vn: { translation: vn } },
    interpolation: { escapeValue: false },
  });

  return hydrate(instance);
});

function hydrate(instance: i18n) {
  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={instance}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </I18nextProvider>
    );
  });
}
