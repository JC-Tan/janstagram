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
import Layout from './components/Ui/Layout/Layout'
import { getUser } from './server/auth.server'

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
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
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
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  )
}
