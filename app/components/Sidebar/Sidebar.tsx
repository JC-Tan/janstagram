import Flex from '../Ui/Flex/Flex'
import Button from '../Ui/Button/Button'
import { Form, Link } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import ImageUploader from '../ImageUploader/ImageUploader'
import Input from '../Ui/Input/Input'

// Redo styling of nav bar!
const Sidebar = () => {
  const [profile, setProfile] = useState('')
  let formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    formRef.current?.reset()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    if (input !== '') {
      setProfile(`/${input.toLowerCase()}`)
    }
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
      <Form ref={formRef} action={`/profile${profile}`}>
        <Input placeholder='Search' onChange={handleChange} />
      </Form>
      <Form method='post'>
        <ImageUploader />
      </Form>
      <Form action='/logout' method='post'>
        <Button name='_action' value='logout' type='submit' mt={12}>
          Log out
        </Button>
      </Form>
    </Flex>
  )
}

export default Sidebar
