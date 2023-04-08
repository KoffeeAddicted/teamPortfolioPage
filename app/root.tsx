import type { LinksFunction, MetaFunction } from '@remix-run/node';
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
  return (
    <html lang='en'>
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
