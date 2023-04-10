import { json, LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
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
import { useTranslation } from 'react-i18next';
import i18next from './src/i18n/i18next.server';

import stylesheet from '~/tailwind.css';
import button from './src/components/buttons/styles/button.css';

export async function loader({ request }: LoaderArgs) {
  let locale = await i18next.getLocale(request);
  return json({ locale });
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'stylesheet', href: button },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Koffee Addicted',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  let { locale } = useLoaderData<typeof loader>();
  let { i18n } = useTranslation();
  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
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
