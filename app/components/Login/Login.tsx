import Button from '../Ui/Button/Button'
import Flex from '../Ui/Flex/Flex'
import Text from '../Ui/Text/Text'
import { Form } from '@remix-run/react'
import InputField from '../InputField/InputField'
import { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  })
  const [action, setAction] = useState('login')

  const handleAction = () => {
    setAction(action === 'login' ? 'signup' : 'login')
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
          <InputField htmlFor='username' label='Username' />
          <InputField htmlFor='password' label='Password' />
          {action === 'signup' && (
            <>
              <InputField htmlFor='firstName' label='First Name' />
              <InputField htmlFor='lastName' label='Last Name' />
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
