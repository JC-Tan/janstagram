import bcrypt from 'bcryptjs'
import type { LoginForm, RegisterForm } from './types.server'
import { prisma } from './prisma.server'
import { json, redirect } from '@remix-run/node'
import { createUser } from './user.server'
import {
  createUserSession,
  getUserSession,
  sessionStorage,
} from './session.server'

export async function register(user: RegisterForm) {
  const email = await prisma.user.count({ where: { email: user.email } })
  const username = await prisma.user.count({
    where: { userName: user.username },
  })

  if (email) {
    return json(
      { error: 'User already exists with that email' },
      { status: 400 }
    )
  }

  if (username) {
    return json(
      { error: 'User already exists with that username' },
      { status: 400 }
    )
  }
  const newUser = await createUser(user)

  if (!newUser) {
    return json(
      {
        error: 'Something went wrong trying to create a new user!',
        fields: { email: user.email, password: user.password },
      },
      {
        status: 400,
      }
    )
  }

  return createUserSession(newUser.id, '/')
}

export async function login({ email, password }: LoginForm) {
  const user = await prisma.user.findUnique({
    where: { email },
  })
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return json({ error: 'Incorrect login' }, { status: 400 })
  }

  return createUserSession(user.id, '/')
}

export async function requireUserId(request: Request) {
  const redirectTo = new URL(request.url).pathname
  const session = await getUserSession(request)
  const userId = session.get('userId')

  if (!userId || typeof userId !== 'string') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
    throw redirect(`/login?${searchParams}`)
  }

  return userId
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') {
    return null
  }
  return userId
}

export async function getUser(request: Request) {
  const userId = await getUserId(request)
  if (typeof userId !== 'string') {
    return null
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })
    return user
  } catch {
    throw logout(request)
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request)
  return redirect('/login', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  })
}
