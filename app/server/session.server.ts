/**
 * Cookie session for when user logs in or registers for an account/
 * Also redirects
 */
import { redirect, createCookieSessionStorage } from '@remix-run/node'

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('SESSION_SECRET not set!')
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'janstagram-session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 2592000, // a month
    httpOnly: true,
  },
})

export async function createUserSession(userId: string, redirectTo: string) {
  console.log('in createUserSession')
  const session = await sessionStorage.getSession()
  session.set('userId', userId)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session),
    },
  })
}
