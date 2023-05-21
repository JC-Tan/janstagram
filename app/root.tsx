import { LinksFunction, LoaderArgs, json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import globalStlyesUrl from '~/styles/global.css'
import { getUser } from './server/auth.server'
import { ThemeProvider } from 'pcln-design-system'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStlyesUrl },
]

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request)
  if (!user) {
    return json({ error: 'No user found' })
  }
  return json({
    user,
  })
}

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
        <ThemeProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ThemeProvider>
      </body>
    </html>
  )
}
