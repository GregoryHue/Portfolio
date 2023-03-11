import { json, LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from '~/css/index.css'
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";
import { useEffect } from "react";

export function useChangeLanguage(locale: string) {
  let { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

export async function loader({ request }: LoaderArgs) {
  let locale = await i18next.getLocale(request);
  return json({ locale });
}

export let handle = {
  i18n: "common",
};

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  let { locale } = useLoaderData<typeof loader>();

  let { i18n } = useTranslation();

  useChangeLanguage(locale);
  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </body>
    </html>
  );
}
