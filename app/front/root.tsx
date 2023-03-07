import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  Outlet,
} from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18next from '~/i18next.server';

import styles from '~/css/index.css';
import NavBarComponent from './components/NavbarComponent';

export function useChangeLanguage(locale: string) {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

export const loader = async ({ request }: LoaderArgs) => {
  const locale = await i18next.getLocale(request);
  return json({ locale });
};

export const handle = {
  i18n: 'translation',
};

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Grégory Hue | Portfolio',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const { locale } = useLoaderData<typeof loader>();

  const { i18n } = useTranslation();

  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NavBarComponent />
        <div className="frame">
          <div className="container">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </body>
    </html>
  );
}
