import { Button, Flex, Input } from 'pcln-design-system'
import { Form, Link } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import ImageUploader from '../ImageUploader/ImageUploader'

// Redo styling of nav bar!
const Sidebar = () => {
  const [profile, setProfile] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
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

  const handleFile = (file: File) => {
    setImageFile(file)
  }

  return (
    <Flex flexDirection='column' height='100%' width='275px' p={12}>
      <Link to='/'>Home</Link>
      <Link to={`/profile`}>Profile</Link>
      <Form ref={formRef} action={`/profile${profile}`}>
        <Input placeholder='Search' onChange={handleChange} />
      </Form>
      <ImageUploader />
      <Form action='/logout' method='post'>
        <Button name='_action' value='logout' type='submit' mt={12}>
          Log out
        </Button>
      </Form>
    </Flex>
  )
}

export default Sidebar
