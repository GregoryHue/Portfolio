import {
  json,
  type LoaderArgs,
  type MetaFunction,
  type LinksFunction
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react'
import i18next from '~/i18next.server'
import { useTranslation } from 'react-i18next'

import styles from '~/css/index.css'
import NavBarComponent from './components/NavbarComponent'
import { useEffect } from 'react'

export function useChangeLanguage (locale: string) {
  const { i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale, i18n])
}

export async function loader ({ request }: LoaderArgs) {
  const locale = await i18next.getLocale(request)
  return json({ locale })
}

export const handle = {
  i18n: 'common'
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Grégory Hue | Portfolio',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App () {
  const { locale } = useLoaderData<typeof loader>()

  const { i18n } = useTranslation()

  useChangeLanguage(locale)

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
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </body>
    </html>
  )
}
