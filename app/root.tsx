import type {
  LinksFunction,
  MetaFunction,
  LoaderArgs,
} from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { PublicLayout } from './src/layouts';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { StructuredData, useShouldHydrate, jsonHash } from 'remix-utils';

import stylesheet from '~/tailwind.css';
import button from './src/components/buttons/styles/button.css';
import typography from './src/components/typographys/styles/typography.css';

import { measure } from './src/utils/measure';
import { removeTrailingSlash } from './src/utils/removeTrailingSlash';
import en from '../public/locales/en';
import vn from '../public/locales/vn';
import { i18n, localeCookie } from './i18n.server';
import { useDirection } from './src/hooks/usei18n';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'stylesheet', href: button },
  { rel: 'stylesheet', href: typography },
];

export function loader({ request, context }: LoaderArgs) {
  return measure('root#loader', async () => {
    removeTrailingSlash(new URL(request.url));

    let locale = await i18n.getLocale(request);

    return jsonHash(
      {
        locale,
      },
      { headers: { 'Set-Cookie': await localeCookie.serialize(locale) } }
    );
  });
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Koffee Addicted',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  let { locale } = useLoaderData<typeof loader>();
  let dir = useDirection();

  return (
    <html lang={locale} dir={dir}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <ProSidebarProvider>
          <PublicLayout>
            <Outlet />
          </PublicLayout>
        </ProSidebarProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
