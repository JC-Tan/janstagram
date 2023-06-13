import { useState } from 'react'
import Flex from '../Ui/Flex'
import Box from '../Ui/Box/Box'
import styled from 'styled-components'
import Button from '../Ui/Button'
import Input from '../Ui/Input'
import { createClient } from '@supabase/supabase-js'

interface IPost {
  inputFile: File
  fileUrl: string
  supabaseUrl: string
  supabaseKey: string
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

const Post = ({
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
