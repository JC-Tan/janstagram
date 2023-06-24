import { useState } from 'react'
import Flex from '../Ui/Flex'
import Box from '../Ui/Box/Box'
import styled from 'styled-components'
import Button from '../Ui/Button'
import Input from '../Ui/Input'
import { createClient } from '@supabase/supabase-js'
import Image from '../Ui/Image/Image'
import ProfilePicAndUsername from '../ProfilePicAndUsername/ProfilePicAndUsername'
import Text from '../Ui/Text/Text'

export interface ICreatePost {
  inputFile: File
  fileUrl: string
  profilePic: string
  supabaseUrl: string
  supabaseKey: string
  uploadUrl: string
  userId: string
  username: string
  onClose: () => void
}

const StyledTextArea = styled('textarea')`
  resize: none;
  width: 100%;
  border: none;
  outline: none;
`

const CreatePost = ({
  inputFile,
  fileUrl,
  profilePic,
  supabaseKey,
  supabaseUrl,
  uploadUrl,
  userId,
  username,
  onClose,
}: ICreatePost) => {
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [caption, setCaption] = useState('')

  const handleBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(e.target.value)
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
    <Flex flexDirection='column' width='100%'>
      <Flex
        flexDirection='row-reverse'
        justifyContent='space-between'
        alignItems='center'
      >
        <Input name='userId' defaultValue={userId} hidden />
        <Input name='uploadUrl' defaultValue={uploadUrl} hidden />
        <Button
          name='_action'
          value='share'
          type='submit'
          my={2}
          onClick={handleShare}
        >
          Share
        </Button>
        <Text>Creat new post</Text>
        <Button my={2} onClick={onClose}>
          Cancel
        </Button>
      </Flex>
      <Flex
        flexDirection='row'
        alignItems='stretch'
        borderTop='1px solid #606770'
      >
        <Flex
          justifyContent='center'
          borderRight='1px solid #606770'
          flex='2 1 0'
        >
          <Image url={fileUrl} />
        </Flex>
        <Flex flexDirection='column' flex='1 1 0'>
          <Flex flexDirection='column' flex='1 1 0'>
            <Box mt={3} mx={3}>
              <ProfilePicAndUsername url={profilePic} username={username} />
            </Box>
            <Flex mx={3} flex='2 1 0'>
              <StyledTextArea
                name='caption'
                placeholder='Write a caption...'
                onChange={handleBio}
                value={caption}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default CreatePost
