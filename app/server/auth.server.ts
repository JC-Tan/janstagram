import type { LoginForm, RegisterForm } from './types.server'
import { prisma } from './prisma.server'
import { json } from '@remix-run/node'
import { createUser } from './user.server'
import bcrypt from 'bcryptjs'
import { createUserSession } from './session.server'

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
  console.log('in log in', user)
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    console.log('log in failed!')
    return json({ error: 'Incorrect login' }, { status: 400 })
  }

  return createUserSession(user.id, '/')
}
