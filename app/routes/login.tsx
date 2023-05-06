import { LoaderArgs, redirect } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import login from '~/actions/login'
import LoginComponent from '~/components/Login/Login'
import { getUser } from '~/server/auth.server'

export const loader = async ({ request }: LoaderArgs) => {
  return (await getUser(request)) ? redirect('/') : null
}

export const action = login

const Login = () => {
  const data = useActionData()
  return (
    <LoginComponent
      email={data?.fields?.email}
      firstName={data?.fields?.firstName}
      formError={data?.error}
      lastName={data?.fields?.lastName}
      loginErrors={data?.errors}
      password={data?.fields?.password}
      username={data?.fields?.username}
    />
  )
}

export default Login
