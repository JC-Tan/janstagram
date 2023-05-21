import { useState } from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, Input } from 'pcln-design-system'
import { createClient } from '@supabase/supabase-js'

interface IPost {
  inputFile: File
  fileUrl: string
  uploadUrl: string
  userId: string
  onClose: () => void
}

const StyledFlex = styled(Flex)`
  background-color: rgb(39, 39, 39);
  bottom: 0;
  box-sizing: border-box;
  height: 800px;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 1050px;
  z-index: 100;
`

const StyledTextArea = styled('textarea')`
  resize: none;
  width: 100%;
`

const supabaseUrl = 'https://unpdnaliobtmmjqonfhw.supabase.co/'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucGRuYWxpb2J0bW1qcW9uZmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MTgxNTAsImV4cCI6MTk5OTM5NDE1MH0.1J5ST8NSbVKK71md_Rj16FP4Om-8onnP6DKq3lPv4XY'

const supabase = createClient(supabaseUrl, supabaseKey)

const Post = ({ inputFile, fileUrl, uploadUrl, userId, onClose }: IPost) => {
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
      } else {
        throw new Error(error.message)
      }
    } catch {
      throw new Error('Something went wrong with connecting to supabase!')
    }
  }

  return (
    <StyledFlex flexDirection='row' borderRadius={12}>
      <Flex height='700px' width='700px'>
        <img src={fileUrl} />
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

        <Button name='_action' value='delete' type='submit' my={20}>
          Delete
        </Button>
        <Button mb={20} onClick={onClose}>
          Close me
        </Button>
      </Flex>
    </StyledFlex>
  )
}

export default Post
