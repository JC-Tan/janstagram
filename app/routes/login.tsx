import login from '~/actions/login'
import LoginComponent from '~/components/Login/Login'

export const action = login

const Login = () => {
  return <LoginComponent></LoginComponent>
}

export default Login
