import { DataFunctionArgs, json } from '@remix-run/node'
import {
  validateEmail,
  validateName,
  validatePassword,
} from '~/server/valid.server'
import { login as loginAuth, register } from '~/server/auth.server'

// will separate sign up later
const login = async ({ request }: DataFunctionArgs) => {
  const form = await request.formData()
  const action = form.get('_action')
  const email = form.get('email')
  const password = form.get('password')
  let firstName = form.get('firstName')
  let lastName = form.get('lastName')
  let username = form.get('username')

  if (
    typeof action !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return json({ error: 'Invalid Form Data', form: action }, { status: 400 })
  }

  if (
    action === 'signup' &&
    (typeof firstName !== 'string' ||
      typeof lastName !== 'string' ||
      typeof username !== 'string')
  ) {
    return json({ error: 'Invalid Form Data', form: action }, { status: 400 })
  }

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...(action === 'signup'
      ? {
          firstName: validateName((firstName as string) || ''),
          lastName: validateName((lastName as string) || ''),
          username: validateName((username as string) || ''),
        }
      : {}),
  }

  if (Object.values(errors).some(Boolean)) {
    return json({
      errors,
      fields: {
        email,
        password,
        firstName,
        lastName,
        username,
      },
      form: action,
    })
  }

  switch (action) {
    case 'login':
      return await loginAuth({ email, password })
    case 'signup': {
      firstName = firstName as string
      lastName = lastName as string
      username = username as string
      return await register({
        email,
        password,
        firstName,
        lastName,
        username,
      })
    }
    default:
      return json({ error: 'Invalid Form Data', form: action }, { status: 400 })
  }
}

export default login
