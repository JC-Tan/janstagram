import { useRef, useState } from 'react'
import Input from '../Ui/Input/Input'
import Button from '../Ui/Button'
import Flex from '../Ui/Flex/Flex'
import { v4 as uuidv4 } from 'uuid'
import { Form, useMatches } from '@remix-run/react'
import Modal from '../Ui/Modal/Modal'
import CreatePost from '../CreatePost/CreatePost'

interface IImageUploader {
  supabaseUrl: string
  supabaseKey: string
  onChange?: (file: File) => any
}

const ImageUploader = ({
  supabaseKey,
  supabaseUrl,
  onChange,
}: IImageUploader) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const dropRef = useRef(null)
  const [imageUrl, setImageUrl] = useState('')
  const [uploadUrl, setUploadUrl] = useState('')
  const [isShown, setIsShown] = useState(false)
  const [inputFile, setFile] = useState<File | null>(null)
  const { user } = useMatches()[0].data

  // Bring image up to sidebar
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      const url = user.id + '/' + uuidv4()
      setFile(e.currentTarget.files[0])
      setUploadUrl(`${url}`)
      setImageUrl(URL.createObjectURL(e.currentTarget.files[0]))
      setIsShown(true)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleClose = () => {
    setIsShown(false)
  }

  return (
    <Flex>
      <Input
        type='file'
        name='inputFile'
        ref={fileInputRef}
        accept='image/*'
        onChange={handleChange}
        hidden
      />
      <Button width='100%' onClick={handleClick}>
        Create
      </Button>
      <Modal isOpen={isShown} onClose={handleClose}>
        <CreatePost
          userId={user.id}
          inputFile={inputFile}
          fileUrl={imageUrl}
          profilePic='/defaultPfP.jpg'
          supabaseKey={supabaseKey}
          supabaseUrl={supabaseUrl}
          uploadUrl={uploadUrl}
          username={user.userName}
          onClose={handleClose}
        />
      </Modal>
    </Flex>
  )
}

export default ImageUploader
