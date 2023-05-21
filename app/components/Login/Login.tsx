import { Button, Flex, Text } from 'pcln-design-system'
import InputField from '../InputField/InputField'
import { useEffect, useRef, useState } from 'react'
import { Form } from '@remix-run/react'

interface ILoginProps {
  email?: string
  password?: string
  firstName?: string
  formError?: string
  lastName?: string
  loginErrors?: any
  username?: string
}

const Login = ({
  email,
  password,
  firstName,
  lastName,
  formError,
  loginErrors,
  username,
}: ILoginProps) => {
  const [formData, setFormData] = useState({
    email: email || '',
    password: password || '',
    firstName: firstName || '',
    lastName: lastName || '',
    username: username || '',
  })
  const [action, setAction] = useState('login')
  const [errors, setErrors] = useState(loginErrors || {})
  const [formErrorState, setFormErrorState] = useState(formError || '')
  const firstLoad = useRef(true)
  const handleAction = () => {
    setAction(action === 'login' ? 'signup' : 'login')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    e.preventDefault()
    setFormData((prevForm) => ({ ...prevForm, [field]: e.target.value }))
  }

  useEffect(() => {
    if (!firstLoad.current) {
      const newState = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        username: '',
      }
      setErrors(newState)
      setFormErrorState('')
      setFormData(newState)
    }
  }, [action])

  useEffect(() => {
    if (!firstLoad.current) {
      setFormErrorState('')
    }
  }, [formData])

  useEffect(() => {
    firstLoad.current = false
  }, [])

  useEffect(() => {
    setErrors({ ...loginErrors })
  }, [loginErrors])

  useEffect(() => {
    formError && setFormErrorState(formError)
  }, [formError])

  return (
    <Flex
      alignItems='center'
      flexDirection='column'
      height='100%'
      justifyContent='center'
    >
      <Flex
        alignItems='center'
        flexDirection='column'
        width='350px'
        my={10}
        p={10}
      >
        <Form method='post'>
          {formErrorState && <Text>{formErrorState}</Text>}
          <InputField
            error={errors?.email}
            htmlFor='email'
            label='Email'
            value={formData.email}
            onChange={(e) => handleChange(e, 'email')}
          />
          <InputField
            error={errors?.password}
            htmlFor='password'
            label='Password'
            type='password'
            value={formData.password}
            onChange={(e) => handleChange(e, 'password')}
          />
          {action === 'signup' && (
            <>
              <InputField
                error={errors?.firstName}
                htmlFor='firstName'
                label='First Name'
                value={formData.firstName}
                onChange={(e) => handleChange(e, 'firstName')}
              />
              <InputField
                error={errors?.lastName}
                htmlFor='lastName'
                label='Last Name'
                value={formData.lastName}
                onChange={(e) => handleChange(e, 'lastName')}
              />
              <InputField
                error={errors?.username}
                htmlFor='username'
                label='Username'
                value={formData.username}
                onChange={(e) => handleChange(e, 'username')}
              />
            </>
          )}
          <Button
            name='_action'
            type='submit'
            value={action}
            width='100%'
            mb={2}
          >
            {action === 'login' ? 'Log in' : 'Sign up'}
          </Button>
        </Form>
      </Flex>
      <Flex width='350px' my={10} p={10} justifyContent='center'>
        {/* Temporary! This should bring us to sign up route!*/}
        <Text fontSize={14} textAlign='15px' lineHeight='18px' m={15}>
          Don't have account?
        </Text>
        <Button onClick={handleAction}>Sign up</Button>
      </Flex>
    </Flex>
  )
}

export default Login
