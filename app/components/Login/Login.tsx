import Button from '../Ui/Button/Button'
import Flex from '../Ui/Flex/Flex'
import Text from '../Ui/Text/Text'
import InputField from '../InputField/InputField'
import { useState } from 'react'
import { Form } from '@remix-run/react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    username: '',
  })
  const [action, setAction] = useState('login')

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

  return (
    <Flex
      alignItems='center'
      flexDirection='column'
      height='100%'
      justifyContent='center'
    >
      <Flex
        alignItems='center'
        border='1px solid #cccccc'
        flexDirection='column'
        width='350px'
        my={10}
        p={10}
      >
        <Form method='post'>
          <InputField
            htmlFor='email'
            label='Email'
            value={formData.email}
            onChange={(e) => handleChange(e, 'email')}
          />
          <InputField
            htmlFor='password'
            label='Password'
            type='password'
            value={formData.password}
            onChange={(e) => handleChange(e, 'password')}
          />
          {action === 'signup' && (
            <>
              <InputField
                htmlFor='firstName'
                label='First Name'
                value={formData.firstName}
                onChange={(e) => handleChange(e, 'firstName')}
              />
              <InputField
                htmlFor='lastName'
                label='Last Name'
                value={formData.lastName}
                onChange={(e) => handleChange(e, 'lastName')}
              />
              <InputField
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
      <Flex
        border='1px solid #cccccc'
        width='350px'
        my={10}
        p={10}
        justifyContent='center'
      >
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
