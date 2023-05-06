import Flex from '../Ui/Flex/Flex'
import Button from '../Ui/Button/Button'
import { Form } from '@remix-run/react'
import { useState } from 'react'

const Sidebar = () => {
  const [value, setValue] = useState('logout') // figure this out later

  const handleValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    const val = (e.target as HTMLButtonElement).value
    setValue(val)
  }
  return (
    <Form action={`/${value}`} method='post'>
      <Flex
        borderRight='1px solid black'
        flexDirection='column'
        height='100%'
        width='275px'
      >
        <Button
          id='profile'
          name='_action'
          value='profile'
          type='submit'
          mx={12}
          mt={12}
          onClick={handleValue}
        >
          Profile
        </Button>
        <Button
          id='logout'
          name='_action'
          value='logout'
          type='submit'
          mx={12}
          mt={12}
          onClick={handleValue}
        >
          Log out
        </Button>
      </Flex>
    </Form>
  )
}

export default Sidebar
