import { useRef, useState } from 'react'
import Input from '../Ui/Input/Input'
import { v4 as uuidv4 } from 'uuid'
import { useMatches } from '@remix-run/react'
import Modal from '../Ui/Modal/Modal'
import CreatePost from '../CreatePost/CreatePost'
import ButtonIcon from '../ButtonIcon'
import Box from '../Ui/Box/Box'

interface IImageUploader {
  supabaseUrl: string
  supabaseKey: string
}

const ImageUploader = ({ supabaseKey, supabaseUrl }: IImageUploader) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
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
    <Box>
      <Input
        type='file'
        name='inputFile'
        ref={fileInputRef}
        accept='image/*'
        onChange={handleChange}
        hidden
      />
      <ButtonIcon
        buttonLabel='Create'
        url='/icons/add.png'
        value='create'
        onClick={handleClick}
      />

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
    </Box>
  )
}

export default ImageUploader
