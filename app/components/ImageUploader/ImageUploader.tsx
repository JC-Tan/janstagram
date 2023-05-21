import { useRef, useState } from 'react'
import { Box, Button, Input } from 'pcln-design-system'
import { v4 as uuidv4 } from 'uuid'
import { Form, useMatches } from '@remix-run/react'
import Post from '../Post/Post'
import styled from 'styled-components'

interface IImageUploader {
  onChange?: (file: File) => any
}

const HiddenInput = styled(Input)`
  display: none;
`

const ImageUploader = ({ onChange }: IImageUploader) => {
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
      const url = user.userName + '/' + uuidv4()
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
      <Form method='post'>
        <HiddenInput
          type='file'
          name='inputFile'
          ref={fileInputRef}
          accept='image/*'
          onChange={handleChange}
        />
        <Button mt={12} onClick={handleClick}>
          Create
        </Button>
        {isShown && (
          <Post
            userId={user.id}
            inputFile={inputFile}
            fileUrl={imageUrl}
            uploadUrl={uploadUrl}
            onClose={handleClose}
          />
        )}
      </Form>
    </Box>
  )
}

export default ImageUploader
