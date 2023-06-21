import { useState } from 'react'
import Flex from '../Ui/Flex'
import Box from '../Ui/Box/Box'
import styled from 'styled-components'
import Button from '../Ui/Button'
import Input from '../Ui/Input'
import { createClient } from '@supabase/supabase-js'
import Image from '../Ui/Image/Image'

interface IPost {
  inputFile: File
  fileUrl: string
  supabaseUrl: string
  supabaseKey: string
  uploadUrl: string
  userId: string
  onClose: () => void
}

const StyledTextArea = styled('textarea')`
  resize: none;
  width: 100%;
`

const CreatePost = ({
  inputFile,
  fileUrl,
  supabaseKey,
  supabaseUrl,
  uploadUrl,
  userId,
  onClose,
}: IPost) => {
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [bio, setBio] = useState('')

  const handleBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value)
  }

  const handleShare = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('images')
        .upload(uploadUrl, inputFile)

      if (data) {
        console.log('upload successful')
      } else {
        throw new Error(error.message)
      }
    } catch (e) {
      throw new Error('Something went wrong with connecting to supabase!' + e)
    }
  }

  return (
    <Flex flexDirection='row'>
      <Flex height='700px' width='700px'>
        <Image url={fileUrl} />
      </Flex>
      <Flex flexDirection='column'>
        <Flex flexDirection='column' width='350px' height='450px'>
          <Box m={20}>Hello</Box>
          <Flex height='100%' width='100%'>
            <StyledTextArea name='bio' onChange={handleBio} value={bio} />
          </Flex>
        </Flex>
        <Input name='userId' defaultValue={userId} hidden />
        <Input name='uploadUrl' defaultValue={uploadUrl} hidden />
        <Button
          name='_action'
          value='share'
          type='submit'
          my={20}
          onClick={handleShare}
        >
          Share
        </Button>
        <Button mb={20} onClick={onClose}>
          Close me
        </Button>
      </Flex>
    </Flex>
  )
}

export default CreatePost
