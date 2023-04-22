/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/docs/en/main/file-conventions/entry.server
 */

import type { EntryContext } from '@remix-run/cloudflare';
import { RemixServer } from '@remix-run/react';
import { createInstance } from 'i18next';
import isbot from 'isbot';
import { renderToReadableStream } from 'react-dom/server';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { preloadLinkedAssets } from 'remix-utils';

import { measure } from './src/utils/measure';
import en from '../public/locales/en';
import vn from '../public/locales/vn';
import { i18n } from './i18n.server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return measure('entry.server#handleRequest', async () => {
    let instance = createInstance().use(initReactI18next);

    let lng = await i18n.getLocale(request);
    let ns = i18n.getRouteNamespaces(remixContext);

    await instance.init({
      supportedLngs: ['vn', 'en'],
      fallbackLng: 'en',
      react: { useSuspense: false },
      lng,
      ns,
      resources: { en: { translation: en }, vn: { translation: vn } },
      interpolation: { escapeValue: false },
    });
    const body = await renderToReadableStream(
      <I18nextProvider i18n={instance}>
        <RemixServer context={remixContext} url={request.url} />
      </I18nextProvider>,
      {
        signal: request.signal,
        onError(error: unknown) {
          console.error(error);
          responseStatusCode = 500;
        },
      }
    );

    if (isbot(request.headers.get('user-agent'))) {
      await body.allReady;
    }

    responseHeaders.set('Content-Type', 'text/html');

    preloadLinkedAssets(remixContext, responseHeaders);

    return new Response(body, {
      headers: responseHeaders,
      status: responseStatusCode,
    });
  });
}
