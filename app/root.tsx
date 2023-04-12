import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { PublicLayout } from './src/layouts';
import { ProSidebarProvider } from 'react-pro-sidebar';

import stylesheet from '~/tailwind.css';
import button from './src/components/buttons/styles/button.css';
import typography from './src/components/typographys/styles/typography.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'stylesheet', href: button },
  { rel: 'stylesheet', href: typography },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Koffee Addicted',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang='en'>
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
