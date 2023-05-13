import { useRef, useState } from 'react'
import Input from '../Ui/Input/Input'
import Button from '../Ui/Button'
import Box from '../Ui/Box/Box'
import { v4 as uuidv4 } from 'uuid'
import { useMatches } from '@remix-run/react'
import { createClient } from '@supabase/supabase-js'

interface IImageUploader {
  onChange?: (file: File) => any
}

const supabaseUrl = 'https://unpdnaliobtmmjqonfhw.supabase.co/'
const supabase = createClient(supabaseUrl, supabaseKey)

const ImageUploader = ({ onChange }: IImageUploader) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const dropRef = useRef(null)
  const [imageUrl, setImageUrl] = useState('')
  const { user } = useMatches()[0].data

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      const img = e.currentTarget.files[0]
      const url = user.userName + '/' + uuidv4()
      try {
        const { data, error } = await supabase.storage
          .from('images')
          .upload(url, img)
        if (data) {
          setImageUrl(`${supabase}/storage/v1/object/public/${url}`)
        } else {
          throw new Error(error.message)
        }
      } catch {
        throw new Error('Something went wrong with connecting to supabase!')
      }
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <Box>
      <Input
        type='file'
        ref={fileInputRef}
        accept='image/*'
        onChange={handleChange}
        hidden
      />
      <Button
        name='_action'
        value='create'
        type='submit'
        mt={12}
        onClick={handleClick}
      >
        Create
      </Button>
    </Box>
  )
}

export default ImageUploader
