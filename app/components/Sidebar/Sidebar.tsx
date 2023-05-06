import Flex from '../Ui/Flex/Flex'
import Button from '../Ui/Button/Button'
import { Form, Link } from '@remix-run/react'

// Redo styling of nav bar!
const Sidebar = () => {
  return (
    <Form action='/logout' method='post'>
      <Flex
        borderRight='1px solid black'
        flexDirection='column'
        height='100%'
        width='275px'
      >
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Button name='_action' value='logout' type='submit' mx={12} mt={12}>
          Log out
        </Button>
      </Flex>
    </Form>
  )
}

export default Sidebar
