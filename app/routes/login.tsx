import { LoaderArgs, redirect } from '@remix-run/node'
import login from '~/actions/login'
import LoginComponent from '~/components/Login/Login'
import { getUser } from '~/server/auth.server'

export const loader = async ({ request }: LoaderArgs) => {
  return (await getUser(request)) ? redirect('/') : null
}

export const action = login

const Login = () => {
  return <LoginComponent></LoginComponent>
}

export default Login
