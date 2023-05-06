import Flex from '../Ui/Flex/Flex'
import Button from '../Ui/Button/Button'
import { Form, Link } from '@remix-run/react'
import { useState } from 'react'
import InputField from '../InputField/InputField'

// Redo styling of nav bar!
const Sidebar = () => {
  const [profile, setProfile] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setProfile(e.target.value)
  }
  return (
    <Flex
      borderRight='1px solid black'
      flexDirection='column'
      height='100%'
      width='275px'
      p={12}
    >
      <Link to='/'>Home</Link>
      <Link to={`/profile`}>Profile</Link>
      <Link to={`/profile/${profile}`}>
        <InputField htmlFor='profile' label='' onChange={handleChange} />
      </Link>
      <Form action='/logout' method='post'>
        <Button name='_action' value='logout' type='submit' mt={12}>
          Log out
        </Button>
      </Form>
    </Flex>
  )
}

export default Sidebar
